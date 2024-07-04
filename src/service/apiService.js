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
   * userId
   * title
   * content
   * }
   * @description 글 등록
   */
  savePost: async (param) => {
    try {
      console.log("savePost param----------", param);
      const response = await api.post("/save", param);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },
};
export default apiService;
