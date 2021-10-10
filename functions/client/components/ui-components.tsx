import { styled, CSSObject } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const baselineStyles: CSSObject = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const PageContainer = styled(Paper)(baselineStyles);

export const InnerContentContainer = styled(Paper)({
  ...baselineStyles,
  width: "80%",
  height: "80%",
});
