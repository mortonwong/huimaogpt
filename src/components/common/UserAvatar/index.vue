<script setup lang='ts'>
import { computed } from 'vue'
import { NAvatar } from 'naive-ui'
import { useSettingStore, useUserStore } from '@/store'
import defaultAvatar from '@/assets/avatar.jpg'
import { isString } from '@/utils/is'

const settingStore = useSettingStore()

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
function handleLogin() {
  if (!userInfo.value.isLogin)
    settingStore.updateSetting({ showModal: true })
}
</script>

<template>
  <div class="flex items-center overflow-hidden" @click="handleLogin">
    <div class="w-10 h-10 overflow-hidden rounded-full shrink-0">
      <template v-if="isString(userInfo.avatar) && userInfo.avatar.length > 0">
        <NAvatar
          size="large"
          round
          :src="userInfo.avatar"
          :fallback-src="defaultAvatar"
        />
      </template>
      <template v-else>
        <NAvatar size="large" round :src="defaultAvatar" />
      </template>
    </div>
    <div class="flex-1 min-w-0 ml-2">
      <h2 class="overflow-hidden font-bold text-md text-ellipsis whitespace-nowrap">
        {{ userInfo.isLogin ? userInfo.name : '点击登录' }}
        <span
          style="display: inline-flex;
    align-items: center;
    cursor: pointer;"
        ><div
          style="    height: 20px;
    background-color: rgb(206, 234, 202);
    color: rgb(79, 164, 68);
    font-size: 12px;
    padding: 1px 8px;
    line-height: 18px;
    border-radius: 10px;
    font-weight: 400;
    position: relative;
    top: -1px;left:2px;"
        >免费</div></span>
      </h2>
      <p class="overflow-hidden text-xs text-gray-500 text-ellipsis whitespace-nowrap">
        <span
          v-if="isString(userInfo.description) && userInfo.description !== ''"
          v-html="userInfo.description"
        />
      </p>
    </div>
  </div>
</template>
