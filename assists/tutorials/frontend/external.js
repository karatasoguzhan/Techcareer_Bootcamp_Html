// yorum satırı
//alert("pop-up2");
//window.alert("pop-up3");
// document.writeln("sayfada göster<br/>");
// window.document.writeln("sayfada göster");

// console.log("console log");
// console.error("console log");
// console.warn("console log");
// console.info("console log");

//single thread bir dildir. yani aynı anda tek iş yapabilir.

// var degiskenAdi=44;
// console.log(degiskenAdi);  --->44
// console.log(typeof degiskenAdi);   //değişken tipi number

// var degiskenAdi55=44.23; 
// console.log(degiskenAdi55); --->44.23
// console.log(typeof degiskenAdi55); -->Number

// var $degiskenAdi="Merhabalar Dostlar";
// console.log($degiskenAdi);  --->Merhabalar Dostlar
// console.log(typeof $degiskenAdi); ---->String

// var _$degiskenAdi=true;
// console.log(_$degiskenAdi);  --->true
// console.log(typeof _$degiskenAdi); ---->boolean

// değişken tipleri var,let,const olarak bulunur.

// let number1=12;
// let number2=5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// =   ATAMA
// ==  EŞİT(Türüne bakmadan)
// === EŞİT(Türüne bakarak)

// let userName=Number(prompt("lütfen sayı giriniz")); // prompt kullanıcıdan sayı almak için kullanılır.numbera cat ettik.
// console.log(userName);  

// NaN: Not A Number

// console.log(3/4);
// console.log(3/"asd");

// Infinity

// console.log(0/5);
// console.log(5/0);

// undefined

// let data;
// console.log(data);

// Math

// console.log(Math.PI);  // pi sayısı
// console.log(Math.E);   // e sayısı
// console.log(Math.sqrt(25));   // karekökü
// console.log(Math.abs(-25));   // mutlak değer
// console.log(Math.pow(6,2));   // üstü sayı
// console.log(Math.floor(5.9));   // virgülden sonraki sayıyı siler
// console.log(Math.ceil(5.1));   // bir üst sayıya yuvarlar
// console.log(Math.round(3.4));   // 3e yuvarlar
// console.log(Math.round(3.5));   // 4e yuvarlar 
// console.log(Math.min(4,5,6,1000));   // min sayıyı verir 
// console.log(Math.max(4,10,100));   // max sayıyı verir
// console.log(Math.random());   // 0 ie 1 arası rastgele sayı üretir


//Örnek-1
//Kullanıcıdan aldığınız 2 sayıyı toplayan js kodu yazınız?

// let number1=Number(prompt("lütfen sayıyı giriniz"));
// let number2=Number(prompt("lütfen ikinci sayıyı giriniz"));

// console.log(number1+number2);

//Örnek-2
//kullanıcıdan aldığın js kodunu fahrenhyata çeviren js kodu
//Formül : (derece*9/5)+32

// let degree=Number(prompt("lütfen sıcaklık giriniz"));
// let fahrenhyata=(degree*9/5)+32;
// console.log(degree+" derece:" + fahrenhyata +" fahranhayttır");
// console.log('${degree} derece: ${fahrenhayt} fanranhayttır');  // farklı yazılışı


// örnek3
// y =3x+4k  x ve k kullanıcıdan alınacak

// let x=Number(prompt("bir x sayısı giriniz"));
// let k=Number(prompt("k sayısı giriniz"));
// let y=x*3 + k*4;
// console.log(y);

//Strin

// let vocabulary=" Javascript öğreniyorum javascript ";
// console.log(vocabulary.length);  //boyutu
// console.log(vocabulary.trim().length);  //trim cümlenin başında ve sonundaki boşluğu kaldırır.
// console.log(vocabulary.toLowerCase());  //Stringdeki harflerin küçültür.Native code alırsak parantezi koymamışızdır.
// console.log(vocabulary.toUpperCase());  //Stringdeki harflerin büyütür.
// console.log(vocabulary.startsWith("J"));   //ne ile başlıyor.
// console.log(vocabulary.endsWith(" "));   //ne ile bitiyor.

