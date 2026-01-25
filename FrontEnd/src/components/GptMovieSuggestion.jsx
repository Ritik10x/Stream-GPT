import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"



const GptMovieSuggestion = () => {

  const {movieResults,movieNames,loading} = useSelector(store=> store.gpt)
  
console.log(movieResults)



 if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-blue-500"></div>
      </div>
    )
  }


 
 if (!movieNames || !movieResults) return null

  return (
    <div className='p-4 m-4  bg-black/90'>
      <div>
      
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}

      </div>
    </div>
  )
}

export default GptMovieSuggestion
