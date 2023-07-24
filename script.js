const container=document.querySelector(".container");
const btns=document.querySelectorAll(".btns");
const imglist=["1","2","3","4","5","6","7"];

let index=0;
btns.forEach((button=>{
    button.addEventListener("click",()=>{
       if (button.classList.contains("btn-left")) {
        index--;
        if (index<0) {
            index=imglist.length-1;
        }
        container.style.background=`url("IMG/${imglist[index]}.jpg")center/cover  no-repeat`
       }
       else{
        index++;
        if (index==imglist.length) {
            index=0;
        }
        container.style.background=`url("IMG/${imglist[index]}.jpg")center/cover no-repeat`

       }
    })
}))