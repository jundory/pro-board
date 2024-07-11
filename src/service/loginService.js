import { api } from "../boot/axios";

const loginService = {
  /**
   * @constructor Initial
   * @param {
   * user_id
   * user_pwd
   * }
   * @description 로그인
   */
  login: async (param) => {
    try {
      console.log("login param----------", param);
      const response = await api.post(`/auth/login`, param);
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
   * user_id
   * password
   * name
   * email
   * }
   * @description 회원가입
   */
  signUp: async (param) => {
    try {
      console.log("signup param----------", param);
      const response = await api.post(`/auth/signUp`, param);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      return false;
    }
  },
};
export default loginService;
