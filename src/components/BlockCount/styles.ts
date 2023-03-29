import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-device-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const ImageNotFound = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  svg {
    width: 60%;
  }
  @media only screen and (max-device-width: 767px) {
    width: 80%;
  }
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  .active {
    background-color: ${theme.colors.primary};
  }
`

export const MenuItem = styled.div`
  margin: 10px 4px 30px;
  padding: 2px 10px;
  border-radius: 4px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  font-size: ${theme.sizes.medium};
  font-weight: ${theme.weight.bold};
`
