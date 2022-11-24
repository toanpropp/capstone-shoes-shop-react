import React, { useState, useEffect } from "react";
export default function ResponsiveItem(props) {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    heigh: window.innerHeight,
  });
  useEffect(() => {
    const handleSetScreen = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    //Khi kích thước màn hình thay đổi thì sẽ cập nhật vào state
    window.addEventListener("resize", handleSetScreen);

    return () => {
      //khi screen.width thay đổi hoặc component mất khỏi giao diện thì sẽ clearr sự kiện onrezie
      window.removeEventListener("resize", handleSetScreen);
    };
  }, [screen.width]);
  let Component = props.component;
  if (screen.width < 576 && props.mobileComponent) {
    Component = props.mobileComponent;
  }
  return <Component />;
}
