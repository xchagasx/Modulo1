const sum = (a, b) => a + b; 
 
const sum9 = (a, b) => a + b;

const sum0 = (a, b) => a + b;

const sumStringError = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

module.exports = sum;
module.exports = sum9;
module.exports = sum0;
module.exports = sumStringError;