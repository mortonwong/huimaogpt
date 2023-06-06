<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import themeOverrides2 from '@/components/common/ThemeConfig/theme'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const { theme } = useTheme()
const { language } = useLanguage()
const { isMobile } = useBasicLayout()
</script>

<template>
  <div
    class="image" style="background-image: url(https://www.bing.com/cdx/bg-sprite.png); background-position: 0% 0%; opacity: 1;    position: fixed;
      height: 100vh;
      width: 100vw;"
  />
  <NConfigProvider class="h-full" :theme="theme" :theme-overrides="themeOverrides2" :locale="language" :style="[isMobile ? 'padding: 32px 0px 0px;' : 'padding: 32px 10% 0px;']">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
