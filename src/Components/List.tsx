import React from 'react'
import {Link} from "react-router-dom";
interface typeData {
  Movies : string[];

}

const List:React.FC <typeData> = (props) => {
  const {Movies} =props;
  const image_url = "https://image.tmdb.org/t/p/w500";
  const loading_url = "https://i.gifer.com/ZKZg.gif";
  return (
    <>
    <div className=' w-[70%] grid grid-cols-5  mx-auto gap-x-5 gap-y-10  py-5'>
    {
      Movies.length === 0 ? 
      (<div className=' flex justify-center align-middle me-60'>
        <img className=' ms-96 bg-stone-950 w-10' src={loading_url} alt="" />
      </div>)
      :Movies.map((e) =>{
        return(
          <Link to={"Detail/" + e.id} key={e.id}>
          <div className=" h-[40vh] cursor-pointer overflow-hidden group">
              <img className='object-cover w-full rounded-lg h-[90%] group-hover:scale-105' src={image_url+e.poster_path} alt="" />
              <p className=' '>{e.title}</p>
          </div>
          </Link>
        )
      })
    }
    </div>
    </>
  )
}

export default List;