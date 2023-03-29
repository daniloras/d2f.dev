import DivisorText from 'components/DivisorText'
import Text from 'components/Text'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import Switch from 'react-switch'
import theme from 'styles/theme'

import { Props } from './interface'
import { PROVIDERS } from './providers'

import * as S from './styles'
const ButtonProviderAuth = ({ textIntro = 'Entrar com' }: Props) => {
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

  const handleLogin = (providerName: string) => {
    signIn(providerName)
  }
  return (
    <>
      <S.Lgpd>
        <DivisorText label="Termos e condições" />
        <div style={{ marginBottom: 50 }}>
          <Text
            label="Estou estou de acordo com a Política de Privacidade e os Termos de Uso da KICOPA.online."
            color="grey"
            size="regular"
            weight={300}
          />
          <Text
            label="Se tiver dúvidas acesse kicopa.online@gmail.com"
            color="grey"
            size="regular"
            weight={300}
          />
        </div>
        <Switch
          onChange={() => setAcceptTerms(!acceptTerms)}
          checked={acceptTerms}
          onColor={theme.colors.secondary}
          offColor={theme.colors.grey}
          handleDiameter={40}
        />
      </S.Lgpd>
      <S.Wrapper>
        {PROVIDERS?.map((item, i: number) => (
          <div
            key={i}
            id={`btn-social-${item.id}`}
            onClick={() => acceptTerms && handleLogin(item.id)}
          >
            <a>
              <S.BtnSocial style={{ opacity: acceptTerms ? '1' : '0.4' }}>
                <Image
                  src={`/images/social_${item.icon}.png`}
                  width={30}
                  height={30}
                  quality={75}
                  priority={true}
                  alt={`${item?.name}`}
                />
                {`${textIntro} ${item?.name}`}
              </S.BtnSocial>
            </a>
          </div>
        ))}
      </S.Wrapper>
    </>
  )
}

export default ButtonProviderAuth
