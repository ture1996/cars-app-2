import ApiService from "./ApiService";

class CarService extends ApiService {
  async getAll() {
    return await this.client.get("/movies");
  }
  async add(movie) {
    await this.client.post("/movies", movie);
  }
  async get(id) {
    return await this.client.get(`/movies/${id}`);
  }
  async edit(id, movie) {
    await this.client.put(`/movies/${id}`, movie);
  }
  async delete(id) {
    await this.client.delete(`/movies/${id}`);
  }
}

export const carService = new CarService();
