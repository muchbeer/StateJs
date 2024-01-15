import React from "react";
import animal, {useAnimals} from "../animal";
import cars from "../data";



function App() {
    //destructing an array
    //get the first element or index of the array
    const [cat, dog] = animal;
   // console.log(cat)
    
    //will retrieve the first element name and second index sound or index and the element must be same key 
  //  const {name, sound} = cat;
   //  console.log(name);

    //if the field name or sound is null or undefined print the default 
  //   const { name = "gdog",  sound = "beerTamu"} = cat;
   // console.log(name)

    //nested object 
    //const { name, sound, feeding } = cat; 
   // const {food, water} = feeding;
   const { name, sound, feeding : {food, water}} = cat;
    console.log (food)

    //using function inside the array of object
    console.log(useAnimals(cat));

    const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

    return <div>
     <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
  </div>
}

export default App;