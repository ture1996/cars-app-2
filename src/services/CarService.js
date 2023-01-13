import ApiService from "./ApiService";
import { authService } from "./AuthService";

class CarService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }
  getAll = async () => {
    console.log("test");
    return await this.client.get("/movies", {
      headers: this.authService.getHeaders(),
    });
  };
  async add(movie) {
    await this.client.post("/movies", movie, {
      headers: this.authService.getHeaders(),
    });
  }
  async get(id) {
    return await this.client.get(`/movies/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }
  async edit(id, movie) {
    await this.client.put(`/movies/${id}`, movie, {
      headers: this.authService.getHeaders(),
    });
  }
  async delete(id) {
    await this.client.delete(`/movies/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }
}

export const carService = new CarService();
