/**
 * 최대공약수를 구하는 함수
 */
const getGCD = (a, b) => {
  if(a % b === 0) return b
  return getGCD(b, a % b);
}
/**
 * 최소공배수를 구하는 함수
 */
const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b)
}

const solution = (arr) => {
  
}