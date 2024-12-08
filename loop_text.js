function loopText(){
    event.preventDefault();

    let text = document.querySelector('#text').value
    let round = parseFloat(document.querySelector('#round').value)
    let result = document.querySelector('#result')

    let allText = "";
    
    while(round > 0){
        allText += ` ${text.repeat(round)} <br>`;
        round--;
    }
    if(typeof text !== 'string' || isNaN(round)){
        result.innerHTML = `กรอกข้อมูลไม่ถูกต้องครับ`
    }else{
        result.innerHTML = allText
    }
}