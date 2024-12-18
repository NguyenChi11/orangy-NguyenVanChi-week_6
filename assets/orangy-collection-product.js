document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-link");

  const collectionContainers = document.querySelectorAll(
    ".collection-container"
  );

  collectionContainers.forEach((container) => {
    container.style.display = "none";
  });

  if (collectionContainers.length > 0) {
    collectionContainers[0].style.display = "block";
  }

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Ngừng reload trang

      const category = link.getAttribute("data-category");

      collectionContainers.forEach((container) => {
        container.style.display = "none";
      });

      const activeContainer = document.querySelector(
        `.collection-container[data-category="${category}"]`
      );
      if (activeContainer) {
        activeContainer.style.display = "block";
      }

      categoryLinks.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
  const productions = document.querySelectorAll(".product-wrapper");

  productions.forEach((item) => {
    // Lấy chỉ số của từng sản phẩm từ data-index
    const index = parseInt(item.getAttribute("data-index"), 10);

    // Áp dụng điều kiện và thêm class
    if (index % 6 === 0) {
      item.classList.add("production-item__gird__first");
    } else if (index % 6 === 5) {
      item.classList.add("production-item__gird__last");
    }
  });
});
