import Button from 'components/Button'

import * as S from './styles'

export default function BtnWhats() {
  const handleClick = () => {
    const message = 'Olá D2F, Gostaria de informações.'
    const phone = '11954426650'

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }
  return (
    <>
      <S.MenuItem>
        <Button
          id="btn-entrar"
          label="Fale com a gente!"
          key="btn-entrar"
          onClick={handleClick}
          className="btn-outlined-secondary"
        />
      </S.MenuItem>
    </>
  )
}
