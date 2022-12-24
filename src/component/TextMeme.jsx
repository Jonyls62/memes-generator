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
        <Draggable >
          <div>
            <p className="texto_superior" style={estilos.estilo } >{text}</p>
          </div>
    </Draggable>
    <div data-html2canvas-ignore id="modificadores">
      <div className="d-flex justify-content-start">
            <label htmlFor="color" className="form-label p-2 m-0">Arrastrar el texto</label>
      </div>
       <input  onChange={(e)=>{setText(e.target.value)}} 
          className="form-control w-100 p-2 mb-2 d-block" value={text} type="text" placeholder="frase"aria-label="default input example"></input>
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
          <label htmlFor="size" className="form-label p-2">Rotar texto</label>
          <input onChange={(e)=>{setRotar(e.target.value)}} 
           type="range" min="0" max="360" value={rotar} step="1" />        
       </div>
       <div className="row d-flex align-items-center"> 
       <div className=" col-6 ">
           <label htmlFor="tipografia" className="form-label">Tipografia</label>
        </div>         
           <div className="col-6 ">
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
    </div>
  
    </>
  )
}

export default TextMeme; 