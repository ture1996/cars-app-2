import ApiService from "./ApiService";
import { httpService } from "./HttpService";

class AuthService extends ApiService {
  login = async (credentials) => {
    const response = await this.client.post("/auth/login", credentials);
    localStorage.setItem("loginToken", response.data.original.access_token);
    window.location.replace("/cars");
    return response;
  };

  getHeaders = () => {
    return {
      Authorization: `Bearer ${window.localStorage.getItem("loginToken")}`,
    };
  };

  async logout() {
    await this.client.post("/auth/logout", {}, { headers: this.getHeaders() });
    window.localStorage.removeItem("loginToken");
    window.location.replace("/login");
  }
}

export const authService = new AuthService();
