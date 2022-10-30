import { reactive, readonly } from "vue";
import { defineStore } from "pinia";
import type { Nullable, PowerOfTwoType } from "@/types";
import { getRandomNum } from "@/utils";

type FieldStateType = {
  fields: Nullable<PowerOfTwoType>[][]
}

export const useFieldStore = defineStore("field", () => {
  const INITIAL_NUMBERS: PowerOfTwoType[] = [2, 4, 8]

  const fieldState = reactive<FieldStateType>({
    fields: []
  })

  const initializeFields = (length: number) => {
    for (let index = 0; index < length; index++) {
      fieldState.fields.push(makeRow(length))
    }
  }

  const setField = (x: number, y: number, field: PowerOfTwoType) => {
    fieldState.fields[y][x] = field
  }


  // private method
  const makeRow = (length: number) => {
    let row: Nullable<PowerOfTwoType>[] = []
    const targetIndex = getRandomNum(length)

    for (let index = 0; index < length; index++) {
      const field = index === targetIndex ? getInitialNumber() : null
      row.push(field)
    }

    return row
  }
  const getInitialNumber = () => INITIAL_NUMBERS[getRandomNum(INITIAL_NUMBERS.length)]

  return {
    ...readonly(fieldState),
    initializeFields
  }
});
