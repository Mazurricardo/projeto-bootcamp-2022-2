import BaselineAdd from './../imagens/BaselineAdd.png'

function UploadImagem() {
  return (
    <>
      <div className="maxWidht">
        <div className="ImageContainer">
          <img src="BaselineAdd" rel="Baseline"></img>
        </div>
      </div>

      <input type="file" id="flimage" name="fimage" accept="image/*"></input>
    </>
  )
}

export default UploadImagem
