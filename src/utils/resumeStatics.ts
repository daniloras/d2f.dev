/* eslint-disable @typescript-eslint/no-explicit-any */
export const resumeStatistics = async (data: any) => {
  const payload: string[] = []

  await data.countries?.map(async (country: any) => {
    country.squads.map(async (figures: any) => {
      payload.push(figures.squadUser[0].count)
    })
  })

  let totalPreenchidas = 0
  let totalRepetidasUnicas = 0
  let totalRepetidas = 0

  payload?.map((item) => {
    if (Number(item) > 0) {
      totalPreenchidas = totalPreenchidas + 1
    }
    if (Number(item) > 1) {
      totalRepetidasUnicas = totalRepetidasUnicas + 1
    }
    if (Number(item) > 1) {
      totalRepetidas = totalRepetidas + (Number(item) - 1)
    }
  })

  const totalFigurinhas = payload.length - 100 //  REMOVER AS LEGENDÁRIAS
  const totalFaltantes = totalFigurinhas - totalPreenchidas
  const porcentagem = (
    ((totalFigurinhas - totalFaltantes) / totalFigurinhas) *
    100
  ).toFixed(1)

  return {
    totalFigurinhas: totalFigurinhas,
    totalFaltantes: totalFaltantes,
    totalRepetidas: totalRepetidas,
    totalRepetidasUnicas: totalRepetidasUnicas,
    porcentagem: porcentagem
  }
}
