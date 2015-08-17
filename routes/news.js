var express = require("express");

var router = express.Router();

router.get('/news', function(req,res){
    res.render('news.ejs',{
      title: 'News'	
        
    });

});


 





module.exports = router;