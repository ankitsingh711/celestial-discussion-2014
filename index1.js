// let form = document.querySelector("#form")
// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     let name = document.querySelector("#name").value
//     let email = document.querySelector("#email").value
//     let obj={
//         name:name,
//         email:email
//     }

//     fetchdata(obj)

// })
   

// async function fetchdata(obj){
//     try {
//         let res = await fetch("http://localhost:8080/user",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(obj)
//         })
//      console.log(res)
        
//     } catch (error) {
//         alert("err")
//         console.log(err)
//     }
// }


// const Login_btn = document.querySelector("#login");
// Login_btn.addEventListener("submit",LoginFunction);

// async function LoginFunction(event){
//     try {
//         event.preventDefault();
//         let all_login_input = document.querySelectorAll("#login");
//         let obj = {};
//         for(let i=0;i<all_login_input.length-1;i++){
//             obj[all_login_input[i].id] = all_login_input[i].value;
//         }
//         console.log(obj);
//         let login_request = await fetch("http://localhost:8080/user",{
//             method : "POST",
//             body : JSON.stringify(obj),
//             headers : {
//                 "Content-Type" : "application/json"
//             },
//         })
//         if(login_request.ok){
//             let token = await login_request.json();
//             sessionStorage.setItem("access_token", token.accessToken);
            
//             alert("User has been successfully Logged In.");
//             // window.location.href = "todo.html";
//         }else{
//             alert("User not found.");
//         }
//     } catch (error) {
// 		console.log(error);
//         alert("wrong username or password. Please try again later.");
//     }
// }







// let newls = document.querySelector("#login");
//      newls.addEventListener("submit" ,function(event){
//       event.preventDefault();
//      let mail = document.querySelector("#name").value
//      let pass = document.querySelector("#email").value
//        let flag=false;
//      for(let i=0; i<data.length; i++){
//       if(mail==data[i].email && pass==data[i].password){
//         flag=true;
       
//      }
//     }
     
//      if(flag==true){
      
//        alert("login  Successfull")
//       window.location.href="index.html";
//       // console.log(window.location.href="index.html")
      
//     }
//     else{
//       alert("Wrong Password or Email")
//       // window.location.href="Signup.html"
//     }
   
  

//      });

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ae291555a5mshd94e8eb4a0d6837p1ed7ffjsn9752fbdc5082',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// 'https://online-movie-database.p.rapidapi.com/auto-complete?_limit=20&_page=1', options)
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ae291555a5mshd94e8eb4a0d6837p1ed7ffjsn9752fbdc5082',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

  async function fetchdata(){
    try {
        let res = await fetch("https://63986336044fa481d69b935b.mockapi.io/movie/",{
            method:"GET",
            headers: {
              	"Content-Type":"application/json"
              	}
            
        })
    let data = await res.json()
    console.log(data)
        //  DisplayData(data)
        //  display(data)
    } catch (error) {
        alert("err")
        console.log(err)
    }
   
}
fetchdata()


// function DisplayData(data){
//   let main = document.getElementById("tasks")
//   main.innerHTML=""
//   let newdata = data.map((item)=>{
//     return`
//     <div class="movie">
//                      <img src="${item.poster}" alt="" id="img-src">
//                      <h2 id="title">${item.year}</h2>
//                      <h3 id="price">${item.language}</h3>
                    
                    
//               </div>
//               `
//   })
//   main.innerHTML= newdata.join(" ")
// Datashow(newdata)
// }


// let search = document.getElementById("search")
// search.addEventListener("click", display)

// function display(data){


// }
// setInterval(DisplayData,2000)
//  <p id="desc">${item.description}</p>//
// async function data(){
// let request = await fetch("https://6398c0f229930e2bb3c11afd.mockapi.io/mobiles");
//        let data = await request.json();
//        console.log(data)

//        products.innerHTML = "";
//        let show_data = data.map((element) => {
//               return `
//               <div class="products">
//                      <img src="${element.img_src}" alt="" id="img-src">
//                      <h2 id="title">${element.title}</h2>
//                      <h3 id="price">${element.price}</h3>
//                      <p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio neque cumque vero ullam dolor quo ad nulla repellat. Ad odit reprehenderit accusamus optio cupiditate in inventore nesciunt vel error.</p>
//                      <button class="remove">Remove</button>
//               </div>
//               `
//        });
//        products.innerHTML = show_data.join(" ");
 
//     }
// data()





