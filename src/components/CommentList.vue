<template>
  <div class="q-pa-md">
    <div class="comment-button">
      <div class="comment-button left">댓글 {{ commentList?.length }}개</div>
      <!-- <div class="comment-button right">
        <q-btn :size="'md'" label="댓글 작성" @click="writeComment()" />
      </div> -->
    </div>
    <q-list>
      <div v-for="comment in commentList" :key="comment.commentId">
        <q-item style="flex-wrap: wrap">
          <q-item-section>
            <q-item-label>{{ comment.userName }}</q-item-label>
            <q-item-label style="margin-top: 10px" caption lines="2">{{
              comment.content
            }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>{{ comment.createdAt }}</q-item-label>
            <q-btn
              outline
              dense
              :size="'sm'"
              color="primary"
              label="답글쓰기"
              style="margin-top: 10px"
              @click="writeReply(comment.commentId)"
            ></q-btn>
          </q-item-section>
          <!-- 답글 입력 박스 -->
          <InputComment
            class="commentBox"
            :parentId="comment.commentId"
            style="display: none; width: 100%"
          />
          <!-- 대댓글 리스트 -->
        </q-item>
      </div>
      <q-separator spaced inset />
    </q-list>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import apiService from "src/service/apiService";
import { useRoute } from "vue-router";

import InputComment from "../components/InputComment.vue";

const route = useRoute();

const isHide = ref(false);
const writeReply = (id) => {
  const commentBox = document.querySelectorAll(".commentBox")[id - 1];
  // apiService.writeReply()
  commentBox.style.display == "none"
    ? (commentBox.style.display = "block")
    : (commentBox.style.display = "none");
  isHide.value = !isHide.value;
};

const commentList = ref();
const getComments = () => {
  console.log("댓글 리스트 불러오기 api");
  apiService
    .getCommentList(route.params.id)
    .then((o) => {
      if (o.state) {
        commentList.value = o.data;
        console.log("댓글 리스트 조회 결과 ::::", commentList.value);
      } else {
        alert("조회된 댓글이 없습니다.");
      }
    })
    .catch((e) => {
      alert("댓글 조회에 실패했습니다.");
    });
};

onMounted(() => {
  getComments();
});
</script>
<style lang="scss">
.comment-button {
  display: flex;
  &.left {
    justify-content: left;
  }
  // &.right {
  //   justify-content: right;
  // }
  // .reply-count {
  //   justify-content: left;
  // }
  // .write-reply {
  //   justify-content: right;
  // }
  width: 100%;
  .q-btn {
    margin-bottom: 20px;
  }
}
</style>
