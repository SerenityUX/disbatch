var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({message: "your response"})
});

let screams = [];


router.get('/getNewScreams', (req, res) => {
    
    const hasBeenPlayedNot = screams.filter((scream) => !scream.hasBeenPlayed)

    screams.forEach((scream) => {
        scream.hasBeenPlayed = true;
    });
    
    res.send({ screams: hasBeenPlayedNot });
    
});

router.post('/createScream', (req, res) => {
    const randomID = Math.random() * 100000;
    screams.push({
        name: "zombie",
        hasBeenPlayed: false,
        id: randomID
    });
    res.send(screams);
});

module.exports = router;




