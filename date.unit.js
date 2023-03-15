import dateAbstract from './date'

describe('jus for test', () => {
  it('Deve retornar apenas a hora formatada a partir de uma iso date', () => {
  const dateToTest = '2023-03-07T18:46:44.711Z'

  expect(dateAbstract(dateToTest, 'iso').format('HH:mm')).toBe('15:46')
  })
})
