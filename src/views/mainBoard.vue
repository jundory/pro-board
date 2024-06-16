<template>
  <table>
    <thead>
      <th v-for="item in tableHeader" :key="item">{{ item }}</th>
    </thead>
    <tbody>
      <tr v-for="line in tableList" :key="line">
        <td v-for="item in line" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref, onMounted } from "vue";
import apiService from "../service/apiService";

const tableHeader = ref(["no", "아이디", "게시글", "날짜"]);
const tableList = ref();

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
  width: 75%;
  text-align: left;
}
tanle th {
  padding: 12px;
  border-bottom: 2px solid darkgray;
}
table td {
  padding: 12px;
}
table tr:nth-of-type(even) {
  background-color: rgba(0, 0, 255, 0.1);
}
</style>
