import Player from "./Player.js";
import Ground from "./Ground.js";
import Sun from "./Sun.js";
import CactiController from "./CactiController.js";
import Score from "./Score.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const GAME_SPEED_START = 1; // 1.0
const GAME_SPEED_INCREMENT = 0.0000085;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 200;
const PLAYER_WIDTH = 88 / 1.5; //58
const PLAYER_HEIGHT = 94 / 1.5; //62
const MAX_JUMP_HEIGHT = GAME_HEIGHT;
const MIN_JUMP_HEIGHT = 150;
const GROUND_WIDTH = 1200;
const GROUND_HEIGHT = 96;
const GROUND_AND_CACTUS_SPEED = 0.5;

const CACTI_CONFIG = [
  { width: 90 / 1.5, height: 90 / 1.5, image: "images/cactus_1.png" },
  // { width: 98 / 1.5, height: 100 / 1.5, image: "images/cactus_2.png" },
  // { width: 68 / 1.5, height: 70 / 1.5, image: "images/cactus_3.png" },
];

//Game Objects
let player = null;
let ground = null;
let sun = null;
let cactiController = null;
let score = null;

let scaleRatio = null;
let previousTime = null;
let gameSpeed = GAME_SPEED_START;
let gameOver = false;
let gameComplete = false;
let hasAddedEventListenersForRestart = false;
let waitingToStart = true;
let formOpen = false;
console.log(formOpen)

function createSprites() {
  const playerWidthInGame = PLAYER_WIDTH * scaleRatio;
  const playerHeightInGame = PLAYER_HEIGHT * scaleRatio;
  const minJumpHeightInGame = MIN_JUMP_HEIGHT * scaleRatio;
  const maxJumpHeightInGame = MAX_JUMP_HEIGHT * scaleRatio;

  const groundWidthInGame = GROUND_WIDTH * scaleRatio;
  const groundHeightInGame = GROUND_HEIGHT * scaleRatio;

  player = new Player(
    ctx,
    playerWidthInGame,
    playerHeightInGame,
    minJumpHeightInGame,
    maxJumpHeightInGame,
    scaleRatio
  );

  ground = new Ground(
    ctx,
    groundWidthInGame,
    groundHeightInGame,
    GROUND_AND_CACTUS_SPEED,
    scaleRatio
  );

  sun = new Sun(
    ctx,
    groundWidthInGame,
    groundHeightInGame,
    GROUND_AND_CACTUS_SPEED,
    scaleRatio
  );

  const cactiImages = CACTI_CONFIG.map((cactus) => {
    const image = new Image();
    image.src = cactus.image;
    return {
      image: image,
      width: cactus.width * scaleRatio,
      height: cactus.height * scaleRatio,
    };
  });

  cactiController = new CactiController(
    ctx,
    cactiImages,
    scaleRatio,
    GROUND_AND_CACTUS_SPEED
  );

  score = new Score(ctx, scaleRatio);
}

function setScreen() {
  scaleRatio = getScaleRatio();
  canvas.width = GAME_WIDTH * scaleRatio;
  canvas.height = GAME_HEIGHT * scaleRatio;
  createSprites();
}

setScreen();
//Use setTimeout on Safari mobile rotation otherwise works fine on desktop
window.addEventListener("resize", () => setTimeout(setScreen, 500));

if (screen.orientation) {
  screen.orientation.addEventListener("change", setScreen);
}

function getScaleRatio() {
  const screenHeight = Math.min(
    window.innerHeight,
    document.documentElement.clientHeight
  );

  const screenWidth = Math.min(
    window.innerWidth,
    document.documentElement.clientWidth
  );

  //window is wider than the game width
  if (screenWidth / screenHeight < GAME_WIDTH / GAME_HEIGHT) {
    return screenWidth / GAME_WIDTH;
  } else {
    return screenHeight / GAME_HEIGHT;
  }
}

let isContinue=true;

