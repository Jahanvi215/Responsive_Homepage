window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 50)
})

// var menu =document.querySelector('.menu')
// var menuBtn =document.querySelector('#btn')
// var closeBtn =document.querySelector('#cancel')

// menuBtn.addEventListener("click", () =>{
//     menu.classList.add('active');
// });

// closeBtn.addEventListener("click", ()=>{
//     menu.classList.remove('active');
// })

var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter >3){
        counter =1;  
    }
}, 4000)