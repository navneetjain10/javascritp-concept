//Arrow function introduction in ES6
function first()
{
    console.log("welcome first")
}

first()

const hello = ()=>console.log("hello")
hello()

let sum = data=>{
    let sum = data +10
    return sum
}

console.log(sum(8))

const sum2 = (data1,data2) => data1 + data2 +10
console.log(sum2(4,2))

//problem solved by arow function //nesting function 

let obj = {
    firstName:"navneet",
    getName:function(){
        console.log(this.firstName)
        function fullName(){
            console.log(this.firstName)  //this will print the undefined
            console.log("My Full Name is " + this.firstName + " Jain")
        }
        fullName()
    }
}

obj.getName() //


let objSec = {
    firstName:"navneet",
    getName:function(){
        console.log(this.firstName)
        const fullName = ()=>{
            console.log(this.firstName)  //this will print the correct value
            console.log("My Full Name is " + this.firstName + " Jain")
        }
        fullName()
    }
}

objSec.getName()



// fetch('https://github.com/navneetjain10/azure-api').then(function(result){
// return result.json()
// }).then(function(response){
// console.log(response)
// })

//Promises

//has three stage
//pending, fulfilled, rejected
// function checkIsSuccess(data){
//     return new Promise(function(resolve, rejected){
//         if(data === "success")
//         {
//             return resolve("success")
//         }else{
// return rejected("error")
//         }
//     })
// }

// checkIsSuccess("hello").then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.error(error)
// })






// //array destructruring 
// let arr = ["Google","Twitter"]
// let [company1, company2] = arr

// console.log(company1)
// console.log(company2)

// let options = {
//     title:"salesforce learner",
//     age:28,
//     type:"operator"
// }

// let {title,age,type} = options
// console.log(age)











// var arr1 = ["nikhil","navneet","akshay","Bhavika"]
// var arr2=["javascript","language","hello"]

// var arr3 = [...arr1,...arr2]

// console.log(arr3)
// console.log("hello",...arr1)
// console.log(...arr2)

// var greeting ="hello learner of salesforce"
// console.log(...greeting)

// let charList = [...greeting]
// console.log(charList)

// var obj1 = {
//     "name":"navneet",
//     "age":27,
//     "city":"Hounslow"
// }

// var obj2 = {
//     "name":"navneet jain",
//     "education":"MCA",
//     "state":"London"
// }

// let obj3= {...obj1,...obj2}

// console.log(obj3)

// // Shallow copy

// var arr4 = ["x","y","z"]
// arr4.push(80)
// console.log(arr4)

// var arr5 = arr4
// arr5.push("navneet")
// console.log(arr5)
// console.log(arr4) // this is the issue here

// var arr6 = [...arr4] //here resolve the issue of refrence 
// arr6.push("hello man")
// console.log(arr6)
// console.log(arr4) // 

// // while the spread operator does not work with multi level/complex datatype as define below
// let arrObj = [
//     {name:"navneet"},
//     {name:"surbhi"}
// ]

// //var arrObj1 = [...arrObj]
// //console.log(arrObj1)
// //arrObj1[0].name = "superman"
// //console.log(arrObj1)
// //console.log(arrObj) //spread operator failed here

// //Hack for nested copy
// var arrObj3 = JSON.parse(JSON.stringify(arrObj))
// arrObj3[0].name = "superman"
// console.log(arrObj3)
// console.log(arrObj) 