import { Provider } from "react-redux";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Layout } from "../layout/layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import "./app.css";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
