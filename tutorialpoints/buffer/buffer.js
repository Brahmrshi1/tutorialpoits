// buffer declaration
var buf = new Buffer(10);
var buf1 = new Buffer("New buffer work");
var buf2 = new Buffer("Simply Easy Learning");


// writing in buffer
//  buf.write(string[, offset][, length][, encoding])
len = buf.write("Simple easy learning");
console.log("Octets written :"+ len);
//   reading from buffer
b1 = buf2.toString();
console.log(b1);

// Conveart json to buffer
var json = buf2.toJSON(buf2);

console.log(json);


// concat the buffer
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

// compare buffer 
var buffer3 = new Buffer('ABC');
var buffer4 = new Buffer('ABCD');
var result = buffer3.compare(buffer4);

if(result < 0) {
   console.log(buffer3 +" comes before " + buffer4);
}else if(result == 0){
   console.log(buffer3 +" is same as " + buffer4);
}else {
   console.log(buffer3 +" comes after " + buffer4);
}




// Buffer copay
var buffer5 = new Buffer('ABC');
var buffer6 = new Buffer(3);
buffer5.copy(buffer6);
console.log("buffer6 content: " + buffer6.toString());


// slice of buffer
var buffer7 = new Buffer('my new example');
var buffer8 = buffer7.slice(0,9);
console.log("buffer8 content: " + buffer8.toString());


