var char, char_nospace, word, sentence;
let char_count = document.getElementById("char_count");
let char_nospace_count = document.getElementById("char_nospace_count");
let word_count = document.getElementById("word_count");
let sentence_count = document.getElementById("sentence_count");
let text = document.getElementById("text-input");

function myFunc()
{
    setTimeout(function(){
        let str = text.value;
        char = str.length;

        if(str.split(" ")[0] == '')
            char_nospace = char;
        else
            char_nospace = char - (str.split(" ").length) - str.trim().split('\n').length + 2;

        if(str.trim().split(/\s+/)[0] == '')
            word = 0;
        else
            word = str.trim().split(/\s+/).length;

        sentence = str.split(/[.!?]+/).length - 1; 

        char_count.innerHTML = char;
        char_nospace_count.innerHTML = char_nospace;
        word_count.innerHTML = word;
        sentence_count.innerHTML = sentence;
    }, 50)    
}