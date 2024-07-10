import { api } from "../boot/axios";

const apiService = {
  /**
   * @constructor Initial
   * @param {}
   * @description 전체 게시글 조회
   */
  getTableList: async () => {
    try {
      const response = await api.get("/findAll");
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },

  /**
   * @constructor Initial
   * @param {number}
   * @description 상세 페이지 조회
   */
  getDetailPost: async (id) => {
    try {
      const response = await api.get(`/detail/${id}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },

  /**
   * @constructor Initial
   * @param {
   * created_by
   * title
   * content
   * }
   * @description 글 등록
   */
  registeredPost: async (param) => {
    try {
      console.log("registeredPost param----------", param);
      const response = await api.post("/register", param);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },

  /**
   * @constructor Initial
   * @param {
   * modified_by
   * title
   * content
   * }
   * @description 글 수정
   */
  updatedPost: async (param) => {
    try {
      console.log("updatedPost param----------", param);
      const response = await api.put("/update", param);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },
};
export default apiService;
