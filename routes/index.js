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

/* POST to tasks page */
router.post('/tasks', function(req, res, next){
  var task = new Task(req.body);

  task.save(function(err, task){
    if(err){ return next(err); }

    res.json(task);
  });
});

/* Set param based on a specific task by ID */
router.param('task', function(req,res,next,id){
  var query = Task.findById(id);

  query.exec(function (err, task){
    if(err){ return next(err); }
    if(!task) { return next(new Error('Can\'t find task')); }

    req.task = task;
    return next();
  });
});

/* Handles routing to tick a task off */
router.put('/tasks/:task/tickOff', function(req, res, next){
  req.task.tickOff(function(err, task){
    if(err) { return next(err); }

    req.json(task);
  });
});


/* GET detail of a specific task */
router.get('/tasks/:task', function(req, res){
  res.json(req.task);
});

/* GET sub_tasks of a specific task. */
router.get('/tasks/:task/sub_tasks', function(req, res, next){
  var sub_task = new Sub_Task(req.body);
  sub_task.task = req.task;

  sub_task.save(function(err, sub_task){
    if(err) { return next(err); }

    req.task.sub_tasks.push(sub_task);
    req.task.save(function(err, task){
      if(err){ return next(err); }

      res.json(sub_task);
    });
  });
});

/* Set param based on a specific task by ID */
router.param('task/:task/sub_tasks/:sub_task', function(req, res, next, id, task){
  var query = Sub_Task.findById(id, task);

  query.exec(function (err, sub_task){
    if(err){ return next(err); }
    if(!sub_task) { return next(new Error('Can\'t find sub_task')); }

    req.sub_task = sub_task;
    return next();
  });
});

router.put('/tasks/:task/sub_tasks/:sub_task/tickOff', function(){
  req.sub_task.tickOff(function(err, task){
    if(err) { return next(err); }

    req.json(task);
  });
});

router.get('/tasks/:task', function(req, res, next){
  req.task.populate('sub_tasks', function(err, post){
    if(err){ return next(err); }

    req.json(task);
  });
});

module.exports = router;
