function myFunc() {
    var eatsPlants = true;
    var eatsAnimals = false;

    var category = (eatsPlants && !eatsAnimals) ? 'herbivore' :
        (!eatsPlants && eatsAnimals) ? 'carnivore' :
        (eatsPlants && eatsAnimals) ? 'omnivore' : 'undefined';

    console.log(category);
}