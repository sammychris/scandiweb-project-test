import { PureComponent } from "react";
import styled, { css } from "styled-components";

export class Line extends PureComponent {
  render() {
    return <Span></Span>;
  }
}

export default Line;

const Span = styled.span`
    width: 500px,
    height: 5px;
    background: red;
`;