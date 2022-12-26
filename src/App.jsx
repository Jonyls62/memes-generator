import './App.css'
import SelecMeme from './component/SelecMeme'
import html2canvas from 'html2canvas'

const Descargar = function (e){
 html2canvas(document.querySelector("#img_container"),{
    allowTaint: true,
    useCORS: true,
  }).then((canvas)=>{    
    let img = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.download = "Meme.jpg";
    link.href = img;
    link.click();
  })
}

function App() {
  return (
    <div className="app ">
      <div>
        <h4  className=" p-0 m-0">Crea tu meme</h4>
      </div>
      <SelecMeme/>
      <button type="button " onClick={Descargar} className="btn btn-primary mb-1 mt-0">Descargar</button>
    </div>
  )
}

export default App;
