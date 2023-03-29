import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  margin: 10px 0 30px 0;
`
export const LineDivisorDark = styled.h2`
  border-bottom: 1px solid ${theme.colors.grey};
  opacity: 0.3;
  max-width: 100%;
  text-align: center;
  border-bottom: 1px solid ${theme.colors.grey};
  line-height: 0.1em;
  margin: 10px 0 20px;
  span {
    padding: 0 10px;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.small}px;
    background-color: ${theme.colors.darkTertiary};
  }
`
