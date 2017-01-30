$(document).ready(function(){

  var MAX_TWEET_LENGTH = 140;
  var quote;
  var author;

  getQuote();

  function getQuote() {

    var randomColor = '#' + Math.random().toString(16).substr(-6);

      $("body").css("backgroundColor", randomColor);
      $("body").css("color", randomColor);



    var url = "http://quotes.stormconsultancy.co.uk/random.json";
    $.getJSON(url, function(data){
      console.log(data);
      quote = '"' + data.quote + '"';
      author = "~" + data.author;

      var totalLength = quote.length + author.length;
      var sliceLength = totalLength - MAX_TWEET_LENGTH + 5;


      $("#quote").html(quote);
      $("#author").html(author);

      //  Trimming the tweet to meet character length limit
       if(totalLength >= MAX_TWEET_LENGTH) {

        quote = quote.slice(0, -sliceLength) + '..."';
      }

    });
  };

$("#getQuote").on("click", function(){
  getQuote();
});

$("#tw-btn").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + quote + " \n" + author);
});


})