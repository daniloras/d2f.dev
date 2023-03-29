import React, { useEffect, useState } from 'react'

import Text from 'components/Text'
import { Props } from './interface'
import * as S from './styles'
import { resumeStatistics } from 'utils/resumeStatics'
import { BlockCount } from 'components/BlockCount'

const ResumeStatistics: React.FC<Props> = ({ worldCup }) => {
  const [data, setData] = useState(worldCup)

  const updateStatistics = async () => {
    const trx = await resumeStatistics(worldCup)
    setData(trx)
  }

  useEffect(() => {
    if (worldCup) {
      updateStatistics()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [worldCup])

  const blockCounts = [
    {
      title: '',
      description: 'TOTAL FIGURINHAS',
      image_file: 'checked-user-128.png',
      image_size: 128,
      image_path: '',
      count_view: data.totalFigurinhas,
      isStatistics: true
    },
    {
      title: '',
      description: 'FALTANTES',
      image_file: 'search-128.png',
      image_size: 128,
      image_path: '',
      count_view: data.totalFaltantes,
      isStatistics: true
    },
    {
      title: '',
      description: `REPETIDAS / ${data.totalRepetidasUnicas} únicas`,
      image_file: 'repeat-128.png',
      image_size: 128,
      image_path: '',
      count_view: data.totalRepetidas,
      isStatistics: true
    }
  ]

  return (
    <S.Base>
      <S.Row>
        <Text label="Estatísticas" color={'white'} size="xxxlarge" />
        <S.AreaPorcentage>
          <Text
            label={`${data.porcentagem} `}
            color={'white'}
            size="xxxlarge"
          />
          <Text label={` %`} color={'grey'} size="large" />
        </S.AreaPorcentage>
      </S.Row>

      <S.Wrapper>
        <S.Container value={data.porcentagem} />
      </S.Wrapper>
      <BlockCount blockCounts={blockCounts} />
    </S.Base>
  )
}

export default ResumeStatistics
