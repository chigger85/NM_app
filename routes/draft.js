var express = require("express");

var router = express.Router();

router.get('/draft', function(req,res){
    res.render('draft.ejs',{
      title: 'WGA'	
        
    });

});


 





module.exports = router;