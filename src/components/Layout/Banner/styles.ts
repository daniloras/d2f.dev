import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.section``

export const Container = styled.div`
  max-width: 1200px;
  align-items: center;
  padding: 20px 22px 60px 22px;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: auto;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  @media only screen and (max-device-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Column = styled.div`
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.sizes.xxxxxlarge}px;
    font-weight: ${theme.weight.extraBold};
    span {
      color: ${theme.colors.secondary};
    }
  }
  h2 {
    color: ${theme.colors.grey};
    font-size: ${theme.sizes.xxlarge}px;
    font-weight: ${theme.weight.light};
  }
  @media only screen and (max-device-width: 768px) {
    h1 {
      font-size: ${theme.sizes.xxxlarge}px;
      margin-top: 60px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: ${theme.sizes.xxlarge}px;
    }
  }
`
