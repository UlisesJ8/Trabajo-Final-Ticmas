let boton = document.querySelector(".boton3")
let audioEtiqueta = document.querySelector("audio")
boton.addEventListener("click", () => {
        audioEtiqueta.setAttribute("src", "audio/Monolink - Father Ocean (Live Video).mp3")
        audioEtiqueta.play()
        console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  });