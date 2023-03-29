import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from 'components/Text'
import React, { useState } from 'react'
import { postMinusOneFigure } from 'services/http-client/postMinusOneFigure'
import { postPlusOneFigure } from 'services/http-client/postPlusOneFigure'
import theme from 'styles/theme'
import { Props } from './interface'
import * as S from './styles'

const CardCount: React.FC<Props> = ({ value, label, _id, isFeatured }) => {
  const [count, setCount] = useState(value)
  const [loading, setLoading] = useState<boolean>(false)

  const countPlus = async () => {
    if (count < 1000 && !loading) {
      const valueDefault = count
      setLoading(true)
      setCount(count + 1)
      const trx = await postPlusOneFigure(_id)
      !trx?.success && setCount(valueDefault)
      setLoading(false)
    }
  }

  const countMinus = async () => {
    if (count > 0 && !loading) {
      const valueDefault = count
      setLoading(true)
      setCount(count - 1)
      const trx = await postMinusOneFigure(_id)
      !trx?.success && setCount(valueDefault)
      setLoading(false)
    }
  }

  const handleCaseCount = () => {
    if (count === 0) {
      return {
        value: count,
        description: ''
      }
    }
    if (count === 1) {
      return {
        value: count,
        description: 'figurinha'
      }
    }
    if (count === 2) {
      return {
        value: count - 1,
        description: 'repetida'
      }
    }
    if (count > 2) {
      return {
        value: count - 1,
        description: 'repetidas'
      }
    }
  }

  return (
    <S.Wrapper>
      {isFeatured && <S.BlockFeature />}
      <S.Header count={count} onClick={countPlus}>
        <S.Description>{label}</S.Description>
      </S.Header>
      <S.Count>
        <S.BlockAction>
          <FontAwesomeIcon
            icon={faMinus}
            size="1x"
            color={theme.colors.secondary}
            onClick={countMinus}
          />
        </S.BlockAction>
        <S.BlockCount>
          <S.BlockText>{String(handleCaseCount()?.value)}</S.BlockText>
          <Text
            label={String(handleCaseCount()?.description)}
            size="xxxsmall"
            color="grey"
          />
        </S.BlockCount>
        <S.BlockAction>
          <FontAwesomeIcon
            icon={faPlus}
            size="1x"
            color={theme.colors.primary}
            onClick={countPlus}
          />
        </S.BlockAction>
      </S.Count>
    </S.Wrapper>
  )
}

export default CardCount
