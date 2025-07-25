var express = require('express');
const app = express();

app.set('view engine','ejs');

const URL='http://backend-host:8000/api';

const fetch = (...args)=>
     import('node-fetch').then(({default:fetch})=>fetch(...args));


app.get('/',async function(req,res){
    const options={
        method:'GET'
    };

    fetch(URL,options)
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch(err => console.log('error:'+err));

        try{
            let response = await fetch(URL,options);
            response = await response.json();
            res.render('index',response)
        }catch(err)
        {
            console.log(err);
            res.status(500).json({message:"Internal Server Error."});
        }
})

app.listen(3000,function(){
    console.log('Server is running on port 3000...');
})