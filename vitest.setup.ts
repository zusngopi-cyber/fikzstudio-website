import '@testing-library/jest-dom'

// Mock localStorage for tests
const localStorageMock = {
  getItem: (key: string) => {
    return localStorageMock.store[key] || null
  },
  setItem: (key: string, value: string) => {
    localStorageMock.store[key] = value
  },
  removeItem: (key: string) => {
    delete localStorageMock.store[key]
  },
  clear: () => {
    localStorageMock.store = {}
  },
  store: {} as Record<string, string>
}

global.localStorage = localStorageMock as any
