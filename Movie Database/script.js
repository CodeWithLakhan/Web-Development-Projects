const url = "http://www.omdbapi.com/?t=joker"
const btn = document.querySelector("button")



btn.addEventListener("click" , async (evt) => {
    evt.preventDefault()
    let MovieTitle = document.querySelector(".details #title").value
    let MovieYear = document.querySelector(".details #year").value
    let MoviePlot = document.querySelector(".details #plot").value
    let BaseUrl = `http://www.omdbapi.com/?apikey=9ec5fa1c&t=${MovieTitle}`
    
    if (MovieYear === "") {
        
        if (MoviePlot === "Short") {
            var FinalUrl = BaseUrl
        }
        else{
            if (MoviePlot === "Short") {
                var FinalUrl = BaseUrl
            }
            else{
                var FinalUrl = `${BaseUrl}&plot=full`
            }
        }
    }
    else{
        if (MoviePlot === "Short") {
            var FinalUrl = `${BaseUrl}&y=${MovieYear}`

        }
        else{
            var FinalUrl = `${BaseUrl}&y=${MovieYear}&plot=full`
        }
    }

    let response = await fetch(FinalUrl)
    let data = await response.json()


    var ul = document.createElement("ul")
    ul.innerHTML=`<li> Source: IMDB &nbsp • Rating: ${data.imdbRating} &nbsp • IMDB Votes: ${data.imdbVotes}</li>`
    let ratings_loop = (arr) =>{
        for (const i in arr) {
            
            let source = arr[i].Source
            let rat = arr[i].Value
            let ratings = document.createElement("li")
            ratings.innerHTML = `Source: ${source} &nbsp • Rating: ${rat}`
            ul.append(ratings)
        }
    }
    ratings_loop(data.Ratings)

    
    if (data.Response === "True") {
        
        let movie = document.querySelector(".info")
        
        movie.innerHTML = `<img src="${data.Poster}" alt="Movie_Poster"><br>
        <div class="infoText">
          ${data.Title} <br> Cast: ${data.Actors} <br> Director: ${data.Director}<br> Writer: ${data.Writer} <br> Genre: ${data.Genre}<br> Plot: ${data.Plot} <br> Released Date: ${data.Released} <br> Runtime: ${data.Runtime} <br> ${ul.innerHTML} 
        </div>`
    }
    else{
        let movie = document.querySelector(".info")
        movie.innerHTML = `Enter Details Properly`
    }
    
})
