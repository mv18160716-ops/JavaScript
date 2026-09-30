let day = +prompt('enter number');
    if (day >= 1 && day < 10){
        console.log('1 quoter');
    }
    else if (day >= 10 && day < 20){
        console.log('2 quoter');
    }
    else if (day >= 20 && day <= 31){
        console.log('3 quoter');
    }
    else{
        console.log('enter number from 1 to 31');
}