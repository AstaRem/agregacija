// Uzdavinius isspresti siais budais:

// 1. naudojantis for ar for…of ciklais;
// 2. naudojantis forEach masyvo metodu;

// A. Masyvas su skaičiais.
const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

console.log('A --------------------')
// 1. Surasti didžiausią skaičių;
const didz = Math.max(...A)
console.log (didz);

//kitas budas
let didziausias = A[0];  // darau prielaida, kad pirmas elementas didziausias
for (let i = 1; i <= A.length; i++){
    if (A[i] > didziausias){
        didziausias = A[i];  // jei elementas didesnis uz A[0], atnaujink A[0] reiksme. jei ne - nieko;
        console.log(didziausias);
    } 
}

console.log(didziausias);
// 2. Surasti mažiausią skaičių;
let maziausias = A[0];
for (let i = 1; i < A.length; i++){
    if(A[i] < maziausias) {
        maziausias = A[i] 
    }
}

console.log(maziausias)

//kitas budas
let maz = Math.min(...A); //writing with ...spread operator, because Math.min(1,2,3) expects separate arguments, not an array 
console.log(maz);


// 3. Surasti didžiausią neigiamą skaičių;  skaicius, kuris yra arciausiai nulio
// let didzNeig = A[0];
let didzNeig = -Infinity;


for (let i = 0; i < A.length; i++){
        if (A[i] < 0 && A[i] > didzNeig){
            didzNeig = A[i];
         }

}
console.log(didzNeig);


// 4. Surasti didžiausią skaičių, kuris yra mažesnis už 50;
let biggest50 = -Infinity;  // starting with the lowest posssible value

for (let i = 0; i < A.length; i++){
    if(A[i] < 50 && A[i] > biggest50){
        biggest50 = A[i];
    }
}

console.log(biggest50);

// 5. Suskaičiuoti teigiamų skaičių sumą;
let sumPositive = 0;
A.forEach((num) =>{
    if (num > 0){
        sumPositive += num;
    }
    return sumPositive;
} )

console.log(sumPositive);

// 6. Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;

const neigiami = [];
for( let i = 0; i < A.length; i++){
    if (A[i] < 0){
        neigiami.push(A[i]);
    }
}

console.log(neigiami);
const kvadratuEach = [];
neigiami.forEach(num => kvadratuEach.push(Math.pow(num, 2)));
console.log(kvadratuEach);

// arba

let kvadratu = [];
for (let i = 0; i < neigiami.length; i++){
//    kvadratu.push(Math.pow(neigiami[i], 2));
// arba
   kvadratu.push(neigiami[i] ** 2);
}

console.log(kvadratu);

// 7. Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75
const intervalas25_75 = [];
A.forEach((num) => {
    if(num >= 25 && num <= 75){
        intervalas25_75.push(num);
    }
})

console.log(intervalas25_75);
console.log(intervalas25_75.length);

// 8. Suskaičiuoti kiek skaičių yra 0-iai;
let count0 = 0;
A.forEach(num => {
    if (num === 0){
        count0++;
    }
})

console.log(count0);

// 9. Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;
// if num % 3 === 0
let beLiekanos3 = [];
A.map(num => {
    if (num % 3 === 0){

        beLiekanos3.push(num);
        console.log(beLiekanos3);

    }
})

console.log(beLiekanos3);

// 10. Suskaičiuoti neigiamų skaičių vidurkį;

console.log(neigiami);
let sumNeigiami = 0;
let vidurkis = 0;

for(let i = 0; i < neigiami.length; i++){
    sumNeigiami += neigiami[i];
    vidurkis = Math.floor(sumNeigiami / neigiami.length);
}


console.log(sumNeigiami);
console.log(neigiami.length);
console.log(vidurkis);


