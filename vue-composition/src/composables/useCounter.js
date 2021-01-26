import { ref } from 'vue'

function useCounter(initialCount = 0, stepSize = 1) {
  const count = ref(initialCount)
  function incrementCount() {
    count.value += stepSize
  }

  return {
    count,
    incrementCount
  }
}

export default useCounter
