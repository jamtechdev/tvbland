import axios from 'axios'

//getShows
export async function getShows() {
  return await axios.get("https://api.tvmaze.com/search/shows?q=girls")
        
}
//getShowDetail
export async function getShowDetailById(id) {
   return await axios.get(`https://api.tvmaze.com/shows/${id}`)
       
}

