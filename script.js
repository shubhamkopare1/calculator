const form=document.querySelector("form")
form.addEventListener("submit",function (e){
    e.preventDefault()
    const input1=parseInt(document.querySelector(".heidth").value)
    const input2= parseInt(document.querySelector(".width").value)
    const submit=document.querySelector(".answer")
    if (isNaN(input1) || isNaN(input2) || input1< 0 || input2<0) {
        alert("enter the positive value ")
    }
    else{
        const output=input1 + input2;
        submit.innerHTML=output
    }
})
