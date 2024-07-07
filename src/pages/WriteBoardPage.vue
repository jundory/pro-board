<template>
  <q-page class="wrap">
    <div class="content-wrap">
      <div class="q-pa-md">
        <q-input
          outlined
          v-model="inputWriteValue.title"
          maxlength="200"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <q-separator />
      <div class="q-pa-md">
        <q-input
          v-model="inputWriteValue.content"
          filled
          type="textarea"
          placeholder="내용을 입력해주세요"
        />
      </div>
      <q-item v-if="!isUpdate"
        ><q-btn
          color="primary"
          label="작성 완료"
          :size="'md'"
          @click="createdPost(inputWriteValue)"
        />
      </q-item>
      <q-item v-else
        ><q-btn
          color="primary"
          label="수정 완료"
          :size="'md'"
          @click="updatedPost(inputWriteValue)"
        />
      </q-item>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import apiService from "../service/apiService";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";

const router = useRouter();
const userStore = useUserStore();

const inputWriteValue = reactive({
  title: "",
  content: "",
});

// 글 등록
const createdPost = (inputValue) => {
  const param = {
    createdBy: userStore.getUserId,
    title: inputValue.title,
    content: inputValue.content,
  };
  apiService.savePost(param).then((o) => {
    if (o.state) {
      alert("게시글이 등록되었습니다");
    } else {
      alert("게시글 등록에 실패하였습니다");
    }
    router.push("/");
  });
};

// 글 수정
const updatedPost = () => {};

const isUpdate = ref(false);
onMounted(() => {
  const updatePostData = history.state;
  if (updatePostData.postData) {
    isUpdate.value = true;
    inputWriteValue.title = updatePostData.postData.title;
    inputWriteValue.content = updatePostData.postData.content;
  }
});
</script>
