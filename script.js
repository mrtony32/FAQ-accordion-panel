
// accordion function for toggling the hide and show buttton 
function accordion(){
    // selecting the elements in htmt document
    const accordElement = document.getElementsByClassName('accordion-panel');
    const button = document.getElementsByClassName('plus-minus');

// looping the elements and adding event listener to make it interactive
    for(let i = 0; i < button.length; i++){
        button[i].onclick = function(){
        this.classList.toggle('active')
        const panel = accordElement[i];
        panel.classList.toggle('open');

// making the height of the content display and transite smoothly
        if(panel.style.maxHeight){
        panel.style.maxHeight = null;
        }else{panel.style.maxHeight = panel.scrollHeight + 'px'}
    }

    }
}
//calling the funtion above
accordion();

