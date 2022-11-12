export type PowerOfTwoType = 2
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 2048
  | 4096
  | 8192

export type PointType = {
  x: number
  y: number
}


export type DirectionType = {
  LEFT: { x: -1 }
  RIGHT: { x: 1 }
  UP: { y: -1 }
  DOWN: { y: 1 }
}

export type DirectionKeyType = keyof DirectionType