// console.log(vocabulary.charAt(0));  // verilen indeksi gösterir.
// console.log(vocabulary.indexOf("Javascript"));  //kelime var mı nerede başlar.
// console.log(vocabulary.lastIndexOf("Javascript"));  //kelime var mı sonda arar.
// console.log(vocabulary.substring(1));  //1. indisten itibaren al demek.
// console.log(vocabulary.substring(1,6));  //1.indisten başlar 6. indisi almaz.
// console.log(vocabulary.concat("sona ekle"));  //sonuna ekler.

// vocabulary=vocabulary.concat("sona ekle");  //bunu yapmazsak atama olmaz.

// vocabulary=vocabulary.replace(vocabulary,"yeni değiştir"); // yapıyı verilen ile değiştirir.

//Function

//1-parametresiz returnsuz
// function parametresizReturnsuz(){
//     console.log("parametresiz returnsuz");
// }
// parametresizReturnsuz();

// //2-parametreli returnsuz
// function parametreliReturnsuz(number){
//     console.log("parametreli returnsuz");
// }
// parametreliReturnsuz(6);

// //3-parametresiz returnlu

// function parametresizReturnlu(){
//     return "parametresiz returnlu";
// }

// const data3 = parametresizReturnlu();
// console.log(data3);

// //4-parametreli returnlu
// function parametreliReturnlu(user){
//     return "parametreli returnlu: " +user;
// }
// const data4=parametreliReturnlu("java öğreniyorum");
// console.log(data4);


// //Normal Function
// function normal(){
//     console.log("normal");
// }
// normal();

// //Anonymous function
// const anonymous = function(){
//     console.log("anonymous");
// }
// anonymous();

// //Arrow Function
// const arrow = () => {
//     console.log("arrow");
// }
// arrow();

// // conditional
// let conditional = () =>{
//     let number = 10;
//     if(number>=5){
//         console.log("5 ten büyük");
//     } else{
//         console.log("5 ten küçük");
//     }

//     let ternary = (number >= 5) ? "5ten büyük" : "5ten küçük";
//     console.log(ternary);
// }
// conditional();

// /////////////////////////////////////////////
// // conditional
// let conditional2 = () => {
//     let number = 3;
//     if (number == "1") {
//         console.log("sayı 1");
//     } else if (number === 2) {
//         console.log("sayı 2");
//     } else if (number === 3) {
//         console.log("sayı 3");
//     } else if (number === 4) {
//         console.log("sayı 4");
//     } else if (number === 5) {
//         console.log("sayı 5");
//     } else {
//         console.log("1<=X<=5 dışındadır");
//     }

//     switch (number) {
//         case 1:
//             console.log("sayı 1");
//             break;
//         case 2:
//             console.log("sayı 2");
//             break;
//         case 3:
//             console.log("sayı 3");
//             break;
//         case 4:
//             console.log("sayı 4");
//             break;
//         case 5:
//             console.log("sayı 5");
//             break;

//         default:
//             console.log("1<=X<=5 dışındadır");
//             break;
//     }
// }

// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// function number(){
//     let userNumber = Number(prompt("Bir sayı giriniz"));
//     if(userNumber>=0){
//         console.log("pozitif sayıdır");
//     } else {
//         console.log("negatif sayıdır")
//     }
// }
// number();

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız). 

// let oddEvenCalculator = function () {
//     let number = prompt('Bir Sayı Giriniz');
//     if (number % 2 == 0) {//çift sayı
//         console.log(number + " çift sayıdır");
//     } else {
//         console.log(number + " tek sayıdır");
//     }
// }
//oddEvenCalculator()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

let day=Number(prompt("bir sayı giriniz"));
switch(day){
    case 1:
    console.log("Pazartesi");
    break;
    case 2:
        console.log("Salı");
    break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("lütfen geçerli bir satı giriniz");
        break;   
}


