<template>
  <q-page class="wrap">
    <div class="content-wrap">
      {{ inputWriteValue }}
      <div class="q-pa-md">
        <q-input
          outlined
          v-model="inputWriteValue.title"
          maxlength="200"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div class="q-pa-md">
        <q-input
          v-model="inputWriteValue.content"
          filled
          type="textarea"
          placeholder="내용을 입력해주세요"
        />
      </div>
      <q-item
        ><q-btn
          color="primary"
          label="작성 완료"
          :size="'md'"
          @click="moveWritePage(inputWriteValue)"
        />
      </q-item>
    </div>
  </q-page>
</template>
<script setup>
import { reactive } from "vue";
import apiService from "../service/apiService";
import router from "src/router";

const inputWriteValue = reactive({
  title: "",
  content: "",
});

const moveWritePage = (inputValue) => {
  const param = {
    userId: 1,
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
</script>
