import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Layout } from "../layout/layout";
import { RestaurantSelector } from "../restaurant-selector/restaurant-selector";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import "./app.css";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <RestaurantSelector />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
