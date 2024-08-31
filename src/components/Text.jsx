import React, { useState } from 'react'
import Draggable from 'react-draggable'

export default function Text() {
  const [editMode,setEditMode]=useState(false);
  const [value,setValue]=useState("Double click to edit");
  return (
    <div>
      <Draggable>
        <h1 >
       {
        editMode?(<input
        onDoubleClick={(e=>setEditMode(false))}
          value={value} 
          onChange={e=>setValue(e.target.value)}
          />
        ):(
        <h1 onDoubleClick={(e=>setEditMode(true))}>{value}</h1>)
       }
        </h1>
        </Draggable>
    </div>
  )
}
