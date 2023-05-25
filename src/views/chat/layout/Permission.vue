<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NButton, NInput, NModal, useMessage } from 'naive-ui'
import { fetchVerify } from '@/api'
import { useAuthStore } from '@/store'
import Icon403 from '@/icons/403.vue'

interface Props {
  visible: boolean
}

defineProps<Props>()

const authStore = useAuthStore()

const ms = useMessage()

const loading = ref(false)
const token = ref('')

const disabled = computed(() => !token.value.trim() || loading.value)

async function handleVerify() {
  const secretKey = token.value.trim()

  if (!secretKey)
    return

  try {
    loading.value = true
    await fetchVerify(secretKey)
    authStore.setToken(secretKey)
    ms.success('success')
    window.location.reload()
  }
  catch (error: any) {
    ms.error(error.message ?? 'error')
    authStore.removeToken()
    token.value = ''
  }
  finally {
    loading.value = false
  }
}

function handlePress(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleVerify()
  }
}
</script>

<template>
  <NModal :show="visible" style="width: 90%; max-width: 640px">
    <div class="p-10 bg-white rounded dark:bg-slate-800">
      <div class="space-y-4">
        <header class="space-y-2">
          <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-neutral-200"> 亲，请输入免费口令 </h2>
          <p class="text-base text-center text-slate-500 dark:text-slate-500"
            style="font-size: 0.9rem; letter-spacing: 0.8px; font-weight: 600;"> ❤️需要口令的目的：确认是自己人<br>
            ❤️一个设备只需输入一次，以后不再弹框<br> ⭐获取方式：<br>搜索关注微信公众号<br><span
              style="color: rgb(248, 81, 73);">【灰猫未来科技】</span><br>灰猫将<span style="color: rgb(248, 81, 73);">自动秒发</span>
          </p>
        </header>
        <NInput v-model:value="token" type="password" placeholder="请输入免费口令" @keypress="handlePress" />
        <NButton block type="primary" :disabled="disabled" :loading="loading" @click="handleVerify">
          {{ $t('common.verify') }}
        </NButton>
      </div>
    </div>
  </NModal>
</template>