// Validating Empty Field
function check_empty() {
  if (document.getElementById('Name').value == "" || document.getElementById('Email').value == "" ) {
  alert("Fill All Fields !");
  } else {
  document.getElementById("submit_btn").disabled = true;
  document.getElementById("submit_btn").value="Loading...";
  // document.getElementById('form').submit();
  console.log("1")
  var url = 'https://script.google.com/macros/s/AKfycbw8__iPhe4gBJPCgWOT_wbzATOCcMjLzhew_oIS3leserAEspSoTv7MOayEu0SB2yxL5A/exec';
  document.getElementById("submit_btn").ariaDisabled="true"
    //get the form from DOM (Document object model) 
    var form = document.getElementById('form');
        var xhr = new XMLHttpRequest();
        var data = new FormData(form);
        //Add extra data to form before submission.
     //    data.append("referer","https://example.com");
        //open the request
        xhr.open('POST',url)
        //send the form data
        xhr.send(data);
 
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              formOpen=false;
  // alert("Form Submitted Successfully...");
  document.getElementById("submit_btn").value="Success";
  document.getElementById("submit_btn").disabled = false;
  document.getElementById("submit_btn").value="Submit";

                form.reset(); //reset form after AJAX success.
                div_hide();
                continueGame();
  console.log("2");

            }else{
  document.getElementById("submit_btn").disabled = false;
  document.getElementById("submit_btn").value="Submit";
            }
        }
        console.log("3")
  
        //Dont submit the form.
        return false; 
  

  }
  }
  //Function To Display Popup
  function div_show() {
  document.getElementById('abc').style.display = "block";
  }
  //Function to Hide Popup
  function div_hide(){
  document.getElementById('abc').style.display = "none";
  }
  document.getElementById("submit_btn").addEventListener('click', () => { 
    check_empty()
  } )
  
function showPopup(){
  if(isContinue){
  formOpen=true;
    if (!hasAddedEventListenersForRestart) {
      hasAddedEventListenersForRestart = true;
  
      setTimeout(() => {
        // window.addEventListener("keyup", continueGame, { once: true });
        // window.addEventListener("touchstart", continueGame, { once: true });
      }, 1000);
    }
    alert("Game over, fill details to get a chance to continue");
    div_show();
    // continueGame();
  }else{
    setupGameReset();
    
  }
  // Add popup code
  isContinue=false
}

function showGameOver() {
  const fontSize = 70 * scaleRatio;
  ctx.font = `${fontSize}px Verdana`;
  ctx.fillStyle = "grey";
  const x = canvas.width / 4.5;
  const y = canvas.height / 2;
  ctx.fillText("GAME OVER", x, y);
  showPopup();
}
function showGameComplete() {
  const fontSize = 70 * scaleRatio;
  ctx.font = `${fontSize}px Verdana`;
  ctx.fillStyle = "grey";
  const x = canvas.width / 7;
  const y = canvas.height / 2;
  ctx.fillText("GAME COMPLETE", x, y);
  // showPopup();
  // setupGameReset()
}

function setupGameReset() {
  if (!hasAddedEventListenersForRestart) {
    hasAddedEventListenersForRestart = true;

    setTimeout(() => {
      window.addEventListener("keyup", reset, { once: true });
      window.addEventListener("touchstart", reset, { once: true });
    }, 1000);
  }
}

function reset() {
  if(!formOpen){
    isContinue=true;
    hasAddedEventListenersForRestart = false;
    gameOver = false;
    gameComplete = false;
    waitingToStart = false;
    ground.reset();
    cactiController.reset();
    score.reset();
    gameSpeed = GAME_SPEED_START;
  }
}
function continueGame() {
  if(!formOpen){
    cactiController.reset();
    hasAddedEventListenersForRestart = false;
    gameOver = false;
    waitingToStart = false;
    // ground.reset();
    // cactiController.reset();
  }
}
function showStartGameText() {
  const fontSize = 40 * scaleRatio;
  ctx.font = `${fontSize}px Verdana`;
  ctx.fillStyle = "grey";
  const x = canvas.width / 14;
  const y = canvas.height / 2;
  ctx.fillText("Tap Screen or Press Space To Start", x, y);
}



