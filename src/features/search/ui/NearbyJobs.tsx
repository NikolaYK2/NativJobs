import {useFetch} from "@/common/hooks/useFetch";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {globalStyle} from "@/assets/style/globalStyle";
import {NearbyJobsCards} from "@/features/search/ui/NearbyJobsCards";
import {stylesSearch} from "@/features/search/ui/styles";

type DataType = {
  job_id: string
}

export const NearbyJobs = ({navigate}:any) => {

  const {isLoading, error, data, refetch} = useFetch('search', {
    query: 'React developer',
    page: 1,
    num_pages: 1,
  })
  console.log(data)
  return (
    <View style={globalStyle.container}>
      <View style={stylesSearch.header}>
        <Text style={stylesSearch.text}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={'red'}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data.map(job => <NearbyJobsCards
            key={`nearby-job-${job.job_id}`}
            job={job}
            handleNavigate={()=>navigate.push(`/job-details/${job.job_id}`)}
          />)
        )}
      </View>
    </View>
  );
};

