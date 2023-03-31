import React from 'react'

import { TemplateGlobal } from 'templates/Global'
import { SeoMeta } from 'components/SeoMeta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleUp,
  faMap,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
  faMapPin,
  faMapSigns
} from '@fortawesome/free-solid-svg-icons'

const Index = () => {
  return (
    <>
      <SeoMeta
        title="D2F Software House"
        description="Somos uma software house que vai além da entrega, desenvolvimento sob demanda. Teve uma idéia?! Vamos tomar um café e surpreenda-se!"
      />
      <TemplateGlobal
        showDefaultPage={true}
        title=" #jobs"
        description="algums de nossos clientes"
      ></TemplateGlobal>
    </>
  )
}
export default Index
