import * as React from "react";
import { useHistory } from "react-router";
import { Button } from "../components/button";

export const History: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>History</h1>
      <Button onClick={() => history.push("/editor")}>エディタに戻る</Button>
    </>
  );
};
