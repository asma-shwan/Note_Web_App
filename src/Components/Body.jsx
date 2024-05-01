import React from "react";
import ReactDOM from "react-dom";;
import Note from "./Note"
import background from "../assets/backGround.png" 
function Empty(props) {
  return (
    <div className={`flex items-center justify-center ${
      !props.IsDark ? "bg-white" : "bg-[#130101] "
    } h-screen `}>
      {props.noteArray.length==0 ?
       <div className="flex flex-col items-center justify-center">
           <img src={background} alt="background" width={500}/>
           <h1 className={`text-4xl opacity-50 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl ${props.IsDark?'text-white':'text-black'} `}>No Note :(</h1>
        </div> 
       :
      <div
        className={`flex flex-row flex-wrap items-center  gap-4 justify-center h-screen w-screen mt-auto `}
      >
        {props.noteArray.map((note) => (
        <Note  DeleteNote={props.DeleteNote} id={note.id} key={note.id} title={note.Title} body={note.body}  time={note.time} date={note.Date} Updatenote={props.UpdateNote} />
      ))}
      </div>
    }
    </div>
    
  );
}

export default Empty;
