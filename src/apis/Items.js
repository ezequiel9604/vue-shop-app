import Axios from "axios";

const baseUrl = "https://localhost:7227";

export async function getAllItems(){

    const response = await Axios.get(`${baseUrl}/api/Item/GetAll`);

    return response.data;

}
