const next = document.querySelector("#next");
const back = document.querySelector("#back");

const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg" ];

let i=0; 

next.addEventListener("click", () => {
  i++; 
  if(i>images.length-1) {
    i=0;
  }
  document.querySelector("#picture").src = images[i];
})

back.addEventListener("click", () => {
    i--; 
    if(i<0) {
     i = images.length-1;
    }
    document.querySelector("#picture").src = images[i];
})

