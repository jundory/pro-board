<template>
  <q-table
    :title="props.title"
    :rows="props.rows"
    :columns="props.columns"
    row-key="id"
    :rows-per-page-options="[10]"
    bordered
    style="height: 100%"
    @row-click="showPost"
  />
</template>
<script setup>
import { onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "게시글",
  },
  columns: {
    type: Array,
    default: null,
  },
  rows: {
    type: Array,
    default: null,
  },
});

const emits = defineEmits(["selectRowData"]);

onMounted(() => {
  console.log("props", props);
});

const showPost = (e, row) => {
  emits("selectRowData", row);
};
</script>
