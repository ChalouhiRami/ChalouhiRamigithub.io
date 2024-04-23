document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");

  // Auto-scrolling function
  let currentIndex = 0;
  const totalItems = items.length;
  const autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  }, 3000); // Change the interval as needed

  // Function to show the specified item
  function showItem(index) {
    // un-select all the items
    items.forEach((item) => item.classList.remove("carousel__item--selected"));
    buttons.forEach((button) =>
      button.classList.remove("carousel__button--selected")
    );

    items[index].classList.add("carousel__item--selected");
    buttons[index].classList.add("carousel__button--selected");
  }

  // Get the phone icon element
  const phoneIcon = document.getElementById("phone-icon");

  // Add click event listener to the phone icon
  phoneIcon.addEventListener("click", function () {
    // Define the phone number
    const phoneNumber = "+96176753312"; // Replace with your actual phone number

    // Show alert with the phone number
    alert("Call us at: " + phoneNumber);
  });
});
