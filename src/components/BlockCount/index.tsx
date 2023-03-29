import React from 'react'
import { BlockCountsTypeProps } from 'utils/interface'
import BlockItem from './components/BlockItem'

import * as S from './styles'

const BlockCount: React.FC<BlockCountsTypeProps> = ({ blockCounts }) => {
  return (
    <>
      <S.Wrapper>
        {blockCounts?.map((item, i: number) => (
          <BlockItem
            key={i}
            title={item.title}
            description={item.description}
            count_view={item?.count_view && Number(item?.count_view)}
            image_file={item.image_file}
            image_path={item?.image_path}
            image_size={item.image_size}
            isStatistics={item.isStatistics}
          />
        ))}
      </S.Wrapper>
    </>
  )
}

export { BlockCount }
