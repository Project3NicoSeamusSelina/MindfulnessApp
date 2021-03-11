const JournalEntry = require('../models/JournalEntry.model')
const Routine = require('../models/Routine.model')
const router = require("express").Router();
const moment = require('moment');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/getSelectedEntry', (req, res, next) => {
  var d = new Date(req.query.date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  let newdate = [year, month, day].join('-');
 
    JournalEntry.findOne({
      date: newdate
    })
    .populate('user')
    .then(entries => {
      res.json(entries)
    })
    .catch(err => {
      next(err)
    })
});

router.post('/entries', (req,res, next) => {
  const {date, question1, question2, question3, ratingMood, ratingMotivation} = req.body;
   JournalEntry.create({date, question1, question2, question3, ratingMood, ratingMotivation, user: req.user})
    .then(response => res.send(response))

    .catch(err=> next(err))
})


router.get('/items', (req,res,next)=> {
  console.log('STEP TWO BACKEND')
  Routine.findOne({user: req.user._id})
  .then(items => {
    console.log('THIS IS ITEMS.LIST', items.list)
    res.json(items.list);
  })
  .catch(err => next(err))
})

router.post('/items', (req,res,next) => {
  const {todo, user} = req.body;
  console.log("this is the user", user)
  console.log("this is the user from the backend", req.user._id)
  Routine.findOne({user: req.user._id})
  .then((response)=>{
    if (response === null){
      console.log('Create')
      Routine.create({
        list: [todo],
        user:req.user._id
      },
      {
        new: true
      })
      .then(response => res.status(200).json(response)) 
    }
    else{
      console.log('Update')
      Routine.findOneAndUpdate({user: req.user._id},{$push:{list:todo}},
        {
          new: true
        })
      .then(response => res.status(200).json(response)) 
    }
  })
})




// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

//Todolist here 

router.post('/items', (req,res,next) => {
  const {todo, user} = req.body;
  console.log("this is the user", user)
  console.log("this is the user from the backend", req.user._id)
  Routine.findOne({user: user})
  .then((response)=>{
    if (response === null){
      console.log('Create')
      Routine.create({
        list: [todo],
        user:req.user._id
      })
      .then(response => console.log(response)) 
    }
    else{
      console.log('Update')
      Routine.findOneAndUpdate({user: user},{$push:{list:todo}})
      .then(response => console.log(response)) 
    }
  })
})

router.get('/items', (req,res,next)=> {
  Routine.findOne({user: req.user._id})
  .then(items => {
    res.json(items.list);
  })
  .catch(err => next(err))
})

module.exports = router;

