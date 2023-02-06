        //Problem-1

function mindGame(num){
    if(typeof(num)=="number"){
        return (((num*3)+10)/2)-5;
    }else{
        return "Give me a number";
    }
}



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


            //Problem-5

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
