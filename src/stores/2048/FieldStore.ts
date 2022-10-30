import { reactive, readonly } from "vue";
import { defineStore } from "pinia";
import type { Nullable, PointType, PowerOfTwoType } from "@/types";
import { getRandomNum } from "@/utils";

type FieldStateType = {
  fields: Nullable<PowerOfTwoType>[][]
  points: PointType[]
}

export const useFieldStore = defineStore("field", () => {
  const INITIAL_NUMBERS: PowerOfTwoType[] = [2, 4, 8]

  /**
   * state
   */
  const fieldState = reactive<FieldStateType>({
    fields: [],
    points: [],
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

  return {
    ...readonly(fieldState),
    initializeFields
  }
});
