fs.copyFile("ankit.txt","./copy/robin.txt",function(err){
       if(err){
                console.log(err);
       }else{
                console.log("copy done");
       }
})