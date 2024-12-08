// 1. เขียนโปรแกรมรับข้อมูลตัวเลข N มา แล้วแสดงวาเป็นจํานวนบวก หรือ ลบ 
// ตัวอย่าง: 100 เป็นจํานวนบวก -50 เป็นจํานวนลบ 0 เป็นเลขศูนย์ 

function displayNumber(){
    event.preventDefault();
    let number = parseFloat(document.querySelector("#number").value);
    let result = document.querySelector("#result");


    let message = isNaN(number) ? 'กรอกตัวเลขด้วยครับ':number > 0 ? `${number} เป็นจำนวนบวก`: number < 0 ? `${number} เป็นจำนวนลบ` : `${number} เป็นศูนย์`;
    result.innerHTML = message;

}