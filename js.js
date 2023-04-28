var images = [];

images[0] = ['./img/ant.jpg'];
images[1] = ['./img/avatar.jfif'];
images[2] = ['./img/jw4.jpg'];
images[3] = ['./img/Dr_Strang.jfif'];
images[4] = ['./img/shazam.jfif'];
var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 4) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 2000);
}

window.onload = change();

var images1 = [];

images1[0] = ['./img/wednesday.webp'];
images1[1] = ['./img/alice.jfif'];
images1[2] = ['./img/loki.jfif'];
images1[3] = ['./img/SHERLOCK.jfif'];
images1[4] = ['./img/aoud.png'];
var index1 = 0;

function change1() {
  document.getElementById("mainPhoto1").src = images1[index1];
  if (index1 == 4) {
    index1 = 0;
  } else {
    index1++;
  }

  setTimeout(change1, 2000);
}
window.onload = change1();

var view=document.getElementById("a-pic");
var button=document.getElementById("button");
var text=document.getElementById("sm");
button.onclick=function(){
    if(view.className=="open"){
        view.className="close";
        text.innerHTML="Show More";
    }
    else{
        view.className="open";
        text.innerHTML="Show Less";
    }
};

const tabs=document.querySelector('.tabs');
const panels =document.querySelectorAll(".panel");
tabs.addEventListener("click",function(e){
    if(e.target.tagName=="BUTTON"){
      const targetPanel=document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel){
        if(panel==targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      })
    }
});

var bt1=document.getElementById('btn1');
var bt2=document.getElementById('btn2');
var bt3=document.getElementById('btn3');
tabs.addEventListener("click",function(e){
  if(e.target==bt1){
    bt1.classList.add('active');
    bt2.classList.remove('active');
    bt3.classList.remove('active');
  
  }
  else if(e.target==bt2){
    bt2.classList.add('active');
    bt1.classList.remove('active');
    bt3.classList.remove('active');
  }else{
    bt3.classList.add('active');
    bt1.classList.remove('active');
    bt2.classList.remove('active');
  }
});