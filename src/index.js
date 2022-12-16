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