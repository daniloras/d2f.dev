import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.section``

export const Container = styled.div`
  max-width: 800px;
  align-items: center;
  padding: 0px 22px 20px 22px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

export const Column = styled.div`
  h3 {
    color: ${theme.colors.white};
    font-size: ${theme.sizes.xxxlarge}px;
    font-weight: ${theme.weight.bold};
    span {
      color: ${theme.colors.secondary};
    }
  }
  h4 {
    color: ${theme.colors.grey};
    font-size: ${theme.sizes.xlarge}px;
    font-weight: ${theme.weight.light};
  }
`
export const IconImage = styled.div`
  float: right;
  padding: 28px 0 20px 20px;
`

export const Customer = styled.div`
  max-width: 740px !important;
  height: 88px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  img {
    padding: 10px !important;
    filter: brightness(00%) invert(2) !important;
  }
`
