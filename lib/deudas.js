import axios from 'axios';


export async function getDeudas(to) {
    try {
        
        const response = await axios.get('/api/deuda', {params: {to}});
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }

    export async function addDeuda(userData) {
        try {
            const response = await axios.post('/api/deuda', userData);
            console.log("response desde lib: ",response)
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    export async function paidDeuda(id) {
        try {
            console.log("id desde lib: ",id)
                
            const response = await axios.put('/api/deuda', id);
            return response;
        } catch (error) {
            console.error(error);
        }
    }