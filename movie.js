let selectedTest = JSON.stringify(localStorage.getItem("selected_item")) ;
let movieImgDiv = document.getElementById("movie_img");
let poster_img = document.createElement("img");
poster_img.src = selectedTest.poster;
movieImgDiv.append(poster_img);