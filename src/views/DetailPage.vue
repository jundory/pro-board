<template>
  <div class="wrap">상세페이지 입니다.</div>
  <template v-if="postData">
    <div>제목 : {{ postData.title }}</div>
    <div>내용 : {{ postData.content }}</div>
  </template>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import apiService from "../service/apiService";

const $route = useRoute();
const postData = ref();
const getPostData = async () => {
  await apiService
    .getDetailPost($route.params.id)
    .then((o) => {
      if (o.state) {
        postData.value = o.boardList[0];
        console.log("ok!", postData.value);
      } else {
        console.log("null!");
      }
    })
    .catch((e) => {
      alert("error!", e);
    });
};
onMounted(() => {
  getPostData();
  console.log($route.params.id);
});
</script>
<style lang="scss"></style>
