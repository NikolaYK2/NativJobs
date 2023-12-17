import {useEffect, useState} from "react";
import axios from "axios";
import {RAPID_API_KEY} from "@env"

const rapidApiKey = RAPID_API_KEY


export const useFetch = (endpoint:string, query:any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query}
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);

      setData(res.data.data);
      setIsLoading(false)
    } catch (e: any) {
      setError(e);
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch};
};

