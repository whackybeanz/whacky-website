var express = require("express");
var router  = express.Router();

router.get("/", function(req, res) {
    res.redirect("/fun/crossword");
})

router.get("/crossword", function(req, res) {
    res.locals.extraStylesheet = "more-maple/xwordStyles";
    res.locals.section = "extras";
    res.locals.branch = "crossword";
    res.locals.title = "Crossword Puzzle";
    res.render("more-maple/crossword");
})

router.post("/crossword/answers", function(req, res) {
    var submittedAnswers = req.body.allAnswers;
    var correctAnswers = ["colossus", "kritias", "lilynouch", "skelosaurus", "magatia", "velderoth", "dolphin", "esfera", "twilight", "nine", "muto", "asteria", "karupa", "creation", "areda", "verdel", "nanuke", "taeng", "maya", "thanatos"]
    var wrongAnswers = []

    submittedAnswers.forEach((answer, index) => {
        if(answer !== correctAnswers[index]) {
            wrongAnswers.push(index+1);
        }
    });

    if(wrongAnswers.length) {
        res.send({isAnswerCorrect: false, wrongAnswers: wrongAnswers})
    } else {
        res.send({isAnswerCorrect: true})
    }
})

router.get("/word-search", function(req, res) {
    res.locals.extraStylesheet = "more-maple/wordSearchStyles";
    res.locals.section = "extras";
    res.locals.branch = "word-search";
    res.locals.title = "Word Search";

    let board = [['A', 'N', 'I', 'N', 'S', 'Q', 'J', 'A', 'C', 'T', 'S', 'C', 'M', 'D', 'G'],
                ['R', 'R', 'A', 'H', 'E', 'T', 'U', 'Z', 'R', 'L', 'A', 'E', 'E', 'I', 'R'],
                ['E', 'E', 'D', 'V', 'L', 'E', 'A', 'A', 'V', 'R', 'D', 'R', 'I', 'O', 'I'],
                ['S', 'W', 'B', 'E', 'E', 'M', 'E', 'R', 'C', 'Z', 'R', 'N', 'S', 'R', 'N'],
                ['I', 'F', 'Z', 'Z', 'N', 'H', 'N', 'A', 'F', 'O', 'E', 'I', 'T', 'Y', 'D'],
                ['A', 'V', 'V', 'Z', 'E', 'T', 'N', 'N', 'Y', 'O', 'J', 'U', 'E', 'T', 'I'],
                ['K', 'K', 'G', 'N', 'P', 'E', 'M', 'A', 'A', 'Z', 'R', 'M', 'R', 'U', 'N'],
                ['J', 'W', 'I', 'L', 'S', 'G', 'L', 'I', 'T', 'E', 'Y', 'C', 'U', 'A', 'G'],
                ['G', 'N', 'T', 'H', 'O', 'S', 'J', 'Q', 'L', 'I', 'B', 'N', 'E', 'E', 'S'],
                ['E', 'I', 'A', 'R', 'T', 'E', 'G', 'J', 'Z', 'L', 'G', 'K', 'G', 'B', 'Q'],
                ['J', 'D', 'L', 'Y', 'E', 'F', 'I', 'L', 'R', 'E', 'T', 'S', 'N', 'O', 'M'],
                ['E', 'A', 'L', 'M', 'A', 'P', 'L', 'E', 'S', 'T', 'O', 'R', 'Y', 'I', 'B'],
                ['B', 'E', 'P', 'A', 'P', 'U', 'L', 'A', 'T', 'U', 'S', 'N', 'X', 'T', 'P'],
                ['R', 'I', 'X', 'I', 'L', 'E', 'R', 'E', 'W', 'O', 'P', 'H', 'B', 'O', 'C'],
                ['D', 'O', 'M', 'I', 'N', 'A', 'T', 'O', 'R', 'E', 'B', 'X', 'T', 'R', 'V']];

    let wordList = ["Arcaneshade", "Ardentmill", "Balrog", "Beautyroid", "Cernium", 
                    "Dominator", "Erdas", "Evan", "Grinding", "Kaiser", "Meister", 
                    "Maplestory", "Monster Life", "Nineheart", "Papulatus", "Pink Bean", 
                    "Power Elixir", "Royal Style", "Star Force", "Yeti"];

    res.render("more-maple/word-search", { board: board, wordList: wordList });
})

module.exports = router;