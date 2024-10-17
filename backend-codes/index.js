const fs = require('node:fs');

fs.writeFile("hey.txt","hi hello" , function(err){
     if(err){
            console.log(err);
     }else{
            console.log("file is updated");
     }
})

fs.appendFile("hey.txt"," hi hello ankit ranjan" , function(err){
     if(err){
            console.log(err);
     }else{
            console.log("file is updated");
     }
})

fs.rename("hey.txt","ankit.txt",function(err){
       if(err){
                console.log(err);
       }else{
                console.log("file is updated");
       }
})

// fs.copyFile("ankit.txt","./copy/robin.txt", function(err) {
//        if(err) {
//            console.log(err);
//        } else {
//            console.log("copy done");
//        }
//    })
// fs.unlink("./copy/robin.txt",function(err){
//        if(err) console.log(err);
//        else console.log("file deleted");
// })

fs.rmdir("./copy",{recursive : true},function(err){
       if(err) console.log(err);
       else console.log("folder deleted");
})

// fs.mkdir("rockey.txt",function(err){
//     if(err) console.log(err);
//     else console.log("folder created");
// });

fs.rm("rockey.txt",{recursive:true},function(err){
       if(err) console.log(err);
       else console.log("folder deleted");
       })