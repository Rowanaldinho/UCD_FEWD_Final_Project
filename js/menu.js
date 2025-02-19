document.addEventListener("DOMContentLoaded", async function () { 
    const menuContainer = document.getElementById("menu");

    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
        const categories = data.categories;

        let menuHtml = "<h1 class='text-center mt-4'>Our Menu</h1><div class='d-flex flex-wrap justify-content-center'>";

        categories.forEach(category => {
            menuHtml += `
                <div class="card m-3" style="width: 18rem;">  
                    <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategory}">
                    <div class="card-body">
                        <h4 class="card-title">${category.strCategory}</h4>
                        <p class="card-text">${category.strCategoryDescription.substring(0, 100)}...</p>
                    </div>
                </div>
            `;
        });

        menuHtml += "</div>";
        menuContainer.innerHTML = menuHtml;
    } catch (error) {
        console.error("Error fetching menu:", error);
        menuContainer.innerHTML = "<p class='text-danger'>Failed to load menu. Please try again later.</p>";
    }
});

