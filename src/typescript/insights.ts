import { supabase } from '../supabase'

export async function get_favorite_tv_ranked(): Promise<string> {
  const { data, error } = await supabase.rpc('get_favorite_tv_ranked');
    if (error) {
      // Handle error
      console.error(error.message);
    } else {
      // Process the data
      if (data) {
          console.log("tv: "+JSON.stringify(data))
      } else {
          console.log("No data returned from the RPC");
      }
    }
    return JSON.stringify(data)
}

  export async function get_interesting_tv_ranked(): Promise<string> {
    const { data, error } = await supabase.rpc('get_interesting_tv_ranked');
    if (error) {
      // Handle error
      console.error(error.message);
    } else {
      // Process the data
      if (data) {
          console.log("tv: "+JSON.stringify(data))
      } else {
          console.log("No data returned from the RPC");
      }
    }
    return JSON.stringify(data)
  }

  export async function get_uninteresting_tv_ranked(): Promise<string> {
    const { data, error } = await supabase.rpc('get_uninteresting_tv_ranked');
    if (error) {
      // Handle error
      console.error(error.message);
    } else {
      // Process the data
      if (data) {
          console.log("tv: "+JSON.stringify(data))
      } else {
          console.log("No data returned from the RPC");
      }
    }
    return JSON.stringify(data)
  }








  export async function get_favorite_movies_ranked(): Promise<string> {
    const { data, error } = await supabase.rpc('get_favorite_movies_ranked');
    if (error) {
      // Handle error
      console.error(error.message);
    } else {
      // Process the data
      if (data) {
          console.log("movie: "+JSON.stringify(data))
      } else {
          console.log("No data returned from the RPC");
      }
    }
    return JSON.stringify(data)
  }
  
    export async function get_interesting_movies_ranked(): Promise<string> {
      const { data, error } = await supabase.rpc('get_interesting_movies_ranked');
      if (error) {
        // Handle error
        console.error(error.message);
      } else {
        // Process the data
        if (data) {
            console.log("movie: "+JSON.stringify(data))
        } else {
            console.log("No data returned from the RPC");
        }
      }
      return JSON.stringify(data)
    }
  
    export async function get_uninteresting_movies_ranked(): Promise<string> {
      const { data, error } = await supabase.rpc('get_uninteresting_movies_ranked');
      if (error) {
        // Handle error
        console.error(error.message);
      } else {
        // Process the data
        if (data) {
            console.log("movie: "+JSON.stringify(data))
        } else {
            console.log("No data returned from the RPC");
        }
      }
      return JSON.stringify(data)
    }
  




