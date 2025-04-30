// select image element
const img = document.getElementById('images')
//listen for the click event
let toggle = true;
img.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle){
        img.src = 'images/me at rushmore.jpg';
    }else{
        img.src = 'images/me and dez.jpg';
    }
    //img.src = 'images/me and dez.jpeg';
})