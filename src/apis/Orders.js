import Axios from 'axios';

const baseUrl = 'https:/localhost:7227';

export async function getByClientIdApi (clientid) {
  const response = await Axios.get(`${baseUrl}/api/Order/GetByClientId/${clientid}`);

  return response.data;
}
