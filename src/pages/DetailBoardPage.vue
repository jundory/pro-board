<template>
  <q-page class="wrap">
    <div class="content-wrap"></div>
  </q-page>
</template>
<script setup>
import { onMounted } from "vue";
import apiService from "../service/apiService";
import { useRoute } from "vue-router";

const getDetailPost = (boardId) => {
  apiService.getDetailPost(boardId);
};

const route = useRoute();

onMounted(() => {
  getDetailPost(route.params.id);
});
</script>
