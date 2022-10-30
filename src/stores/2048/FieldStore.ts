import { computed, reactive, readonly } from "vue";
import { defineStore } from "pinia";
import type { Nullable, PowerOfTwoType } from "@/types";

type FieldStateType = {
  fields: Nullable<PowerOfTwoType>[][]
}

export const useFieldStore = defineStore("field", () => {
  const fieldState = reactive<FieldStateType>({
    fields: []
  })

  const initializeFields = (length: number) => {
    for (let index = 0; index < length; index++) {
      fieldState.fields.push([])
    }
  }


  return {
    ...readonly(fieldState),
    initializeFields
  }
});
