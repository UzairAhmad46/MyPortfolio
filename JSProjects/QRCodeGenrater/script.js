const QRinput = document.getElementById("QR__input") 
const qrButton = document.getElementById("QR__button")
const QR__img = document.getElementById("QR__img")



qrButton.addEventListener("click",() =>{


    const  inputValue = QRinput.value


if (!inputValue) {
    alert("please enter your Url" )
    return
}else{
      QR__img.src = "" 
      QR__img.alt="url img"
}
})



