import { rest } from 'msw'

export function getMakersMock() {
  return rest.get('/makers', (_, res, ctx) => {

    const response = [
      {
        id: 1,
        name: 'TOYOTA',
      },
      {
        id: 2,
        name: 'NISSAN',
      },
      {
        id: 3,
        name: 'MAZDA',
      },
      {
        id: 4,
        name: 'SUBARU',
      },
      {
        id: 5,
        name: 'SUZUKI',
      },
      {
        id: 6,
        name: 'ISUZU',
      },
    ]

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.delay(2000),
      ctx.json(response)
    )
  })
}