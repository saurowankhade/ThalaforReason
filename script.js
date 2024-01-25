let main = document.querySelector(".main");
let userInput = document.getElementById("userInput");
let btn = document.querySelector("#btn");
let video = document.createElement("video");
let heading = document.createElement('h1');
function thalaVideo(num) {
    heading.innerText = num === 1? "THALA FOR A REASON" : "";
    heading.classList.add("heading");
    let link =  num === 1 ? "media/thalavideo.mp4" : "media/moyevideo.mp4";
    video.src = link;
    video.load();
    video.play();
    video.loop = true; 
    video.classList.add("video-background");   
    main.after(video);
    main.append(heading);
}

btn.addEventListener("click",  () => {
    let userVal = userInput.value.trim();
    if(userVal === ''){
        console.log('it is empty');
    } else{
        let convert = Number(userVal.trim());
        if(isNaN(convert)){
            checkString(userVal);
        } else{
            checkNumber(convert);
        }
    }
});

function checkString (str) {
    console.log()
    if(str.length === 7){
        thalaVideo(1);
    } else{
        thalaVideo(0);
    }
}

function checkNumber (num) {
   let sum = 0;

while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
if(sum === 7){
    thalaVideo(1);
}
else{
    thalaVideo(0);    
}
    
}

