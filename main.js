
const search = document.getElementById("search");

function searchByIngredients(){
    const input = document.getElementById("input");
    input.placeholder = "Enter Ingredient name";
    input.value = "";
    input.style.display = "flex";

    const btn = document.getElementById("btn");
    btn.onclick = searching;
    btn.style.display = "flex";

    function searching(){
         const inpI = document.getElementById("input").value.trim();

        if(input.value == ""){
        alert("Enter Ingredients to Search!!");
        return;
        }

         async function getRecipe(){
         let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inpI}`);
         let data = await response.json();
         console.log(data);

         const mealList = document.getElementById("mealLists");
         mealList.innerHTML = "";

         const recipeOfMeals = document.getElementById("recipeOfMeals");
         recipeOfMeals.style.display = "none";

         if(data.meals == null){
            alert("No Meal Found!!");
            return;
         }

         const mealLists = document.getElementById("listOfMeals");
         mealLists.style.display = "flex";

         data.meals.forEach(meal =>{
            const li = document.createElement("li");
            li.innerHTML=`<h5>${meal.strMeal}</h5><img src="${meal.strMealThumb}">`;
            mealList.appendChild(li);
         }
         )
    }
    getRecipe();
 }
}

function searchByMeal(){
    const input = document.getElementById("input");
    input.placeholder = "Enter Meal name";
    input.value = "";
    input.style.display = "flex";


    const btn = document.getElementById("btn");
    btn.onclick = searching;
    btn.style.display = "flex";

     function searching(){
         const inpI = document.getElementById("input").value.trim();

        if(input.value == ""){
        alert("Enter Meals to Search!!");
        return;
        }

         async function getRecipe(){
         let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inpI}`);
         let data = await response.json();
         console.log(data);

         const mealDetails = document.getElementById("mealDetails");
         mealDetails.innerHTML = "";

         const mealLists = document.getElementById("listOfMeals");
         mealLists.style.display = "none";

         if(data.meals == null){
            alert("Recipe not Found!!");
            return;
         }

         const recipeOfMeals = document.getElementById("recipeOfMeals");
         recipeOfMeals.style.display = "flex";

         const h2 = document.createElement("h1");
         h2.setAttribute("id","MealN");
         h2.innerHTML = data.meals[0].strMeal;

         const img = document.createElement("img");
         img.src = data.meals[0].strMealThumb;
         img.setAttribute("id","mealImg");

         const h3 = document.createElement("h3");
         h3.innerHTML = "Instructions";
         h3.setAttribute("id","head");

         const h4 = document.createElement("h4");
         h4.setAttribute("id","inst");
         h4.innerHTML = data.meals[0].strInstructions;

         mealDetails.appendChild(h2);
         mealDetails.appendChild(img);
         mealDetails.appendChild(h3);
         mealDetails.appendChild(h4);

         }
        getRecipe();
    }
}

