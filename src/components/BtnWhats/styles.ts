import styled from 'styled-components'
import theme from 'styles/theme'

export const MenuItem = styled.div`
  display: inline;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${theme.colors.white};
    font-weight: ${theme.weight.bold};
    padding: 0 30px 0 20px;
  }
`
export const Avatar = styled.div`
  overflow: hidden;
  border-radius: 100%;
  border: 4px solid ${theme.colors.primary};
  width: 60px;
  height: 60px;
`
