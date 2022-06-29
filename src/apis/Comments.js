import { Axios } from 'axios';

const baseUrl = "https:/localhost:7227";

export async function get_by_item_id(itemid) {
    
    const response = await Axios.get(`${baseUrl}/api/Comment/GetByItemId/${itemid}`);

    return response.data;
}

export async function save_comment(clientid, itemid, commentText) {
    
    if(JSON.parse(localStorage.getItem("loggedClient"))){

        const response = await Axios.post(`${baseUrl}/api/Comment/Save`, {
            clientid: clientid,
            itemid: itemid,
            text: commentText,
        })
        .then((result) => {
            console.log('comment saved!');
        })
        .catch((error) => {
            if(error.response.status == 400){
                return error.response.data;
            }
        });

        return response;

    }

}