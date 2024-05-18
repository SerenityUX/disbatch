var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({message: "your response"})
});

let screams = [];


router.get('/getNewScreams', (req, res) => {
    
    const receiver = req.query.receiver
    const hasBeenPlayedNotAndIsMine = screams.filter((scream) => !scream.hasBeenPlayed && scream.receiver == receiver)

    screams.forEach((scream) => {
      if(scream.receiver == receiver) {
        scream.hasBeenPlayed = true;
      }
    });
    
    res.send({ screams: hasBeenPlayedNotAndIsMine });
    
});

router.post('/createScream', (req, res) => {

    if(req.query.receiver == null) {
      console.log(req)
      res.send({message: "ERROR WE NEED RECEIVER"});
    } else {
    const randomID = Math.random() * 100000;
    screams.push({
        name: "zombie",
        hasBeenPlayed: false,
        id: randomID,
        receiver: req.query.receiver
    });
    res.send(screams);
  }
});

module.exports = router;




