import {useEffect, useState} from "react";
import * as process from "process";
import axios from "axios";

require('dotenv').config()

const rapidApiKey = process.env.RAPID_API_KEY

export const useFetch = ({endpoint, query}: any) => {
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
      const res = await axios.request
      (options);

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

