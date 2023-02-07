        //Problem-1

function mindGame(num){
    if(typeof(num)=="number"){
        return (((num*3)+10)/2)-5;
    }else{
        return "Give me a number";
    }
}


//I take a number from user and multiply by 3 and addition 10 and division by 2 and subtraction 5 then return the result   


        //Problem-2

function evenOdd(str){
    const a= str.length
    let b="";
    if(typeof(str)=="string"){
        if(a%2===0){
            b+="even";
        }
        else{
            b+="odd";
        }
    }else{
        return "Give me a string";
    }
    return b;
}


//I receive a string from user and check this string length if length odd then i return "odd" other then return "even"


        //Problem-3
        
function isLGSeven (num){
    if(typeof(num)=="number"){
        const a= num-7;
        if(Math.abs(a)>7){
            return Math.abs(a) *2
        }else{
            return a
        }
    }else{
        return "Give me a number";
    }
}

//I take a number from user then absolute this number then subtract by 7 if subtraction result less than 7 then return the subtraction result. if result more than 7 or equal 7 then multiply by 2 

        //Problem-4

function findingBadData(arr){
    if(arr instanceof Array){
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]<0){
                count +=1;
            }
        }
        return count ;
    }else{
        return "Give me a array";
    }
}

//i take a array from user and check this and i count all bad number
           

function gemsToDiamond (gems1,gems2,gems3){
    if(typeof(gems1)=='number'&&typeof(gems2)=='number'&&typeof(gems3)=='number'){
        const a= (gems1*21)+(gems2*32)+(gems3*43);
        if(a>=2000){
            return a-2000;
        }else{
            return a;
        }
    }else{
        return "Give me number";
    }
}


// i take 3 different number from 3 friends and i multiply by 21,32 and 43.if total value more then or equal 2000 then minus 2000 then return subtraction, otherthen return the product 
