function showMeals() {
  var mealTime = document.getElementById("meal-time").value;
  var mealList = document.getElementById("meal-list");

  mealList.innerHTML = "";
  mealList.className = "meal-list"

  if (mealTime === "Morning") {
    mealList.innerHTML =
      `<h3>Morning:</h3><ul><li>Firfir</li><li>Bread</li><li>Tea</li></ul>`;
  } else if (mealTime === "Afternoon") {
    mealList.innerHTML =
      `<h3>Afternoon:</h3><ul><li>Shiro</li><li>Bread</li><li>Therefore</li></ul>`;
  } else if (mealTime === "Evening") {
    mealList.innerHTML =
      `<h3>Evening:</h3><ul><li>Shiro</li><li>Bread</li><li>pasta</li></ul>`;
  }
}