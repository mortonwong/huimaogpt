<script setup lang='ts'>
import { computed } from 'vue'
import { NInput, NPopconfirm, NScrollbar } from 'naive-ui'
import { SvgIcon } from '@/components/common'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { debounce } from '@/utils/functions/debounce'

const { isMobile } = useBasicLayout()

const appStore = useAppStore()
const chatStore = useChatStore()

const dataSources = computed(() => chatStore.history)

async function handleSelect({ uuid }: Chat.History) {
  if (isActive(uuid))
    return

  if (chatStore.active)
    chatStore.updateHistory(chatStore.active, { isEdit: false })
  await chatStore.setActive(uuid)

  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

function handleEdit({ uuid }: Chat.History, isEdit: boolean, event?: MouseEvent) {
  event?.stopPropagation()
  chatStore.updateHistory(uuid, { isEdit })
}

function handleDelete(index: number, event?: MouseEvent | TouchEvent) {
  event?.stopPropagation()
  chatStore.deleteHistory(index)
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

const handleDeleteDebounce = debounce(handleDelete, 600)

function handleEnter({ uuid }: Chat.History, isEdit: boolean, event: KeyboardEvent) {
  event?.stopPropagation()
  if (event.key === 'Enter')
    chatStore.updateHistory(uuid, { isEdit })
}

function isActive(uuid: number) {
  return chatStore.active === uuid
}
</script>

<template>
  <NScrollbar class="px-4">
    <div class="flex flex-col gap-2 text-base">
      <template v-if="!dataSources.length">
        <div class="flex flex-col items-center mt-4 text-center text-neutral-300">
          <SvgIcon icon="ri:inbox-line" class="mb-2 text-3xl" />
          <span>{{ $t('common.noData') }}</span>
        </div>
      </template>
      <template v-else>
        <div v-for="(item, index) of dataSources" :key="index">
          <a
            :class="isActive(item.uuid) && ['leftScrollButtonActive']"

            class="relative flex items-center gap-3 px-3 py-3 break-all cursor-pointer group leftScrollButton dark:bg-[#2f3238] dark:hover:bg-[#373a41]"
            :title="item.title"
            @click="handleSelect(item)"
          >
            <!-- <span>
              <SvgIcon icon="ri:message-3-line" />
            </span> -->
            <div class="relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap">
              <NInput
                v-if="item.isEdit"
                v-model:value="item.title"
                :round="false"
                @keypress="handleEnter(item, false, $event)"
              />
              <span v-else>{{ item.title }}</span>
            </div>
            <div class="topicedit absolute z-10 flex visible">
              <template v-if="item.isEdit">
                <button class="p-1" @click="handleEdit(item, false, $event)">
                  <SvgIcon icon="ri:save-line" />
                </button>
              </template>
              <template v-else>
                <button class="p-1">
                  <SvgIcon icon="ri:edit-line" @click="handleEdit(item, true, $event)" />
                </button>
                <NPopconfirm placement="bottom" @positive-click="handleDeleteDebounce(index, $event)">
                  <template #trigger>
                    <button class="p-1">
                      <SvgIcon icon="ri:delete-bin-line" />
                    </button>
                  </template>
                  {{ $t('chat.deleteHistoryConfirm') }}
                </NPopconfirm>
              </template>
            </div>
          </a>
        </div>
      </template>
    </div>
  </NScrollbar>
</template>

<style>
.leftScrollButton:hover{
background: #f3f3f3;
padding-right: 3.5rem;
}
.leftScrollButton:active{
background: #eaeaea;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,.01);
}
.leftScrollButton:hover .topicedit{
opacity: 1;
right: 0.25rem;

}
.topicedit{
right: -0.75rem;
opacity: 0;
  transition: all 0.2s ease;
}
.leftScrollButton{
  background: #ffffff;
    border: solid 1px transparent;
    border-radius: 10px;
    transition: all 0.2s ease;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,.05);
    margin:2px 2px;
  }
.leftScrollButtonActive:hover{
  /* background: linear-gradient(90deg, #2870EA 10.79%, #1B4AEF 87.08%); */

}
.leftScrollButtonActive{
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 0.3px 0.9px, rgba(0, 0, 0, 0.16) 0px 1.6px 3.6px; */
  /* background:linear-gradient(90deg, #2870EA 10.79%, #1B4AEF 87.08%); */
  /* color: #fff; */
  outline :solid 2px #447cff;
}
</style>
