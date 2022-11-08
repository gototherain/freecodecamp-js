const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

const sum = strokes - par;

  if (strokes == 1)   {

    return "Hole-in-one!";

  } else if (par == strokes) {

    return "Par";

  } else if (sum >= 3) {

    return "Go Home!";

  } else if (sum == 2) {

    return "Double Bogey";

  } else if (sum == 1) {

    return "Bogey";

  } else if (sum == -1) {

    return "Birdie";

  } else if (sum <= -2) {

    return "Eagle";

  }




  // Only change code above this line
}

golfScore(5, 4);