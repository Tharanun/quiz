function evenOdd() {
    event.preventDefault();
    let number = parseFloat(document.getElementById("number").value);
    let result = document.querySelector("#result")
    let resultText = "";

    if (isNaN(number)) {
        result.innerHTML = "กรุณากรอกเลขด้วยครับ";
    }else{
        for (let i = 1; i <= number; i++) {
            if (i % 2 === 0) {
                resultText += `${i} คู่<br>`;
            } else {
                resultText += `${i} คี่<br>`;
            }
            result.innerHTML = resultText
        }
    }
}


// let number = 100;
// let arrayNumber = [];
// let result;
// while(number > 0){
//     arrayNumber.push(number);
//     number --;
// }
// console.log(arrayNumber);

// while(arrayNumber.length > 0){
//     result = arrayNumber.pop();
//     if (result % 2 == 0){
//         console.log(`${result} คู่`);
//     }else{
//         console.log(`${result} คี่`);
        
//     }
// }