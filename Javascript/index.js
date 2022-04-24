
const nomor1 = document.getElementById("nomor1");
const nomor2 = document.getElementById("nomor2");
const nomor3 = document.getElementById("nomor3");
const nomor4 = document.getElementById("nomor4");
const nomor5 = document.getElementById("nomor5");

// --------------------------------------------NOMOR 1-----------------------------------------
const arrayNum = []
for (var i = 1; i<=100;i++){
    if( (i%3==0) && (i%5==0)){
        arrayNum.push('FizzBuzz')
    }else if(i%3==0){
        arrayNum.push('Fizz')
    }else if(i%5==0){
        arrayNum.push('Buzz')
    }else{
        arrayNum.push(i)
    }
}
nomor1.innerHTML=arrayNum
console.log(arrayNum);
// --------------------------------------------NOMOR 2-----------------------------------------

const btnConvert = document.getElementById("btnConvert")

btnConvert.addEventListener('click', () =>{
    convertHandler()
})
function convertHandler() {
    const currency = parseInt(document.getElementById("currency").value)
    nomor2.innerHTML= toWords(currency);

}
var ones = {
    0: 'zero',
    1: 'one ',
    2: 'two ',
    3: 'three ',
    4: 'four ', 
    5: 'five ',
    6: 'six ',
    7: 'seven ',
    8: 'eight ',
    9: 'nine '}
var tens = {
    10: 'ten ',
    11: 'eleven ',
    12: 'twelve ',
    13: 'thirteen ',
    14: 'fourteen ',
    15: 'fifteen ',
    16: 'sixteen ',
    17: 'seventeen ',
    18: 'eighteen ',
    19: 'nineteen '};
var prefixes = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty', 
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'};
var suffixes = {
    1 : '',
    2 : 'thousand ',
    3 : 'million ',
    4 : 'billion ',
    5 : 'trillion'
}

function toWords (num) {
    var absNum = Math.abs(num);

    try{
        if((num = num.toString()).length > 9){
            throw "Number is too big!"
        }
    }
    catch(err){
        alert(err);
        return "ERROR";
    }

    if(num.toString().includes('-') && absNum !=0){
        return 'Negative'
    }
    var hasil =''
    if(absNum in ones){
        return ones[absNum];
    }else if(absNum < 100){
        return convert2(absNum);
    }else{
        var arrayNum = splitNum(absNum);
        
        let count = arrayNum.length;

        for(var i = 0; i<arrayNum.length; i++){
            if(arrayNum[i][0] !== '000'){
                if(arrayNum[i][0].length == 3){
                    hasil += convert3digit(parseInt(arrayNum[i]));
                    hasil += ' ' + suffixes[count];
                }else{
                    hasil += convert2(parseInt(arrayNum[i]));
                    hasil += ' ' + suffixes[count]
                }
                count--;
            }else{
                count--;
            }
        }
    }
    return hasil;
}


function splitNum(num) {
    let arrayNum =[];
    var numString = num.toString();
    var count = 0;

    var arrayTemp =[];

    var singleDigit = numString.split('');

    var digits = singleDigit.length;
    for(var i = digits-1; i>=0; i--){
        arrayTemp[0] = singleDigit[i] + arrayTemp[0];
        count++;

        arrayTemp[0] = arrayTemp[0].replace('undefined', '')

        if(count % 3 == 0){
            arrayNum.unshift(arrayTemp);
            arrayTemp = [];
        }
    }

    if(arrayTemp.length != 0){
        arrayNum.unshift(arrayTemp);
    }
    return arrayNum; 
}

function convert3digit(num){
    var numText = '';
    if(num==0){
        return '';
    }else if(num < 100){
        numText += convert2(num);
        return numText;
    }else{
        numText += ones[num.toString().charAt(0)];
        numText += ' hundred ';
    
        if(num.toString().substr(1) !== "00"){
            numText += convert2(parseInt(num.toString().substr(1)));
        }
        return numText
    }
}

function convert2(num){
    var numText="";
    if(num<10){
        return ones[num]
    }else if(num in tens){
        return tens[num];
    }else{
        numText += prefixes[num.toString().charAt(0)];

        if(num.toString().charAt(1) !=='0'){
            numText += '-' + ones[num.toString().charAt(1)]
        }
        return numText;
    }
}

// --------------------------------------------NOMOR 3-----------------------------------------
const btnHitung = document.getElementById("btnHitung")

btnHitung.addEventListener('click', () =>{
    hitungHandler()
})
function hitungHandler(){
    const intA = parseFloat(document.getElementById("intA").value)
    const intB = parseFloat(document.getElementById("intB").value)
    if(document.getElementById("intA").value === '' || document.getElementById("intB").value === ''){
        alert("Input harus diisi!")
    }else{
        nomor3.innerHTML = "hasil: "+ multiply(intA,intB);
    }
}
function multiply(a, b){
    if(a==0 || b==0){
        return 0;
    }else if(a<0 && b<0){
        a = Math.abs(a)
        b = Math.abs(b)
        var n = a;
        for(var i = 1; i < b; i++)
        a += n; 
        return a;
    }else if(a<0 || b<0){
        if(b<0){
            var n = b;
            for(var i = 1; i < a; i++)
            b += n; 
            if(a<0 && b<0){
                return b;
            }else{
                return -Math.abs(b);
            }
        }else{
            var n = a;
            for(var i = 1; i < b; i++)
            a += n; 
            return -Math.abs(a);
        }
    }else{
        var n = a;
        for(var i = 1; i < b; i++)
        a += n; 
        return a;
    }
    
 } 


// --------------------------------------------NOMOR 4-----------------------------------------

const btnFibonacci = document.getElementById("btnFibonacci")

btnFibonacci.addEventListener('click', () =>{
    fibonacciHandler()
})
function fibonacciHandler(){
    const hasil = []
    const inputFibonacci = parseInt(document.getElementById("fibonacci").value)
    let x = 0, y = 1, next;
    for (let i = 1; i <= inputFibonacci; i++) {
        hasil.push(x)
        next = x + y;
        x = y;
        y = next;
    }
    nomor4.innerHTML = "hasil: "+ hasil;
}

var i = 5;
while(i>0){
    console.log(i);
    i--;
}