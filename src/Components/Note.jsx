import React from "react";
import ReactDOM from "react-dom";;
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from '@mui/material/Avatar';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import Icon from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props){
  const Colors=["#ffa500","#7afcff","#feff9c","#ff7eb9","#00ff00"]
  const [currentColor,SetcurretColor]=React.useState(Colors[0])
  const [nextColor,SetnextColor]=React.useState(Colors[1])
  function ChangeColor(){
    let Randomnext
    while(true){
      Randomnext=Math.floor((Math.random() * Colors.length));
     if(Colors[Randomnext]==currentColor){
      continue
     }else{
      SetcurretColor(nextColor)
      SetnextColor(Colors[Randomnext])
    break
     }

    }
    
  }
    return (
          <Card sx={{ width: 400, maxWidth: 500, backgroundColor: currentColor,padding:1 }}>
            <div className="flex items-start justify-between ">
            <Avatar sx={{ bgcolor: nextColor,border: 1 , borderColor:"black",borderStyle:"solid" }}
              onClick={ChangeColor}
            >
              <Icon
              className="cursor-pointer"
              
              > . 
              </Icon>
              </Avatar>

              <DeleteIcon sx={{fontSize:42 , color:nextColor,cursor:"pointer"}} 
              onClick={(event)=>{props.DeleteNote(event,props.id)}}
              />
            </div>
          
            <CardContent>
                <textarea
                  cols="25"
                  rows="10"
                  className="w-full h-full bg-transparent outline-none "
                  name="Note"
                  data-noteid={props.id}
                  value={props.body}
                  onChange={props.Updatenote}
                ></textarea>
              <div className="flex items-center justify-between">
                <h1 style={{ cursor: "pointer" }}>{props.time}</h1>
                <h1 style={{ cursor: "pointer" }}>{props.date}</h1>
              </div>
            </CardContent>
          </Card>
    )
}