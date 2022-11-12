import { reactive, readonly } from "vue";
import { defineStore } from "pinia";
import type { DirectionKeyType, Nullable, PointType, PowerOfTwoType } from "@/types";
import { getRandomNum } from "@/utils";
import { INITIAL_NUMBERS } from "@/const";

type FieldStateType = {
  fields: Nullable<PowerOfTwoType>[][]
  points: PointType[]
  endPoint: number
}

export const useFieldStore = defineStore("field", () => {

  /**
   * state
   */
  const fieldState = reactive<FieldStateType>({
    fields: [],
    points: [],
    endPoint: 0,
  })

  /**
   * フィールドを初期化する処理。
   * 指定した長さの正方形を作り、nullか初期値を設定する。
   * @param length 一辺の長さ
   */
  const initializeFields = (length: number) => {
    for (let y = 0; y < length; y++) {
      fieldState.fields.push(makeRow(length, y))
    }
    fieldState.endPoint = length - 1
  }

  const move = (direction: DirectionKeyType) => {
    const points = sortPoints(direction)
    points.forEach((point) => {
      let hasNext = false
      while (!hasNext) {
        const nextPoint = getNextPoint(direction, point)
        console.log(`next ${direction} Point is`, nextPoint, `from ${point}`)
        if (!nextPoint) hasNext = true
      }
    })
  }

  /**
   * フィールドに数字をセットする
   * @param point 座標
   * @param field セットする値
   */
  const setField = (point: PointType, field: PowerOfTwoType) => {
    fieldState.fields[point.y][point.x] = field
  }

  /**
   * 数値がセットされているフィールドの座標を保存する
   * @param point 数値がセットされているフィールドの座標
   */
  const setPoint = (point: PointType) => {
    fieldState.points.push(point)
  }


  // private method

  /**
   * 行を作成する
   * @param length 行の長さ
   * @param y 数値をセットするy軸の座標
   * @returns 行
   */
  const makeRow = (length: number, y: number) => {
    let row: Nullable<PowerOfTwoType>[] = []
    const targetIndex = getRandomNum(length)

    for (let index = 0; index < length; index++) {
      const isTargetIndex = index === targetIndex
      const field = isTargetIndex ? getInitialNumber() : null
      row.push(field)
      if (isTargetIndex) setPoint({ x: targetIndex, y })
    }

    return row
  }

  /**
   * ランダムに初期値を取得する
   * @returns 初期値の数値
   */
  const getInitialNumber = () => INITIAL_NUMBERS[getRandomNum(INITIAL_NUMBERS.length)]


  /**
   * 端っこ順でソートする
   * @param direction 起点とする方向 
   * @returns 端っこ順にソートしたpoints
   */
  const sortPoints = (direction: DirectionKeyType) => {
    const Directions = {
      LEFT: (a: PointType, b: PointType) => a.x - b.x,
      RIGHT: (a: PointType, b: PointType) => b.x - a.x,
      UP: (a: PointType, b: PointType) => a.y - b.y,
      DOWN: (a: PointType, b: PointType) => b.y - a.y,
    }

    return fieldState.points.sort(Directions[direction])
  }

  /**
   * 次の座標を返すメソッド
   * @param direction 方向
   * @param currentPoint 現在の座標
   * @returns 次の座標（存在しない場合はnull）
   */
  const getNextPoint = (direction: DirectionKeyType, currentPoint: PointType) => {
    const nextPoints = {
      LEFT: { x: currentPoint.x - 1, y: currentPoint.y },
      RIGHT: { x: currentPoint.x + 1, y: currentPoint.y },
      UP: { x: currentPoint.x, y: currentPoint.y - 1 },
      DOWN: { x: currentPoint.x, y: currentPoint.y + 1 },
    }

    if (nextPoints[direction].x < 0 || fieldState.endPoint < nextPoints[direction].x) return null
    if (nextPoints[direction].y < 0 || fieldState.endPoint < nextPoints[direction].y) return null
    return nextPoints[direction]
  }

  return {
    ...readonly(fieldState),
    initializeFields,
    move
  }
});
