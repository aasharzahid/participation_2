function searchMeals() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('results');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Make API request
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                // Display only the first 5 results
                for (let i = 0; i < Math.min(5, data.meals.length); i++) {
                    const meal = data.meals[i];
                    const mealDiv = document.createElement('div');
                    mealDiv.className = 'meal';
                    mealDiv.innerHTML = `<h3>${meal.strMeal}</h3><img src="${meal.strMealThumb}" alt="${meal.strMeal}">`;
                    resultsContainer.appendChild(mealDiv);
                }
            } else {
                resultsContainer.innerHTML = 'No results found.';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
