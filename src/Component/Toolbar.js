import React, { useState } from 'react'
import './Toolbar.css'
import {IoIosHand} from 'react-icons/io'
import {GiArrowCursor} from 'react-icons/gi'
import {BsSquare} from 'react-icons/bs'
import {RiPencilFill} from 'react-icons/ri'
import {MdTextFields} from 'react-icons/md'
import {FaEraser} from 'react-icons/fa'
import {BiImageAlt} from 'react-icons/bi'
import {CgUndo,CgRedo} from 'react-icons/cg'
import Canvas from '../Canvas'
import { useCanvas } from '../CanvasContext'
import {ClearCanvasButton} from '../ClearCanvasButton'


const Toolbar=()=>{
    const { clearCanvas } = useCanvas()
    const [tool,Settool]=useState('pencil')
    const [status,Setstatus]=useState(true)
    const [index,Setindex]=useState(2)
    const tools=[{
        id:0,
        tool:'Hand',
        icon:<IoIosHand className="icon" size={25} id='0' />,
        status:false
    },
    {
        id:1,
        tool:'Cursor',
        icon:<GiArrowCursor className="icon" size={25} id='1' onClick={navclick} />,
        status:false
    },
    {
        id:2,
        tool:'Pencil',
        icon: <RiPencilFill className="icon" size={25} id='2' onClick={navclick} />,
        status:false
    },
    {
        id:3,
        tool:'Square',
        icon :<BsSquare className="icon" size={20} id='3' onClick={navclick} />,
        status:false
    },
    {
        id:4,
        tool:'Text',
        icon: <MdTextFields size={25} className="icon" id='4' onClick={navclick} />,
        status:false
    },

    {   
        id:5,
        tool :'Eraser',
        icon: <FaEraser className="icon"  id='5' size={25} onClick={clearCanvas} />,
        status :false
    }
    
    

]
function navclick(e){
   let val=e.target.id
   if(!val)
   {
       Setindex(0)
   }
   else
   {
    Setindex(e.target.id)
   }
    
}
function undo(){
    alert('Undo')
}
function redo(){
    alert('redo')
}
return (
    <div className="toolbar" id="toolbar">
            
        <div className="inner-toolbar bg-gray-200" id="inner-toolbar">
                <div className="showbutton" id="showbutton">
                    <button className="show-hide bg-blue-500 rounded-xl p-1">hide</button>
                </div>
                <div className="all-tools" id="all-tools">
                    {
                        tools.map(item=>(
                            <div className="tool-iem " id={item.id} onClick={item.id==5 ?  clearCanvas : navclick} key={item.id}>
                                <button className={item.id==index ? "tool bg-blue-500" : 'tool'} id={item.id} onClick={item.id==5 ?  clearCanvas : navclick }>
                     {item.icon}
                     </button>
             </div>
                        )
                            
                        )
                    }
              <div className="tool-iem "  onClick={undo} >
                                <button className='tool bg-gray-500' onClick={undo} k>
                                <CgUndo className="icon"  size={25}  onClick={undo}  />
                     </button>
             </div>
                    
             <div className="tool-iem "  onClick={redo} >
                                <button className='tool bg-gray-500' onClick={redo} k>
                                <CgRedo className="icon"  size={25}  onClick={redo}  />
                     </button>
             </div>
           
             </div>
        </div>

        <Canvas tool={tools[index].tool}  />
  
     
    </div>
)
}

export default Toolbar