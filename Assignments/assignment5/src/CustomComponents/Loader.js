import React, { useState, Fragment } from "react";

export function Loader(props) {
  const [isLoading, setIsLoading] = useState(false);
  const mainDivStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#00000040",
    zIndex: 2,

    display: "flex",
    alignItems: "center",
    justifyContent: "Center"
  };
  const holderDivStyle = {
    //alignSelf: "Center",
    backgroundColor: "Transparent"
    // display: "table"
    // marginRight: "auto",
    // marginLeft: "auto",
    // marginTop: "auto",
    // marginBottom: "auto"

    // paddingRight: "auto",
    // paddingLeft: "auto",
    // paddingTop: "auto",
    // paddingBottom: "auto"
  };
  const loadTextStyle = {
    color: "#FFFFFF",
    margin: "Auto",
    height: "100%",
    textAlign: "center"
  };
  const uiComponent = (
    <Fragment>
      {isLoading ? (
        <div style={mainDivStyle}>
          <div style={holderDivStyle}>
            <p style={loadTextStyle}>this is a loading data</p>
            {/* {isLoading ? <p>Loading</p> : <div />} */}
          </div>
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
  return uiComponent;
}
