const redis=require('redis');
const client=redis.createClient('//redis-10183.c52.us-east-1-4.ec2.cloud.redislabs.com:10183',
    {password:'9vHwChMs7difCzt5e1RZVyfjqFzVLLzW'});
client.on('ready',()=>{console.log('ready')});
client.on('error',(err)=>{console.log('error '+err)});
client.on('connect',()=>{console.log('connect')});
client.on('end',()=>{console.log('end')});
var now;
client.set(0,'setn',()=>{now =new Date();});
for (let n = 1; n < 9999; n++) { 
    client.set(n,'setn');
}
client.set(9999,'setn',()=>{console.log('Time set: '+(new Date()-now));});
var getnow;
client.get(0,()=>{getnow =new Date();})
for (let n = 1; n < 9999; n++) { 
    client.get(n);
}
client.get(9999,()=>{console.log('Time get: '+(new Date()-getnow));})
var delnow;
client.del(0,()=>{delnow =new Date();})
for (let n = 1; n < 9999; n++) { 
    client.del(n);
}
client.del(9999,()=>{console.log('Time del: '+(new Date()-delnow));})
client.quit();