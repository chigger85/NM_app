var express = require("express");

var router = express.Router();

router.get('/fixtures', function(req,res){
    res.render('fixtures.ejs',{
      title: 'Fixtures and Results'	
        
    });

});


 





module.exports = router;