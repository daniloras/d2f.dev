import Button from 'components/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Collapse from './components/Collapse'
import { WorldCupProps } from './interface'
import * as S from './styles'

const Album: React.FC<WorldCupProps> = ({ worldCup }) => {
  const router = useRouter()
  const { year } = router.query
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <Link href={`/statistics/${year}`}>
            <a>
              <Button
                id="btn-statistics"
                label="🌟 Estatisticas"
                key="btn-saor"
                className="btn-outlined-secondary"
              />
            </a>
          </Link>
        </S.Header>
        {worldCup?.map((item, i: number) => {
          return (
            <Collapse
              key={i}
              country={item.country}
              fifa_code={item.fifa_code}
              flag_image={item.flag_image}
              group={item.group}
              isOpen={true}
              squads={item?.squads}
            />
          )
        })}
      </S.Wrapper>
    </>
  )
}

export default Album
