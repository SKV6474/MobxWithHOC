import { Provider } from "mobx-react";
import React from "react";
import Base from "./Hoc/base";
import { NewObj } from "./store/index";

function App() {
  return (
    <div className="App">
      <Provider NewObj={NewObj}>
        <Base />
      </Provider>
    </div>
  );
}

export default App;
