// os-  module provides operating system-related utility methods and properties.

const os =require('os') // import os module

console.log("os platform:"+os.platform);

console.log("os type: "+os.type());

console.log("os release: "+os.release);

console.log("Total Memory (byets)"+os.totalmem());

console.log("free Memory (bytes)"+os.freemem());

console.log("CPU Architecture:"+os.arch());

console.log("Home Directory"+os.homedir());

console.log("Temp directory",os.tmpdir());

