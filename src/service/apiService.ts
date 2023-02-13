// import axios from "axios";
import { IResponse } from "../type";

const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';


export default async function fetchImg(query: string, page: number):Promise<IResponse> {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=15`;
  const response = await fetch(url);
  console.log(response)
  const data: IResponse = await response.json();
  
  console.log(data)
  return data;
  
}

// export default async function fetchImg(query: string, page: number):Promise<IResponse> {
//   const url = `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=15`;
//   const response= await axios.get(url);
//   const data:IResponse= response.data 
//   return data ;
// }



