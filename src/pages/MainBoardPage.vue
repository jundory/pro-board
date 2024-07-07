<template>
  <q-item
    ><q-btn
      color="primary"
      label="글 작성"
      :size="'md'"
      @click="moveWritePage()"
    />
  </q-item>
  <q-page class="wrap">
    <div class="content-wrap">
      <template v-if="resData.tableList">
        <div class="table-wrap">
          <TableForm
            :title="게시글"
            :columns="tableListColumnsData"
            :rows="resData.tableList"
            @selectRowData="showDetailPost"
            :key="tableData"
          />
        </div>
        <div class="q-pa-lg">
          <q-pagination v-model="current" :max="5" />
        </div>
      </template>
      <template v-else> {{ resData.message }} </template>
    </div>
  </q-page>
</template>

<script setup>
import TableForm from "../components/TableForm.vue";

import { onMounted, ref, reactive } from "vue";
import apiService from "../service/apiService";
import { formatDateAsDateTime, tableListColumnsData } from "../common/common";
import { useRouter } from "vue-router";

const router = useRouter();

// const filterTableRows = () => {
//   resData.tableList.forEach((item) => {
//     item.createdDate = formatDateAsDateTime(item.createdDate);
//   });
//   console.log("resData.tableList", resData.tableList);
// };

const resData = reactive({
  tableList: null,
  message: null,
});
const getPostData = () => {
  apiService
    .getTableList()
    .then((o) => {
      if (o.state !== false) {
        console.log("successfull api call", o);
        resData.tableList = o.data;
      } else {
        resData.message = o.message;
        console.log(resData.message);
      }
    })
    .catch((e) => {
      console.log(e, "error!!!");
    });
};

const showDetailPost = (data) => {
  console.log("emit data:::", data, data.boardId);
  router.push(`/detail/${data.boardId}`);
};

const moveWritePage = () => {
  router.push("/write");
};

onMounted(() => {
  console.log("mainPage::::");
  getPostData();
});
</script>
<style lang="scss"></style>
