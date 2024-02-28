const btn = document.querySelector("button")
const img = document.querySelector("img")
const fact = document.querySelector("p")

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault()
    
    let response = await fetch("https://api.thecatapi.com/v1/images/search?format=json")
    let data = await response.json()

    let fact_response = await fetch("https://catfact.ninja/fact")
    let fact_data = await fact_response.json()
    
    
    img.src = data[0].url;

    fact.innerHTML = `A Random fact about Cat: <br> ${fact_data.fact}`

})
