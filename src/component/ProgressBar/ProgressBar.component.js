import { PureComponent } from "react";
import Line from "../Line";
import StepDetail from "../StepDetail";
import styled, { css } from "styled-components";

export class ProgressBar extends PureComponent {
  render() {
    return (
      <Progress>
        <Line />
        <StepDetail number="1" text="Shipping" />
        <Line />
        <StepDetail number="2" text="Review & Payment" />
        <Line />
      </Progress>
    );
  }
}

export default ProgressBar;

const Progress = styled.div`
  display: flex;
  alignitems: center;
  background: #eeeeee;
`;
