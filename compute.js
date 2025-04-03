//numerology calculation
//1990-10-15 
//sum and single number find, 1+9+9+0+1+0+1+15 (destiny number)
//single number by summing date only (15) 1+5=6(root number)
//year predictions


export function compute(dob){
    console.log('Compute Rec', dob); //string->convert to date
    const date=new Date(dob);
    const year = date.getFullYear();
    const month=date.getMonth()+1;
    const day=date.getDate();
    console.log('Year',year,'Month', month, 'Day', day);
    const singleDigit = convertItIntoSingleDigit(convertItIntoSingleDigit(year) + convertItIntoSingleDigit(month) + convertItIntoSingleDigit(day));
    return singleDigit;
}
function convertItIntoSingleDigit(num){
    while(num>9){
        let sum=0;
    while(num!=0){
        sum = sum + num % 10;
        num = parseInt(num/10);
    }
    num=sum;
}
    return num;
 }
