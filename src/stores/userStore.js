import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
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
