//start button
/*document.addEventListener("DOMContentLoaded", function () {
    const welcome = document.querySelector(".welcome");
    const energy = document.querySelector(".energy");
    const button = document.querySelector(".button");
  
    button.addEventListener("click", function () {
      energy.scrollIntoView({ behavior: "smooth" });
    });
  });*/

  const welcome = document.querySelector(".welcome");
  const quiz = document.querySelector(".quiz");
  const energy = document.querySelector(".energy");
  const button = document.querySelector(".button");
  const competitive = document.querySelector(".competitive");
  const adventurous = document.querySelector(".adventurous");
  const nature = document.querySelector(".nature");
  const creative = document.querySelector(".creative");
  const highEnergy = document.querySelector(".highEnergy");
  const lowEnergy = document.querySelector(".lowEnergy");
  const highEnergyOption = document.querySelector(".highEnergyOption");
  const lowEnergyOption = document.querySelector(".lowEnergyOption");
  const indoors = document.querySelector(".indoors");
  const outdoors = document.querySelector(".outdoors");
  const goBtn = document.querySelector('button');

  goBtn.addEventListener('click', checkAnswers);
  
  console.log(quiz);
  quiz.style.display = "none";

  button.addEventListener("click", function () {
    quiz.style.display = "block";
    energy.scrollIntoView({ behavior: "smooth" });
  });


  highEnergyOption.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("energyLevelPreference", "highEnergy");
    highEnergy.scrollIntoView({ behavior: "smooth" });
    lowEnergy.style.display = "none";
  });

  lowEnergyOption.addEventListener("click", function (event) {
    event.preventDefault();
    //alert("Clicked lowEnergyOption");
    localStorage.setItem("energyLevelPreference", "lowEnergy");
    highEnergy.style.display = "none";
    lowEnergy.scrollIntoView({ behavior: "smooth" });
  });

  competitive.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("activityPreference", "competitive");
    document.querySelector(".location").scrollIntoView({ behavior: "smooth" });
  });

  adventurous.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("activityPreference", "adventurous");
    document.querySelector(".location").scrollIntoView({ behavior: "smooth" });
  });

  nature.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("activityPreference", "nature");
    document.querySelector(".location").scrollIntoView({ behavior: "smooth" });
  });

  creative.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("activityPreference", "creative");
    document.querySelector(".location").scrollIntoView({ behavior: "smooth" });
  });
 
    indoors.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem("locationPreference", "indoors");
      
    });
    outdoors.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem("locationPreference", "outdoors");
    });


    
  
    indoors.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem("locationPreference", "indoors");
      
    });
    outdoors.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem("locationPreference", "outdoors");
    
    });



function checkAnswers() {
  // Clear all errors
  const activityPreference = localStorage.getItem("activityPreference");
  const energyLevelPreference = localStorage.getItem("energyLevelPreference");
  const locationPreference = localStorage.getItem("locationPreference");

  if (activityPreference && energyLevelPreference && locationPreference) {
    // All questions answered, redirect to results page
    window.location.href = "results.html";
  } else {
    // Display alerts for unanswered questions
    if  (!energyLevelPreference){
      alert('You skipped the first question. Please refresh the page and start again.');
    } else if (!activityPreference) {
      alert('You skipped the second question.');
    } else if (!locationPreference) {
      alert('You skipped the last question.');
    }
    // Return false to indicate that not all questions are answered
    return false;
  }
  return true;
}