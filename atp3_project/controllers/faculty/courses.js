var express = require('express');
var db = require('./../../models/db.js');
var router  = express.Router();

router.get('/Compiler',(req, res)=>{

    var sql = "SELECT * FROM `courses-details` WHERE `course` LIKE 'compiler'"; 
		db.getResults(sql, function(results){
			// // if(req.cookies['username'] != null){
			// // 	res.render('admin/emplist', {user: results});
			// // }else{
			// // 	res.redirect('/login');
            // // }
            
            // res.render('home/index', {user: results});

            
             res.render('course/compiler',{user: results});
    	});
    
   

    
});

router.get('/ATP-3',(req, res)=>{

    var sql = "SELECT * FROM `courses-details` WHERE `course` LIKE 'ATP-3'"; 
		db.getResults(sql, function(results){
			// // if(req.cookies['username'] != null){
			// // 	res.render('admin/emplist', {user: results});
			// // }else{
			// // 	res.redirect('/login');
            // // }
            
            // res.render('home/index', {user: results});

            
             res.render('course/atp3',{user: results});
    	});
    
   

    
});

router.get('/E-Shop',(req, res)=>{

    var sql = "SELECT * FROM `courses-details` WHERE `course` LIKE 'E-Shop'"; 
		db.getResults(sql, function(results){
			// // if(req.cookies['username'] != null){
			// // 	res.render('admin/emplist', {user: results});
			// // }else{
			// // 	res.redirect('/login');
            // // }
            
            // res.render('home/index', {user: results});

            
             res.render('course/eshop',{user: results});
    	});
    
   

    
});

router.get('/Ethics',(req, res)=>{

    var sql = "SELECT * FROM `courses-details` WHERE `course` LIKE 'Ethics'"; 
		db.getResults(sql, function(results){
			// // if(req.cookies['username'] != null){
			// // 	res.render('admin/emplist', {user: results});
			// // }else{
			// // 	res.redirect('/login');
            // // }
            
            // res.render('home/index', {user: results});

            
             res.render('course/ethics',{user: results});
    	});
    
   

    
});





module.exports = router;