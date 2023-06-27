import axios from "axios";

export default class PizzasServices {
   static async getAll(filterCategory, filterSelectSort) {
      const response = await axios
         .get(`http://localhost:4000/pizzas?${filterCategory !== null ? `category=${filterCategory}` : ''
         }&_sort=${filterSelectSort.type}&_order=${filterSelectSort.order}`);
      return response
   }
}