import React from "react";
import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string;
}

// export const Column = () => {
//   return (
//     <ColumnContainer>
//       <ColumTitle>Column Tittle</ColumTitle>
//     </ColumnContainer>
//   );
// };
export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
