
const car1 = {
    make: 'bentley',
    model: 'flyingSpur', 
    year: '2022', 
    color: 'black', 
}
const car2 = {
    make: 'BMW',
    model: 'M6', 
    year: '2023', 
    color: 'Silver', 
}

function carObject(car) {
    return car.make + car.model
}

console.log (carObject(car1))

const answer = carObject(car2)

console.log ('answer', answer); 



function carMakeAndModel (){

    console.log('make', car1 , 'model')

    console.log('make', car2 , 'model')

}

[carMakeAndModel(car1)
   
]
[ carMakeAndModel(car2)

]