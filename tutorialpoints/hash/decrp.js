const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  
var encrypted = '0d1ec5d50e2dc0e92fed77875a04263d';  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted);  