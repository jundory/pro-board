import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    // 테스트용 임시 1 부여
    userId: localStorage.getItem("userId") ? localStorage.getItem("userId") : 1,
  }),
  getters: {
    getUserId: (state) => state.userId,
  },
  actions: {
    // setUserId(id) {
    //   this.userId = id;
    // },
  },
});
