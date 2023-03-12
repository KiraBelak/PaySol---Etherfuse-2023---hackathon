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