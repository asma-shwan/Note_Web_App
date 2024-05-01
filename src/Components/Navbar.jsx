import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Icon from '@mui/material/Icon'; 

function Navbar(props){
    return (
        <div className={`w-full  h-20 flex px-10 gap-6 justify-end items-center p-3 ${props.IsDark?' bg-white':'bg-[#130101]'}`}>
          {!props.IsDark ?<ModeNightIcon fontSize='large' sx={{color:"white",cursor:"pointer"}} onClick={props.ToggleMode} />  : <LightModeIcon sx={{color:"black",cursor:"pointer"}} fontSize='large'  onClick={props.ToggleMode} />}  
            <button 
            onClick={props.Addnote}
            className='text-white bg-[#94654B] p-3 rounded hover:scale-110 transition ease-in-out delay-150' style={{boxShadow:" 0px 0px 8px 5px rgba(182, 91, 3, 0.5)"}}>
                Add new note
            </button>
        </div>
    )
}
export default Navbar