const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/getCurrentDayJournal", (req, res, next) => {
  console.log('finnayl I have the date at the fck backend', req.params, req.body)
  
});

// ADD ROUTER.GET TO RETRIEVE WHAT WE HAVE IN LINE 22 
router.post('/entries', (req,res, next) => {
console.log(req.body)
const {date, question1, question2, question3} = req.body;
JournalEntry.create({date, question1, question2, question3})
  .then(entry => {
    res.send(entry)
    
  }).then(() => {
    JournalEntry.find().then((allJournals)=> res.send(allJournals))
  })
  . catch (err => {
    next(err)
  })
})


// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

