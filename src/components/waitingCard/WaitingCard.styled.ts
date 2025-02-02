import styled from "styled-components";
import * as A from "@styles/animation";
import { Link } from "react-router-dom";

export const WaitingCardWrapper = styled(Link)`
  flex-direction: column;

  padding: 1.25rem 1rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray100};
  border-radius: 0.75rem;

  background-color: ${({ theme }) => theme.colors.background.white};

  ${A.onClickButtonAnimation}
`;

// WaitingCardTitle
export const WaitingCardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.75rem;
  padding: 0 0.25rem;
  padding-bottom: 0.75rem;
  box-shadow: 0 -1px 0 0 ${({ theme }) => theme.colors.border.gray100} inset;
`;

export const WaitingCardTitleLabel = styled.h2`
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.font.black};
`;

// BoothInformation
export const BoothInformationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const BoothInformationImage = styled.img`
  width: 3.25rem;
  height: 3.25rem;

  border-radius: 0.25rem;
  border: none;

  background-color: ${({ theme }) => theme.colors.background.blueLight};
`;

export const BoothInformaitonLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.25rem 0rem;
`;

export const BoothInformationNameLabel = styled.h3`
  ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.font.black};

  display: flex;
  gap: 0.25rem;

  :nth-of-type(2) {
    color: ${({ theme }) => theme.colors.font.gray};
  }
`;

export const BoothInformationPositionLabel = styled.p`
  ${({ theme }) => theme.fonts.b3};
  color: ${({ theme }) => theme.colors.font.gray};
`;

// WaitingCardButton
export const WaitingCardButtonWrapper = styled.div`
  padding-top: 1rem;
`;
