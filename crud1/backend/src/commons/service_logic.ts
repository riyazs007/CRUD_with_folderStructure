export const serviceLogic=(salary:number)=>{
    let pf:number
    let da:number
    let ta:number
    let hra:number
    let gross:number
    let net:number
    if(salary <= 25000){
        pf=salary*0.08;
        ta=salary*0.09;
        da=salary*0.11;
        hra=salary*0.12;
    }
   else if(salary>=50000 && salary<25000){
        pf=salary*0.11;
        ta=salary*0.10;
        da=salary*0.12;
        hra=salary*0.13;
    }
    else{
        pf=salary*0.12;
        ta=salary*0.11;
        da=salary*0.13;
        hra=salary*0.14;
    }
    gross=salary+ta+da+hra
    net=gross-pf;
    const info={pf,ta,da,hra,gross,net}
    return info
}