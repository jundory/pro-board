<template>
  <div>
    <button @click="router.push('/write')">글 쓰기</button>
  </div>
  <table>
    <thead>
      <th v-for="item in tableHeader" :key="item">{{ item }}</th>
    </thead>
    <tbody>
      <tr v-for="line in tableList" :key="line">
        <td v-for="item in line" :key="item" @click="showPost(line)">
          {{ item }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref, onMounted } from "vue";
import apiService from "../service/apiService";
import { useRouter } from "vue-router";

const tableHeader = ref(["no", "아이디", "게시글"]);
const tableList = ref();
const router = useRouter();

const showPost = (rows) => {
  router.push(`detail/${rows.id}`);
  // router.push({
  //   path: `detail/${rows.id}`,
  // })
};

const getBoardData = () => {
  apiService
    .tableList()
    .then((o) => {
      if (o.state) {
        console.log("OK!!", o);
        tableList.value = o.boardList;
      } else {
        console.log("FAIL!!");
      }
      console.log("table getData", tableList.value);
    })
    .catch((e) => console.log("catch!!!", e));
};

onMounted(() => {
  getBoardData();
});
</script>
<style>
table {
  width: 100%;
  text-align: left;
}
tanle th {
  border-bottom: 2px solid darkgray;
}
table td {
  padding: 12px;
}
table tr:nth-of-type(even) {
  background-color: rgba(0, 0, 255, 0.1);
}
</style>
