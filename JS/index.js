// // var 1variable ='Ali' error
// // var var ='Ali'  error

// // console.log(`S{firstName} ${lastName}` )

// let a = 1
// console.log(a++) // prints the value 1 THEN  increments by 1
// console.log(a)
// console.log(++a)// increments THEN prints the value 

// let total =32+46 -13 
// console.log(total)
// let product =5*5
// console.log(product)

// console.log(3=='3') //true - checks for equal value 

// console.log(3==='3')// false - checks for equal value AND type (Strict Equality)

// let firstName = 'Ali'
// let lastName = 'Kahwaji'
// console.log(firstName +' '+ lastName)

// console.log(25%5)
// console.log(23%4)
// console.log('Welcome back')

//  a = 9
// let b = 32

// if (a > b) {
// console.log('a is greater than b')
// }else if (a === b ) {
// console.log('a is = to b')
// } else {
// console.log('a is less than b')
// }

// if ((a+b) > (a*b-248)) {
//     console.log('The condition is true')
// } else {
//     console.log('The condition is false')
// }

// if ((true) && (true)) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// if ((false) || (false)) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// let isDarkOutside = true 

// if(isDarkOutside) {
//     console.log('it is dark')
// } else {
//     console.log('it is daylight')
// }

// let color = 'black'
// switch (color) {
//     case 'yellow' :
//     console.log('Yellow')
//     break

//     case 'green' :
//     console.log('Green')
//     break

//     case 'red' :
//     console.log('Red')
//     break

//     default:
//     console.log('we can not find the color')

   

// }

//  console.log('While loop')
//     let count = 5
//     while(count <= 10){
//         console.log(`The value is ${count++}`)
        
//     }

//     console.log('Do while loop')
//     count = 5
//     do {
//         console.log(`The value is ${count}`)
//         count++
//     } while (count <= 10)

//     console.log ('For loop')
//     for (let x=0; x<= 10; x++) {
//         console.log(`The value is ${x}`)
//     }

///////////////////////////////////////////////////////////////////////

// sayHello()
// sayHelloWithParams('Ali')

// function sayHello() {
//     console.log('Hello from Earth')
// }

// function sayHelloWithParams(name) {
//     console.log('Well hello there ${name}')
// }

// function addThreeNumbers (a,b,c) {
//     return a+b+c
   
// }

// let result = addThreeNumbers(10,20,30)
//  console.log(result)

//  function sayHi(firstName, lastName) {
//      return `Well, Hello ${firstName} ${lastName}`
//  }
//     let greeting = sayHi('Ali' , 'Kahwaji')
//     console.log(greeting)

//     /////////////////////////////////////////////////

//     let sayGreeting = function (name) {
//         return `Hello there ${name}`
//     }

//     console.log(sayGreeting('Ali')) //Function expression can not be hosited

//     ///////////////////////// IIFE

//     let sayGreeting2 = (function(){
//         return 'Hi, how are you?'
//     }())

//     console.log(sayGreeting2)

//     let sayGreeting3 = (function(firstName,lastName) {
//         return `Well, hello there ${firstName} ${lastName}`
//     }('Ali', 'Kahwaji'))

//     console.log(sayGreeting3)

//     ////////////////////////////////////////////////////////////

//     let speakNames = firstName => `The full name is ${firstName}`
//     console.log(speakNames('Ali'))

//     /////////////////////////////////////////////////////// Objects

//     //Object literal

//     var car = {
//         //porperties
//         brand:'Dodge',
//         wheels: 4
//     }

//     // to access  we can use Bracket notation 
//     console.log(`I have a ${car['brand']}`)
//     //Dot notation
//     console.log(`I have a ${car.brand} with ${car.wheels} wheels`)
//     ////////////////////////////

//     var employee = {
//         firstName : 'Ali',
//         lastName : 'Kahwaji',
//         //method
//         fullName : function(){
//             return `${this.firstName} ${this.lastName}`
//         }
//     }

//     console.log(`Our IT Dir is ${employee.firstName}`)
//     console.log(`His full name is ${employee.fullName()}`)

//     ///////////////////////////////// Object Constructor function

//     function Car(brand,model,year) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//         this.getFullDescription =function (){
//             return `${this.year} ${this.brand} ${this.model}`
//         }
//     }

//     ///////////////////////// Create new instance with the new keyword 
//     let myCar = new Car ('Dodge','Ram 1500' , '2015')
//     let myWifeCar = new Car('BMW' , '320i' , '1999')

//     console.log(myCar.model, myCar.year,myCar.brand)
//     console.log(myWifeCar.getFullDescription())

//     // function createCar(brand,model,year) {
//     //     return {
//     //         brand: brand, 
//     //         model: model,
//     //         year: year,
//     //         getFullDescription: function() {
//     //             return `${year} ${brand} ${model}`
//     //         }
//     //     }
//     // }



//         //ES6 Enhanced Object Literal Syntax
//     function createCar(brand,model,year) {
//         return {
//             brand, 
//             model,
//             year,
//             getFullDescription() {
//                 return `${year} ${brand} ${model}`
//             }
//         }
//     }
//      let myCar1 = createCar ('Dodge','Ram 1500' , '2015')
//     let myWifeCar1 = createCar('BMW' , '320i' , '1999')

