var icons=document.querySelectorAll("#icons")

for (let i=0;i<icons.length;i++) {


    icons[i].onmouseover = function () {
        icons[i].style.background = "rgb(38,38,38)"

    }

    icons[i].onmouseout=function () {
        icons[i].style.background="#000"

    }

}

// var stop2=document.querySelector(".xxx")
//
// console.log(stop2.offsetTop);