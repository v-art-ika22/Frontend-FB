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
        case '*':let mul=num1*num2;
        for(let i=0;i<rest.length;i++){
            mul*=rest[i];
        }
        console.log(mul);
        break;
        case '/': let div=num1/num2;
        for(let i=0;i<rest.length;i++){
            div/=rest[i];

        }
        console.log(div);
        break;
        default: 
        console.log("happy diwali");
    }
};
calculte('+',1,2,5);