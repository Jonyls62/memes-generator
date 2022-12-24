import { useState } from "react"
import MostrarMeme from "./MostrarMeme";


const SelecMeme = () => {
  
  const [imgmemes,setImgmemes] = useState(`./img/1.jpg`);

  const seleccionarImg = (e) =>{
    const url = e.target.value;
    setImgmemes(`./img/${url}.jpg`);
  }

  return (
    <div className="mt-3 text-center">
      <h6>Seleccionar plantilla</h6>
      <div className="d-flex justify-content-center">
      <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50" aria-label=".form-select-lg example">
        
            <option value={1}>img 1</option>
            <option value={2}>img 2</option>
            <option value={3}>img 3</option>
            <option value={4}>img 4</option>
            <option value={5}>img 5</option>
      </select>
      </div>
       <MostrarMeme imgmemes = {imgmemes} />
       <button type="button" className="btn btn-primary mt-3 mb-3">Descargar</button>

    </div> 
      )
}

export default SelecMeme;