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

  const fieldState = reactive<FieldStateType>({
    fields: [],
    points: [],
  })

  const initializeFields = (length: number) => {
    for (let y = 0; y < length; y++) {
      fieldState.fields.push(makeRow(length, y))
    }
  }

  const setField = (x: number, y: number, field: PowerOfTwoType) => {
    fieldState.fields[y][x] = field
  }

  const setPoint = (point: PointType) => {
    fieldState.points.push(point)
  }


  // private method
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
  const getInitialNumber = () => INITIAL_NUMBERS[getRandomNum(INITIAL_NUMBERS.length)]

  return {
    ...readonly(fieldState),
    initializeFields
  }
});
