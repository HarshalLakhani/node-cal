function printEgyptianPyramid(height) {
    let pattern = '';
    let numSpaces = height - 1;
    let numStars = 1;
    
    for (let i = 0; i < height; i++) {
      let line = ' '.repeat(numSpaces) + '*'.repeat(numStars) + '\n';
      pattern += line;
      numSpaces--;
      numStars += 2;
    }
    
    console.log(pattern);
  }
  
  const pyramidHeight = 5;
  printEgyptianPyramid(pyramidHeight);










  function printReverseEgyptianPyramid(height) {
    let pattern = '';
    let numSpaces = 0;
    let numStars = (2 * height) - 1;
  
    for (let i = height; i >= 1; i--) {
      let line = ' '.repeat(numSpaces) + '*'.repeat(numStars) + '\n';
      pattern += line;
      numSpaces++;
      numStars -= 2;
    }
  
    console.log(pattern);
  }
  
  const pyramidHeight1 = 5;
  printReverseEgyptianPyramid(pyramidHeight1);