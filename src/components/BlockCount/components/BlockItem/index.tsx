import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import millify from 'millify'

import * as S from './styles'
import { BlockCountsItemTypeProps } from 'utils/interface'

const BlockItem: React.FC<BlockCountsItemTypeProps> = ({
  title,
  description,
  count_view,
  image_file,
  image_path,
  image_size,
  isStatistics
}) => {
  const router = useRouter()
  const Item = () => {
    return (
      <S.Wrapper>
        <S.IconCalc>
          <Image
            src={`http://kicopa.online/images/${image_file}`}
            layout={'fixed'}
            width={image_size}
            height={image_size}
            className="pull-left"
            alt={title}
          />
        </S.IconCalc>
        <S.TitleText>
          {isStatistics && Number(count_view)}
          {!isStatistics &&
            Number(count_view) > 0 &&
            millify(Number(count_view), {
              precision: 1,
              decimalSeparator: ','
            })}
          {` ${title}`}
        </S.TitleText>
        <S.DescriptionText>{description}</S.DescriptionText>
      </S.Wrapper>
    )
  }
  return (
    <>
      {image_path && image_path.length && (
        <div
          onClick={() => router.push(`/world-cup/${image_path}`)}
          style={{ cursor: 'pointer' }}
        >
          <Item />
        </div>
      )}
      {!image_path && <Item />}
    </>
  )
}

export default BlockItem
