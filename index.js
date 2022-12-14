let search = document.querySelector(".search")
search.addEventListener("click", (e) => {
    document.querySelector("#mainfunc").innerHTML = `
        <h3 id="heading"> Explore Popular Series and Films </h3>

        <div id="tasks">
            <!-- Append here -->
        </div>
    `
    AppleTV();
  /* ClickImage();
    searchingPart()*/

})

let bag=[];

async function AppleTV() {

    try {

        let fetching = await fetch("https://63986336044fa481d69b935b.mockapi.io/movie/")
        let data = await fetching.json()

        disPlay(data)
       /* console.log(data)
        bag=[...data]
        bag_testing(bag); 
        console.log(bag);*/
    } catch (error) {
        console.log("error")
    }
}


function disPlay(data) {
    data.forEach(el => {

        let div = document.createElement("div")
        div.id = "smallCards"

        let image = document.createElement("img")
        image.id = "imgPoster"
        image.setAttribute("src", el.poster)

        div.append(image)
        document.querySelector("#tasks").append(div)

    });

}


function ClickImage() {
    let button_img = document.querySelector("#tasks");

    button_img.addEventListener("click", () => {
        console.log("Hi diksha");
    })
}

function searchingPart() {
    search.addEventListener("change", () => {
        // console.log("changing");
        bag_testing();
           
    })

}
function bag_testing(bag){
    let q = document.querySelector(".search").value;
    let newData = bag.filter(function(elem){
        // console.log(bag[0]);

         return elem.name.toLowerCase().includes(q.toLowerCase());
    });
    disPlay(newData);
}

// function search(){
//     let q = document.querySelector("input").value;

//     let newData = bag.filter(function(elem){
//          return elem.title.toLowerCase().includes(q.toLowerCase());
//     });
//     displayCard(newData);
//  }
