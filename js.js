var images = [];

images[0] = ['./img/ant.jpg'];
images[1] = ['./img/avatar.jpg'];
images[2] = ['./img/jw4.jpg'];
images[3] = ['./img/pathu.jpg'];
images[4] = ['./img/viduthala.jpg'];
var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 4) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 3000);
}

window.onload = change();