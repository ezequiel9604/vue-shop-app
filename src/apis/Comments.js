import { Axios } from "axios";

const baseUrl = "https:/localhost:7227";

export async function GetCommentsByItemId(itemid) {
    
    const response = await Axios.get(`${baseUrl}/api/Comment/GetByItemId/${itemid}`);

    return response.data;
}

export async function SaveComment(itemid, commentText) {
    
    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const obj = JSON.parse(localStorage.getItem("loggedClient"));

        await Axios.put(`${baseUrl}/api/Comment/Save`, {
            clientid: obj.user.id,
            itemid: itemid,
            text: commentText,
            date: new Date()
        })
        .then((result)=>{

            console.log('comment saved!');
        })
        .catch((error)=>{
            console.log(error);
        })

    }

}