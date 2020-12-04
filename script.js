//Snowfall Program
//global variables
let cnv = document.getElementById("mycanvas")
let ctx = cnv.getContext("2d");
cnv.width =  1800
cnv.height = 900
let snow = []
//add snow to array
for (let n = 0; n < 200; n ++){
    snow.push(createSnowflake())
}

//generate inital snow at any coordinate, random radius, random speed
function createSnowflake(){
    return {
        x: randomDec(20,1760),
        r: randomDec(2,5),
        y: randomDec(20,860),
        color : "white",
        speed: randomDec(1,2.5)
    }
}

//animation
requestAnimationFrame(draw)
function draw () {
    //clear previous frames
    ctx.fillStyle = "black"
    rect(0,0,cnv.width,cnv.height, "fill")
    for (let i = 0 ; i < snow.length; i ++) {
        //draw and move all snowflakes
        moveSnowflake(snow[i])
        drawSnowflake(snow[i])
    }
    requestAnimationFrame(draw);
}

//draw snow at defined values
function drawSnowflake(aSnowflake){
    ctx.fillStyle = aSnowflake.color
    circle(aSnowflake.x , aSnowflake.y , aSnowflake.r, "fill")
}
//move snow down based on Snowflake.speed, when Snowflake is completely below the bottom of canvas, move to top at random x
function moveSnowflake(aSnowflake) {
    aSnowflake.y += aSnowflake.speed
    if(aSnowflake.y > cnv.height + aSnowflake.r) {
        aSnowflake.y = 0 - aSnowflake.r
        aSnowflake.x = randomDec(20,1760)
    }
}
//keyboard event listener
document.addEventListener("keydown", keydownhandler)

function keydownhandler(event) {
    //remove snow when 1 is pressed
    if (event.keyCode === 49){
        snow.pop()
    //generate 10 Snowflakes at random x above the canvas when 3 is pressed
    } else if (event.keyCode === 51){
        for(let n = 0; n < 10 ; n ++) {snow.push(skySnowflake())}
    //generate a snowflake at random x above the canvas when 2 is pressed
    } else if (event.keyCode === 50){
        snow.push(skySnowflake())
    }
}
//generate a Snowflake at random x above the canvas cont.
function skySnowflake(){
    r = randomDec(2,5)
    return {
        x: randomDec(20,1760),
        r: r,
        y: 0 - r,
        color : "white",
        speed: randomDec(1,2.5)
    }
}
