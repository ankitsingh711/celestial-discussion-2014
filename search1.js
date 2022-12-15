let search = document.querySelector(".search")

search.addEventListener("click", (e) => {
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

        let fetching = await fetch("https://63986336044fa481d69b935b.mockapi.io/movie/")
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