import { PureComponent } from "react";
import styled, { css } from "styled-components";

export class StepDetail extends PureComponent {
  render() {
    const { number, text } = this.props;
    return (
      <Container>
        <Cycle>{number}</Cycle>
        <Details>{text}</Details>
      </Container>
    );
  }
}

export default StepDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Cycle = styled.p`
  padding: 5px 10px;
  background: red;
  borderradius: 50%;
  margin: 10;
  color: #fff;
  fontweight: bolder;
`;

const Details = styled.p`
  font-weight: bolder;
`;
