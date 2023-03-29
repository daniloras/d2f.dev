export interface WorldCupProps {
  worldCup: CountriesProps[]
}

export interface CountriesProps {
  fifa_code: string
  country: string
  group: string
  flag_image: string
  squads?: SquadProps[]
  isOpen: boolean
}

export interface SquadProps {
  id: string
  code?: string
  isEspecial: boolean
  isLegend: boolean
  squadUser: SquadUserProps[]
}

export interface SquadUserProps {
  id: string
  count: number
}
