

let delbtn = document.getElementById("btn")
delbtn.addEventListener("click", fetchdata)
let mat = JSON.parse(localStorage.getItem("data"))||[]

async function fetchdata(){
    let imageurl = document.getElementById("img")
    let name = document.getElementById("name")
    let year = document.getElementById("year")
    let language = document.getElementById("language")
    let obj ={
        name:name.value,
        img:imageurl.value,
        year:year.value,
        language:language.value
    }
mat.push(obj)
if(obj.name=="" || obj.year=="" || obj.language=="" || obj.imageurl==""){
alert("All the input required")
}else{
    localStorage.setItem("data", JSON.stringify(mat))
   DisplayData(mat)
   alert("Movie added Successfully")
}
//  
}
// fetchdata()
// window.onload(){
    
// }
let data = JSON.parse(localStorage.getItem("data"))
function DisplayData(data){
  let main = document.getElementById("task")
  main.innerHTML=""
  let newdata = data.map((item)=>{
    return`
    <div class="movie">
        <div class="img"> <img src="${item.img}" alt=""></div>
               <div class="des">     
                     <h3 id="title">Movie name : ${item.name}</h3>
                     <h3 id="title"> Release Year : ${item.year}</h3>
                     <h3 id="title"> Language : ${item.language}</h3>
                     <button id="remove">DELETE</button>
                     <button id="add">ADD</button>
                     </div>
              </div>
              <hr>
              `
  })
  main.innerHTML= newdata.join(" ")

}
//   <h3 id="price">${item.language}</h3>
// DisplayData(data)



let search = document.querySelector(".search")

search.addEventListener("click", (e) => {
    document.querySelector("#mainfunc").innerHTML = `
       

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
        console.log("diksha");
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
            let btn1 = document.createElement("button")
            btn1.innerText = "EDIT"
           btn1.id="kkk"
           let btn = document.createElement("button")
           btn.innerText = "DELETE"
           btn.id="delete"
           btn.addEventListener("click",function(event){
           event.target.parentNode.remove();
           data.splice(data.el,1)
            alert("Data Deleted Successfully")

})
            div.append(image,btn1,btn)
            document.querySelector("#tasks").append(div)
        });
    }
}


 async function DeleteData(){
    try {
        let res = await fetchdata("https://63986336044fa481d69b935b.mockapi.io/film",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            }
        })
        console.log(res)
        alert("Data Deleted Successfully")
    } catch (error) {
        alert("err")
    }
 }