import { Axios } from 'axios';

const baseUrl = 'https:/localhost:7227';

export async function getByItemIdApi (itemid) {
  const response = await Axios.get(`${baseUrl}/api/Comment/GetByItemId/${itemid}`);

  return response.data;
}

export async function saveCommentApi (clientidInput, itemidInput, commentTextInput) {
  if (JSON.parse(localStorage.getItem('loggedClient'))) {
    const response = await Axios.post(`${baseUrl}/api/Comment/Save`, {
      clientid: clientidInput,
      itemid: itemidInput,
      text: commentTextInput
    })
      .then((result) => {
        //console.log('comment saved!');
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return error.response.data;
        }
      });

    return response;
  }
}
