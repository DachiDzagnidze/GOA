//! 1. veicle
function Vehicle(brandName, modelName, productionYear) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.productionYear = productionYear;
  }
  
  const vehicle1 = new Vehicle("BMW", "X5", 2021);
  const vehicle2 = new Vehicle("Audi", "A4", 2019);
  const vehicle3 = new Vehicle("Mercedes", "C-Class", 2023);
  
//! 2. creature
  function Creature(speciesName, lifespan, vocalization) {
    this.speciesName = speciesName;
    this.lifespan = lifespan;
    this.vocalization = vocalization;
  }
  
  const creature1 = new Creature("Elephant", 60, "Trumpet");
  const creature2 = new Creature("Tiger", 15, "Growl");
  const creature3 = new Creature("Horse", 25, "Neigh");
  
//! 3. pupil
  function Pupil(fullName, ageGroup, institution) {
    this.fullName = fullName;
    this.ageGroup = ageGroup;
    this.institution = institution;
  }
  
  const pupil1 = new Pupil("Emily", "Grade 8", "Hilltop Academy");
  const pupil2 = new Pupil("James", "Grade 9", "River Valley School");
  const pupil3 = new Pupil("Olivia", "Grade 10", "Greenwood High");
  
  console.log(vehicle1, vehicle2, vehicle3);
  console.log(creature1, creature2, creature3);
  console.log(pupil1, pupil2, pupil3);