let loop = () => {
    console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
    // i++
    // ++i
    // i+=1;
    // i=i+1;

    // FOR
    let sum1 = 0;
    for (let i = 1; i <= 10; i++) {
        sum1 = sum1 + i;
    }
    // for(;;){}
    console.log("Toplam: " + sum1);


    // WHILE
    let sum2 = 0;
    let k = 1;
    while (k <= 10) {
        sum2 += k;
        k++;
    }
    // while(true){}
    console.log("Toplam: " + sum2);

    // DO-WHILE
    let sum3 = 0;
    let m = 1;
    do {
        sum3 += m;
        m++;
    } while (m <= 10);
    // while(true){}
    console.log("Toplam: " + sum3);
}

// try-catch
let tryCatchFunction = () => {
    try {
        alertx("DEneme44");
    } catch (err) {
        //console.error(err);
        console.info(err.name);
        //console.log(err.message);
    } finally {
        console.log("db.close");
    }
    console.log("Son satır");

    throw "Hata var";
}
//tryCatchFunction()

/////////////////////////////////////////////////
// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// return  : metotun çalışmasını durdurur
// break   : döngünün çalışmasını durdurur
// continue: sadece 1 kereye mahsus durur sonra devam eder.

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program ?


let examplesCommon = () => {

    let commonSum = 0;
    let oddSum = 0, oddCounter = 0, oddNumber = "";
    let evenSum = 0, evenCounter = 0, evenNumber = "";
    let user = Number(prompt("Lütfen sayı giriniz"));

    for (let i = 1; i <= user; i++) {
        if (user == 44) {
            console.log("Secret Key Çıkış yapılıyor");
            break;
        }

        if (user > 50) {
            console.log("50 sayısının üstünü toplama yapma");
            break;
        }

        if (i == 7) {
            console.log("7 toplamaya dahil etmiyorum.");
            continue;
        }

        // ÇİFT
        if (i % 2 == 0) {
            evenCounter++;
            evenSum += i;
            evenNumber = evenNumber + " " + i
        } else {

        }
        commonSum += i;
    } //end loop
    console.log("Genel toplam: " + commonSum);

    console.log("Çift toplam: " + evenSum);
    console.log("Çift adet sayısı: " + evenCounter);
    console.log("Çift sayılar: " + evenNumber);
}
//examplesCommon()


// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

/////////////////////////////////////////////
// Dizi
let arrTuto = () => {
    let arr = [5, 3, 1, 2, 6, 7];
    arr[5] = 99;
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
    //console.log(arr.length);
}
//arrTuto();

let arrFunctionRandom = () => {
    let temp = 0;
    let dizi = [];
    for (let i = 0; i < 5; i++) {
        temp = Math.round(Math.random() * 9 + 1);
        dizi[i] = temp;
    }
    return dizi;
}

let arrNewFunction = () => {
    let arr = arrFunctionRandom();
    console.log(arr);

    // arr.push(44);
    // arr.unshift(23);
    // arr.pop();
    // arr.shift();
    // arr.sort().reverse();

    for (let i = 0; i < arr.length; i++) {
        document.writeln(arr[i] + " ")
    }

    document.writeln("<br/>")
    for (let temp in arr) {
        document.writeln(temp);
    }

    document.writeln("<br/>")
    for (let temp of arr) {
        document.writeln(temp);
    }
}
//arrNewFunction()


/////////////////////////////////////////////
// Object

let objTuto = () => {
    let obje = {
        "name": "Hamit",
        "surname": "Mızrak",
        "fullName": function () {
            console.log(this.name + " " + this.surname);
        },
        "java": {
            "name": "JavaSe",
            "version": 21
        },
        "javaee": [],
    };
    console.log(obje.name.toUpperCase());
    console.log(obje.java.version);
    console.log(obje["java"]["version"]); //nested Object
    console.log(obje.fullName());

    // Object Literal
    obje.isLogin = "true";
    console.log(obje.isLogin);

    // JSON.parse,stringfy
    const objectToString=JSON.stringify(obje);
    const javaData=JSON.parse(objectToString).java.name;
    console.log(javaData);
}
objTuto();

/////////////////////////////////////////////
// callback, promise, asyn-await