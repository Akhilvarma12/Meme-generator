import React, { useEffect,useState } from 'react'
import MemeCard from './Card'
import { getAllMemes } from '../api/memes';

export default function Home() {
    const [data,setData]=useState([]);;
        useEffect(()=>{
            getAllMemes().then((memes) => setData(memes.data.memes))
        },[]);
  return (
    <div>
    {
        data.map(el => <MemeCard img ={el.url}/>)
    }
    </div>
  )
}
