import React from "react";
import { styled, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";

const baselineStyles: CSSObject = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const PageContainer = styled(Box)(baselineStyles);

const InnerContentContainer = styled(Box)({
  ...baselineStyles,
  border: "1px dashed red",
  width: "80%",
  height: "80%",
});

const FirstPage: React.FC = () => (
  <PageContainer>
    <InnerContentContainer>First Page Content Here</InnerContentContainer>
  </PageContainer>
);

export default FirstPage;
