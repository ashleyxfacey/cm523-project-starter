//start button
document.addEventListener("DOMContentLoaded", function () {
    const welcome = document.querySelector(".welcome");
    const energy = document.querySelector(".energy");
    const button = document.querySelector(".button");
  
    button.addEventListener("click", function () {
      energy.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  //energyLevel preference
  document.addEventListener("DOMContentLoaded", function () {
    //  const energy = document.querySelector(".energy");
    const highEnergy = document.querySelector(".highEnergy");
    const lowEnergy = document.querySelector(".lowEnergy");
    const highEnergyOption = document.querySelector(".highEnergyOption");
    const lowEnergyOption = document.querySelector(".lowEnergyOption");
  
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
  });

  //activityPreference
  document.addEventListener("DOMContentLoaded", function () {
    const competitive = document.querySelector(".competitive");
    const adventurous = document.querySelector(".adventurous");
    const nature = document.querySelector(".nature");
    const creative = document.querySelector(".creative");
  
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
  });
  
  //locationPreference
  document.addEventListener("DOMContentLoaded", function () {
      const indoors = document.querySelector(".indoors");
      const outdoors = document.querySelector(".outdoors");
  
      indoors.addEventListener("click", function (event) {
          event.preventDefault();
          localStorage.setItem("locationPreference", "indoors");
          window.location.href = "results.html";
      });
      outdoors.addEventListener("click", function (event) {
          event.preventDefault();
          localStorage.setItem("locationPreference", "outdoors");
          window.location.href = "results.html";
  
      });
  });

  //MAKING THE RESULTS
  document.addEventListener("DOMContentLoaded", function () {
      // Retrieve the stored values from localStorage
      const energyLevelPreference = localStorage.getItem("energyLevelPreference");
      const activityPreference = localStorage.getItem("activityPreference");
      const locationPreference = localStorage.getItem("locationPreference");
  
      // Decide which <ul> should be displayed based on preferences
      const ulToShow = determineUlToShow(energyLevelPreference, activityPreference, locationPreference);
  
      // Display the selected <ul> and hide others
      displayResults(ulToShow);
  
      function determineUlToShow(energyLevel, activity, location) {
          // Your logic to determine which <ul> to display based on preferences
          // You can use if-else or switch statements here
          if (energyLevel === "highEnergy" && activity === "competitive" && location === "indoors") {
              return "competitiveIndoors";
          } else if (energyLevel === "highEnergy" && activity === "adventurous" && location === "indoors") {
              return "adventurousIndoors";
          } else if (energyLevel === "highEnergy" && activity === "competitive" && location === "outdoors") {
              return "competitiveOutdoors";
          } else if (energyLevel === "highEnergy" && activity === "adventurous" && location === "outdoors") {
              return "adventurousOutdoors";
          } else if (energyLevel === "lowEnergy" && activity === "nature" && location === "outdoors") {
              return "natureOutdoors";
          } else if (energyLevel === "lowEnergy" && activity === "nature" && location === "indoors") {
              return "natureIndoors";
          } else if (energyLevel === "lowEnergy" && activity === "creative" && location === "outdoors") {
              return "creativeOutdoors";
          } else if (energyLevel === "lowEnergy" && activity === "creative" && location === "indoors") {
              return "creativeIndoors";
          }
      }
  
      function displayResults(ulToShow) {
          // Hide all <ul> elements
          const allUlElements = document.querySelectorAll(".results ul");
        
          allUlElements.forEach((ul) => {
              ul.style.display = "none";
          });
  
          // Display the selected <ul>
          const selectedUl = document.querySelector(`.${ulToShow}`);
          if (selectedUl) {
              selectedUl.style.display = "block";
          }
      }
  });