import axios from 'axios';
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
          console.log(response.data)
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
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }