

const firstText = prompt("write your name");

const secondText = prompt("write your name")

if (firstText.length > 0  && secondText.length > 0 ) {
    alert("Обидва поля заповнені");
}
else {
    alert( "Не всі поля заповнені")
}

console.log(firstText)
console.log(secondText)





let firstNumber = prompt( "write your number down" )

let secondNumber = prompt( "write your number down ")

if (firstNumber + secondNumber > 10 ) {
    alert("Сума більша за 10")} else {
    alert("Сума менша або дорівнює 10")}




    let Text1 = prompt("enter a word : JavaScript")
    if ( Text1.includes("JavaScript")){
        alert( "Текст містить слово JavaScript" )
    }
    else{
        alert( "Текст не містить слово JavaScript" )
    }




    const number1 = prompt("enter 10 to 20")

    if( number1 >= 10 && number1 <=20 ){
     alert("Число входить в діапазон від 10 до 20")
    } else{
        alert("Число не входить в діапазон від 10 до 20")
    }





    let name = prompt("enter your name:")
    let email = prompt("enter your email:")
    let password = prompt("enter your password:")


    if ( name.length >= 3 , 
        email.includes("@") && email.includes(".") 
        && password.length >= 6  ){
alert("Перенаправлення на іншу сторінку") } 
else{
"Помилка: неправильне заповнення"}
