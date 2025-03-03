
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  
document.addEventListener("DOMContentLoaded", function() {
  console.log("Document loaded and ready!");

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for your message!');
      form.reset();
  });

  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
      post.addEventListener('click', function() {
          this.classList.toggle('expanded');
      });
  });
});
