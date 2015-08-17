var express = require("express");

var router = express.Router();

router.get('/teams', function(req,res){
    res.render('teams.ejs',{
      title: 'Teams'	
        
    });

});


 





module.exports = router;