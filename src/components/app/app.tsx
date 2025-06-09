import { Provider } from "react-redux";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import "./app.css";
import { store } from "../../redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from "../home-page/home-page";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { MenuPage } from "../menu-page/menu-page";
import { ReviewsPage } from "../reviews-page/reviews-page";
import { DishPage } from "../dish-page/dish-page";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<Layout />}>
                <Route path="restaurants" element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path="dish/:dishId" element={<DishPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
