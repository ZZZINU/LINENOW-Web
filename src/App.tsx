// style
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";

// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";
import Modal from "@components/modal/Modal";
import Bottomsheet from "@components/bottomsheet/Bottomsheet";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Modal />
      <Bottomsheet />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
