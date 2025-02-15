// calculate the area of the given triangle
let s1 = 5;
let s2 = 6;
let s3 = 7;
// s is the semi perimter
let s = (s1 +s2+s3)/2;    
let areaTriangle = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
console.log(areaTriangle);
