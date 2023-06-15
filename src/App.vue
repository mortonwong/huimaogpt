<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { watch } from 'vue'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import themeOverrides from '@/components/common/ThemeConfig/theme'
import { useBasicLayout } from '@/hooks/useBasicLayout'
const { theme, isDark } = useTheme()
const { language } = useLanguage()
const { isMobile } = useBasicLayout()

watch(
  () => isDark.value,
  (dark) => {
    if (dark)
      document.body.style.background = '#1e1e23'
    else
      document.documentElement.classList.remove('dark')
  },
  { immediate: true },
)
</script>

<template>
  <div
    v-if="!isDark" class="image" style="background-image:linear-gradient(45deg, #d5e2f9 0%, rgb(249, 246, 252) 50%, rgb(208, 229, 255) 100%); opacity: 1;background-size: cover;    position: fixed;
          height: 100vh;
          width: 100vw;"
  />
  <NConfigProvider
    class="h-full" :theme="theme" :theme-overrides="themeOverrides" :locale="language"
    :style="[isMobile ? 'padding: 37px 0px 0px;' : 'padding: 42px 10% 10px;']"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
