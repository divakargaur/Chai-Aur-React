// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
  const data = useLoaderData()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/divakargaur')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // }, [])
  
  return (
    <main className='text-center m-4'>
      <h1 className='text-3xl font-bold m-6'>{data.name}</h1>
      <img src={data.avatar_url} alt='avatar' className='mx-auto rounded-full' />
    </main>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/divakargaur')
  return res.json()
}