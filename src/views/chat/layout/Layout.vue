<script setup lang='ts'>
import { computed } from 'vue'
import { NLayout, NLayoutContent } from 'naive-ui'
import { useRouter } from 'vue-router'
import Sider from './sider/index.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useAppStore, useChatStore } from '@/store'

const router = useRouter()
const appStore = useAppStore()
const chatStore = useChatStore()

router.replace({ name: 'Chat', params: { uuid: chatStore.active } })

const { isMobile } = useBasicLayout()

const collapsed = computed(() => appStore.siderCollapsed)

const getMobileClass = computed(() => {
  if (isMobile.value)
    return ['rounded-none', 'shadow-none']
  return ['border', 'rounded-md', 'shadow-md', 'dark:border-neutral-800']
})

const getContainerClass = computed(() => {
  return [
    'h-full',
    { 'pl-[260px]': !isMobile.value && !collapsed.value },
  ]
})
</script>

<template>
      <div class="image" style="background-image: url(https://www.bing.com/cdx/bg-sprite.png); background-position: 0% 0%; opacity: 1;    position: fixed;
      height: 100vh;
      width: 100vw;"></div>
  <div class="h-full dark:bg-[#24272e] transition-all" :class="[isMobile ? 'p-0' : 'p-4']" >

    <div class="h-full overflow-hidden" :class="[isMobile ? getMobileClass : 'pcFrame']">
      <NLayout class="z-40 transition" :class="getContainerClass" has-sider style="background-color: transparent;">
        <Sider />
        <NLayoutContent style="background-color: transparent;" class="h-full" >
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
  border-radius: 12px;
  position: relative;
  /* box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16); */
}
</style>