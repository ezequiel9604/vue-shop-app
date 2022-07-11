
import { getByItemIdApi, saveCommentApi } from '../apis/Comments';

export async function GetByItemId (itemid) {
  const res = await getByItemIdApi(itemid);
    
  return res;
}

export async function SaveComment (clientid, itemid, commentText) {
  const res = await saveCommentApi(clientid, itemid, commentText);
    
  return res;
}
