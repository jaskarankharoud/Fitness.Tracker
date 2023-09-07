import Root from "./RootComponent";
import RegisterForm from "./NavigationBar/RegisterFormComponent";
import Home from "./Home/HomeComponent";
import AboutUs from "./NavigationBar/AboutUsComponent";
import { ContextProvider } from "./context/MyContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <RegisterForm></RegisterForm> },
      { path: "/aboutus", element: <AboutUs></AboutUs> }
    ]
  }
]);
export default function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
