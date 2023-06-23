import axios from "axios";

export default class PizzasServices {
   static async getAll() {
      const response = await axios.get('http://localhost:3004/db.json');
      return response
   }
}