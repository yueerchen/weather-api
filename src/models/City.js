// Get name coord country population of city
class City {
    constructor(rawData) {
        this.name = rawData.name;
        this.coord = rawData.coord;
        this.country = rawData.country;
        this.population = rawData.population;
    }
}

module.exports = City;