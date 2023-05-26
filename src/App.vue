<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import themeOverrides2 from '@/components/common/ThemeConfig/theme'
// import { useBasicLayout } from '@/hooks/useBasicLayout'

const { theme } = useTheme()
const { language } = useLanguage()
// const { isMobile } = useBasicLayout()
</script>

<template>
  <NConfigProvider class="h-full" :theme="theme" :theme-overrides="themeOverrides2" :locale="language" style="padding-top: 32px;">
    <header class="fixed top-0 left-0 right-0 z-30 flex items-center header-content"
      style="display: flex; height: 41px; font-size: 0.8rem; flex-direction: row;  background: linear-gradient(70deg, rgb(37 36 40) 10.79%, #06083e 72.08%); z-index: 999;justify-content: center;">
      <h1 style="color: rgb(51, 51, 51); letter-spacing: 1px;margin-left: 10px;"><span
          style="font-weight: 600; color:#fff;text-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16);">🤖灰猫GPT</span><span
          style="color: rgb(201, 209, 217); font-size: 0.6rem;">&nbsp;-&nbsp;稳定好用的ChatGPT镜像站(humao.fun)</span></h1>
    </header>
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
#6b7bf0