//     console.log(myCar1.getFullDescription())
//     console.log(myWifeCar1.getFullDescription())

    //////////////////////////////////////////////////

    //Array

    // let grades = [95,31,78,56,100]
    // console.log(`My first grade ${grades[0]}`)

    // let myStuff = ['football',32,false,'Hello']
    // console.log(myStuff.length)

    // //Array methods

    // let popedValue = myStuff.pop()
    // console.log(popedValue)
    // console.log(myStuff)

    // myStuff.push(popedValue)
    // console.log(myStuff)

    // console.log(grades)
    // grades.push(67,78,90)
    // console.log(grades)

    // let shiftedValue = myStuff.shift()
    // console.log(shiftedValue)
    // console.log(myStuff)

    // myStuff.unshift('football')
    // console.log(myStuff)

    // let array1 = [1,2,3,4]
    // let array2 = [5,6,7,8]

    // let concatArray = (array1).concat(array2)
    // console.log(concatArray)

    // let array3= [9,10,0]

    // let concatArray2 = (array3).concat(concatArray)
    // console.log(concatArray2)

    // let reverseArray = concatArray2.reverse()
    // console.log(reverseArray)

    // let countryArray = ['Iraq','NZ','UAE','Malaysia','USA','UK','Jordon']
    // let sortedCountryArray = countryArray.sort()

    // console.log(sortedCountryArray)

    // let numricArray = [434,454,6544,12,45,78,2]
    // let sortedNumircArray = numricArray.sort((a,b) => a-b)

    // console.log(sortedNumircArray)

    // let slicedCountry = sortedCountryArray.slice(2,5)
    // console.log(slicedCountry)

    // let slicedCountry1 = sortedCountryArray.slice(3)
    // console.log(slicedCountry1)

    ////////////////////////////

    //Array Helpers

    // let array = [1,2,3,4,5,6,7,8,9,]
    // for(var i =0;i< array.length;i++){
    //     console.log(array[i])
    // }

    // console.log('ForEach============')
    // array.forEach(function(arrayElement){
    //     console.log(arrayElement)
    // })

    // console.log('FOREACH ARROW=========')
    // array.forEach((value)=> console.log(value))

    // console.log('GRADES')
    // let grades = [34,56,78,12,36,79]
    // let sum =0

    // grades.forEach(grade=> sum += grade)

    // let avg = sum /grades.length
    // console.log(`Our avg is ${avg.toFixed(0)}`)

    // console.log('Map helper ==========')

    // let array = [1,2,3,4,5,6,7,8,9]
    // let addOne = []

    // for (let i=0; i<array.length;i++){
    //     addOne.push(array[i]+1)
    // }
    // console.log(addOne)

    // let addOneMap = array.map(value => value+1)

    // console.log(addOneMap)

    // let cars = [
    //     {id:1,make:'BMW', model:'320i', year:'1999', is4WD:false},
    //     {id:2,make:'Ford', model:'620i', year:'2009', is4WD:true}
    // ]

    // let truckDriver = {
    //     carId: 1,
    //     name: 'Ali'
    // }

    // let models = cars.map(car => car.model)
    // console.log(models)

    // ////////////////////////////////////////////////////////////

    // let filteredCars = cars.filter(car => car.make === 'BMW')
    // console.log(filteredCars)

    // /////////////////////////////////

    // let car = cars.find(car => car.make ==='Ford')
    // console.log(car)

    //////////////////////////////////

    // function driverForCar(cars,driver) {
    //     return cars.find(function(car){
    //         return car.id === driver.carId
    //     })
    // }

    // let driver =driverForCar(cars,truckDriver)
    // console.log(driver)

    // ///////////////////////////////////////////////////

    // let areAll4WD = cars.every(car => car.is4WD === true)
    // console.log(areAll4WD)

    //  let areSome4WD =cars.some(car => car.is4WD === true)
    // console.log(areSome4WD)
    // //////////////////////////////////////////

    // let grades = [1,2,3,4,5,6,7,8,9]
    // let sum = 0

    // for (let i=0; i<grades.length;i++){
    //     sum +=grades[i]
    // }

    // console.log(`sum= ${sum}`)
    // console.log(`Our AVG is ${(sum /grades.length).toFixed(1)}`)

    // let total = grades.reduce((sum,grade) => {
    //     return sum+grade
    // },0)

    // console.log(`total= ${total}`)
    // console.log(`Our AVG is ${(total /grades.length).toFixed(1)}`)

//////////////////////////////////////////////////////////////////////////////

// // 'this' and 'bind'

// let hotRod = {}

// hotRod = {
//     sound: 'High',
//     soundOff : function() {
//         console.log(this.sound)
//     }
// }

// hotRod.soundOff()

// let soundFunction =hotRod.soundOff //this loses its context
// soundFunction()

// let boundSoundFunction = soundFunction.bind(hotRod)
// boundSoundFunction()


// let person1 ={
//     name: 'Ali'
// }

// let person2={
//     name: 'Suhair'
// }

// function logName(){
//     return this.name
// }

// console.log(logName())
// console.log(logName.bind(person1)())
// console.log(logName.bind(person2)())

// let number = {
//     x: 37,
//     y: 31
// }

// let count = function() {
//     console.log(this.x+this.y)
// }
// count()
// let boundCount = count.bind(number)
// boundCount()

// ///////////////////////////////////////////////////

// let obj = {
//     num:2
// }

// let addToThis = function(a,b,c) {
//     return this.num + a+b+c
// }
// console.log(addToThis.call(obj,1,2,3))

// let person3 = {
//     firstName : 'Ali',
//     lastName: 'Kahwaji'
// }

// let person4 = {
//     firstName: 'Suhair',
//     lastName: 'Chalabi'
// }

// function hello(greeting) {
//     console.log(`${greeting} ${this.firstName} ${this.lastName}`)
// }

// hello.call(person3,'What\'s up ')
// hello.call(person4, 'Yo')

////////////////////////////////////////////////////////////////

//require and import



