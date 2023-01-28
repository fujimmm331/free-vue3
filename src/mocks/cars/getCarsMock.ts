import { rest } from 'msw'

export function getCarsMock() {
  return rest.get('/cars', (_, res, ctx) => {

    const response = [
      {
        id: 1,
        name: 'インプレッサ',
        maker_id: 4,
      },
      {
        id: 1,
        name: 'フォレスター',
        maker_id: 4,
      },
    ]

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(response)
    )
  })
}