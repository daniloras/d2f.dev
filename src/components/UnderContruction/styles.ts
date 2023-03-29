import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.dark};
  width: 100vw;
  height: 100vh;
`
export const Content = styled.div`
  max-width: 620px;
  text-align: center;
  text {
    margin: 40px;
  }
  @media (max-width: 650px) {
    max-width: 320px;
  }
`
