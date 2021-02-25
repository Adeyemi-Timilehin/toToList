
module.exports= getDate
function getDate (){
    const today=new Date();
  
    const option={
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
      
    };
   
    return today.toLocaleDateString("en-UK",option);;
};


