import client from "../common/client";

const apiService = {
  /**
   * @constructor Initial
   * @param {}
   * @description 전체 게시글 조회
   */
  tableList: async () => {
    try {
      const response = await client.post("/findAll");
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
      const response = await client.get(`/detail/${id}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },
  /**
   * @constructor Initial
   * @param {}
   * @description 글 등록
   */
  savePost: async (param) => {
    try {
      const response = await client.post("/addPost", param);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },
};
export default apiService;
