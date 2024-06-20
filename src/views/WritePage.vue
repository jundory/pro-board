<!-- <template>
    <input v-model="postData.title" placeholder="제목 입력">
    <textarea v-model="postData.contents" placeholder="내용 입력">
</template>
<script setup>
import { reactive } from 'vue';

const postData = reactive({
    title: null,
    contents: null,
})
</script> -->

<template>
  <div>글 작성 페이지</div>
  <div class="wrap">
    <input
      v-model="postData.title"
      placeholder="제목 입력"
      style="margin: 30px 0"
    />
    <textarea v-model="postData.contents" placeholder="내용 입력" />
    {{ postData }}
  </div>

  <button @click="savePost()">작성 완료</button>
</template>
<script setup>
import { reactive } from "vue";
import apiService from "../service/apiService";

const postData = reactive({
  title: null,
  contents: null,
});

const savePost = () => {
  apiService.savePost(postData);
};
</script>
<style>
.wrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 30%;
  margin: auto;
}
</style>
