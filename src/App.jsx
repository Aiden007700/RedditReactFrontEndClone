import React from "react";
import { Provider } from "react-redux";
import { AppRoutes } from "./App.routes";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
