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
   * type
   * board_id
   * user_id
   * title
   * content
   * }
   * @description 글 등록 및 수정
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
   * board_id
   * }
   * @description 글 삭제
   */
  removedPost: async (boardId) => {
    try {
      console.log("removedPost param----------", boardId);
      const response = await api.delete(`/remove/${boardId}`);
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
   * @description 댓글 리스트
   */
  getCommentList: async (id) => {
    try {
      const response = await api.get(`comment/findAll/${id}`);
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
   * @description 댓글 등록
   */
  registeredReply: async (param) => {
    try {
      console.log("comments param----------------------", param);
      const response = await api.post(`comment/register`, param);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },
};

export default apiService;
