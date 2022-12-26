import TextMeme from "./TextMeme";

const MostrarMeme = (imgmemes) => {
  return (
    <>
    <div className="img_container" id="img_container">
        <figure id="figure"  className="w-100 m-0">
            <img src={`${imgmemes.imgmemes}`}id="ubicar"  className="w-100"
            alt="imagen" />
        </figure>
        <h6 data-html2canvas-ignore="true" class="mt-1 mb-0">Arrastrar el texto para ubicarlo</h6>
       <TextMeme/>
       <TextMeme/>
    </div>
    </>
  )
}

export default MostrarMeme;