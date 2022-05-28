
let target={};
let handler={
    set:function(myobj,k,val){
           if(k==='name'){
               if(val.length==7){
                   myobj[k]=val;
               }
               else{
                   throw 'Value must be 7 characters only!';
               }
           }
           else if(k ==='address'){
               if(typeof(val) === 'string'){
                   myobj[k]=val;
               }
               else{
                   throw 'Value must be String !';
               }
           }
          else if(k==='age'){
               if(val>=25 && val <=60){
                   myobj[k]=val;
               }
               else{
                   throw 'Must be 25<=Value<=60 ';
               }
           }
           else{
               throw 'Property must be ["name","address","Age"] ';
           }
    }
}

let myProxy=new Proxy({},handler);

myProxy.fake=10000;
myProxy.name='sarahAhmed';
myProxy.address=67;
myProxy.age=20;

console.log(myProxy);