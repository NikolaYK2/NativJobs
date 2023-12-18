import axios from "axios";
import {RAPID_API_KEY} from "@env"

const instance = axios.create({
  baseURL: 'https://jsearch.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  }
})


export type JobsType = {
  employer_logo: string,
  employer_name: string
  job_country:string
  job_id: string
}
type Response<T = {}> = {
  data: T[]
}
type Params = {
  query: string,
  page: string,
  num_pages: string
}
export const searchJobApi = {
  SearchApi(params: Params) {
    return instance.get<Response<JobsType>>('search', {params})
  }
}