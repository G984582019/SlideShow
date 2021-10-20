let count=0;
let URL;
let thumbnailsElement = document.querySelector("div.thumbnails");
let mainElement=document.querySelector("div.main>img");
const src="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
const MIN=1,MAX=19;
let nowplaying=false;
let timer;

function play(){
  if(!nowplaying){
    nowplaying=true;
    autoPlay();
  }
}
function stop(){
  clearTimeout(timer);
  nowplaying=false;
}
function reset(){
  stop();
  thumbnailsElement.children[count-1].classList.remove("selected");
  thumbnailsElement.children[0].classList.add("selected");
  mainElement.setAttribute('src',src+"01.jpg");
  count=0;
}

function autoPlay(){
  right();
  timer=setTimeout(function(){
    autoPlay();
  },1000);
}

function right(){
  count++;
  if(count>MAX){
    count=MIN;
    thumbnailsElement.children[MAX-1].classList.remove("selected");
  }else if(count==1){
    thumbnailsElement.children[count-1].classList.remove("selected");
  }else{
  thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if(count<=9){
       URL = src+"0"+ count + ".jpg";
  } else {
       URL = src+ count + ".jpg";
  }
  mainElement.setAttribute('src',URL);
  // console.log(count);
  thumbnailsElement.children[count-1].classList.add("selected");
}

function left(){
  count--;
  if(count<MIN){
    count=MAX;
    thumbnailsElement.children[0].classList.remove("selected");
  }else{
  thumbnailsElement.children[count].classList.remove("selected");
  }
  if(count<=9){
     URL = src+"0"+ count + ".jpg";
  } else {
     URL = src+ count + ".jpg";
  }
   mainElement.setAttribute('src',URL);
   // console.log(count);
   thumbnailsElement.children[count-1].classList.add("selected");
}
