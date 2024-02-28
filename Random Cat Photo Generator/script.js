const btn = document.querySelector("button")
const img = document.querySelector("img")

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault()
    
    let response = await fetch("https://api.thecatapi.com/v1/images/search?format=json")
    let data = await response.json()

    img.src = data[0].url;

})
