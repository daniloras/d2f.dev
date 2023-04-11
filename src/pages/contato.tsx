import React from 'react'

import { TemplateGlobal } from 'templates/Global'
import { SeoMeta } from 'components/SeoMeta'

const Index = () => {
  return (
    <>
      <SeoMeta
        title="D2F Contato"
        description="Somos uma software house que vai além da entrega, desenvolvimento sob demanda. Teve uma idéia?! Vamos tomar um café e surpreenda-se!"
      />
      <TemplateGlobal
        showDefaultPage={false}
        title=" Obrigado!"
        description="Atendimento iniciado pelo Whatsapp"
      ></TemplateGlobal>
    </>
  )
}
export default Index
