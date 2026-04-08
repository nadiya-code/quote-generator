import "./input.css";
//navigation
const navlink=document.querySelectorAll(".nav-item");
const sections=document.querySelectorAll(".nav");
navlink.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        const targetId=link.getAttribute("href").substring(1);
        sections.forEach((section)=>{
            section.classList.add("hidden");
        });
        document.getElementById(targetId).classList.remove("hidden");
    });
});
//data
const allquotes=[
    { type:"Philosophy",text:"The unexamined life is not worth living.",author:"Socrates"},
    { type:"Philosophy",text:"I think, therefore I am.",author:"Rene Descartes"},
    { type:"Philosophy",text:"Happiness is the highest good.",author:"Aristotle"},
    { type:"Philosophy",text:"To live is to suffer, to survive is to find some meaning in the suffering.",author:" Friedrich Nietzsche"},
    { type:"Philosophy",text:"The only thing I know is that I know nothing.",author:"Socrates"},
    { type:"Philosophy",text:"Man is born free, and everywhere he is in chains.",author:"Jean-Jacques Rousseau"},
    { type:"Philosophy",text:"The life of man is solitary, poor, nasty, brutish, and short.",author:"Thomas Hobbes"},
    { type:"Philosophy",text:"That which does not kill us makes us stronger.",author:"Friedrich Nietzsche"},
    { type:"Philosophy",text:"Liberty consists in doing what one desires.",author:"John Stuart Mill"},
    { type:"Philosophy",text:"Knowing yourself is the beginning of all wisdom.",author:"Aristotle"},
    { type: "Philosophy", text: "Time is a flat circle.", author: "Friedrich Nietzsche" },
    { type: "Philosophy", text: "Man is the measure of all things.", author: "Protagoras" },
    { type: "Philosophy", text: "One cannot step twice into the same river.", author: "Heraclitus" },
    { type: "Philosophy", text: "Life must be lived as play.", author: "Plato" },
    { type: "Philosophy", text: "All is one.", author: "Parmenides" },
    { type: "Philosophy", text: "The mind is everything.", author: "Buddha" },
    { type: "Philosophy", text: "Hope is a waking dream.", author: "Aristotle" },
    { type: "Philosophy", text: "The fear of death is the most unjustified of all fears.", author: "Albert Einstein" },
    { type: "Philosophy", text: "Nature does nothing in vain.", author: "Aristotle" },
    { type: "Philosophy", text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { type: "Philosophy", text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { type: "Philosophy", text: "Freedom is the freedom to say that two plus two makes four.", author: "George Orwell" },
    { type: "Philosophy", text: "Do not spoil what you have by desiring what you have not.", author: "Epicurus" },
    { type: "Philosophy", text: "The only way to deal with this life meaningfully is to find a way to laugh at it.", author: "Albert Camus" },
    { type: "Philosophy", text: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard" },
    { type: "Philosophy", text: "The greatest wealth is to live content with little.", author: "Plato" },
    { type: "Philosophy", text: "The more you know, the more you realize you don’t know.", author: "Aristotle" },
    { type: "Philosophy", text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { type: "Philosophy", text: "No great mind has ever existed without a touch of madness.", author: "Aristotle" },
    { type: "Literature", text: "It is our choices, Harry, that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { type: "Literature", text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", author: "Jane Austen" },
    { type: "Literature", text: "So we beat on, boats against the current, borne back ceaselessly into the past.", author: "F. Scott Fitzgerald" },
  { type: "Literature", text: "The only way out of the labyrinth of suffering is to forgive.", author: "John Green" },
  { type: "Literature", text: "All we have to decide is what to do with the time that is given us.", author: "J.R.R. Tolkien" },
  { type: "Literature", text: "It was the best of times, it was the worst of times.", author: "Charles Dickens" },
  { type: "Literature", text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
  { type: "Literature", text: "Get busy living or get busy dying.", author: "Stephen King" },
  { type: "Literature", text: "I am no bird; and no net ensnares me: I am a free human being with an independent will.", author: "Charlotte Brontë" },
  { type: "Literature", text: "The world breaks everyone, and afterward, many are strong at the broken places.", author: "Ernest Hemingway" },
  { type: "Literature", text: "To be, or not to be, that is the question.", author: "William Shakespeare" },
  { type: "Literature", text: "Stay gold, Ponyboy. Stay gold.", author: "S.E. Hinton" },
  { type: "Literature", text: "It’s no use going back to yesterday, because I was a different person then.", author: "Lewis Carroll" },
  { type: "Literature", text: "Call me Ishmael.", author: "Herman Melville" },
  { type: "Literature", text: "Until I feared I would lose it, I never loved to read. One does not love breathing.", author: "Harper Lee" },
  { type: "Literature", text: "There is some good in this world, and it’s worth fighting for.", author: "J.R.R. Tolkien" },
  { type: "Literature", text: "It matters not what someone is born, but what they grow to be.", author: "J.K. Rowling" },
  { type: "Literature", text: "You never really understand a person until you consider things from his point of view.", author: "Harper Lee" },
  { type: "Literature", text: "Hell is empty and all the devils are here.", author: "William Shakespeare" },
  { type: "Literature", text: "We are all fools in love.", author: "Jane Austen" },
  { type: "Literature", text: "Tomorrow I’ll think of some way to get him back. After all, tomorrow is another day.", author: "Margaret Mitchell" },
  { type: "Literature", text: "The past is not dead. It’s not even past.", author: "William Faulkner" },
  { type: "Literature", text: "We are such stuff as dreams are made on.", author: "William Shakespeare" },
  { type: "Literature", text: "I can’t go back to yesterday—I was a different person then.", author: "Lewis Carroll" },
  { type: "Science", text: "Science is a way of thinking much more than it is a body of knowledge.", author: "Carl Sagan" },
  { type: "Science", text: "Science is not only a disciple of reason but also one of romance and passion.", author: "Stephen Hawking" },
  { type: "Science", text: "The heart of science is measurement.", author: "Erik Brynjolfsson" },
  { type: "Science", text: "Science is magic that works.", author: "Kurt Vonnegut" },
  { type: "Science", text: "Hubris and science are incompatible.", author: "Douglas Preston" },
  { type: "Science", text: "Science is not finished until it is communicated.", author: "Mark Walport" },
  { type: "Science", text: "Science does not permit exceptions.", author: "Claude Bernard" },
  { type: "Science", text: "Science is a beautiful gift to humanity; we should not distort it.", author: "A. P. J. Abdul Kalam" },
  { type: "Science", text: "Science is fun. Science is curiosity. We all have natural curiosity.", author: "Sally Ride" },
  { type: "Science", text: "Science knows no country, because knowledge belongs to humanity.", author: "Louis Pasteur" },
  { type: "Science", text: "Science, like art, religion, commerce, warfare, and even sleep, is based on presuppositions.", author: "Gregory Bateson" },
  { type: "Science", text: "No science is immune to the infection of politics and the corruption of power.", author: "Jacob Bronowski" },
  { type: "Science", text: "Science without conscience is the death of the soul.", author: "Francois Rabelais" },
  { type: "Science", text: "In all science, error precedes the truth.", author: "Horace Walpole" },
  { type: "Science", text: "In science, the credit goes to the man who convinces the world.", author: "Francis Darwin" },
  { type: "Science", text: "Science is but an image of the truth.", author: "Francis Bacon" },
  { type: "Science", text: "Science is about developing an understanding of the world and testing predictions.", author: "Brian Schmidt" },
  { type: "Science", text: "There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance.", author: "Hippocrates" },
  { type: "Science", text: "Science is wonderfully equipped to answer the question ‘How?’ but struggles with ‘Why?’", author: "Erwin Chargaff" },
  { type: "Science", text: "Science has not yet taught us if madness is or is not the sublimity of intelligence.", author: "Edgar Allan Poe" },
  { type: "Science", text: "I am among those who think that science has great beauty.", author: "Marie Curie" },
  { type: "Science", text: "Science and technology are the keys to both our longevity and our demise.", author: "Rhys Darby" },
  { type: "Science", text: "Science gives us knowledge, but only philosophy can give us wisdom.", author: "Will Durant" },
  { type: "Science", text: "Science requires reasoning, while other subjects may require only scholarship.", author: "Robert A. Heinlein" },
  { type: "Science", text: "Every great advance in science has issued from a new audacity of imagination.", author: "John Dewey" },
  { type: "Science", text: "Science is made up of mistakes that lead gradually to the truth.", author: "Jules Verne" },
  { type: "Science", text: "Scientific research is one of the most exciting and rewarding occupations.", author: "Frederick Sanger" },
  { type: "Science", text: "Science grows like a weed every year.", author: "Kary Mullis" },
  { type: "Science", text: "Science is simply common sense at its best.", author: "Thomas Huxley" },
  { type: "Science", text: "Art is I; science is we.", author: "Claude Bernard" },
  { type: "Science", text: "Science has made us gods even before we are worthy of being men.", author: "Jean Rostand" },
  { type: "Science", text: "I believe there are no questions that science can’t answer about a physical universe.", author: "Stephen Hawking" },
  { type: "Science", text: "Science is like a love affair with nature.", author: "Vilayanur S. Ramachandran" },
   { type: "Life", text: "A happy life consists in the tranquility of mind.", author: "Marcus Tullius Cicero" },
  { type: "Life", text: "Almost nothing material is needed for a happy life.", author: "Marcus Aurelius" },
  { type: "Life", text: "The realization that life is absurd cannot be an end, but only a beginning.", author: "Albert Camus" },
  { type: "Life", text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
  { type: "Life", text: "Three things in life – your health, your mission, and the people you love.", author: "Naval Ravikant" },
  { type: "Life", text: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" },
  { type: "Life", text: "Difficult and meaningful will always bring more satisfaction than easy and meaningless.", author: "Maxime Lagacé" },
  { type: "Life", text: "Very little is needed to make a happy life; it is all within yourself.", author: "Marcus Aurelius" },
  { type: "Life", text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { type: "Life", text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { type: "Life", text: "Do not squander time, for that is the stuff life is made of.", author: "Benjamin Franklin" },
  { type: "Life", text: "It’s a terrible thing in life to wait until you’re ready.", author: "Hugh Laurie" },
  { type: "Life", text: "You’ll never change your life until you change something you do daily.", author: "John C. Maxwell" },
  { type: "Life", text: "Man is made by his belief. As he believes so he is.", author: "Bhagavad Gita" },
  { type: "Life", text: "Life is a book you write, not a movie you watch.", author: "Maxime Lagacé" },
  { type: "Life", text: "My life is my message.", author: "Mahatma Gandhi" },
  { type: "Life", text: "Life is a mountain. Your goal is to find your path.", author: "Maxime Lagacé" },
  { type: "Life", text: "It’s the possibility of having a dream come true that makes life interesting.", author: "Paulo Coelho" },
  { type: "Life", text: "It’s not the years in your life that count. It’s the life in your years.", author: "Abraham Lincoln" },
  { type: "Life", text: "Live the life that only you can live.", author: "Naval Ravikant" },
  { type: "Life", text: "Don’t search for the meaning of life. Simply be present for the people you love.", author: "Maxime Lagacé" },
  { type: "Life", text: "You cannot be afraid to disappoint people. You have to live the life you want.", author: "David Goggins" },
  { type: "Life", text: "Life is nothing but a mirror of your consistent thoughts.", author: "Tony Robbins" },
  { type: "Life", text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { type: "Life", text: "Life isn’t a matter of milestones, but of moments.", author: "Rose Kennedy" },
  { type: "Life", text: "You can’t think your way into a better life, you have to live it.", author: "Mark Manson" },
  { type: "Life", text: "The mind is everything. What you think you become.", author: "Buddha" },
  { type: "Life", text: "Each person’s task in life is to become a better person.", author: "Leo Tolstoy" },
  { type: "Life", text: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
  { type: "Life", text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { type: "Life", text: "It is better to have loved and lost than never to have loved at all.", author: "Augustine of Hippo" },
  { type: "Life", text: "If you want to live a happy life, tie it to a goal.", author: "Albert Einstein" },
  { type: "Life", text: "The cost for the good life is giving up comfort.", author: "Maxime Lagacé" },
  { type: "Life", text: "Life is only meaningful when we are striving for a goal.", author: "Aristotle" },
  { type: "Life", text: "Go confidently in the direction of your dreams.", author: "Henry David Thoreau" },
  { type: "Life", text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { type: "Courage", text: "Courage is a perfect sensibility of the measure of danger, and a mental willingness to endure it.", author: "William Tecumseh Sherman" },
  { type: "Courage", text: "Courage is the resolution to face the unforeseen.", author: "Agatha Christie" },
  { type: "Courage", text: "Courage is the complexion of virtue.", author: "Diogenes Laertius" },
  { type: "Courage", text: "Courage is a kind of salvation.", author: "Plato" },
  { type: "Courage", text: "Courage is the power of the mind to overcome fear.", author: "Martin Luther King Jr." },
  { type: "Courage", text: "Courage is found in unlikely places.", author: "J. R. R. Tolkien" },
  { type: "Courage", text: "Courage is an inner resolution to go forward despite obstacles.", author: "Martin Luther King Jr." },
  { type: "Courage", text: "Courage is one step ahead of fear.", author: "Coleman Young" },
  { type: "Courage", text: "Courage in danger is half the battle.", author: "Plautus" },
  { type: "Courage", text: "Courage is the enforcing virtue that makes all others possible.", author: "John McCain" },
  { type: "Courage", text: "Courage is the ability to do the right thing no matter how painful it is.", author: "Tony Dungy" },
  { type: "Courage", text: "Courage is a peculiar kind of fear.", author: "Charles Kennedy" },
  { type: "Courage", text: "Courage is a mean with regard to fear and confidence.", author: "Aristotle" },
  { type: "Courage", text: "Courage is like love; it must have hope to nourish it.", author: "Napoleon Bonaparte" },
  { type: "Courage", text: "Courage conquers all things.", author: "Ovid" },
  { type: "Courage", text: "Being deeply loved gives you strength; loving deeply gives you courage.", author: "Lao Tzu" },
  { type: "Courage", text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { type: "Courage", text: "Courage is resistance to fear, not absence of fear.", author: "Mark Twain" },
  { type: "Courage", text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali" },
  { type: "Courage", text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
  { type: "Courage", text: "Everyone has talent. What's rare is the courage to follow it.", author: "Erica Jong" },
  { type: "Courage", text: "A winner is a dreamer who never gives up.", author: "Nelson Mandela" },
  { type: "Courage", text: "The greatest test of courage is to bear defeat without losing heart.", author: "Robert G. Ingersoll" },
  { type: "Courage", text: "Efforts and courage are not enough without purpose and direction.", author: "John F. Kennedy" },
  { type: "Courage", text: "You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner" },
  { type: "Courage", text: "Courage is being scared to death and saddling up anyway.", author: "John Wayne" },
  { type: "Courage", text: "The lion doesn't turn around when the small dog barks.", author: "Unknown" },
  { type: "Courage", text: "Courage is fear holding on a minute longer.", author: "George S. Patton" },
  { type: "Courage", text: "A true leader has the courage to make tough decisions.", author: "Unknown" },
  { type: "Courage", text: "Courage is not the absence of fear, but the conquest of it.", author: "William Danforth" },
  { type: "Courage", text: "Courage is like a muscle; we strengthen it with use.", author: "Ruth Gordon" },
  { type: "Courage", text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { type: "Courage", text: "Courage is going from failure to failure without losing enthusiasm.", author: "Winston Churchill" },
  { type: "Creativity", text: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
  { type: "Creativity", text: "Imagination is the beginning of creation.", author: "George Bernard Shaw" },
  { type: "Creativity", text: "Write while the heat is in you.", author: "Henry David Thoreau" },
  { type: "Creativity", text: "The chief enemy of creativity is good sense.", author: "Pablo Picasso" },
  { type: "Creativity", text: "To practice any art is a way to make your soul grow.", author: "Kurt Vonnegut" },
  { type: "Creativity", text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { type: "Creativity", text: "Don’t think. Thinking is the enemy of creativity.", author: "Ray Bradbury" },
  { type: "Creativity", text: "The worst enemy to creativity is self-doubt.", author: "Sylvia Plath" },
  { type: "Creativity", text: "Creativity takes courage.", author: "Henri Matisse" },
  { type: "Creativity", text: "You can’t wait for inspiration. You have to go after it.", author: "Jack London" },
  { type: "Creativity", text: "Creativity is inventing, experimenting, growing, taking risks, and having fun.", author: "Mary Lou Cook" },
  { type: "Creativity", text: "To be creative means to be in love with life.", author: "Osho" },
  { type: "Creativity", text: "Art is not what you see, but what you make others see.", author: "Edgar Degas" },
  { type: "Creativity", text: "Every child is an artist. The problem is how to remain one.", author: "Pablo Picasso" },
  { type: "Creativity", text: "Creativity is allowing yourself to make mistakes.", author: "Scott Adams" },
  { type: "Creativity", text: "The desire to create is one of the deepest yearnings of the human soul.", author: "Dieter F. Uchtdorf" },
  { type: "Creativity", text: "Creativity involves breaking out of established patterns.", author: "Edward de Bono" },
  { type: "Creativity", text: "Have no fear of perfection—you’ll never reach it.", author: "Salvador Dalí" },
  { type: "Creativity", text: "To draw, you must close your eyes and sing.", author: "Pablo Picasso" },
  { type: "Creativity", text: "Design is thinking made visual.", author: "Saul Bass" },
  { type: "Creativity", text: "Creativity is seeing something that doesn’t exist already.", author: "Michele Shea" },
  { type: "Creativity", text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { type: "Creativity", text: "The true sign of intelligence is imagination.", author: "Albert Einstein" },
  { type: "Creativity", text: "I have not failed. I’ve just found ways that won’t work.", author: "Thomas Edison" },
  { type: "Creativity", text: "Creativity is thinking up new things. Innovation is doing new things.", author: "Theodore Levitt" },
  { type: "Creativity", text: "Necessity is the mother of invention.", author: "Plato" },
  { type: "Creativity", text: "To invent, you need imagination and a pile of junk.", author: "Thomas Edison" },
  { type: "Creativity", text: "Science is the process that takes us from confusion to understanding.", author: "Brian Greene" },
  { type: "Creativity", text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { type: "Creativity", text: "Creativity is the power to connect the seemingly unconnected.", author: "William Plomer" }
];
//filter function for cartegories
function filterCatergory(type){
    return allquotes.filter(q=>q.type.toLowerCase()===type.toLowerCase());
};
//pill 
let home=document.querySelector("#home")
const category=document.querySelector(".category");
const quote=document.querySelector(".quote");
const author_letter=document.querySelector(".author-letter");
const author_name=document.querySelector(".author-name");
let pills=document.querySelectorAll(".pill");
pills.forEach((pill)=>{
    pill.addEventListener("click",()=>{
        pills.forEach(p=>p.classList.remove("pill-active"));
        pill.classList.add("pill-active");
        let filter= filterCatergory(pill.innerText);
        const type=pill.innerText;
        category.innerText=type;
        if(type.toLowerCase()==="all"){
            const random= allquotes[Math.floor(Math.random() * allquotes.length)];
            quote.innerText=random.text;
            author_letter.innerText=random.author[0];
            author_name.innerText=random.author;
        }
        else{
            const random= filter[Math.floor(Math.random() * filter.length)];
            quote.innerText=random.text;
            author_letter.innerText=random.author[0];
            author_name.innerText=random.author;
        }
    });
});
let new_quote=document.querySelector(".new-quote");
new_quote.addEventListener("click",()=>{
        let pill_active=document.querySelector(".pill-active");
        let filter= filterCatergory(pill_active.innerText);
        const type=pill_active.innerText;
        category.innerText=type;
        if(type.toLowerCase()==="all"){
            const random= allquotes[Math.floor(Math.random() * allquotes.length)];
            quote.innerText=random.text;
            author_letter.innerText=random.author[0];
            author_name.innerText=random.author;
        }
        else{
            const random= filter[Math.floor(Math.random() * filter.length)];
            quote.innerText=random.text;
            author_letter.innerText=random.author[0];
            author_name.innerText=random.author;
        }
});
let button=document.querySelectorAll("button");
button.forEach((btn) =>{
    btn.addEventListener("mouseenter", () => {
        if(!btn.classList.contains("new-quote")&&!btn.classList.contains("save")){
            btn.classList.add("animate-slide-up","border-ink2","text-ink3");
        }
        else if(btn.classList.contains("save")){
            btn.classList.add("animate-slide-up","border-pink","text-pink");
        }
        else{
            btn.classList.add("animate-slide-up");
        }
    });
    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("animate-slide-up","border-ink2","border-pink","text-pink","text-ink3");
        void btn.offsetWidth;
    });
});
//explore
let explore= document.querySelectorAll(".exploring");
const quote_grid=document.querySelector(".quote-grid");
function renderquotes(){
    quote_grid.innerHTML="";
    for(let i=0;i<30;i++){
        let random=allquotes[Math.floor(Math.random()*allquotes.length)];
        let card=document.createElement("div");
        card.className="quote-card  flex flex-col text-start border p-[20px] rounded-lg gap-3";
        card.innerHTML=`
        <p class=" type text-lg gap-3 w-80 uppercase">${random.type}</p>
        <p class=" text text-2xl gap-3 w-80">"${random.text}"</p>
        <p class=" author flex  justify-start items-center text-sm gap-3 w-80"><span class="block bg-blue w-4 h-px"></span>${random.author}</p>`;
        card.addEventListener("mouseenter",()=>{
            card.classList.add("border-blue", "animate-slide-up");
        });
        card.addEventListener("mouseleave",()=>{
            card.classList.remove("border-blue", "animate-slide-up");
        });
        card.addEventListener("click",()=>{
            explore.forEach(e => e.classList.add("hidden"));
            home.classList.remove("hidden");
            category.innerText=card.querySelector(".type").innerText;
            quote.innerText=card.querySelector(".text").innerText;
            author_letter.innerText=card.querySelector(".author").innerText.trim()[0];
            author_name.innerText=card.querySelector(".author").innerText.trim();
        });
        quote_grid.appendChild(card);
    }
}
renderquotes();
//searching
function searchQuotes(query){
    return allquotes.filter(q=>
        q.type.toLowerCase().includes(query.toLowerCase())||
        q.text.toLowerCase().includes(query.toLowerCase())||
        q.author.toLowerCase().includes(query.toLowerCase())
    );
}
const searchInput=document.querySelector(".search-input");
searchInput.addEventListener("input",()=>{
    const query=searchInput.value.trim();
    if(query===""){
        renderquotes();
        return
    };
    const results=searchQuotes(query);
    renderSearchResults(results);
});
function renderSearchResults(results){
    quote_grid.innerHTML="";
    if(results.length===0){
        quote_grid.innerHTML=`<p>no results found</p>`;
        return;
    };
    results.forEach((q)=>{
        let card =document.createElement("div");
        card.className="quote-card  flex flex-col text-start border p-[20px] rounded-lg gap-3";
        card.innerHTML=`
        <p class=" type text-lg gap-3 w-80 uppercase">${q.type}</p>
        <p class=" text text-2xl gap-3 w-80">"${q.text}"</p>
        <p class=" author flex  justify-start items-center text-sm gap-3 w-80"><span class="block bg-blue w-4 h-px"></span>${q.author}</p>`;
        card.addEventListener("mouseenter",()=>{
            card.classList.add("border-blue", "animate-slide-up");
        });
        card.addEventListener("mouseleave",()=>{
            card.classList.remove("border-blue", "animate-slide-up");
        });
        card.addEventListener("click",()=>{
            explore.forEach(e => e.classList.add("hidden"));
            home.classList.remove("hidden");
            category.innerText=card.querySelector(".type").innerText;
            quote.innerText=card.querySelector(".text").innerText;
            author_letter.innerText=card.querySelector(".author").innerText.trim()[0];
            author_name.innerText=card.querySelector(".author").innerText.trim();
        });
        quote_grid.appendChild(card);
    })
};