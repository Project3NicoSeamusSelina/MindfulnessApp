const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/entries", (req, res, next) => {
res.json("All good in here");
});


router.post('/entries', (req,res, next) => {
console.log(req.body)
const {date, question1, question2, question3} = req.body;
JournalEntry.create({date, question1, question2, question3})
  .then(entry => {
    console.log(entry)
    
  }).then(() => {
    JournalEntry.find().then((allJournals)=> res.send(allJournals))
  })
  . catch (err => {
    next(err)
  })
})
// router.get('/', (req, res, next) => {
//   Project.find()
//     .then(projects => {
//       res.json(projects);
//     })
//     .catch(err => {
//       next(err)
//     })
// });

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

