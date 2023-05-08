import { inject, observer } from "mobx-react";

import React, { useState } from "react";
import { NewObj } from "../../store";
import Header from "../withHeader";
import WithHeader from "../withHeader";
import * as mobx from "mobx";

const Base = inject("NewObj")(
  observer(() => {
    const NewObjJs = mobx.toJS(NewObj);

    // const [isLocked, setIsLocked] = useState(false);

    // const handleChangeState = () => {
    //   setIsLocked(!isLocked);
    // };

    const handleClick = () => {
      NewObj.toggleTheme();
    };

    const handlePush = () => {
      NewObj.pushNew();
    };

    console.log("Base");
    return (
      <>
        {/* <button onClick={handleChangeState}>change</button> */}
        <button onClick={handlePush}>AddnewObj</button>
        <button onClick={handleClick}>Click me!</button>
        <div>Base</div>
      </>
    );
  })
);

// export default Base;

export default WithHeader(Base);