function updateGameSpeed(frameTimeDelta) {
  gameSpeed += frameTimeDelta * GAME_SPEED_INCREMENT;
}

function clearScreen() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function gameLoop(currentTime) {
  if (previousTime === null) {
    previousTime = currentTime;
    requestAnimationFrame(gameLoop);
    return;
  }
  const frameTimeDelta = currentTime - previousTime;
  previousTime = currentTime;
  clearScreen();

  if (!gameOver && !waitingToStart && !gameComplete) {
    var scoreCurr = score.score;
    var delay = 0;
    if(scoreCurr>1999){
    switch (true) {    
      // level 1
      case (scoreCurr > 1999 && scoreCurr < 2001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[0].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[0].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 2
      case (scoreCurr > 3999 && scoreCurr < 4001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[1].classList.add("show");
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[1].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 3
      case (scoreCurr > 5999 && scoreCurr < 6001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[2].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[2].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 4
      case (scoreCurr > 7999 && scoreCurr < 8001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[3].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")        
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[3].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 5
      case (scoreCurr > 9999 && scoreCurr < 10001):
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[4].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[4].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 6
      case (scoreCurr > 11999 && scoreCurr < 12001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[5].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[5].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 7
      case (scoreCurr > 13999 && scoreCurr < 14001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[6].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[6].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 8
      case (scoreCurr > 15999 && scoreCurr < 16001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[7].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[7].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 9
      case (scoreCurr > 17999 && scoreCurr < 18001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[8].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[8].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // level 10
      case (scoreCurr > 19999 && scoreCurr < 20001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[9].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[9].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")

        },15000)        
         
        break;
        
      // level 11
      case (scoreCurr > 21999 && scoreCurr < 22001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[10].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[10].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")

        },15000)        
         
        break;
        
      // level 12
      case (scoreCurr > 23999 && scoreCurr < 24001):        
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[11].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[11].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)        
         
        break;
        
      // game complete
      case (scoreCurr < 25999 && scoreCurr>26001):
        // var audio = new Audio('audio/point.mp3');
        // audio.play();
        document.getElementsByClassName("image_container")[12].classList.add("show")
        document.getElementsByClassName("logo")[0].classList.add("hide")
        setTimeout(()=>{
          document.getElementsByClassName("image_container")[12].classList.remove("show")
        document.getElementsByClassName("logo")[0].classList.remove("hide")
        },15000)  
        //Update game objects
         
        gameComplete=true;
        break;                
     
        default:
        //Update game objects
    // ground.update(gameSpeed, frameTimeDelta);
    // cactiController.update(gameSpeed, frameTimeDelta);
    // player.update(gameSpeed, frameTimeDelta);
    // score.update(frameTimeDelta);   
    // updateGameSpeed(frameTimeDelta);
  }
}
    //Update game objects
    ground.update(gameSpeed, frameTimeDelta);
    cactiController.update(gameSpeed, frameTimeDelta);
    player.update(gameSpeed, frameTimeDelta);
    score.update(frameTimeDelta);
   
    updateGameSpeed(frameTimeDelta);
  }

  if (!gameOver && cactiController.collideWith(player)) {
    // var audio = new Audio('audio/die.mp3');
    // audio.play();
    // setTimeout(()=>{
      gameOver = true;
      score.setHighScore();

    // },1)

    // setupGameReset();
  }

  //Draw game objects
  ground.draw();
  cactiController.draw();
  player.draw();
  score.draw();
  sun.draw();

  if (gameComplete) {
    showGameComplete();
  }else if (gameOver) {
    showGameOver();
  }
  

  if (waitingToStart) {
    showStartGameText();
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
// setupGameReset();
window.addEventListener("keyup", reset, { once: true });
window.addEventListener("touchstart", reset, { once: true });
