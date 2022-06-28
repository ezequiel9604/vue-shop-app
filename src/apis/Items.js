import Axios from "axios";

const baseUrl = "https://localhost:7227";


export async function get_all(){

    const response = await Axios.get(`${baseUrl}/api/Item/GetAll`);

    return response.data;

}

export async function get_by_id(id){

    const response = await Axios.get(`${baseUrl}/api/Item/GetAll`);

    const arr = response.data;

    let item = null;
    [...arr].forEach((current)=>{
        if(current.id == id)
            item = current;
    });

    return item;

}

