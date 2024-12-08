function change (){
    event.preventDefault();
    let coin = parseFloat(document.querySelector("#coin").value);
    let message = document.querySelector("#message");

    let allMessage = "";
    let rate = [10,5,2,1] ;
    let result = 0;
    let total = [];
    

    while (coin >= rate[0]){
        if (coin >= rate[0]){
            coin -= rate[0]
            total.push(1)
        }
    }
    result = total.length
    allMessage += `เหรียญ 10 บาททั้งหมด ${result} เหรียญ <br>`;
    result = 0;
    total = [];

    while (coin >= rate[1]){
        if (coin >= rate[1]){
            coin -= rate[1]
            total.push(1)
        }
    }
    result = total.length
    allMessage += `เหรียญ 5 บาททั้งหมด ${result} เหรียญ <br>`;
    result = 0;
    total = [];

    while (coin >= rate[2]){
        if (coin >= rate[2]){
            coin -= rate[2]
            total.push(1)
        }
    }
    result = total.length
    allMessage += `เหรียญ 2 บาททั้งหมด ${result} เหรียญ <br>`;
    result = 0;
    total = [];

    while (coin >= rate[3]){
        if (coin >= rate[3]){
            coin -= rate[3]
            total.push(1)
        }
    }
    result = total.length
    allMessage += `เหรียญ 1 บาททั้งหมด ${result} เหรียญ <br>`;
    result = 0;
    total = [];
    if (isNaN(coin)) {
        message.innerHTML = "กรุณากรอกจำนวนเต็มเท่านั้นนะครับ";
    }else{
       message.innerHTML = allMessage
    }
}




