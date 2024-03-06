import React, {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/zohaibshahzadkhan')
  //   .then((res)=>res.json())
  //   .then((data)=>{ 
  //     console.log(data)
  //     setData(data)

  //   })
  // },[])
  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='git-picture' width={300} />
    </div>
  )
}

export default Github

export const githubUserLoader = async () => {
  const response = await fetch('https://api.github.com/users/zohaibshahzadkhan')
  return await response.json()
}