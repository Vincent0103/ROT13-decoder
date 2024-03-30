const target = 'cvpbPGS{arkg_gvzr_V\'yy_gel_2_ebhaqf_bs_ebg13_jdJBFOXJ}';


const applyROT13 = (target) => {
  const SHIFTING_NUMBER = 13;
  const MIN_LOWER_ALPHABET_CODE = 'a'.charCodeAt(0);
  const MAX_LOWER_ALPHABET_CODE = 'z'.charCodeAt(0);
  const MIN_UPPER_ALPHABET_CODE = 'A'.charCodeAt(0);
  const MAX_UPPER_ALPHABET_CODE = 'Z'.charCodeAt(0);
  const ALPHAEBET_LENGTH = 26;
  const [x, y, X, Y] = [MIN_LOWER_ALPHABET_CODE, MAX_LOWER_ALPHABET_CODE, MIN_UPPER_ALPHABET_CODE, MAX_UPPER_ALPHABET_CODE];
  let result = '';
  target.split('').forEach((_, index) => {
    let asciiCode = target.charCodeAt(index);
    const shiftedAsciiCode = asciiCode + SHIFTING_NUMBER;
    if (asciiCode >= x && asciiCode <= y) {
      if (shiftedAsciiCode <= y) asciiCode += SHIFTING_NUMBER;
      else asciiCode = shiftedAsciiCode - ALPHAEBET_LENGTH;
    }
    else if (asciiCode >= X && asciiCode <= Y) {
      if (shiftedAsciiCode <= Y) asciiCode += SHIFTING_NUMBER;
      else asciiCode = shiftedAsciiCode - ALPHAEBET_LENGTH;
    }
    result += String.fromCharCode(asciiCode);
  });
  return result;
};


console.log(applyROT13(target));
