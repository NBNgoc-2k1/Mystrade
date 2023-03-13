import axios from 'axios'
const httpRequest:any = axios.create({baseURL: "http://localhost:4000"})
export const get = async (url:any, option = {}) => {
    try {
        const { data } = await httpRequest.get(url, option);
        return data
    } catch (error) {
        console.log(error)
    }
}
export default httpRequest