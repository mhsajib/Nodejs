var express = require('express');
var db = require('./../../models/db.js');
var router  = express.Router();

router.get('/',(req, res)=>{

    var sql = "select * from course";
		db.getResults(sql, function(results){
			// if(req.cookies['username'] != null){
			// 	res.render('admin/emplist', {user: results});
			// }else{
			// 	res.redirect('/login');
            // }
            
            res.render('home/index', {user: results});
		});

    
});

module.exports = router;