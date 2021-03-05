let resumeBtn = document.getElementById("resume-button");
resumeBtn.addEventListener("click", loadPdf);

let current_position = scrollY;
let last_position = 0;

window.onload = function() {
  close_nav();
  more_button();
}

/*
 * Onload we add event listeners to the navlinks which will close the 
 * expanded navbar on click 
*/
function close_nav() {

  // Returns an array of the nav-link html elements
  let nav_links = document.getElementsByClassName("nav-link");

  // Returns the html hamburger button
  let nav_button = document.getElementById("hamburger");

  // Loop through the links and add an event listener
  for (let i=0; i < nav_links.length; i++) {
    // on click this eventlistener "clicks" the navbutton closing the menu
    nav_links[i].addEventListener('click', function() {

      if (nav_button.getAttribute("aria-expanded") == "true") {

        nav_button.click();
      }
    });
  };
};

/*
 * Onload we add event listeners to see if a click occurs outside the navbar while it's expanded.
 * If this occurs we "click" the nav_button closing the menu.
*/
window.addEventListener('click', function(event) {

  // Get the hamburger button and the navbar itself.
  let my_button = document.getElementById("hamburger");
  let navBar = document.getElementById("navarino");

  // We detect if a click occured outside of our navbar and if the nav bar is expanded.
  // If it is, we close it. 
  if (navBar.contains(event.target) == false && my_button.getAttribute("aria-expanded") == "true") {

    my_button.click();

  }
});


/*
* Onload we add another function to the "See More" button which will display three more projects.
*/
function more_button() {

  // Get the button and hidden cards 
  let moreBtn = document.getElementById("see-more");
  let alertBox = document.getElementById("alert-msg");
  let hiddenProjects = document.getElementsByClassName("hide-this");

  moreBtn.addEventListener('click', function () {
    
    if (hiddenProjects.length != 0) {

      for (var j=0; j < 3; j++) {

        // The hidden projects collection updates with each 
        // iteration so taking the first element is easiest
        hiddenProjects[0].classList.remove("hide-this");

      };
    }
    
    else {

      alertBox.classList.remove("hidden-message");

    }


  });
};

  function loadPdf() {
    window.open("media/ResumeMarch2021.pdf")
  } 

  /* Event listener to implement the navbars disappearing
  // effect on scroll
  */
  window.addEventListener('scroll', function() {
  
    let navBar = document.getElementById("navarino");
  
    current_position = window.scrollY;
  
    // Scrolling down
    if (last_position < current_position - 10) {
      navBar.classList.add("navbar-hide");
      last_position = current_position;
    }
    // Scrolling up
    if (last_position > current_position) {
      navBar.classList.remove("navbar-hide");
      last_position = current_position;
    }
  });


/* function loadPdf() {
  window.open("Resume June 2020.pdf")
} */
