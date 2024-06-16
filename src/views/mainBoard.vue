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
const tableList = ref([
  // ["java", 1, 2, 1],
  // ["c", 2, 1, 2],
  // ["c++", 3, 4, 3],
  // ["python", 4, 7, 6],
  // ["JS", 17, 18, 8],
  // ["Vue", 10, 15, 28],
]);

const getBoardData = () => {
  const resData = apiService.tableList();
  console.log("table getData", resData.boardList);
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
