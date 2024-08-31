import React,{useState,createRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';
 

export default function EditPage() {
  const [params]=useSearchParams();
  const [count,setCount]=useState(0);
  const memeref=createRef();
  const addText=()=>{
    setCount(count+1)
  } 
  return (
    <div>
    <div style={{width:"600px", border:"1px solid"}}  ref={memeref}  className='meme mt-5 mb-5'>
      <img src={params.get("url")} width='350px' />
      {
         Array(count)
         .fill(0)
         .map((e) =>(
         <Text/>
        ))
      }
      </div>
      <button onClick={addText} className=' btn btn-primary' >Add Text</button>
      <button onClick={((e)=> exportComponentAsJPEG(memeref))} className=' btn btn-primary' >Download</button>
    </div>
  )
}
