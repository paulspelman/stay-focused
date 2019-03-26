function setColors() {
  var bgColors = [
    ["#9F5557", "#894A53", "#713E4E", "#60364B", "#4F2D47"],
    ["#3A888A", "#2E6F7C", "#245B71", "#1A4564", "#13345B"],
    ["#844472", "#753C6E", "#663469", "#582E66", "#492661"]
  ];
  var randomColorSet = bgColors[Math.floor(Math.random() * bgColors.length)];
  document.querySelector("#background").setAttribute("fill", randomColorSet[0]);
  document.querySelector("#shape1").setAttribute("fill", randomColorSet[1]);
  document.querySelector("#shape2").setAttribute("fill", randomColorSet[2]);
  document.querySelector("#shape3").setAttribute("fill", randomColorSet[3]);
  document.querySelector("#shape4").setAttribute("fill", randomColorSet[4]);
  previousSet = randomColorSet;
 }

function displayQuoteAndAuthor() {
var displayQuote = document.querySelector('.quote');
var displayAuthor = document.querySelector('.author');
var quotesAndAuthors = [
  [
    "What we choose to focus on and what we choose to ignore - plays in defining the quality of our life.",
    "Cal Newport"
  ],
  [
    "Constant motion is the key to execution.",
    "Scott Belsky"
  ],
  [
    "The people who get what they're after are very often the ones who just stick around long enough.",
    "Austin Kleon"
  ],
  [
    "If you don’t produce, you won’t thrive - no matter how skilled or talented you are.",
    "Cal Newport"
  ],
  [
    "Who you are, what you think, feel, and do, what you love — is the sum of what you focus on.",
    "Cal Newport"
  ],
  [ "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
    "Zig Zeglar"
  ],
  [
    "The most important thing about art is to work. Nothing else matters except sitting down every day and trying.",
    "Steven Pressfield" 
  ],
  [
    "The professional concentrates on the work and allows rewards to come or not come, whatever they like.",
    "Steven Pressfield"
  ],
  [
    "The most pernicious aspect of procrastination is that it can become a habit - we don't just put off our lives today; we put them off till our deathbed.",
    "Steven Pressfield"
  ],
  [
    "The more resistance you experience, the more important your unmanifested project is to you - and the more gratification you will feel when you finally do it.",
    "Steven Pressfield"
  ],
  [
    "Who you are is defined by what you’re willing to struggle for.",
    "Mark Manson"
  ],
  [
    "Frustration isn’t an interruption of your process. Frustration is the process.",
    "Elizabeth Gilbert"
  ],
  [
    "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
    "Dwayne Johnson"
  ],
  [
    "Perseverance is the hard work you do after you get tired of doing the hard work you already did.",
    "Newt Gingrich"
  ],
  [
    "What you stay focused on will grow.",
    "Roy T Bennet"
  ],
  [
    "The time that leads to mastery is dependent on the intensity of our focus.",
    "Robert Greene"
  ],
  [
    "Inspiration is the windfall from hard work and focus. Muses are too unreliable to keep on the payroll.",
    "Helen Hanson"
  ],
  [
    "Be on guard. The road widens, and many of the detours are seductive.",
    "David Foster Wallace"
  ],
  [
    "What you do every day matters more than what you do once in a while.",
    "Gretchen Rubin"
  ],
  [
    "Enthusiasm is more important than innate ability, it turns out, because the single more important element in developing an expertise is your willingness to practice.",
    "Gretchen Rubin"
  ],
  [
    "I can do anything I want, but I can't do everything I want.",
    "Gretchen Rubin"
  ],
  [
    "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    "Will Durant"
  ]
];
var randomPair = quotesAndAuthors[Math.floor(Math.random() * quotesAndAuthors.length)];
var newQuote = randomPair[0];
var newAuthor = randomPair[1];
displayQuote.textContent = newQuote;
displayAuthor.textContent = '- ' + newAuthor;
}

window.addEventListener("load", displayQuoteAndAuthor);
window.addEventListener("load", setColors);
