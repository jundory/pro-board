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
        </div>
      </div>
      <q-separator />
      <div class="post-content">{{ postData?.content }}</div>
      <q-separator />
      <div class="post-button">
        <q-btn :size="'md'" label="수정" @click="updatePost()" />
        <q-btn :size="'md'" label="삭제" @click="removePost()" />
      </div>
      <div class="post-comment">댓글 부분</div>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref, toRaw } from "vue";
import apiService from "../service/apiService";
import { useRoute, useRouter } from "vue-router";
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
    text-align: center;
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
.post-comment {
  padding: 30px;
}
.post-button {
  width: 100%;
  float: right;
  .q-btn {
    margin: 20px;
  }
}
</style>
