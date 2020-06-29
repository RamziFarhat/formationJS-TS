// // VITESSE 1: old fashion method
// function add (firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

//  VITESSE 2: the cool new way!  using the "BIG ARROW (grosse flèshe!)"
// We can also call it the 'Arraw function'
  // add = (firstNumber, secondNumber) => {

    add = (firstNumber, secondNumber) => {
        const result = firstNumber + secondNumber;
        return result;
    }
    add(2 ,  3);
    
    let s = add(6 , 5);
    console.log(s);
    
    
    // //  VITESSE 3:  Taking it to the Extreemly shortened version! 
    // add = (firstNumber, secondNumber) => { return firstNumber + secondNumber; }
    // console.log(add(120 ,  5));
    
    
    
    
    
    
    
    
    
    
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////
    //                                  LET'S  PRACTICE !!                                  ///
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    
    
    
    
    // var  tauAverage;
    // var colinAverage;
    
    // const calculateAverageRating = (ratings) => {
    
    //     // Complete your code in here <--
      
    //   }
      
    //   // ======================
      
    //   const tauRatings = [5, 4, 5, 5, 1, 2];
    //   const colinRatings = [5, 5, 5, 4, 5];
      
    //    tauAverage = calculateAverageRating(tauRatings);
    //    colinAverage = calculateAverageRating(colinRatings);
      
    // //   console.log(tauAverage);
    // //   console.log(colinAverage);
      
    //   if (tauAverage && colinAverage) {
    //     //console.log("Hi! I am HERE! ");
    //     document.getElementById('tau-score').innerText = tauAverage.toFixed(1) + ' stars';
    //     document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
    //     document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
    //   }
    
    
    // // // The solution
    // //   if(ratings.length === 0) {
    // //     return 0;
    // //   }
      
    // //   let sum = 0;
    // //   for (let rating of ratings) {
    // //     sum += rating;
    // //   }
      
    // //   return sum / ratings.length;