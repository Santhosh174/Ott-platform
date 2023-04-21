const btn=document.querySelector('.butn');
const thrill=document.querySelectorall('.seriespic1');
btn.addEventListener('click',function(e){
    if(e.target.tagName=="BUTTON"){
        const tp=document.querySelector(e.target.dataset.target);
        thrill.forEach(function(seriespic1){
            if(seriespic1==tp){
                seriespic1.classList.add('active');
            }
            else{
                seriespic1.classList.remove('active');
            }
        })
    }
})
