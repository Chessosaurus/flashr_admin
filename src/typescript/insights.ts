import { supabase } from '../supabase'
import { TVData} from './data'


function mapResponse(response: { tv_id: number, count: number }[]): TVData[] {
  return response.map(item => {
      const name: string = 'name'
      return {
          id: item.tv_id,
          name: name,
          count: item.count
      };
  });
}

export async function get_favorite_tv_ranked(): Promise<JSON> {
  const { data, error } = await supabase.rpc('get_favorite_tv_ranked');
  let mappedArray: TVData[] = [];
  if (error) {
    console.error('Error calling database function:', error.message);
  } else {
    mappedArray = mapResponse(data);
    for(const data of mappedArray) {
            await fetch("https://api.themoviedb.org/3/tv/"+data.id, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzM2ZDExMGY1YjRlMDY5NTc1ZDFiNzdiMTMzMmM2YSIsInN1YiI6IjY1ZmQ1OWI2MjI2YzU2MDE2NDZlZGMwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.81HUBUnUJvJD9qHxOxS7a0hkFumc3AqC6v52b8wWesM',
                Host: 'api.themoviedb.org'
            },
        })
        .then(response => response.json())
        .then(response => data.name = response.original_name)
        .catch(err => console.error(err));
    }
  }
  const jsonFormat = JSON.stringify(mappedArray)
  return JSON.parse(jsonFormat)
}

  export async function get_interesting_tv_ranked() {
    const { data, error } = await supabase.rpc('get_favorite_tv_ranked');
  
    if (error) {
      console.error('Error calling database function:', error.message);
    } else {
      const mappedArray: TVData[] = mapResponse(data);
      for(const data of mappedArray) {
              await fetch("https://api.themoviedb.org/3/tv/"+data.id, {
              headers: {
                  Accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzM2ZDExMGY1YjRlMDY5NTc1ZDFiNzdiMTMzMmM2YSIsInN1YiI6IjY1ZmQ1OWI2MjI2YzU2MDE2NDZlZGMwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.81HUBUnUJvJD9qHxOxS7a0hkFumc3AqC6v52b8wWesM',
                  Host: 'api.themoviedb.org'
              },
          })
          .then(response => response.json())
          .then(response => data.name = response.original_name)
          .catch(err => console.error(err));
      }
    }
  }

  export async function get_uninteresting_tv_ranked() {
    const { data, error } = await supabase.rpc('get_favorite_tv_ranked');
  
    if (error) {
      console.error('Error calling database function:', error.message);
    } else {
      const mappedArray: TVData[] = mapResponse(data);
      for(const data of mappedArray) {
              await fetch("https://api.themoviedb.org/3/tv/"+data.id, {
              headers: {
                  Accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzM2ZDExMGY1YjRlMDY5NTc1ZDFiNzdiMTMzMmM2YSIsInN1YiI6IjY1ZmQ1OWI2MjI2YzU2MDE2NDZlZGMwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.81HUBUnUJvJD9qHxOxS7a0hkFumc3AqC6v52b8wWesM',
                  Host: 'api.themoviedb.org'
              },
          })
          .then(response => response.json())
          .then(response => data.name = response.original_name)
          .catch(err => console.error(err));
      }
    }
  }






