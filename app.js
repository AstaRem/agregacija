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


// B. Masyvas su stringais.
const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
    ];

// 1. Surasti ilgiausią stringą;
let ilgiausias = ''; //lyginu su tusciu string'u
for (let i = 0; i < B.length; i++){
    // console.log(B[i].length);
    if(B[i].length > ilgiausias.length){
        ilgiausias = B[i];
    }
}

console.log(ilgiausias);
console.log(ilgiausias.length);

// 2. Surasti trumpiausią stringą;
let trumpiausias = B[0]; // lyginu su pirmu elementu, darau prioelaida, kad jis trumpiausias
for (let i = 1; i < B.length; i++){
    console.log(B[i].length);
    if(B[i].length < trumpiausias.length){
        trumpiausias = B[i];
    }
}

console.log(trumpiausias);
console.log(trumpiausias.length);


// 3. Surasti stringą, kuris prasideda “a” raide;
let stringA = [];
for (let i = 0; i < B.length; i++){
    if (B[i].charAt(0) === "a" || B[i].charAt(0) === "A" ){
            stringA.push(B[i]);
    }
}

console.log(stringA);

// 4. Surasti stringą su daugiausia žodžių;
// .split(' ');
let daugiausiaZ = B[0].split(' ').length;
let daugiausiaZTekstas = B[0];
console.log(daugiausiaZ);
for (let i = 1; i < B.length; i++){
    let zodziuSkaicius = B[i].split(' ').length;
    // console.log(`zodziu skaicius: ${zodziuSkaicius}`);
    if( zodziuSkaicius > daugiausiaZ){
        daugiausiaZ = zodziuSkaicius;
        daugiausiaZTekstas = B[i];
    }
}

console.log(daugiausiaZ);
console.log(daugiausiaZTekstas);

// 5. Surasti stringą su mažiausiai žodžių;
let maziausiaiZ = B[0].split(' ').length;
let maziausiaiZTekstas = B[0];
for (let i = 1; i < B.length; i++){
    let zodziuSkaicius = B[i].split(' ').length;
    // console.log(`zodziu skaicius: ${zodziuSkaicius}`);
    if( zodziuSkaicius < maziausiaiZ){
        maziausiaiZ = zodziuSkaicius;
        maziausiaiZTekstas = B[i];
    }
}

console.log(maziausiaiZ);
console.log(maziausiaiZTekstas);



// 6. Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;
let skaiciuotiVirs4 = 0;
for(let i = 0; i < B.length; i++){
    let zodziuSkaicius = B[i].split(' ').length;
        // console.log(`zodziu skaicius: ${zodziuSkaicius}`);
    if (zodziuSkaicius > 4){
        skaiciuotiVirs4++;
    }
}

console.log(`virs 4 zodziu yra: ${skaiciuotiVirs4}`);

// 7. Suskaičiuoti kiek masyve yra žodžių;
let visoZ = 0;
for (let i = 0; i < B.length; i++){
    let zodziuSkaicius = B[i].split(' ').length;
    visoZ += zodziuSkaicius;

}

console.log(`viso zodziu masyve:${visoZ}`);

// 8. Suskaičiuoti visas ‘s’ raides;
let sRaidziu = 0;
for (let i = 0; i < B.length; i++){
    for (let j = 0; j < B[i].length; j++){
        if(B[i][j] === 's'){
            sRaidziu++;
        }
    }
}

console.log(`viso s raidziu masyve:${sRaidziu}`);


// 9. Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);
let visoR = 0;
for (let i = 0; i < B.length; i++){
    visoR += B[i].replace(/\s/g, '').length; //regular expression /description inside/ - \s-all whitespaces, g-globar(not just the first one), replace with ''-no space
}

console.log(visoR);

// 10. Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);
let ilgiausiasZ = ''


console.log(ilgiausiasZ);

for (let i = 0; i < B.length; i++){
    let zodziuMasyvas = B[i].split(' ');

    for(let j = 0; j < zodziuMasyvas.length; j++){
        if (zodziuMasyvas[j].length > ilgiausiasZ.length){
            ilgiausiasZ = zodziuMasyvas[j];
        }
    }
    
}

console.log(ilgiausiasZ);


// C. Mišrus masyvas.

const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];

// 1. Surasti didžiausią skaičių;
let numArray = [];
for (let i = 0; i < C.length; i++){
    if (typeof C[i] === 'number' ){
        numArray.push(C[i]);
    }
}

let biggest = numArray[0];
for (let i = 1; i < numArray.length; i++){
    if(numArray[i] > biggest){
        biggest = numArray[i]
    }
}

console.log(numArray);
console.log(biggest);

// 2. Surasti trumpiausią stringą;

let onlyStr = [];


C.forEach(item => {
    if(typeof item === "string"){
        onlyStr.push(item);
        }
    }
);
let shortestStr = onlyStr[0];
console.log(shortestStr);



for (let i = 1; i < onlyStr.length; i++){
    if(onlyStr[i].length < shortestStr.length ){
        shortestStr = onlyStr[i];
    }

}

console.log(onlyStr);
console.log(shortestStr.length);
console.log(shortestStr);

// 3. Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!);
let counting0 = []
for (let i = 0; i < numArray.length; i++){
    if (numArray[i] === 0){
        counting0.push(numArray[i]);
    }
}
console.log(counting0);
console.log(`the ammount of 0 numbers: ${counting0.length}`);

// 4. Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!);
let countAbove0 = 0 
for (let i = 0; i < numArray.length; i++){
    if (numArray[i] > 0){
        countAbove0 += numArray[i];
    }
}
console.log(countAbove0);

// 5. Suskaičiuoti bendrą visų stringų ilgį;
// 6. Suskaičiuoti vidutinį stringo ilgį;
// 7. Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius;
// 8. Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN);
// 9. Rasti ko yra daugiau- stringų ar skaičių;
// 10. Rasti ko yra daugiau- loginių true ar false;
