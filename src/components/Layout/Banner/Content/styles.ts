import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.section`
  background: linear-gradient(
    180deg,
    ${theme.colors.dark} 140px,
    ${theme.colors.darkSecondary} 140px
  );
  border-bottom: 30px solid ${theme.colors.darkSecondary};
`

export const Container = styled.div`
  max-width: 840px;
  text-align: center;
  align-items: center;
  padding: 80px 14px 14px 14px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

export const Column = styled.div`
  padding: 10px;
  width: 100vw;
  color: ${theme.colors.grey};
  font-size: ${theme.sizes.large}px;
  background-color: ${theme.colors.darkTertiary};
  border: none;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
`

export const Address = styled.div`
  text-align: center;
  padding: 10px;
  font-size: ${theme.sizes.medium}px;
  color: ${theme.colors.grey};
`
