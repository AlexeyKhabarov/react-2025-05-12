import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root element not found");
}

const reactRoot = createRoot(root);

reactRoot.render(
  <div style={{ marginLeft: "20px" }}>
    {restaurants.map(({ id, name, menu, reviews }, index) => (
      <div key={id}>
        <h2>{`${++index}. ${name}`}</h2>
        <h3>Меню</h3>
        <ul>
          {menu.map((dish) => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
