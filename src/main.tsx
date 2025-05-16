// import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root element not found");
}

const reactRoot = createRoot(root);

// reactRoot.render(
//   createElement("button", { className: "someClass" }, "hello world!")
// );

reactRoot.render(
  <div style={{ marginLeft: "20px" }}>
    {restaurants.map((restaurant, index) => (
      <div key={restaurant.id}>
        <h2>{`${++index}. ${restaurant.name}`}</h2>
        <h3>Меню</h3>
        <ul>
          {restaurant.menu.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
