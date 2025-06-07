import { Provider } from "react-redux";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Layout } from "../layout/layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import "./app.css";
import { store } from "../../redux/store";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "../home-page/home-page";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="restaurants">
                  <Route
                    index
                    element={
                      <Layout>
                        <RestaurantPage />
                      </Layout>
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
