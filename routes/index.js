const JournalEntry = require('../models/JournalEntry.model')
const Routine = require('../models/Routine.model')
const router = require("express").Router();
const moment = require('moment');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/getSelectedEntry', (req, res, next) => {
  date = '2021-03-25'
  console.log('REQ QUERY HERE 3', typeof req.query.date)
  console.log('THIS IS REQ QUERy DATE', req.query.date)
  //res.json(req.query.date)
  // var dateObj = new Date(req.query.date);
  // var month = dateObj.getUTCMonth() + 1; //months from 1-12
  // var day = dateObj.getUTCDate();
  // var year = dateObj.getUTCFullYear();
  var d = new Date(req.query.date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
        console.log('MONTH LENGTH', month)
    if (day.length < 2) 
        day = '0' + day;
  let newdate = [year, month, day].join('-');
  console.log('THIS NEWDATE HERE',typeof newdate, newdate, month)
  // newdate4DB = newdate.format('YYYY/MM/DD')
  // console.log('IS THIS THE DAGGER?', newdate4DB)
    JournalEntry.findOne({
      date: newdate
    })
    .then(entries => {
      console.log('THESE ARE THE ENTRIES', entries)
      res.json(entries)
      ;
    })
    .catch(err => {
      next(err)
    })
});

router.post('/entries', (req,res, next) => {
  const {date, question1, question2, question3, ratingMood, ratingMotivation} = req.body;
   JournalEntry.create({date, question1, question2, question3, ratingMood, ratingMotivation})
    .then(response => res.send(response))

    .catch(err=> next(err))
})


router.get('/items', (req,res,next)=> {
  Routine.find().populate('list')
  .then(items => {
    console.log('THESE ARE THE ALL THE ITEMS', items)
    res.json(items);
  })
  .catch(err => {
    next(err)
  })
})

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
        user:user
      })
      .then(response => console.log(response)) 
    }
    else{
      console.log('Update')
      Routine.findOneAndUpdate({user: user},{$push:{list:todo}})
      .then(response => console.log(response)) 
    }
  })
/* 
  Routine.create({todo, user}) 
  .then((response) =>{ 
    console.log("response at BE", response)
    res.send(response)})
  .catch(err=> next(err))
 */})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

