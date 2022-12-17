let slide_img = document.querySelector(".slideImg img");
slide_img.src =
  "https://9to5mac.com/wp-content/uploads/sites/6/2022/11/apple-tv-how-to-watch-echo-3.jpg?quality=82&strip=all&w=1280";
let img_count = 0;
async function getData() {
  let res = await fetch("https://63986336044fa481d69b935b.mockapi.io/film");
  let data = await res.json();
  // cards(data);
  slide_show(data);
  if (img_count === data.length - 1) {
    img_count = 0;
  }
  slide_img.src = data[img_count].poster;
  img_count++;
}
setInterval(getData, 2000);

// Sliding divs starts here
let slide = document.querySelector(".slide-track");
let slide_show = (data) => {
  let arr = data.map((elem) => {
    return `
            <div class="slide">
                <img src=${elem.img2} alt=${elem.name}>
                </img>
                <div class="playbtn2">
                  <i class="fa-sharp fa-solid fa-circle-play"></i>
                </div>
            </div>
        `;
  });
  slide.innerHTML = arr.join("");
};

let main2 = document.querySelector(".main2 img");
let img_count2=0;
async function getData2() {
  let res = await fetch("https://63986336044fa481d69b935b.mockapi.io/film");
  let data = await res.json();
  if (img_count2 === data.length - 1) {
    img_count2 = 0;
  }
  main2.src = data[img_count2].poster;
  img_count2++;
}

setInterval(getData2, 2000);





//   async function fetchdata(){
//     try {
//         let res = await fetch("https://63986336044fa481d69b935b.mockapi.io/movie/",{
//             method:"GET",
//             headers: {
//               	"Content-Type":"application/json"
//               	}
            
//         })
//     let data = await res.json()
//     console.log(data)
//         //  DisplayData(data)
//         //  display(data)
//     } catch (error) {
//         alert("err")
//         console.log(err)
//     }
   
// }
// fetchdata()
let clickk= document.querySelector("#searchh");
clickk.addEventListener("input",()=>{
  document.querySelector("#contanr").innerHTML=""; 
  document.querySelector("#endd").innerHTML="";
})

let search = document.querySelector("#searchh")

search.addEventListener("click", (e) => {
  // document.querySelector("#contanr")="";
  
    document.querySelector("#mainfunc").innerHTML = `
        <h3 id="heading"> Explore Popular Series and Films </h3>

        <div id="tasks">
            <!-- Append here -->
        </div>
    `
   
    AppleTV();
    ClickImage()
   

})
var newData = []
async function AppleTV() {

    try {

        let fetching = await fetch("https://63986336044fa481d69b935b.mockapi.io/film")
        let data = await fetching.json()
        newData = [...data];
        disPlay(data);
    } catch (error) {
        console.log("error")
    }
}

function disPlay(data) {
  document.querySelector("#contanr").innerHTML=""; 
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


document.querySelector("#diksha").addEventListener("click", () => {
    dislpayBag()
})

function dislpayBag() {
    let selected = search.value;
    let dataDiksha = newData.filter((el) => {
        if (el.name.toLowerCase() == selected.toLowerCase()) {
            return el;
        }
    });
    disPlayData(dataDiksha);
}

function disPlayData(dataDiksha) {
    if (dataDiksha.length == 0) {
        alert("Movie Not Found !");
    } else {
        document.querySelector("#tasks").innerHTML = "";
        dataDiksha.forEach(el => {
            let div = document.createElement("div")
            div.id = "smallCards"

            let image = document.createElement("img")
            image.id = "imgPoster"
            image.setAttribute("src", el.poster)

            div.append(image)
            document.querySelector("#tasks").append(div)
        });
    }
}








