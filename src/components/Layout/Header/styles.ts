import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.header`
  padding: 0px 0px 30px 20px;
`

export const Container = styled.div`
  color: ${theme.colors.white};
  max-width: 1200px;
  height: 90px;
  padding: 10px 0px 0 6px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  .cursor-pointer {
    cursor: pointer;
  }
`

export const Column = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
`

export const IconBack = styled.div`
  margin-left: 20px;
`

export const MenuNav = styled.ul`
  list-style: none;
  margin-right: 10px;
`
