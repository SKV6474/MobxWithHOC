import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import * as mobx from "mobx";
import { NewObj } from "../../store";

const WithHeader = (WrappedComponent: any): any => {
  @inject("NewObj")
  @observer
  class Header extends React.Component<
    { isLight: boolean },
    { isLocked: boolean }
  > {
    NewObjJs = mobx.toJS(NewObj);
    state = { isLocked: false };

    handleChangeState = () => {
      this.setState((prevState) => ({
        isLocked: !prevState.isLocked,
      }));
    };

    render() {
      console.log(NewObj);
      console.log(this.NewObjJs);
      console.log("Header");
      return (
        <>
          <button onClick={this.handleChangeState}>change</button>
          <div style={{ color: NewObj.isLight ? "red" : "blue" }}>Header</div>
          <WrappedComponent />
        </>
      );
    }
  }

  return Header;
};

export default WithHeader;

// const WithHeader = (
//   WrappedComponent: React.ComponentType<any>
// ): React.ComponentType<any> => {
//   const [isLocked, setIsLocked] = useState<boolean>(false);
//   const handleChangeState = () => {
//     setIsLocked(!isLocked);
//   };
//   const Header = inject("NewObj")(
//     observer(() => {
//       const NewObjJs = mobx.toJS(NewObj);

//       console.log("Header");
//       return (
//         <>
//           <button onClick={handleChangeState}>change</button>
//           <div>Header</div>
//           <WrappedComponent />
//         </>
//       );
//     })
//   );

//   return Header;
// };

// export default WithHeader;
