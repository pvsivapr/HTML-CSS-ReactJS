export const INCREMENT = "increment"
export const DECREMENT = "decrement"
export const RESET = "reset"

export const increment = () => ({Type: INCREMENT})
export const decrement = () => ({Type: DECREMENT})
export const reset = () => ({Type: RESET})