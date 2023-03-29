import {
  faArrowCircleDown,
  faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CountriesProps } from 'components/Album/interface'
import AnimatedBox from 'components/AnimatedBox'
import CardCount from 'components/CardCount'

import Text from 'components/Text'
import Image from 'next/image'
import React, { useState } from 'react'

import * as S from './styles'

const Collapse: React.FC<CountriesProps> = ({
  fifa_code,
  country,
  group,
  flag_image,
  squads,
  isOpen
}) => {
  const [open, setOpen] = useState<boolean>(isOpen)

  return (
    <S.Wrapper>
      <S.Header>
        <S.SideBarLeft isCompleted={true}>
          <Image
            src={flag_image}
            height={30}
            width={50}
            layout="fixed"
            alt={country}
          />
          <div>
            <Text
              label={`${fifa_code} - ${country}`}
              color="white"
              size="large"
              weight={600}
            />
            {group && (
              <Text
                label={`Grupo ${group}`}
                color="grey"
                size="small"
                weight={600}
              />
            )}
          </div>
        </S.SideBarLeft>
        <S.SideBarRight>
          <FontAwesomeIcon
            icon={!open ? faArrowCircleDown : faArrowCircleUp}
            size="2x"
            onClick={() => setOpen(!open)}
            color="grey"
          />
        </S.SideBarRight>
      </S.Header>
      {open && (
        <AnimatedBox>
          <S.Content>
            {squads?.map((item, i) => {
              return (
                <S.CardSelection key={i}>
                  <CardCount
                    value={item.squadUser[0].count}
                    label={String(item.code)}
                    _id={item.squadUser[0].id}
                    isFeatured={item.isEspecial}
                  />
                </S.CardSelection>
              )
            })}
          </S.Content>
        </AnimatedBox>
      )}
    </S.Wrapper>
  )
}

export default Collapse
