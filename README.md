# CookMate
MealFinder is a recipe search application that allows you to discover meals using either:  
The ingredients you already have 🥕🍅🥚  
Or by directly searching for a meal name 🍛  
It fetches real-time recipe data using the free TheMealDB API  and displays results with images and cooking instructions.

✨ Features

🔍 Search by Ingredients – Enter one or multiple ingredients and instantly find recipes that match.

🍴 Search by Meal Name – Look up a specific dish and view its detailed recipe.

🖼️ Dynamic Meal Cards – Results are displayed with meal names and images.

📖 Cooking Instructions – Step-by-step recipe instructions included.

⚡ Asynchronous Fetching – Uses async/await for smooth API handling.

🖥️ Simple UI – Clean, easy-to-use interface built with vanilla HTML, CSS, and JavaScript.

🚀 Demo

🔗 Live Demo Link
 (Add your GitHub Pages or Netlify link here once hosted)

📂 Project Structure
MealFinder/
│── index.html       # Main HTML page
│── style.css        # CSS styling
│── script.js        # JavaScript logic (API calls + DOM updates)
│── README.md        # Documentation

🛠️ Tech Stack

HTML5 – Page structure

CSS3 – Styling & layout

JavaScript (ES6) – API calls & dynamic rendering

TheMealDB API – Free recipe database

🌐 API Endpoints

MealFinder uses TheMealDB public API.

🔍 Search by Ingredient

https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}


Example:

https://www.themealdb.com/api/json/v1/1/filter.php?i=egg


🍴 Search by Meal Name

https://www.themealdb.com/api/json/v1/1/search.php?s={meal}


Example:

https://www.themealdb.com/api/json/v1/1/search.php?s=chicken


Ingredient Search Results

Meal Details with Recipe

⚙️ Installation & Usage

Follow these steps to run the project locally:

Clone this repository:

git clone https://github.com/Gunjan-web-dev/CookMate.git


Navigate into the project folder:

cd CookMate


Open index.html in your browser.

Start searching for meals 🍛

📖 Example Usage

Scenario 1:
You type egg → App fetches all meals that can be cooked with eggs.

Scenario 2:
You type chicken biryani → App fetches the full recipe, including instructions and image.

🎯 Future Roadmap

Planned improvements for upcoming versions:

✅ Allow clicking on meals from ingredient search → open full recipe view.

✅ Add filters by cuisine/region (e.g., Indian, Italian, Chinese).

✅ Add a favorites feature to save recipes.

✅ Improve mobile responsiveness.

✅ Add dark mode.

🤝 Contributing

Contributions are always welcome!
If you’d like to improve this project:

Fork the repository.

Create a new feature branch.

Commit your changes.

Submit a pull request.

📜 License

This project is licensed under the MIT License – feel free to use and modify it.

👨‍💻 Author

Made with ❤️ by Gunjan Mali
