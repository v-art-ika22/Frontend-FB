const calculte=(operation, num1,num2,...rest)=>{
    switch(operation){
        case '+': let sum=num1+num2;
        for(let i=0;i<rest.length;i++){
            sum+=rest[i];
        }
        console.log(sum);
        break;
        case '-': let sub=num1-num2;
        for(let i=0;i<rest.length;i++){
            sub-=rest[i];
        }
        console.log(sub);
        break;

    }
};
calculte('+',1,2,4,5,6,7);