import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 20px 50px 20px;
  background: ${theme.colors.darkTertiary};
  border: 2px solid ${theme.colors.darkSecondary};
  border-radius: 10px;
  :hover {
    background: ${theme.colors.darkTertiary};
    border: 2px solid ${theme.colors.primary};
  }
  :hover {
    svg {
      color: ${theme.colors.primary};
    }
    small {
      color: ${theme.colors.primary};
    }
    li {
      background-color: ${theme.colors.darkTertiary};
    }
  }
`

export const IconCalc = styled.div`
  padding: 0px 0px 0px 0px;
`

export const TitleText = styled.h3`
  color: ${theme.colors.secondary};
  font-size: 22px;
  font-weight: 700;
  padding-top: 30px;
  padding-bottom: 20px;
`
export const DescriptionText = styled.p`
  color: ${theme.colors.light};
  background-color: ${theme.colors.dark};
  font-size: 16px;
  font-weight: 800;
  padding: 10px;
  border-radius: 8px;
`
