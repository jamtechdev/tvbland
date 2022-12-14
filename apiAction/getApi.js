import react from 'react';
import axios from 'axios'


export async function getData() {
  return await axios.get("https://api.tvmaze.com/search/shows?q=girls")
        
}

