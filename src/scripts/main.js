function main() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const getCategories = () => {
    //using fetch
    fetch(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          allCategories(responseJson.categories);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const allCategories = (categories) => {
    const listCategoriesElement = document.querySelector("my-categories");
    listCategoriesElement.innerHTML = "";

    categories.forEach((category) => {
      listCategoriesElement.innerHTML += `
          <div class="box">
            <div class="title">
              <h2>${category.strCategory}</h2>
            </div>
            <img src="${category.strCategoryThumb}" class="image-feature" alt="image">
            <p>${category.strCategoryDescription}</p>
            <span class="more-desc">More</span>
          </div>`;
    });
  };

  getCategories();

  //CUSTOM ELEMENT
  const nothingCategoriesElement = document.querySelector(".nothingCategories");
  const myCategoriesTag = document.querySelector("my-categories");

  if (!myCategoriesTag) {
    myCategoriesTag = document.createElement("my-categories");
    nothingCategoriesElement.appendChild(myCategoriesTag);
  }
}

export default main;
