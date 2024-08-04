<template>
  <q-page class="wrap">
    <div class="content-wrap">
      <div class="post-header">
        <div class="title">{{ postData?.title }}</div>
        <div class="post-Info">
          <span class="created-time"
            >작성 시간 : {{ postData?.createdDate }}</span
          >
          <span class="view-count">조회 수 : {{ postData?.viewCount }}</span>
          <span class="view-count">작성자 : {{ postData?.userName }}</span>
          <q-btn flat round icon="menu">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section @click="updatePost()">수정</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section @click="removePost()">삭제</q-item-section>
                </q-item>
              </q-list>
              <!-- <q-btn :size="'md'" label="수정" @click="updatePost()" />
              <q-btn :size="'md'" label="삭제" @click="removePost()" /> -->
            </q-menu>
          </q-btn>
        </div>
      </div>
      <q-separator />
      <div class="post-content">{{ postData?.content }}</div>
      <q-separator />
      <InputComment />
      <CommentList />
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref, toRaw } from "vue";
import apiService from "../service/apiService";
import { useRoute, useRouter } from "vue-router";
import CommentList from "../components/CommentList.vue";
import InputComment from "../components/InputComment.vue";
const route = useRoute();
const router = useRouter();

const postData = ref();

const removePost = () => {
  apiService
    .removedPost(postData.value.boardId)
    .then((o) => {
      if (o.state) {
        alert("삭제 완료!");
      } else {
        alert("삭제 실패...");
      }
      router.push("/");
    })
    .catch((e) => console.log(e));
};

const updatePost = () => {
  const removeProxyPostData = toRaw(postData.value);
  console.log("postData.value", removeProxyPostData);
  router.push({
    path: "/write",
    state: {
      postData: removeProxyPostData,
    },
  });
};

const getDetailPost = (boardId) => {
  apiService
    .getDetailPost(boardId)
    .then((o) => {
      if (o.state) {
        postData.value = o.data;
      } else {
        alert("글이 조회되지 않습니다.");
        router.push("/");
      }
    })
    .catch((e) => {
      alert("error!");
      console.log("error!", e);
    });
};

onMounted(() => {
  getDetailPost(route.params.id);
});
</script>
<style lang="scss">
.post-header {
  padding: 30px;
  text-align: center;
  .title {
    padding: 10px;
    font-size: 35px;
  }
  .post-Info {
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    .created-time {
      flex: 50%;
    }
    .view-count {
      flex: 50%;
    }
  }
}
.post-content {
  padding: 30px;
  font-size: 25px;
  height: 50vh;
  text-wrap: wrap;
  text-align-last: auto;
}
</style>
