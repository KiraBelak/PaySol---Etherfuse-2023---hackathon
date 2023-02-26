import axios from 'axios';



export async function addUser(userData) {
  try {
    const response = await axios.post('/api/user', userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsers() {
    try {
        const response = await axios.get('/api/user');
        console.log(response.data)
        return response.data;
      } catch (error) {
        console.error(error);
      }
  }
