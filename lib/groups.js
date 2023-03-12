import axios from 'axios';
import toast from 'react-hot-toast';
export async function addGrroup(userData) {
    try {
      const response = await axios.post('/api/group', userData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getGroup(dueño) {
      try {
        console.log(dueño)
          const response = await axios.get('/api/group', {params: {dueño}});
          console.log(response)
          return response.data;
        } catch (error) {
          console.error(error);
        }
    }
  
  export async function addMemberToGroup(groupName, members) {
    try {
      const response = await axios.patch(`/api/group?name=${groupName}`, {
        members,
      });
      console.log("RESPUESTAAAAA",response.data);
      return response;
    } catch (error) {
      console.error("mi error",error.response);
      return error.response;
    }
  }

  export async function getSoles() {
    try {
      let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=SOL', {
      headers: {
        'X-CMC_PRO_API_KEY': 'de73dba1-e291-409c-83c3-5c73a7d7bddf',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
