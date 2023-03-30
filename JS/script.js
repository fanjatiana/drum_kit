const arrayInstrument = [
  {
    id: 1,
    imgSRC: "images/tom1.png",
    sonAudio: "sounds/1.mp3",
    letter: "w",
  },
  {
    id: 2,
    imgSRC: "images/tom2.png",
    sonAudio: "sounds/2.mp3",
    letter: "a",
  },
  {
    id: 3,
    imgSRC: "images/tom3.png",
    sonAudio: "sounds/3.mp3",
    letter: "s",
  },
  {
    id: 4,
    imgSRC: "images/tom4.png",
    sonAudio: "sounds/4.mp3",
    letter: "d",
  },
  {
    id: 5,
    imgSRC: "images/crash.png",
    sonAudio: "sounds/6.mp3",
    letter: "j",
  },
  {
    id: 6,
    imgSRC: "images/snare.png",
    sonAudio: "sounds/7.mp3",
    letter: "k",
  },
  {
    id: 7,
    imgSRC: "images/kick.png",
    sonAudio: "sounds/8.mp3",
    letter: "l",
  },
];

const gallery = document.getElementById("gallery");

// affichage de la liste d'instruments dans le dom (boucle sur tableau d'objets arrayInstrument)
const addElement = arrayInstrument
  .map((music) => {
    return `
   <button  id=${music.id} style="background: url(${music.imgSRC})" >
   <div class="letter"><p>${music.letter}</></div>
        <audio id=audio${music.id} controls style="display:none" >
            <source src=${music.sonAudio} type="audio/ogg">
        </audio>   
   </button>  
  `;
  })
  .join(" ");
gallery.innerHTML = addElement;

const allbuttons = document.querySelectorAll("button");

// fonction play musique
const playMusic = (e, id) => {
  const audio = document.getElementById(`audio${id}`);
  e.preventDefault();
  audio.play();
};

// récupération de l'id du bouton cliqué
allbuttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    playMusic(e, this.id);
  });
});

// évènement touches clavier
document.addEventListener("keydown", (e) => {
  const thisLetter = e.key;
  // recupérer l'id de l'objet correspondant à la lettre tapée au clavier
  const musicLetter = arrayInstrument.find((element) => element.letter === thisLetter);
  if (musicLetter) {
    playMusic(e, musicLetter.id);
  }
});



// essai du Bonus == tssss je n'ai pas réussi (T_T)
const btnPlayMe = document.getElementById("playMe");

// test sur un array
const arrayNotes = ["w", "a", "s", "j", "j", "a"];

btnPlayMe.addEventListener("click", (e) => {
  arrayNotes.forEach((note) => {
    const matchNote = arrayInstrument.find((element) => element.letter === note);
    const audio = new Audio(matchNote.sonAudio);
    audio.play();
  });
});
