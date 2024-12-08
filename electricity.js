function electricBil() {
    event.preventDefault();
    
    let charge = parseFloat(document.querySelector("#charge").value);
    let price = document.querySelector("#price");
    


    let rate =  charge <= 10 ? 2 
                : charge <= 30 ? 2.5 
                : charge <= 70 ? 3 
                : charge <= 100 ? 3.5 
                : 4;
    
    if(isNaN(charge)){
        price.innerHTML = 'กรอกตัวเลขด้วยครับ'
    }else{
        price.innerHTML = `จํานวนหน่วยที่ใช้ ${charge} จำนวนเงินคือ ${charge} * ${rate} = ${charge * rate}`;
    }
}
