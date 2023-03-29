import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media only screen and (max-device-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const BtnSocial = styled.div`
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 59px;
  border: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.secondary};
  font-weight: ${theme.weight.bold};
  font-size: 16px;
  line-height: 1.5;
  border-radius: 0.25rem;
  gap: 4px;
  margin: 0 auto;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.dark};
    border: 1px solid ${theme.colors.darkSecondary};
  }
`
export const Lgpd = styled.div`
  text-align: center;
  padding: 40px 0;
`
