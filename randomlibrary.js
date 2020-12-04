//ranndom decimal
function randomDec(low,high){
    return Math.random() * (high-low) + low
}
//random rgb
function randomRGB(){
    return "rgb(" + randomInt(0,255) + ", " + randomInt(0,255)+ "," + randomInt(0,255) + ")"
}
//random Int (high is inclusive)
function randomInt(low,high){
    return Math.floor(randomDec(low,high + 1))
}