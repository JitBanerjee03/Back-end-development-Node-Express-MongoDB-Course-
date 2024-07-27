const fs = require('fs');  //requiring the file system module in out project

//writing to a file 

fs.writeFile('File1.txt',"Hello This is my first lecture of the node js series",(err)=>{
   if(err){
    console.log("An unexpected error occured 1!");
   }
   else{
    console.log("Done");
   }
});

//appending data to the file just create above
fs.appendFile('./File1.txt',"\nThe capital of india is new Delhi",(err)=>{
   
   if(err)
   console.log("An unexpected error occured sorry for the inconvinence 2");

   else
   console.log("Done");
})

//renaming files 
fs.rename('File1.txt','File2.txt',(err)=>{
  if(err)
   console.log(err);

  else
   console.log("Done");
})

//coping file function 
fs.copyFile('./File2.txt','./dir/tempFile.txt',(err)=>{
   if(err)
      console.log("an unexpected error occured sorry for the inconvinence 3");
   else
     console.log("Done");
});

