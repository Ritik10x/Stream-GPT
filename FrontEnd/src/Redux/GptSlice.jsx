import { createSlice } from "@reduxjs/toolkit"



const gptSLice = createSlice({

    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null,
        loading: false, 
    },
    reducers:{
        toggleGptSearchView :(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            state.loading = false 
        },
        setLoading: (state, action) => {   // ✅ ADD THIS
      state.loading = action.payload
    },
    }
})

export const {toggleGptSearchView,addGptMovieResult,setLoading} = gptSLice.actions
export default gptSLice.reducer