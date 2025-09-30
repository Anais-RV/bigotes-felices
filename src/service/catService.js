import axios from "axios";

const CAT_API = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images/",
  headers: { "x-api-key": import.meta.env.VITE_CAT_API_KEY }
});

const readAllCats = async (limit = 30) => { 
    const RES = await CAT_API.get(`search?limit=${limit}`);
    return RES.data; 
};

const readCatId = async (id) => { 
    const RES = await CAT_API.get(`${id}`);
    return RES.data; 
};

export { readAllCats, readCatId }