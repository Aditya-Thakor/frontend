import { Spin } from "antd";
import React, { ReactNode, Suspense } from "react";

type Props = {
  Children?:
    | React.LazyExoticComponent<() => JSX.Element>
    | JSX.Element
    | ReactNode;
};
const Loading = ({ Children }: any) => {
  return (
    <Suspense fallback={<Spin className="loader" size="large" />}>
      <Children />
    </Suspense>
  );
};

export default Loading;
