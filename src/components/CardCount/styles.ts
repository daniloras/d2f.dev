import styled, { css } from 'styled-components'
import theme from 'styles/theme'

interface IHeaderProps {
  readonly count: number
}

export const Wrapper = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  flex-wrap: now-rap;
  justify-content: center;
  align-items: center;
  width: 102px;
  height: 118px;
  border-radius: 14px;
  background-color: ${theme.colors.dark};
`

export const BlockFeature = styled.div`
  background-color: #ffd700;
  border: 2px solid #ccac00;
  border-radius: 5px;
  position: absolute;
  margin-top: -4px;
  height: 10px;
  width: 40px;
`

export const Header = styled.div<IHeaderProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 48px;
  width: 84px;
  margin-bottom: 6px;
  cursor: pointer;
  ${(props) =>
    props.count >= 2 &&
    css`
      background-color: ${theme.colors.primary};
    `}
  ${(props) =>
    props.count === 1 &&
    css`
      background-color: ${theme.colors.secondary};
    `}
  ${(props) =>
    props.count === 0 &&
    css`
      background-color: ${theme.colors.darkTertiary};
    `}
`

export const Description = styled.div`
  color: ${theme.colors.white};
`

export const Count = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  background-color: ${theme.colors.dark};
  border-radius: 10px;
  height: 48px;
  width: 102px;
`
export const BlockAction = styled.div`
  text-align: center;
  width: 30px;
  cursor: pointer;
`
export const BlockCount = styled.div`
  text-align: center;
`
export const BlockText = styled.div`
  background-color: transparent;
  font-size: 24px;
  color: ${theme.colors.grey};
`
