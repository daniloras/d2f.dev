import styled from 'styled-components'
import theme from 'styles/theme'

interface IPercentageProps {
  readonly value: number
}

export const Wrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${theme.colors.dark};
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
export const AreaPorcentage = styled.div`
  align-items: baseline;
  display: inline-flex;
  gap: 4px;
`

export const Container = styled.div<IPercentageProps>`
  width: ${(props) => props.value}%;
  height: 10px;
  background-color: ${theme.colors.secondary};
  border-radius: 4px;
  opacity: 0.5;
`

export const Base = styled.div`
  padding: 20px;
`
