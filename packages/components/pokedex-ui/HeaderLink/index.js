import React, { forwardRef } from "react";

import { Container } from "./style";

const HeaderLink = forwardRef(({ ...props }) => (
  <Container {...props}></Container>
));

export default HeaderLink;
