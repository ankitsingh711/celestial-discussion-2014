let slide_img = document.querySelector(".slideImg img");
slide_img.src = "https://9to5mac.com/wp-content/uploads/sites/6/2022/11/apple-tv-how-to-watch-echo-3.jpg?quality=82&strip=all&w=1280";
let img_count=0;
async function getData(){
    let res = await fetch("https://63986336044fa481d69b935b.mockapi.io/movie");
    let data = await res.json();
    console.log(data);
    if(img_count===data.length-1)
    {
        img_count = 0;
    }
    slide_img.src = data[img_count].poster;
    img_count++;
}
setInterval(getData, 2000);