<template>
  <div class="q-pa-md">
    <div class="comment-button">
      <div class="comment-button left">댓글 {{ 49 }}개</div>
      <!-- <div class="comment-button right">
        <q-btn :size="'md'" label="댓글 작성" @click="writeComment()" />
      </div> -->
    </div>
    <q-list>
      <div v-for="comment in commentList" :key="comment.commentId">
        <q-item>
          <q-item-section>
            <q-item-label>{{ "유저명" }}</q-item-label>
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
              @click="writeReply()"
            ></q-btn>
          </q-item-section>
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

const route = useRoute();

const commentList = ref();

const writeReply = () => {
  // apiService.writeReply()
};

onMounted(() => {
  apiService
    .getCommentList(route.params.id)
    .then((o) => {
      if (o.state) {
        commentList.value = o.data;
        console.log("댓글 리스트 조회 결과 ::::", commentList.value);
        alert("댓글 조회에 성공하였습니다.");
      } else {
        alert("조회된 댓글이 없습니다.");
      }
    })
    .catch((e) => {
      alert("댓글 조회에 실패했습니다.");
    });
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
