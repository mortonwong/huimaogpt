<script setup lang='ts'>
import { computed } from 'vue'
import { NLayout, NLayoutContent, useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import Sider from './sider/index.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useChatStore } from '@/store'

const router = useRouter()
// const appStore = useAppStore()
const chatStore = useChatStore()
const ms = useMessage()

router.replace({ name: 'Chat', params: { uuid: chatStore.active } })

const { isMobile } = useBasicLayout()

// const collapsed = computed(() => appStore.siderCollapsed)

const getMobileClass = computed(() => {
  if (isMobile.value)
    return ['rounded-none', 'shadow-none']
  return ['border', 'rounded-md', 'shadow-md', 'dark:border-neutral-800']
})

const getContainerClass = computed(() => {
  return [
    'h-full',
  ]
})
// const ms = useMessage()

function changeNav() {
  ms.success('开发中！敬请期待！')
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-30 flex items-center header-content"
    style="display: flex; height: 37px; line-height: 37px;flex-direction: row;  background: linear-gradient(70deg, rgb(37 36 40) 10.79%, #06083e 72.08%); z-index: 999;justify-content: center;"
  >
    <h1 style="color: rgb(51, 51, 51); letter-spacing: 1px;margin-right: 11px;">
      <span
        style="font-size: 0.9rem;letter-spacing: 1px;font-weight: 600; color:#fff;text-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16);"
      >🤖知潮GPT</span><span
        v-if="!isMobile"
        style="color: rgb(201, 209, 217); font-size: 0.6rem;"
      >&nbsp;-&nbsp;免费就能用的GPT</span>
    </h1>
    <div class="mainNavAc mainNav ">
      AI聊天
    </div>
    <div class="mainNav" @click="changeNav">
      AI绘画
    </div>
    <div class="mainNav" @click="changeNav">
      文档Chat
    </div>
  </header>
  <div class="h-full transition-all" :class="[isMobile ? 'p-0' : 'p-4']">
    <div class="h-full overflow-hidden dark:border-[#232525]" :class="[isMobile ? getMobileClass : 'pcFrame']">
      <NLayout class="z-40 transition" :class="getContainerClass" has-sider style="">
        <Sider />
        <NLayoutContent style="" class="h-full">
          <RouterView v-slot="{ Component, route }">
            <component :is="Component" :key="route.fullPath" />
          </RouterView>
        </NLayoutContent>
      </NLayout>
    </div>
  </div>
</template>

<style>
.pcFrame {
  /* width: 1196px; */
  /* height: 93%; */
  border-radius: 20px;
  position: relative;
  border:solid 1px #e7e8ff
  /* box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16); */
}
.mainNav{
  height: 27px;
    line-height: 27px;
    color: #fff;
    font-size: 0.9rem;
    background: #32325c;
    padding: 0 9px;
    margin-left: 10px;
    border-radius: 7px;
    cursor: pointer;
}
.mainNavAc{
  height: 27px;
    background: #3b7ff2;
}
</style>
