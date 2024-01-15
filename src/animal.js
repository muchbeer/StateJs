const animal = [
    {name : "cat", sound: "meow", feeding : {food: 2 , water: 3}},
    {name : "dog", sound: "woof", feeding : { food: 4, water: 4}}
]

function useAnimals (animal) {
    return [
        animal.name, 
        function() {
            console.log(animal.sound)
        }
    ];
}

export default animal;
export {useAnimals}