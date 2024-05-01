import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import Empty from './Components/Body'
import { nanoid } from 'nanoid'
function App() {
const [IsSidebar , SetSidebar]=React.useState(true)
const [IsDark , SetIsDark]=React.useState(false)
const [Notes,SetNotes]=React.useState([])
function ToggleSideBar(){
  SetSidebar(prev=>!prev)
}
function ToggleMode(){
  SetIsDark(prev=>!prev)
}
const currentDate = new Date();
const formattedDate =currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
const time  =currentDate.toLocaleTimeString()
function AddNotes(){
const note={
  id:nanoid(),
  Title:"Note",
  Body:"",
  categrory:"",
  Date:formattedDate,
  time:time
}
SetNotes([...Notes,note])
}
function UpdateNotes(event) {
  const noteId = event.target.getAttribute('data-noteid');
  SetNotes(PrevNotes => {
    let NewArray=[]
     PrevNotes.forEach(note => {
      if (note.id === noteId) {
        
        let newNote={...note,Body:event.target.value}
        NewArray.push(newNote)
      }
      else{
        NewArray.push(note)
      }
      
    });
    return NewArray
  });
}
function DeleteNote(event,noteId){
  event.stopPropagation()
  SetNotes(OldArray=>OldArray.filter(note=>note.id!==noteId))
}
  return (
    <section className='flex flex-col'>
      <Navbar
      ToggleSideBar={ToggleSideBar} 
      ToggleMode={ToggleMode}
      IsDark={IsDark}
      Addnote={AddNotes}
      />
      <Empty 
      noteArray={Notes}
      IsOpen={IsSidebar}
      IsDark={IsDark}
      UpdateNote={UpdateNotes}
      DeleteNote={DeleteNote}
      />
    </section>
  )
}

export default App
