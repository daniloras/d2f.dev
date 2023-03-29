import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.footer`
  //  background-color: ${theme.colors.darkSecondary};
  max-height: 100px;
  img {
    cursor: pointer;
  }
`

export const ContainerMenu = styled.div`
  max-width: 1200px;
  padding: 20px 22px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-device-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  height: 88px;
  padding: 0 22px 0 22px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

export const ContainerText = styled.div`
  max-width: 1200px;
  padding: 0 22px 0 22px;
  margin: 0 auto;
`

export const ScroolTop = styled.div`
  color: ${theme.colors.secondary};
  opacity: 0.4;
  &:hover,
  &:active,
  &:focus {
    color: ${theme.colors.primary};
    cursor: pointer;
    opacity: 1;
  }
`
