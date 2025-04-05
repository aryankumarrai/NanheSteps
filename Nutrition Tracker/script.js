document.addEventListener("DOMContentLoaded", () => {
  const trimesterSelect = document.getElementById("trimester-select");
  const showTasksBtn = document.querySelector(".show-tasks-btn");
  const tasksList = document.getElementById("tasks-list");
  const categoryScreen = document.querySelector(".category-screen");
  const homeScreen = document.querySelector(".home-screen");
  const categoryTitle = document.getElementById("category-title");
  const suggestionBox = document.getElementById("suggestion-box");

  const nutrientToDos = {
    "First Trimester": {
      "Breakfast": ["✨ Folic Acid, Protein, Fiber, Calcium"],
      "Lunch": ["💪 Iron, Protein, Fiber, Vitamins"],
      "Dinner": ["🥚 Protein, Calcium, Fiber, Healthy Fats"]
    },
    "Second Trimester": {
      "Breakfast": ["🍗 Protein, Calcium, Fiber, Omega-3"],
      "Lunch": ["💪 Iron, Protein, Fiber, Vitamins"],
      "Dinner": ["🥚 Protein, Calcium, Fiber, Healthy Fats"]
    },
    "Third Trimester": {
      "Breakfast": ["🍳 Protein, Fiber, Calcium, Healthy Fats"],
      "Lunch": ["💪 Iron, Protein, Fiber, Vitamins"],
      "Dinner": ["🥗 Protein, Calcium, Fiber, Healthy Fats"]
    }
  };

  const foodSuggestions = {
    "✨ Folic Acid, Protein, Fiber, Calcium": [
      "Fortified cereal with milk and berries.",
      "Whole-grain toast with avocado and boiled eggs.",
      "Smoothie with spinach, banana, yogurt, and chia seeds."
    ],
    "💪 Iron, Protein, Fiber, Vitamins": [
      "Brown rice, dal, sautéed spinach, and curd.",
      "Grilled chicken/fish with quinoa and steamed vegetables.",
      "Whole-grain chapati with paneer curry and salad."
    ],
    "🥚 Protein, Calcium, Fiber, Healthy Fats": [
      "Grilled fish/tofu with quinoa and steamed broccoli.",
      "Khichdi (rice and lentils) with ghee and vegetables.",
      "Whole-grain chapati with vegetable curry and yogurt."
    ],
    "🍗 Protein, Calcium, Fiber, Omega-3": [
      "Oatmeal with milk, nuts, and flaxseeds.",
      "Whole-grain toast with peanut butter and a boiled egg.",
      "Smoothie with spinach, banana, yogurt, and chia seeds."
    ],
    "🥗 Protein, Calcium, Fiber, Healthy Fats": [
      "Oatmeal with milk, nuts, and berries.",
      "Whole-grain toast with avocado and boiled eggs.",
      "Smoothie with spinach, banana, yogurt, and chia seeds."
    ]
  };

  showTasksBtn.addEventListener("click", () => {
    const selectedTrimester = trimesterSelect.value;
    categoryTitle.textContent = selectedTrimester;
    tasksList.innerHTML = "";
    suggestionBox.innerHTML = "<h3>🍽️ Suggested Foods</h3>";

    Object.keys(nutrientToDos[selectedTrimester]).forEach(meal => {
      const nutrient = nutrientToDos[selectedTrimester][meal].join(", ");
      const mealHeading = document.createElement("h4");
      mealHeading.textContent = meal;
      tasksList.appendChild(mealHeading);

      const taskItem = document.createElement("li");
      taskItem.innerHTML = `<input type="checkbox" /> ${nutrient}`;
      tasksList.appendChild(taskItem);

      if (foodSuggestions[nutrient]) {
        const suggestionItem = document.createElement("p");
        suggestionItem.innerHTML = `<strong>Food Suggestions for ${nutrient}:</strong> ${foodSuggestions[nutrient].join(", ")}`;
        suggestionBox.appendChild(suggestionItem);
      }
    });

    homeScreen.style.display = "none";
    categoryScreen.style.display = "block";
  });

  const backBtn = document.createElement("button");
  backBtn.textContent = "⬅️ Back";
  backBtn.classList.add("back-btn");
  categoryScreen.prepend(backBtn);

  backBtn.addEventListener("click", () => {
    categoryScreen.style.display = "none";
    homeScreen.style.display = "block";
  });
});
