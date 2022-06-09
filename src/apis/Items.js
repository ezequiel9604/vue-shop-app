import Axios from "axios";

export async function getAllItems(){

    const response = await Axios.get("https://localhost:7227/api/Item/GetAll");

    return response.data;

}
