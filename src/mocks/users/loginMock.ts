import { rest } from 'msw'

export function loginMock() {
  return rest.post('/user', (_, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  })
}