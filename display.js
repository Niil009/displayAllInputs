let btn = document.getElementById('btn')
let input = document.getElementById('input')
let last = document.getElementById('lst')
let res = []
btn.addEventListener('click',()=>{
    if(!input.value){
        alert('enter your data')
    }
    else{
        res.push(input.value)
        input.value = " "
        console.log(res);
        last.innerHTML = ""
        for(let i =0;i<res.length;i++){
            let res1 = document.createElement('div')
            res1.classList = "inner"
            // res1.style.backgroundColor = "red"
            res1.style.height = "30px"
            res1.style.width = "120px"
            res1.style.marginTop = '10px'
            res1.textContent = res[i]
            if(i%2 ==0){
                res1.style.backgroundColor = "green"
            }   
            else{
                res1.style.backgroundColor = "white"
            }
            last.append(res1)
        }
        

    }
    
})