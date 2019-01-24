//FUNCTION
function blowMind(){

//MAKE ARRAYS
        var pronouns = ['He', 'She', 'It']
        var adverbs = ['rarely', 'habitually', 'infrequently', 'hastily', 'reluctantly', 'blithely', 'ravenously' ]
        var verbs = ['upsets', 'prods' , 'disclaims' , 'delights', 'contemplates']
        var lasts = ['with ease.', 'the African Dog.', 'petulantly.', 'your mother.', 'cheeseburgers.', 'anything at all.', 'a trash panda.']
        
        

    //1. Generate random words.

        var pronoun = pronouns [Math.floor(Math.random() * pronouns.length)];
        var adverb = adverbs [Math.floor(Math.random() * adverbs.length)];
        var verb = verbs [Math.floor(Math.random() * verbs.length)];
        var last = lasts [Math.floor(Math.random() * lasts.length)];
        
        
        //2. display the result, probably inserting into an element by Id.
        
        document.getElementById("prompt").textContent = ' " '+pronoun + ' '+ adverb +' '+ verb + ' '+ last + ' " ';

        //get element by id = 'prompt'
}

function randomImage(){
    
    var images = ['http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201805/157190509.jpg', 'http://michaelmurray.ca/wp-content/uploads/2013/11/3.jpg', 'https://cdn.theatlantic.com/assets/media/img/notes/2015/09/Screen_Shot_2015_09_22_at_3.31.27_PM-1/facebook.png?1522838735', 'https://tedconfblog.files.wordpress.com/2012/06/image002.gif'];

    var image = images [Math.floor(Math.random() * images.length)];

    document.getElementById("picture").textContent= '<img src="'+image+'">';

   


}


