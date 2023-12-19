import {useEffect, useState} from "react";
import {JobsType, searchJobApi} from "@/features/search/api/instance";


export const useFetch = (endpoint:string, query:any) => {
  const [data, setData] = useState<JobsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res =  await searchJobApi.SearchApi(query);

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

