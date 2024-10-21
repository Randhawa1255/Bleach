const mode = document.getElementById("theme")

const currenttheme = localStorage.getItem("theme")
if (currenttheme){
    document.body.classList.add(currenttheme)
}
else{
document.body.classList.add("darkmode")
}
mode.addEventListener("click", ()=>{
    if(document.body.classList.contains("darkmode")){
        document.body.classList.remove("darkmode")
        document.body.classList.add("lightmode")
        localStorage.setItem("theme","lightmode")
    }
    else{
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");localStorage.setItem("theme","darkmode")
    }
})