/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
Made an array of quotes and named it quotes
***/

var quotes = [
  {
    quote: 'As I review the events of my past life I realize how subtle are the influences that shape our destinies.',
    source: 'Nikola Tesla'
  }

  {
    quote: 'I believe that unarmed truth and unconditional love will have the final word in reality. This is why right, temporarily defeated, is stronger than evil triumphant',
    source: 'Dr. Martin Luther King',
    citation: 'Nobel Peace Prize acceptance speech, Oslo, Norway',
    year: '1964'
  }

  {
    quote: 'I say luck is when an opportunity comes along and you’re prepared for it.',
    source: 'Denzel Washington'
  }

  {
    quote: 'My wife asked me once if I werent a comedian what I would do. I couldnt answer the question. I never imagined doing anything else.',
    source: 'Dave Chapelle'
  }

  {
    quote: 'Stay Hungry, stay foolish',
    source: 'Steve Jobs'
  }

  {
    quote: 'Whatever you are, be a good one',
    source: 'Abraham Lincoln'
  }
];



/***
Created a function called getRandomQuotes - the exterior
***/

function getRandomQuote(array) {
  var quoteIndex = Math.floor( Math.random() * (quotes.length));
  for (var i = 0, i < array.length, i++) {
    var randomQuote = array[quoteIndex];
  }
  return randomQuote;
  }
  // var result = getRandomQuote(quotes);
  //  console.log(result);



/***
Made a function named printQuote - the interior
***/
function printQuote() {
  var message = '';
  var result = getRandomQuote(quotes);
  message = "<p class= 'quote'>" + result.quote + "</p>";
  message += "<p class= 'source'>" + result.source;
  message += "<p class= 'citation'>" + result.citation + "</span>";
  message += "<p class= 'year'>" + result.year + "</span>";
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}

printQuote();



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
