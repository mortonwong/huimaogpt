<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
</script>

<template>
  <NConfigProvider class="h-full" :theme="theme" :theme-overrides="themeOverrides" :locale="language" style="padding-top: 32px;">
    <header class="fixed top-0 left-0 right-0 z-30 flex items-center header-content"
      style="display: flex; height: 41px; font-size: 0.8rem; flex-direction: row; justify-content: space-evenly; background-color: rgb(40, 44, 52); z-index: 999;">
      <h1 style="color: rgb(51, 51, 51); letter-spacing: 1px;"><span
          style="font-weight: 600; color: rgb(203, 114, 109);">🤖灰猫GPT</span><span
          style="color: rgb(201, 209, 217); font-size: 0.6rem;">&nbsp;-&nbsp;免费就能用的ChatGPT镜像站</span></h1>
    </header>
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
