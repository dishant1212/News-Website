import axios from "axios"


export const homeArticals=()=>{
  
    return async (dispatch,getState)=>{
         const resp = await axios({
            method:"GET",
            url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=2889e18082a740f6a47fbda0a6ca3355"
         })
         dispatch({type:"HOME_ARTICALS",payload:resp.data.articles
        })
    }
}

//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2889e18082a740f6a47fbda0a6ca3355