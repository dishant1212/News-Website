const initialState={
    Articals:[]
}

export const homeArticals=(state=initialState,action)=>{
      const {type,payload}=action
      switch(type) {
        case "HOME_ARTICALS": 
            return{
                ...state,Articals:payload
            }
     default: return state

      }

}