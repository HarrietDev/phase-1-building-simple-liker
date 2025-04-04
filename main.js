// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const h2 = document.querySelector("#modal  h2");
h2.classList.add("hidden");
console.log(h2)

const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(heart =>{
  heart.addEventListener("click", () =>{
    mimicServerCall()
    .then(() =>{
      if (heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART; // make full heart
        heart.classList.add("activated-heart"); // turn it red
      }else {
        heart.innerText = EMPTY_HEART;   // go back to empty heart
        heart.classList.remove("activated-heart"); //remove red
      }
    })
    .catch(error => {
      const modal = document.getElementById("modal");
      const modalMessage = document.getElementById("modal-message");

      modal.classList.remove("hidden");
      modalMessage.innerText = error;

      setTimeout(()=>{
        modal.classList.add("hidden")
      }, 3000);
    }
    )
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
