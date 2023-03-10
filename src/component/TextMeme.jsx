import { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";

const TextMeme = () => {
  const [text, setText]= useState('');
  const [textColor, setColor]= useState('black');
  const [textSize, setTextSize]= useState('20');
  const [rotar, setRotar]= useState('0');
  const [tipografia, setTipografia]= useState('Roboto');
  
  const estilos ={
    estilo:{
      transform: `rotate(${rotar}deg)`,
      color:textColor,
      fontSize:textSize + "px",
      fontFamily:tipografia,
    },
  }
  return (
    <>
    <div data-html2canvas-ignore id="modificadores">
      <div>
            <label htmlFor="color" className="form-label p-1 m-1">Texto</label>
       <input  onChange={(e)=>{setText(e.target.value)}} 
          className="form-control " value={text} type="text" placeholder=""aria-label="default input example"></input>
      </div>
       <div>          
         <label htmlFor="color" className="form-label p-2 m-0 ">Color</label>
         <input onChange={(e)=>{setColor(e.target.value)}} type="color"/>        
       </div>
       <div>          
          <label htmlFor="size" className="form-label p-2 m-0">Tamaño</label>
          <input onChange={(e)=>{setTextSize(e.target.value)}} 
           type="range" min="5" max="60" value={textSize} step="1" />        
       </div>
       <div>          
          <label htmlFor="size" className="form-label p-2">Rotar </label>
          <input onChange={(e)=>{setRotar(e.target.value)}} 
           type="range" min="0" max="360" value={rotar} step="1" />        
       </div>
       <div className=""> 
       
           <label htmlFor="tipografia" className="form-label">Tipografia</label>
                
           
             <select className="form-select form-select-lg mb-3 m-1" 
               onChange={(e)=>{setTipografia(e.target.value)}}>
               <option value="Anton">Anton</option>
               <option value="monospace">monospace</option>
               <option value="fantasy">fantasy</option>
               <option value="fangsong">fangsong</option>
               <option value="Roboto">Roboto</option>
               <option value="cursive">cursive</option>
             </select>        
           
         </div>
    </div>
  
    <Draggable bounds="figure">
          <div className="texto_superior">
            <p className="texto_superior" style={estilos.estilo } >{text}</p>
          </div>
    </Draggable>
    </>
  )
}

export default TextMeme; 