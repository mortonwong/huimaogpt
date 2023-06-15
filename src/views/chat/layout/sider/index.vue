<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NGradientText, NLayoutSider, NModal } from 'naive-ui'
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
    :width="285"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    :position="isMobile ? 'absolute' : 'static'"
    :style="`${getMobileClass};z-index:41;background-color:${isDark ? '#18171e' : '#f7f9fd'}`"
    class="mySider"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <div
          class="p-4" style="display: flex;justify-content: space-between;align-items: center;"
        >
          <div
            style="padding: 8px;
    font-weight: 500;
    color: #515151;
    font-size:18px;
    line-height: 20px;"
          >
            <NGradientText
              :gradient="{
                deg: 126,
                from: isDark ? 'rgb(126 138 207)' : 'rgb(16 47 215) ',
                to: isDark ? 'rgb(198 132 195)' : 'rgb(194 43 187)',
              }"
            >
              知潮
            </NGradientText><br><span style="font-size: 8px;color:#a6acd0">AI is First Productivity</span>
          </div>
          <div dashed block size="large" class="kubtn dark:bg-[#2f3238] hover:dark:bg-[#373a41]" @click="handleAdd">
            <SvgIcon icon="gala:add" class="mx-[3px] text-[13px] inline-block" />
            <span>新建会话</span>
          </div>
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
        <div
          class="leftBottomButton" style="display: flex;
    justify-content: space-around;"
        >
          <div class="kubtn dark:bg-[#2f3238] hover:dark:bg-[#373a41]" @click="wxshow = true">
            <SvgIcon
              icon="tabler:brand-wechat" class="mx-[3px] text-[13px] inline-block"
            />
            加入微信群
          </div>

          <div class="kubtn dark:bg-[#2f3238] hover:dark:bg-[#373a41]" @click="show = true">
            <SvgIcon icon="fluent:cloud-words-16-regular" class="mx-[3px] text-[13px] inline-block" />
            {{ $t('store.siderButton') }}
          </div>
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
.kubtn{
  background: #ffffff;
    border: solid 1px transparent;
    border-radius: 10px;
    transition: all 0.2s ease;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,.05);
    margin:2px 2px;
    width: fit-content;
    padding: 5px 9px;
    font-size: 13px;
    cursor: pointer;
    height: 37px;
    line-height: 26px;
}
.kubtnDark{
  background:#1e1e1e;
  color:#bbbbbb;
}
.kubanDark:hover{
  background:#323232;
}
.kubtn:hover{
background: #f3f3f3;
}
.kubtn:active{
background: #eaeaea;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,.01);
}
</style>
