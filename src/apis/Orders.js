import Axios from "axios";

export async function get_by_client_id(clientid) {
    
    const response = await Axios.get(`${baseUrl}/api/Order/GetByClientId/${clientid}`);

    return response.data;
}