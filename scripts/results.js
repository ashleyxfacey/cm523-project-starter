let energyLevelPreference = localStorage.getItem("energyLevelPreference");
let activityPreference = localStorage.getItem("activityPreference");
let locationPreference = localStorage.getItem("locationPreference");

// Decide which <ul> should be displayed based on preferences
const ulToShow = determineUlToShow(
  energyLevelPreference,
  activityPreference,
  locationPreference
);

// Display the selected <ul> and hide others
displayResults(ulToShow);

function determineUlToShow(energyLevel, activity, location) {
  // Your logic to determine which <ul> to display based on preferences
  // You can use if-else or switch statements here
  console.log(energyLevel, activity, location);

  if (
    energyLevel === "highEnergy" &&
    activity === "competitive" &&
    location === "indoors"
  ) {
    return "competitiveIndoors";
  } else if (
    energyLevel === "highEnergy" &&
    activity === "adventurous" &&
    location === "indoors"
  ) {
    return "adventurousIndoors";
  } else if (
    energyLevel === "highEnergy" &&
    activity === "competitive" &&
    location === "outdoors"
  ) {
    return "competitiveOutdoors";
  } else if (
    energyLevel === "highEnergy" &&
    activity === "adventurous" &&
    location === "outdoors"
  ) {
    return "adventurousOutdoors";
  } else if (
    energyLevel === "lowEnergy" &&
    activity === "nature" &&
    location === "outdoors"
  ) {
    return "natureOutdoors";
  } else if (
    energyLevel === "lowEnergy" &&
    activity === "nature" &&
    location === "indoors"
  ) {
    return "natureIndoors";
  } else if (
    energyLevel === "lowEnergy" &&
    activity === "creative" &&
    location === "outdoors"
  ) {
    return "creativeOutdoors";
  } else if (
    energyLevel === "lowEnergy" &&
    activity === "creative" &&
    location === "indoors"
  ) {
    return "creativeIndoors";
  } else {
    //alert('you missed a question.');
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
  localStorage.clear();
}