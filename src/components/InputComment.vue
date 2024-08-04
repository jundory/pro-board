<template>
  <div class="q-pa-md" style="width: 100%">
    {{ replyData.content }}
    <q-input
      label="유저명"
      outlined
      bg-color="white"
      v-model="replyData.content"
      type="textarea"
      placeholder="댓글을 남겨보세요"
    />
    <div class="comment-button">
      <q-btn :size="'md'" label="댓글 작성" @click="registeredReply()" />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import apiService from "src/service/apiService";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const replyData = reactive({
  content: "",
  parentCommentId: "",
  boardId: "",
  userId: "",
});

const registeredReply = () => {
  apiService
    .registeredReply(replyData)
    .then((o) => {
      if (o.state) {
        alert("댓글을 등록하였습니다.");
      } else {
        alert("댓글 등록에 실패했습니다.");
        // router.push()
      }
    })
    .catch((e) => {
      alert("catch!!");
    });
};

onMounted(() => {
  replyData.boardId = route.params.id;
  replyData.userId = userStore.getUserId;
});
</script>
<style lang="scss">
.comment-button {
  display: flex;
  justify-content: right;
  margin-top: 12px;
}
</style>
<!-- 댓글의 답글쓰기 누를 시 해당 댓글 id 가져와서 parent에 넣고 없으면 안 던짐 -->
<!--  -->
