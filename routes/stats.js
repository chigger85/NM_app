var express = require("express");

var router = express.Router();

router.get('/stats', function(req,res){
    res.render('stats.ejs',{
      title: 'WGA'	
        
    });

});


 





module.exports = router;