var express = require("express");

var router = express.Router();


router.get('/gallery', function(req,res){
    res.render('gallery.ejs',{
      title: 'WGA'	
        
    });

});


 





module.exports = router;