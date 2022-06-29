
import { get_by_item_id, save_comment } from "../apis/Comments";

export async function GetByItemId(itemid){

    const res = await get_by_item_id(itemid);
    
    return res;

}

export async function SaveComment(clientid, itemid, commentText){

    const res = await save_comment(clientid, itemid, commentText);
    
    return res;

}