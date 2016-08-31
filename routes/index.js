var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tasks', function(){
  Task.find(function(err, tasks){
    if(err){ return next(err); }

    res.json(tasks);
  });
});

router.post('/tasks', function(req, res, next){
  var task = new Task(req.body);

  task.save(function(err, task){
    if(err){ return next(err); }

    res.json(task);
  })
});

router.param('task', function(req,res,next,id){
  var query = Task.findById(id);

  query.exec(function (err, task){
    if(err){ return next(err); }
    if(!post) { return next(new Error('Can\'t find task')); }

    req.task = task;
    return next();
  });
});

router.put('/tasks/:task/tickOff', function(req, res, next){
  req.task.tickOff(function(err, task){
    if(err) { return next(err); }

    req.json(task);
  });
});

router.get('/tasks/:task', function(req, res){
  res.json(req.task);
});

router.get('/tasks/:task/sub_tasks', function(req, res, next){
  var sub_task = new Sub_Task(req.body);
  sub_task.task = req.task;

  sub_task.save(function(err, sub_task))

  res.json(sub_task);
});

module.exports = router;
