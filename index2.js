const exec = require('child_process').exec;
exec('alpr -c eu -p lv -j my-car.jpg',function(error, stdout, stderr){
    console.log("Got info from alpr");
    console.log(stdout.toString());
    console.log("Parsing JSON");
    let plateOutput = JSON.parse(stdout.toString());
    console.log("Found number plate");
    console.log(plateOutput.results[0].plate);
})