const sum=(num1,num2,...rest)=>{
    let result=num1+num2;
    for(let i=0;i<rest.length;i++){
        result+=rest[i];
    }
    console.log(result);
};
sum(1,2,3,4,5,6,7,8,8);
