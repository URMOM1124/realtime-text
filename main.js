function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
} 

function modelLoaded() {
    console.log('PoseNet is doing its working');
}

function draw() {
    background('#855150');
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
    }
}