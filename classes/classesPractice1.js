// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object
class AmericanNinjaWarrior{
    constructor(name, bestTime, farthestDifficultly){
        this.Name = name;
        this.BestTime = bestTime;
        this.FarthestDifficultly = farthestDifficultly;
    }

    updateTime (time){
        this.BestTime = time;
    }

    updateFarthestDifficultly (para){
        this.FarthestDifficultly = para;
    }

    getBackInfo (){
        return this.BestTime, this.FarthestDifficultly;
    }
}