/***Q1 Find Grades */
const number = parseInt(prompt("Enter your Marks"))
let marks

switch(true){
    case number <= 10:
        marks = "E grade";
        break;
    case  11>=number && number<=20:
        marks = "D grade";
        break;
    case  21>=number && number<=30:
        marks = "C grade";
        break;
    case  31>=number && number<=40:
        marks = "B grade";
        break;
    case  41>=number && number<=50:
        marks = "A grade";
        break; 

    default:
        marks = "Invalid Marks";
}
console.log(marks);



/****Q2 Get Value */
const table = {
    //we have not used = , insted we used : means it is our key 
    p: 'Prebytes',
    z: 'Zenith',
    e: 'Expert coder',
    d: 'data structure'

}

//key = object in const

for ( let key in table ) {

    console.log(`${key} => ${table[key]}`);
}


/****Q3 Find the maximun out of 3 numbers */

let aa = 2;
let bb = 5;
let cc = 4;

if(aa>bb && aa>cc){
    console.log("A is greater")
}
else if(bb>aa && bb>cc){
    console.log("B is gretaer")
}else{
    console.log("C is greater")
}

/***Q4 Second smallest */
let x = 2;
let y = 9;
let z = 23;



/***Q5 Check wether the triangle is Acute of Obtuse */
