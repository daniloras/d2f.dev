import Button from 'components/Button'
import { useRouter } from 'next/router'

import * as S from './styles'

export default function BtnWhats() {
  const router = useRouter()

  const message = 'Olá D2F, Gostaria de informações.'
  const phone = '11911300127'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    window.open(url, '_blank')
    router.push('/contato')
  }
  return (
    <>
      <S.MenuItem>
        <Button
          id="btn-entrar"
          label="Iniciar Atendimento"
          key="btn-entrar"
          onClick={handleClick}
          className="btn-outlined-secondary"
        />
      </S.MenuItem>
    </>
  )
}
