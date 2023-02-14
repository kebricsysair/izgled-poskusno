import React from 'react';
import {CssBaseline} from "@mui/material";
import AppHeader from "./modules/AppHeader";
import AppFooter from "./modules/AppFooter";
import { BrowserRouter } from "react-router-dom";
import Routing from "./modules/routing/Routing";

function App() {
  return (
      <>
          <CssBaseline>
              <BrowserRouter>
                  <AppHeader />
                  <Routing />
                  <AppFooter />
              </BrowserRouter>
          </CssBaseline>
      </>

  );
}

export default App;
