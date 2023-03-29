import styled from 'styled-components'

interface ICollapseProps {
  readonly isCompleted: boolean
}

export const Wrapper = styled.div`
  margin: 20px 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #2f2d2d;
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 20px;
`

export const SideBarLeft = styled.div<ICollapseProps>`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  img {
    border-radius: 4px;
    opacity: ${(props) => (props.isCompleted ? 1 : 0.5)};
  }
`

export const SideBarRight = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`

export const Content = styled.div`
  padding: 0px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`
export const CardSelection = styled.div``
