function handleClick(){
for(let i =1 ;i<=10;i++){
    if(i==3){
        continue;
    }else if(i==6){
        break;
    }
        // console.log(i);
        // console.log("hello")
    document.writeln(`${i},`);
}
}