<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NLayoutSider, NModal } from 'naive-ui'
import List from './List.vue'
import Footer from './Footer.vue'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore, SvgIcon } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'

const { isDark } = useTheme()

const appStore = useAppStore()
const chatStore = useChatStore()

const { isMobile } = useBasicLayout()
const show = ref(false)

const collapsed = computed(() => appStore.siderCollapsed)

function handleAdd() {
  chatStore.addHistory({ title: 'New Chat', uuid: Date.now(), isEdit: false })
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value)
}

const getMobileClass = computed<CSSProperties>(() => {
  if (isMobile.value) {
    return {
      position: 'fixed',
      zIndex: 50,
    }
  }
  return { }
})

const mobileSafeArea = computed(() => {
  if (isMobile.value) {
    return {
      paddingBottom: 'env(safe-area-inset-bottom)',
    }
  }
  return {}
})

watch(
  isMobile,
  (val) => {
    appStore.setSiderCollapsed(val)
  },
  {
    immediate: true,
    flush: 'post',
  },
)

const wxshow = ref(false)
</script>

<template>
  <NLayoutSider
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="298"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    :position="isMobile ? 'absolute' : 'static'"
    :style="`${getMobileClass};z-index:41;background-color:${isDark ? '#232525' : '#f7f9fd'}`"
    class="mySider"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <div class="p-4">
          <NButton dashed block size="large" style="border: dashed 1px #3868c9;" @click="handleAdd">
            <SvgIcon icon="ic:round-add" class="mx-[3px] text-[20px]" />
            {{ $t('chat.newChatButton') }}
          </NButton>
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
        <div class="leftBottomButton">
          <NButton block secondary type="primary" @click="wxshow = true">
            加入微信群
          </NButton>
        </div>
        <div class="leftBottomButton">
          <NButton block secondary type="primary" @click="show = true">
            {{ $t('store.siderButton') }}
          </NButton>
        </div>
      </main>
      <Footer />
    </div>
  </NLayoutSider>
  <template v-if="isMobile">
    <div v-show="!collapsed" class="fixed inset-0 z-40 w-full h-full bg-black/40" @click="handleUpdateCollapsed" />
  </template>
  <PromptStore v-model:visible="show" />
  <NModal v-model:show="wxshow" style="width: 90%; max-width: 500px;text-align: center;" preset="card">
    请扫描下方二维码<br>添加客服加入微信交流群
    <img src="/public/wxcode.jpg">
  </NModal>
</template>

<style>
.mySider{
    box-shadow: inset -2px 0 2px 0 rgba(0,0,0,.05)
}
.leftBottomButton{
  padding:0rem 1rem 1rem;
}
.n-layout-sider__border{
  background-color:red
}
</style>
