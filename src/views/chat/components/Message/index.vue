<script setup lang='ts'>
import { computed, defineAsyncComponent, ref } from 'vue'
import { NDropdown, NSkeleton, useMessage } from 'naive-ui'
import AvatarComponent from './Avatar.vue'
// import TextComponent from ''
import { SvgIcon } from '@/components/common'
import { useIconRender } from '@/hooks/useIconRender'
import { t } from '@/locales'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { copyToClip } from '@/utils/copy'

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const TextComponent = defineAsyncComponent(() => import('./Text.vue'))

interface Props {
  dateTime?: string
  text?: string
  inversion?: boolean
  error?: boolean
  loading?: boolean
  showTooLong?: boolean

}

interface Emit {
  (ev: 'regenerate'): void
  (ev: 'delete'): void
}

const { isMobile } = useBasicLayout()

const { iconRender } = useIconRender()

const message = useMessage()

const textRef = ref<HTMLElement>()

const asRawText = ref(props.inversion)

const messageRef = ref<HTMLElement>()

const options = computed(() => {
  const common = [
    {
      label: t('chat.copy'),
      key: 'copyText',
      icon: iconRender({ icon: 'ri:file-copy-2-line' }),
    },
    {
      label: t('common.delete'),
      key: 'delete',
      icon: iconRender({ icon: 'ri:delete-bin-line' }),
    },
  ]

  if (!props.inversion) {
    common.unshift({
      label: asRawText.value ? t('chat.preview') : t('chat.showRawText'),
      key: 'toggleRenderType',
      icon: iconRender({ icon: asRawText.value ? 'ic:outline-code-off' : 'ic:outline-code' }),
    })
  }

  return common
})

function handleSelect(key: 'copyText' | 'delete' | 'toggleRenderType') {
  switch (key) {
    case 'copyText':
      handleCopy()
      return
    case 'toggleRenderType':
      asRawText.value = !asRawText.value
      return
    case 'delete':
      emit('delete')
  }
}

function handleRegenerate() {
  messageRef.value?.scrollIntoView()
  emit('regenerate')
}

async function handleCopy() {
  try {
    await copyToClip(props.text || '')
    message.success('复制成功')
  }
  catch {
    message.error('复制失败')
  }
}
const showSkeleton = ref(true)
function closeSkeleton() {
  showSkeleton.value = false
}
</script>

<template>
  <div
    ref="messageRef"
    class="flex w-full mb-6 overflow-hidden messagemy"
    :class="[{ 'flex-row-reverse': inversion }]"
  >
    <div
      class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8"
      :class="[inversion ? 'ml-2' : 'mr-2']"
    >
      <AvatarComponent :image="inversion" />
    </div>
    <div class="text-base relative" :class="[inversion ? 'items-end' : 'items-start']">
      <div style="display: flex;align-items: baseline;">
        <p v-if="false && inversion" class="retrytypemy">
          <span>重试&nbsp&nbsp</span>
          <span>复制&nbsp&nbsp</span>
          <span>原文&nbsp&nbsp</span>
          <span>删除</span>
        </p>
        <p class="text-xs text-[#b4bbc4]" :class="[inversion ? 'text-right' : 'text-left']">
          {{ dateTime }}
        </p>
        <p v-if="false && !inversion" class="retrytype">
          <span>重试&nbsp&nbsp</span>
          <span>复制&nbsp&nbsp</span>
          <span>原文&nbsp&nbsp</span>
          <span>删除</span>
        </p>
      </div>
      <div
        class="flex items-end gap-1 mt-2"
        :class="[inversion ? 'flex-row-reverse' : 'flex-row']"
      >
        <component
          :is="TextComponent"
          ref="textRef"
          :inversion="inversion"
          :error="error"
          :text="text"
          :loading="loading"
          :show-too-long="showTooLong"
          :as-raw-text="asRawText"
          :class="[inversion ? 'mySay' : 'gptSay']"
          @load="closeSkeleton"
        />
        <NSkeleton v-if="showSkeleton" height="40px" round />
        <div class="flex flex-col">
          <button
            v-if="!inversion"
            class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"
            title="重新回答"
            @click="handleRegenerate"
          >
            <SvgIcon icon="ri:restart-line" />
          </button>
          <NDropdown
            :trigger="isMobile ? 'click' : 'hover'"
            :placement="!inversion ? 'right' : 'left'"
            :options="options"
            @select="handleSelect"
          >
            <button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200">
              <SvgIcon icon="ri:more-2-fill" />
            </button>
          </NDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mySay{
  background: linear-gradient(90deg, #2870EA 10.79%, #1B4AEF 87.08%);
    color: white;
    border-radius: 10px;
    margin: 3px;
    transition: box-shadow 0.2s ease;
  box-shadow: 0px 1px 3px rgb(6 6 6 / 24%)
}
.mySay .whitespace-pre-wrap::selection{
  background: #e9ecf5;
    color: #1c2853;
}
.gptSay{
  border-radius: 10px;
    position: relative;
    margin: 3px;
    background: #f6f8fa;
    transition: box-shadow 0.2s ease;
    border:solid 1px #e7e7f3;

}
.gptSay:hover,.mySay:hover{
  box-shadow: 0px 0px 0px rgb(6 6 6 / 10%)
}
.retrytype{
  opacity: 0;
    font-size: 8px;
    transition: all 0.3s ease;
    color:#303030;
    cursor: pointer;
    margin-left: 20px;
  left: 1px;
    position:relative;
}

.retrytypemy{
  opacity: 0;
    font-size: 8px;
    transition: all 0.3s ease;
    color:#303030;
    cursor: pointer;
    margin-right: 20px;
    position:relative;
    right: 1px;

}
.messagemy:hover .retrytype,.messagemy:hover .retrytypemy{
opacity: 1;
color:#d3d8dd
}
.messagemy:hover .retrytype span:hover,.messagemy:hover .retrytypemy span:hover{
  color:black
}
.messagemy:hover .retrytypemy{
  right: 10px;
}
.messagemy:hover .retrytype{
  left: 10px;
}
</style>
