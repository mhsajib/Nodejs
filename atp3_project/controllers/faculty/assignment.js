var express = require('express');
var multer  = require('multer');

var db = require('./../../models/db.js');
var path    = require('path');
// var db = require('./../../models/db.js');
var router  = express.Router();


const storage = multer.diskStorage({
    
    destination : './public/uploads',
    filename    : function(req, file, cb){

      cb(null, file.originalname);

    }

});

const upload = multer({
    storage : storage
}).single('assignmentfile');



router.get('/',(req, res)=>{

    res.render('course/assignment');
});

router.post('/', (req, res)=>{





    upload(req, res , (err)=>{
        if(err){
            res.send('error for upload the file')
        }else{
            //************************************ */
            // res.send(req.file.path);
         var sql ="INSERT INTO `assignment` (`assignmentname`, `updatedate`, `submissiondate`, `assignmentfile`, `id`,`coursename`) VALUES ('"+ req.body.assignmentname+"', '"+req.body.updatedate+"', '"+ req.body.submissiondate+"', '"+ req.file.path+"', NULL, '"+ req.body.coursename+"')";

            // var sql = "insert into assignment values('"+ req.body.assignmentname+"', '"+req.body.updatedate+"','"+ req.body.submissiondate+"','"+ req.file.path+"'+'')";
            db.execute(sql, function(status){
        
                if(status){
                    res.redirect('/assignment');
                    // res.send(req.file.path + "done");
                }else{
                    res.redirect('/assignment');
                    // res.send(req.file.path);
                }
            });
        }
    });



  
   
});

router.get('/edit',(req, res)=>{

    var sql = "select * from assignment";
    db.getResults(sql, function(results){
        // if(req.cookies['username'] != null){
        // 	res.render('admin/emplist', {user: results});
        // }else{
        // 	res.redirect('/login');
        // }
        
        res.render('course/assignmentedit', {user: results});
    });


});

router.get('/edit/:id',(req, res)=>{

    var sql = "SELECT * FROM `assignment` WHERE `assignmentname` LIKE '"+req.params.id+"'";
    db.getResults(sql, function(results){
        // if(req.cookies['username'] != null){
        // 	res.render('admin/emplist', {user: results});
        // }else{
        // 	res.redirect('/login');
        // // }
        // console.log(results[0].assignmentname+"Caught");
        res.render('course/assignmenteditinfo', {user: results[0]});
    });

    // res.send(req.params.id+"caught");


});

router.post('/edit/:id',(req, res)=>{

    // router.post('/update',(req, res)=>{


    // // var sql = "update assignment set assignmentname='"+ req.body.assignmentname+"', updatedate='"+req.body.updatedate+"',submissiondate ='"+
    // // req.body.submissiondate+"', assignmentfile ='"+req.body.assignmentfile+"' , coursename ='"+req.body.coursename+"' where assignmentname="+req.params.id;

    //  var sql ="UPDATE `assignment` SET `assignmentname` = '"+req.body.assignmentname+"',`updatedate` = '"+req.body.updatedate+"', `submissiondate` = '"+req.body.submissiondate+"', `assignmentfile` = '"+req.body.assignmentfile+"', `coursename` = '"+req.body.coursename+"' WHERE `assignment`.`id` = 1;"

    // // var sql = "SELECT * FROM `assignment` WHERE `assignmentname` LIKE '"+req.params.id+"'";
    // db.execute(sql, function(status){
        
    //     if(status){
    //         console.log("***true/"+req.params.id);
    //         res.redirect('/assignment/edit');
    //         // res.send(req.file.path + "done");
    //     }else{
    //         console.log("***false/"+req.params.id);
    //         res.redirect('/assignment/edit');
    //         // res.send(req.file.path);
    //     }
    // });

    res.send(res.body.assignmentname+"<br>"+res.body.assignmentfile);


});


module.exports = router;