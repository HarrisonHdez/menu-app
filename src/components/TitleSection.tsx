
import React, { ReactNode } from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: var(--color-title);
  font-family: var(--main-font);
  font-weight: 600;
  font-size: 32px;
  font-style: normal;
  line-height: 55.276px;
  letter-spacing: 0.52px;
  text-transform: capitalize;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 52px;
  }
`;

interface TitleSectionProps {
  children: ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <Title data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      {children}
    </Title>
  );
};

export default TitleSection;
