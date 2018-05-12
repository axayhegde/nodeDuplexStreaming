//CRON JOB ---> */2 * * * *  /home/akshay/WebstormProjects/nodeBackGround
/*



Create a Background Node Service which
will execute every 2 minutes in Linux
Operating System, that performs
streaming operation on the attached file
‘content.txt’ with buffer size ‘16KB’
KB- KiloBytes to the destination file
‘destination.txt’

Notes:
Stream : Pieces of data that eventually combine into a whole data
by transferring chunks by chunks.
In Every operation 16KB of data from ‘content.txt’ should be
streamed to the destination file.
 */
const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/content.txt');
let writeStream = fs.createWriteStream(__dirname + "/destination.txt");

readStream.on('readable', () => {
    let chunk;
    while (null !== (chunk = readStream.read(16384))) {
        console.log(`Received ${chunk.length} bytes of data.`);
        writeStream.write(chunk);
    }
});

readStream.on('error', function(err){
    console.log(err.stack);
});
console.log("Program Ended");


