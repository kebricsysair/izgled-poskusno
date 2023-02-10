import React from 'react';
import {CssBaseline} from "@mui/material";
import AppHeader from "./header/AppHeader";
import AppFooter from "./footer/AppFooter";
import AppMain from "./main/AppMain";

function App() {
  return (
    <>
      <CssBaseline>
          <AppHeader />
          <main>
              <AppMain />
          </main>
          <AppFooter />
      </CssBaseline>
    </>
  );
}

export default App;
