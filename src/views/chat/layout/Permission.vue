<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NButton, NInput, NModal, useMessage } from 'naive-ui'
import { fetchVerify, sendEmail,usercreate } from '@/api'
import { useAuthStore } from '@/store'
// import Icon403 from '@/icons/403.vue'

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

// function handlePress(event: KeyboardEvent) {
//   if (event.key === 'Enter' && !event.shiftKey) {
//     event.preventDefault()
//     handleVerify()
//   }
// }
const email = ref('')
const emailCode = ref('')
const password = ref('')
const passwordConfirm = ref('')
const userName = ref('')
const pageState = ref('register_step1') // register_step1 \ resgiter_step2 \ login \ change_password
async function handleEmailSubmit() {
  if (!email.value) {
    ms.error('请输入email')
    return
  }
  if (!isValidEmail(email.value)) {
    ms.error('email格式不正确，请重新输入')
    return
  }
  try {
    loading.value = true
    await sendEmail(email.value)
    ms.success('已向邮箱发送验证码，请注意查收~')
    pageState.value = 'register_step2'
  }
  catch (error: any) {
    ms.error(error.message ?? 'error')
  }
  finally {
    loading.value = false
  }

}
function isValidEmail(email: string) {
  // Use a regular expression to validate the email format
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  console.log(pattern.test(email))
  return pattern.test(email)
}
async function handleRegister(){
  if (!/^\d{6}$/.test(emailCode.value)) {
    ms.error('邮箱验证码格式错误，应为六位数字')
    return;
  }
  if (password.value !== passwordConfirm.value) {
    ms.error('两次输入的密码不一样')
    return;
  }
  if (!/^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,15}$/.test(password.value)) {
    ms.error('密码格式错误，应该为6~15位数字、字母、常用符号的任意组合')
    return;
  }
  if(!/^[a-zA-Z0-9_\-.u4e00-\u9fa5]+$/.test(userName.value)&&(userName.value.length < 2 || userName.value.length > 20)){
    ms.error('用户名格式错误，应该为2~20个字符之间的数字、字母、常用符号的任意组合')
    return;
  }
  try {
    loading.value = true
    await usercreate(email.value,emailCode.value,userName.value,password.value)
    ms.success('注册中，请稍等......')
  }
  catch (error: any) {
    ms.error(error.message ?? 'error')
  }
  finally {
    loading.value = false
  }

}

</script>

<template>
  <NModal :show="visible" style="width: 90%; max-width: 380px">
    <div class="p-10 bg-white rounded dark:bg-slate-800">

      <div class="space-y-4">
        <header class="space-y-2" style="position: relative;">
          <div
            style="background: linear-gradient(139deg, rgb(254 50 50) 10.79%, rgb(27 153 239) 87.08%);color: rgb(255, 255, 255);position: absolute;right: 68px;font-size: 0.9rem;top: 3px;width: 49px;height: 25px;text-align: center;line-height: 25px;border-radius: 11px;">
            免费</div>
          <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-neutral-200" style="font-size: 1.8rem;">注册
          </h2>

        </header>
        <template v-if="pageState == 'register_step1'">
          <p class="text-base text-center text-slate-500 dark:text-slate-500"
            style="font-size: 0.9rem; letter-spacing: 0.8px; font-weight: 600;margin-top: 4px;">🤖以继续和我对话<br>
          </p>
          <NInput v-model:value="email" type="text" size="large" placeholder="请输入电子邮箱,如xxx@xxx.xxx" @keypress="">
            <template #prefix>
              Email
            </template>
          </NInput>

          <div style="text-align: right;font-size: 0.8rem;"><a style="cursor: pointer;">已有账号，立即登录-></a></div>
          <NButton block color="#8a2be2" size="large" :loading="loading" @click="handleEmailSubmit"
            style="margin-top: 15px;background: linear-gradient(327deg, rgb(97 115 255) 10.79%, rgb(239 27 225) 87.08%);opacity: 1;">
            使用电子邮箱注册
          </NButton>
        </template>
        <template v-if="pageState == 'register_step2'">
          <p class="text-base text-center text-slate-500 dark:text-slate-500"
            style="font-size: 0.9rem; letter-spacing: 0.8px; font-weight: 600;margin-top: 4px;">🎉仅剩一步！即将和我继续对话~<br>
          </p>
          <NInput v-model:value="emailCode" size="large" placeholder="Email收到的6位数字验证码" @keypress="">
            <template #prefix>
              验证码
            </template>
          </NInput>
          <NInput v-model:value="userName" size="large"  placeholder="请设置用户名,可中文可英文" @keypress="">
            <template #prefix>
              用户名
            </template>
          </NInput>
          <NInput v-model:value="password" size="large" type="password" placeholder="请设置密码" @keypress="">
            <template #prefix>
              密码
            </template>
          </NInput>
          <NInput v-model:value="passwordConfirm" size="large" type="password" placeholder="请再次输入密码" @keypress="">
            <template #prefix>
              密码
            </template>
          </NInput>
          <NButton block color="#8a2be2" size="large" :disabled="disabled" :loading="loading" @click="handleRegister"
            style="margin-top: 20px;background: linear-gradient(327deg, rgb(97 115 255) 10.79%, rgb(239 27 225) 87.08%);opacity: 1;">
            注册并登录
          </NButton>
        </template>

      </div>
    </div>
  </NModal>
</template>
<!-- <header class="space-y-2">
  <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-neutral-200"> 亲，请输入免费口令 </h2>
  <p class="text-base text-center text-slate-500 dark:text-slate-500"
    style="font-size: 0.9rem; letter-spacing: 0.8px; font-weight: 600;"> ❤️需要口令的目的：确认是自己人<br>
    ❤️一个设备只需输入一次，以后不再弹框<br> ⭐获取方式：<br>搜索关注微信公众号<br><span
      style="color: rgb(248, 81, 73);">【灰猫未来科技】</span><br>灰猫将<span style="color: rgb(248, 81, 73);">自动秒发</span>
  </p>
</header> -->
<style>
.n-input .n-input__prefix{
  width: 2.5rem;
  margin-right: 10px;
}
.rounded {
    border-radius: 1rem;
}
</style>