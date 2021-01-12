import React from "react";
import { Column } from "./Column";
import { Card } from "./Card";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
    </AppContainer>
  );
}

export default App;
