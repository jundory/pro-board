import client from "../common/client";

const apiService = {
  /**
   * @constructor Initial
   * @param {string}
   * @description 테이블 데이터 조회
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
};
export default apiService;
