// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}
// console.log(returnRandBase());
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (numb, array) => {
  return {
    specimenNum: numb,
    dna: array,
    mutate() {
      let newArray = [];
      let returnRandBase = (threeParam) => {
      return threeParam[Math.floor(Math.random() * 3)] };
      for (let i = 0; i < array.length; i++) {
        if (array[i] == 'A') {
          newArray.push(returnRandBase(['T', 'C', 'G']))
        } else if (array[i] == 'G') {
           newArray.push(returnRandBase(['A', 'T', 'C']))
        } else if (array[i] == 'T') {
           newArray.push(returnRandBase(['A', 'C', 'G']))
        } else {
          newArray.push(returnRandBase(['A', 'T', 'G']))
        }
      }
      return console.log(newArray);
    },
    compareDNA(pAequor) {
      let summSameNumb = 0;
      console.log(array);
      console.log(pAequor);
      for (let i = 0; i < array.length; i++) { 
          if (array[i] === pAequor[i]) {
              summSameNumb += 1;
          } else {
            summSameNumb += 0;
          }}
          console.log(`Specimen #1 and specimen #2 have ${Math.floor((summSameNumb/15)*100)}% DNA in common`);
          // console.log(summSameNumb);
    },
    willLikelySurvive() {
      let summCG = 0;
      for (let i = 0; i < array.length; i++) { 
          if (array[i] === 'C' || array[i] === 'G') {
              summCG += 1;
          } else {
              summCG += 0;
          }}
      // console.log(summCG);
      let totalPercentCG = Math.floor((summCG/15)*100);
      // console.log(totalPercentCG);
      if (totalPercentCG >= 60) {
        return true;
      } else {
        return false;
      }      
    },
  }
};
let mutateArray = pAequorFactory(1, mockUpStrand());
// console.log(mutateArray);
//mutateArray.mutate();
// let someArray = [ 'C', 'A', 'C', 'C', 'A', 'C', 'G', 'C', 'G', 'A', 'A', 'T', 'C', 'A', 'A' ];
// Compare two DNA and as a result consoled percentage of same parameters
// mutateArray.compareDNA(someArray);
// Testing if the DNA contain at least 60% 'C'and'G' then return TRUE
mutateArray.willLikelySurvive();

let survivigList = () => {
  let surviveArray = [];
  let idCounter = 1;
  while (surviveArray.length < 30) {
    let surviveVersion = pAequorFactory(idCounter, mockUpStrand());
    if (surviveVersion.willLikelySurvive()) {
      surviveArray.push(surviveVersion);
    }
    idCounter++;
  }
  console.log(surviveArray);
}
survivigList();



