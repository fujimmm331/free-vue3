// src/mocks/handlers.
import { getUsersMock } from './users/getUsersMock'
import { loginMock } from './users/loginMock'
import { getCarsMock } from './cars/getCarsMock'
import { getMakersMock } from './makers/getMakersMock'

export const handlers = [
  // Handles a GET /user request
  getUsersMock(),
  loginMock(),
  getCarsMock(),
  getMakersMock(),
]