import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({title,type,handelClick,customStyles}) => {

    const snap = useSnapshot(state)

 const generateStyle = (type) => {
    if(type === 'filled'){
        return{
            backgroundColor: snap.color,
            color:'#fff'
        }
    }
 }

  return (
    <button className={`px-2 p-1.5 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handelClick}>
        {title}
    </button>
  )
}

export default CustomButton
