$(document).ready(function() {
  
  let me = 0;
  let ai = 0;

  $("#rock").on("click", function(e) {
    letMeClear();
    e.preventDefault();
    $(".fresult").html(``);
    let choice = "Rock";
    if (judge(choice, aiChoice()) === "ME") {
      $("#rockk").css({ "border": "8px solid green", "border-radius": "95px" });
      $("#scissorss").css({ "border": "8px solid red", "border-radius": "95px" });
      me++;
      $(".result").html(`
                <h1 class="display-3">  You ${me} : ${ai}  AI </h1> 
           `);
    } else if (judge(choice, aiChoice()) === "Tie") {
      $("#rockk").css({ "border": "8px solid blue", "border-radius": "95px" });
      $(".result").html(`
                <h1 class="display-3">  You ${me} : ${ai}  AI </h1> 
                <h1 class="h5">Tie</h1>   
            `);
    } else {
      $("#rockk").css({ "border": "8px solid red", "border-radius": "95px" });
      $("#paperr").css({ "border": "8px solid green", "border-radius": "95px" });
      ai++;
      $(".result").html(`
                <h1 class="display-3">  You ${me} : ${ai} AI  </h1>    
            `);
    }

    checkWinner(me, ai);
  });

  $("#paper").on("click", function(e) {
    letMeClear();
    e.preventDefault();
    $(".fresult").html(``);
    let choice = "Paper";
    if (judge(choice, aiChoice()) === "ME") {
      $("#paperr").css({ "border": "8px solid green", "border-radius": "95px" });
      $("#rockk").css({ "border": "8px solid red", "border-radius": "95px" });
      me++;
      $(".result").html(`
                <h1 class="display-3"> You ${me} : ${ai}  AI</h1>    
           `);
    } else if (judge(choice, aiChoice()) === "Tie") {
      $("#paperr").css({ "border": "8px solid blue", "border-radius": "95px" });
      $(".result").html(`
                <h1 class="display-3"> You ${me} : ${ai}  AI </h1>  
                <h1 class="h5">Tie</h1>   
            `);
    } else {
      $("#paperr").css({ "border": "8px solid red", "border-radius": "95px" });
      $("#scissorss").css({
        "border": "8px solid green",
        "border-radius": "95px"
      });
      ai++;
      $(".result").html(`
                <h1 class="display-3"> You ${me} : ${ai}  AI </h1>    
            `);
    }

    checkWinner(me, ai);
  });

  $("#scissors").on("click", function(e) {
    letMeClear();
    $(".fresult").html(``);
    e.preventDefault();
    let choice = "Scissors";
    if (judge(choice, aiChoice()) === "ME") {
      $("#scissorss").css({
        "border": "8px solid green",
        "border-radius": "95px"
      });
      $("#paperr").css({ "border": "8px solid red", "border-radius": "95px" });
      me++;
      $(".result").html(`
                <h1 class="display-3"> You ${me} : ${ai}  AI</h1>   
           `);
    } else if (judge(choice, aiChoice()) === "Tie") {
      $("#scissorss").css({
        "border": "8px solid blue",
        "border-radius": "95px"
      });
      $(".result").html(`
                <h1 class="display-3"> You ${me} : ${ai}  AI </h1>  
                <p class="h3">Tie</p>    
            `);
    } else {
      $("#scissorss").css({ "border": "8px solid red", "border-radius": "95px" });
      $("#rockk").css({ "border": "8px solid green", "border-radius": "95px" });
      ai++;
      $(".result").html(`
                <h1 class="display-3"> You ${me} : ${ai}  AI</h1>    
            `);
    }

    checkWinner(me, ai);
  });

  let winsound = new Audio('/src/sound/win.mp3');
  let losesound = new Audio('/src/sound/lose.mp3');

  let checkWinner = function(first, second) {
    if (first == 3) {
      $(".fresult").html(`
        <h1 class="display-1 won">You WON </h1> 
        <p class="lead"> Click your next choice to start game again </p>
      `);
      me = 0; 
      ai = 0;
      winsound.play();
    } else if (second == 3) {
      $(".fresult").html(`
      <h1 class="display-1 lost">You Lost </h1>
      <p class="lead"> Click your next choice to start game again </p>
      `);
      me = 0;
      ai = 0;
      losesound.play();
    }
  };

  let letMeClear = function() {
    $("#rockk").css({ border: "none" });
    $("#scissorss").css({ border: "none" });
    $("#paperr").css({ border: "none" });
    winsound.pause();
    losesound.pause()
  };
});

let judge = function(me, ai) {
  switch ((me, ai)) {
    case ("Rock", "Rock"):
      return "Tie";
      break;
    case ("Rock", "Scissors"):
      return "ME";
      break;
    case ("Rock", "Paper"):
      return "Ai";
      break;
    case ("Peper", "Paper"):
      return "Tie";
      break;
    case ("Peper", "Scissors"):
      return "AI";
      break;
    case ("Peper", "Rock"):
      return "ME";
      break;
    case ("Scissors", "Paper"):
      return "ME";
      break;
    case ("Scissors", "Scissors"):
      return "TIE";
      break;
    case ("Scissors", "Rock"):
      return "AI";
      break;
    default:
      return "You Break IT";
  }
};

let aiChoice = function() {
  let random = Math.random();
  switch (true) {
    case random < 0.333:
      return "Rock";
      break;
    case random < 0.677:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
};
