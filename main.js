//FUNCTION
function blowMind(){

//MAKE ARRAYS
        var pronouns = ['He', 'She', 'It']
        var adverbs = ['rarely', 'habitually', 'infrequently', 'hastily', 'reluctantly' ]
        var verbs = ['jests', 'prods' , 'disclaims' , 'delights', 'contemplates']
        var lasts = ['with ease.', 'the African Dog.', 'petulantly.', 'your mother.']
        
        

    //1. Generate random words.

        var pronoun = pronouns [Math.floor(Math.random() * pronouns.length)];
        var adverb = adverbs [Math.floor(Math.random() * adverbs.length)];
        var verb = verbs [Math.floor(Math.random() * verbs.length)];
        var last = lasts [Math.floor(Math.random() * lasts.length)];

        console.log(pronoun);
        
        
        
        //2. display the result, probably inserting into an element by Id.
        
        document.getElementById("prompt").textContent = ' " '+pronoun + ' '+ adverb +' '+ verb + ' '+ last + ' " ';

        //get element by id = 'prompt'
}

