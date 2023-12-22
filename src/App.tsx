import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "./styles/main.scss";
import { theme } from "./theme/Theme";

const App = () => {
  return (
    <>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
      {/* <NavBar /> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route />
      </Routes> */}
    </>
  );
};

export default App;
