import axios from "axios";

const BASE_URL = "http://localhost:3001";

class Api {
  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}${endpoint}`;
    const params = method === "get" ? data : {};
    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  static async allUsers() {
    const response = await this.request("/users");
    return response;
  }
  static async registerUser(user) {
    const response = await this.request("/users", user, "post");
    return response;
  }
  static async getUser(userId) {
    const response = await this.request(`/users/${userId}`);
    return response;
  }
  static async deleteUser(userId) {
    const response = await this.request(`/users/${userId}`, {}, "delete");
    return response;
  }
  static async updateUser(user) {
    const response = await this.request(`/users/${user.id}`, user, "put");
    return response;
  }
}

export default Api;
