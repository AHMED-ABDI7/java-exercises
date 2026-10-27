let students=[{
                name:"ali",age:36,
                city:"mogdishu",   
         },
         
        
        {name:"osman", age:20, city :"kismayo"},
                


                {name:"sadick", age:25, city :"baidabo"},

        
        ];
                
      
                
        
        for(let student of  students ){
                console.log("---");
                
                        for(let key in student){
                                console.log(key,student[key]);
                }
                
             }