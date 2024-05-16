function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

//pegar a tag img 

//substituitr a imagem, se tiver light mode adicionar a imagem light
//se nao for light, manter a imagem

const img = document.querySelector("#profile img")

 if(html.classList.contains("light")) {
  img.setAttribute('src', './assets/avatar-light.png')
 } else {
  img.setAttribute("src", "./assets/avatar.png")
}

 if(html.classList.contains("light")){
  img.setAttribute("alt", "foto de mayk brito de oculos de sol" )
 } else{
  img.setAttribute("alt")
 }
}