import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div className="Container">
      <span>{title}</span>
      <div style={{ background: "red" }}>{children}</div>
    </div>
  );
};

const Parent = (): JSX.Element => {
  return (
    <Container title="Hello">
      <p>この部分は背景色で囲まれます。</p>
    </Container>
  );
};

export default Parent;
