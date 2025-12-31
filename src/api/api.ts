import axios from "axios"

    
export const fetchAPI = async () =>{
    const respone = await axios.get("https://dummyjson.com/products");
    return respone.data;
}