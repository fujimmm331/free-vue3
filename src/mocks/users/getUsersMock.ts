import { rest } from 'msw'

export function getUsersMock() {
  return rest.get('/users', (_, res, ctx) => {

    const response = [
      {
        id: 1,
        last_name: '六道',
        first_name: 'ペイン',
      },
      {
        id: 2,
        last_name: 'うちは',
        first_name: 'いたち',
      },
      {
        id: 3,
        last_name: 'うちは',
        first_name: 'さすけ',
      },
      {
        id: 4,
        last_name: 'うずまき',
        first_name: 'なると',
      },
      {
        id: 5,
        last_name: 'うちは',
        first_name: 'しすい',
      },
    ]

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(response)
    )
  })
}