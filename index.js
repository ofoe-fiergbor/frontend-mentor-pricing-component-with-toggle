let basic = document.getElementById('basic');
let pro = document.getElementById('pro');
let master = document.getElementById('master')

let toggleTime = document.getElementById('toggleTime')
let state = true;

toggleTime.addEventListener('click', ()=>{
    state = !state;
    if(state){
        basic.innerHTML = '<span>&dollar;</span>199.99';
        pro.innerHTML = '<span>&dollar;</span>249.99';
        master.innerHTML = '<span>&dollar;</span>399.99';
        
        
    }else{
        basic.innerHTML = '<span>&dollar;</span>19.99';
        pro.innerHTML = '<span>&dollar;</span>24.99';
        master.innerHTML = '<span>&dollar;</span>39.99';

    }
})
