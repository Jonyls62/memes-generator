import TextMeme from "./TextMeme";

const MostrarMeme = (imgmemes) => {
  return (
    <>
    <div className="img_container row just d-flex justify-content-around" id="img_container">
        <figure id="figure"  className="col-12 pt-3 col-md-5">
            <img src={`${imgmemes.imgmemes}`}id="ubicar"  className="col-12"
            alt="imagen" />
        </figure>
    <div className="border border-dark rounded p-2 mt-3 col-12 col-md-4 ">
       <TextMeme/>
       <TextMeme/>
    </div>
    </div>
    </>
  )
}

export default MostrarMeme;