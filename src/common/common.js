import dayjs from "dayjs";

export const formatDateAsDateTime = (createdAt) => {
  return dayjs(createdAt).format("YYYY-MM-DD");
};

export const tableListColumnsData = [
  { name: "번호", align: "center", label: "번호", field: "boardId" },
  { name: "제목", align: "center", label: "제목", field: "title" },
  { name: "작성자", align: "center", label: "작성자", field: "userName" },
  {
    name: "작성 시간",
    align: "center",
    label: "작성 시간",
    field: "createdDate",
  },
  { name: "조회수", align: "center", label: "조회수", field: "viewCount" },
];
