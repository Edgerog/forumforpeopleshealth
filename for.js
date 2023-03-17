const counters=document.querySelectorAll(".counter");

const speed = 10;

counters.forEach(counter => {
    counter.innerText ='0';

    
    const updatecounter =() => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;


        const increment=target/100;
         
        if(c<target){
            counter.innerText = '${math.ceil(c + increment)}';
            setTimeout(updatecounter,1);
        }else{
        counter.innerText = target;
        }
        
    };
    updatecounter();
});