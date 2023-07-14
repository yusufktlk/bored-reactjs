import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios, { Axios } from 'axios'


function Home() {
  const {data, isLoading , refetch} = useQuery(["bored"], () => {
    return axios.get("https://www.boredapi.com/api/activity/").then((res) => res.data)
  })

  if (isLoading) {
    return <h1 className='text-5xl text-center mt-64'>Loading...</h1>
  }

  return (
    <div className='justify-center text-center mt-24 font-mono bg-black opacity-90'>
      <h1 className='text-5xl'>Hey are you bored?</h1>
      <p className='text-2xl mt-5 underline'>Let's find something to do!</p>
      <div className='bg-blue-400 p-9 pb-14 mt-10 inline-block rounded-3xl text-black '>
        <h1 className='text-4xl font-bold mb-5 font-mono'>Let's</h1>
        <p className='text-3xl'>{data?.activity}</p>
      </div>
      <br />
      <button className='text-3xl bg-blue-400 text-black font-bold p-8 rounded-xl mt-10' onClick={refetch}>Find</button>
    </div>
  )
}

export default Home