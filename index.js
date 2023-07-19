//  tag to input data
let nameTag=document.getElementById("name");
let cardTag=document.getElementById("cardN");
let DateTag=document.getElementById("textC");
let showcvv=document.getElementById("showcvv")
let FrontCard=document.getElementById("Inner")
let BackCard=document.getElementById("cvvCard")
let inputCard=document.getElementById("CardForm")

// input Tage

let CardNumber=document.getElementById("cardNumber");
let cardHolder=document.getElementById("CardHolder");
let expire=document.getElementById("month");
let cvc=document.getElementById("cvc");



// event Handler for ...

// input card

inputCard.addEventListener("click",()=>{
    FrontCard.style.opacity="1"
    
})


// card Number
CardNumber.addEventListener("input",()=>{
    FrontCard.style.display="block"
    BackCard.style.display="none"
    let val=CardNumber.value.split("").map(Number)
    if(CardNumber.value.length==''){
        return cardTag.innerText=`.... .... .... ....`;
    }
    if(val.includes(NaN)){
        alert("Please enter the number")
        CardNumber.value=""
        return cardTag.innerText=`.... .... .... ....`;
    }
    cardTag.innerText=CardNumber.value
    console.log(val)
})
CardNumber.addEventListener("focus",()=>{
    FrontCard.style.display="block"
    BackCard.style.display="none"
    
})

// Card Holder Name
cardHolder.addEventListener("input",()=>{
    FrontCard.style.display="block"
    BackCard.style.display="none"
    if(cardHolder.value.length==''){
        return nameTag.innerText=`Your Name Here`;
    }
    nameTag.innerText=cardHolder.value.slice(0,20).toUpperCase()
})
cardHolder.addEventListener("focus",()=>{
    FrontCard.style.display="block"
    BackCard.style.display="none"
    
})

// Expiration

expire.addEventListener("input",()=>{
    FrontCard.style.display="block"
    BackCard.style.display="none"
    let val=expire.value.split("-")
    if(expire.value.length==''){
        return DateTag.innerText=`../..`;
    }
    
    DateTag.innerText=val.reverse().join("/")
    DateTag.style.fontWeight="500"
})

expire.addEventListener("focus",()=>{
    FrontCard.style.display="block"
    BackCard.style.display="none"
    event.target.type="month"
    event.target.min="2023-07"
})
expire.addEventListener("blur",(e)=>{
    event.target.type="text"
})


// CVV
cvc.addEventListener("input",()=>{
    FrontCard.style.display="none"
    BackCard.style.display="block"
    if(cvc.value.length==''){
        return showcvv.innerText=`123`;
    }
    showcvv.innerText=cvc.value.slice(0,3)
})
cvc.addEventListener("focus",()=>{
    FrontCard.style.display="none"
    BackCard.style.display="block"
})




// Styles
if(DateTag.innerText=="../.."){
    DateTag.style.fontWeight="800"
    DateTag.style.letterSpacing="8px"
}
if(CardNumber.innerText==".... .... .... ...."){
    cardTag.style.fontWeight="900"
    cardTag.style.letterSpacing="18px"
}
