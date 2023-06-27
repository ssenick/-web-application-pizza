import axios from "axios";

export default class PizzasServices {
   static async getAll(filterCategory, sort) {
      const response = await axios
         .get(`http://localhost:4000/pizzas${filterCategory !== null ? `?category=${filterCategory}` : ''}`);
      return response
   }
}