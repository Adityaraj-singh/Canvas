import React, { useEffect, useState } from "react";
import { useCanvas } from "./CanvasContext";
import './canvas.css'
import { GiDivingDagger } from "react-icons/gi";
export function Canvas(props) {

  const [color,Setcolor]=useState('black')
  const[typing,Settyping]=useState('')
  const [textarea,Settextarea]=useState(false)

  if(props.tool=='Eraser')
  {
    Setcolor('white')
  }

  if(document.getElementById('text-bar'))
  {
    document.getElementById('text-bar').style.position="absolute"
    document.getElementById('text-bar').style.left="50%"
    document.getElementById('text-bar').style.backgroundColor="red"
    document.getElementById('text-bar').style.zIndex="1000"

  }

  if(document.getElementById('typed-text'))
  {


  }

const typer=(e)=>{

  Settyping(e.target.value)
}

  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw, addtext
  } = useCanvas();

  useEffect(() => {
    prepareCanvas(color);
  }, [color]);


  if(props.tool=='Pencil' || props.tool=='Eraser' || props.tool=='Cursor' || props.tool=='Hand' || props.tool=='Upload' || props.tool=='Text' || props.tool=='Square')
  {
    return (
      <div className="canvase">   
      {props.tool=='Text' 
      ?
      <input type="text" className="text-bari" id="text-bari" placeholder="Text here" onChange={typer} />
      :
      null

      }
      {props.tool=='Text' 
      ?
      <div className="typed-text" id="typed-text" >{typing}</div>
      :
      null

      }
        <canvas
       className="canvas" id="canvas"
        
        onMouseDown={props.tool !='Text' ? startDrawing : addtext}
        
        onMouseUp={props.tool !='Text' ? finishDrawing : null}

        onMouseMove={ props.tool !='Text' ? draw : null }
        ref={canvasRef}
      />

</div>
 
    );
  }
  
  
}
export default Canvas