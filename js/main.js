function scrollHeader(){

    window.onscroll = function scroll(){
        
        
        if(document.body.scrollTop > 200 || document. documentElement.scrollTop > 200 ){
           
           var header = document.querySelector('#header')
           header.setAttribute('class', 'scrollbar');
            
        }
        else {
            document.querySelector('#header').removeAttribute('class','scrollbar')
        }
    }
}
scrollHeader()

// click show navigation

document.querySelector('.bar a').onclick = function() {
    
    var barClick = document.querySelector('.bar').classList.toggle('barClick');
    
    if(barClick){
        document.querySelector('.carousel .container').style.paddingLeft = "300px"
        document.body.style.overflow = 'hidden';
    }
    else{
        document.body.style.overflow = 'visible';
        document.querySelector('.carousel .container').style.paddingLeft = "0"
    }
}

