
// class Customer {
//     constructor(id,customerNumber){
//         //this anahtar kelimesi ile instance ı alınan nesne için tanımlama yapıyoruz.
//         this.id = id,
//         this.customerNumber = customerNumber;   
//     }
// }

// let customer = new Customer(1,"1234");

// //console.log(customer.id);
// //console.log(customer.customerNumber);

// class IndividualCustomer extends Customer{
//     constructor(firstName,id,customerNumber){
//         super(id,customerNumber)
//         this.firstName = firstName
//     }
// }


// class CorporateCustomer extends Customer{
//     constructor(companyName,id,customerNumber){
//         super(id,customerNumber)
//             this.companyName = companyName;
//     }
// }

// let person = new CorporateCustomer("İde Soft",58,"number2121");



// var dizi = [
//     {meyve: "elma",mevsim:"yaz"},
//     {meyve: "armut",mevsim:"yaz"},
//     {meyve: "mandalina", mevsim: "kış"},
//     {meyve: "portakal", mevsim: "kış"},
//     {meyve: "çilek", mevsim: "yaz"},
//     {meyve: "erik", mevsim: "yaz"},
//     {meyve: "üzüm", mevsim: "kış"}
// ]

//filter() ile yaz mevsimlerini filtreleyelim.

// var yazMeyveleri = dizi.filter(function(el){
//     if(el.mevsim == "yaz"){
//         return true;
//     }
// });

// yazMeyveleri.forEach(function(sezonluk){
//     document.write(sezonluk.meyve);
//     document.write("<br>");
// });


let products = [
    {id:1,name:"Acer Laptop",unitPrice : 15000},
    {id:2,name:"Asus Laptop",unitPrice:16000},
    {id:3,name:"Hp Laptop",unitPrice:14000},
    {id:4,name:"Dell Laptop",unitPrice:12000},
    {id:5,name:"Casper Laptop",unitPrice:17000}
]
document.write("<ul>")

products.map(products => document.write(`<li>${products.name}</li>`))

document.write("</ul>");

let filteredProducts = products.filter(products => products.unitPrice > 15000);

//console.log(filteredProducts);


let cartTotal = products.reduce((acc,p) => acc + p.unitPrice,0)
//console.log(cartTotal);



let carTotal2 = products
                .filter(p=>p.unitPrice > 13000)
                .map(p => {p.unitPrice*1.18 
                        return p})
                .reduce((acc,p) => acc + p.unitPrice,0);
//console.log(carTotal2)


let sayHello = () => {
    alert("Hello World");
}
//sayHello();


let addToCart = (product) => {
    console.log("ürün adı:"+product.productName+";ürün adedi:"+product.productQuantity+";ürün fiyatı:"+product.productPrice);
}
let product = {
    productName:"Elma",
    productQuantity:10,
    productPrice:15
}  
//addToCart(product);

let sumNumbers = (xxx,...numbers) => {
    let toplam = 0;
    for(let i = 0; i < numbers.length; i++){
        toplam = toplam + numbers[i];
    }
    console.log(toplam);
    console.log(xxx);
}
//sumNumbers(10,20)

function findPrime(...numbersTwo){
    for(j=0; j< numbersTwo.length;j++)
    {       
       let counter = 0;
       let number = numbersTwo[j];
       if(number == 1)
       {
        console.log(number + " sayısı asal değildir.")
        continue
       }
       for(i =2; i< number;i++)
       {
           if(number%i==0)
           {
           counter++;
           }
       }
        
       if(counter>0)
       {
           console.log(number + " sayısı asal değildir.")
       }
       else
       {
           console.log(number + " sayısı asaldır.")
       }
    }
}
//findPrime(10,13,15,1,17,31,100,2,5,26,85,17,23)


function friendsNumbers(numberOne,numberTwo)
{
    var totalOne = 0;
    var totalTwo = 0;
    for(let i=0; i<=numberOne/2;i++)
    {
        if(numberOne%i==0)
        {
            totalOne += i;
        }
    }

    for(let j=0;j<=numberTwo/2;j++)
    {
        if(numberTwo%j==0)
        {
            totalTwo += j;
        }
    }
    if(totalOne == numberTwo && totalTwo == numberOne)
    {
        console.log(numberOne + "," + numberTwo + " : arkadaş sayılardır.");
    }

    else{
        console.log(numberOne + "," + numberTwo + " : arkadaş sayı değildir.");
    }
}
//friendsNumbers(284,220);
//friendsNumbers(284,240); 


//Mükemme sayılar : Sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı. 
function perfectNumbersTop1000()
{
    let perfectNumbers = [];
    for(let i =1;i< 1000;i++)
    {
        let total = 0;
        for(let j = 0;j<= i/2;j++)
        {
            if(i%j == 0)
            {
                total +=j;
            }
        }
        if(total == i)
        {
            perfectNumbers.push(i);
        }
    }
        console.log(...perfectNumbers);
}
//perfectNumbersTop1000();


// 1000 e kadar ki tüm asal sayıları yazan program.
function primeNumbersTop1000()
{
    let primeNumbers = []
    for(let emre = 2; emre<1000;emre++)
    {
        let counter = 0;
        for(let adem = 2;adem <= emre/2; adem++)
        {
            if(emre%adem==0)
            {
                counter++;
            }
        }
        if(counter == 0)
        {
            primeNumbers.push(emre);
        }
    }
    console.log(...primeNumbers);
}
//primeNumbersTop1000();