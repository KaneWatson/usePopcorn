import { useEffect, useState } from "react"

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const data = localStorage.getItem(key)
    if (!data) return initialState
    return JSON.parse(data)
  })

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value))
    },
    [value, key]
  )

  return [value, setValue]
}
