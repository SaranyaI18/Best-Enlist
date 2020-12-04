function splitToDigit(n){
  return ((n + '').split('').map((i) => { return Number(i) * i;}).join(''));
}