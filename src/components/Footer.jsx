import React from "react";
import styled from "styled-components";
import Copy from "./Copy";
import Add from "./Add";
import SelectAll from "./SelectAll";
import Counter from "./Counter";
import DeleteAll from "./DeleteAll";
import { FlexContainer } from "./Layout";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  padding: 10px 5px 20px;
  border-top: 1px solid #cecece;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer>
        <Counter />
        <Copy />
        <Add />
        <SelectAll />
        <DeleteAll />
      </FlexContainer>
    </StyledFooter>
  );
};

export default Footer;
