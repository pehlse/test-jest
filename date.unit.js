import dateAbstract from './date'

describe('jus for test', () => {
  it('Deve retornar a data formatada quando um new date é informado', () => {
    const dateToTest = new Date(1997, 2, 23, 23,0,0)

    expect(dateAbstract(dateToTest).format('dd/MM/yyyy')).toBe('23/03/1997')
  })

  it('Deve retornar a data formata quando uma data formatada é informada', () => {
    const dateToTest = '23/03/1997'

    expect(dateAbstract(dateToTest, 'dd/MM/yyyy').format('dd/MM/yyyy')).toBe(
      '23/03/1997'
    )
  })

  it('Deve retornar a data formata quando uma ISO é informada', () => {
    const dateToTest = '2023-02-09T19:19:45.943Z'

    expect(dateAbstract(dateToTest, 'iso').format('dd/MM/yyyy')).toBe(
      '09/02/2023'
    )
  })

  it('Deve retornar verdadeiro caso a data seja igual ou posterior', () => {
    const dateToTestInitial = '23/03/2023'
    const dateToTestFinal = '23/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrBefore(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeTruthy()
  })

  it('Deve retornar falso caso a data seja posterior', () => {
    const dateToTestInitial = '25/03/2023'
    const dateToTestFinal = '23/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrBefore(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeFalsy()
  })

  it('Deve retornar verdadeiro caso a data seja igual ou posterior', () => {
    const dateToTestInitial = '20/03/2023'
    const dateToTestFinal = '23/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrBefore(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeTruthy()
  })

  it('Deve retornar verdadeiro caso a data seja diferente e posterior', () => {
    const dateToTestInitial = '23/03/2023'
    const dateToTestFinal = '24/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrBefore(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeTruthy()
  })

  it('Deve retornar falso caso a data seja igual ou anterior', () => {
    const dateToTestInitial = '23/03/2023'
    const dateToTestFinal = '22/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrBefore(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeFalsy()
  })

  it('Deve retornar verdadeiro caso a data seja diferente e anterior', () => {
    const dateToTestInitial = '23/03/2023'
    const dateToTestFinal = '24/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrBefore(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeTruthy()
  })

  it('Deve retornar apenas a hora formatada a partir de uma iso date', () => {
    const dateToTest = '2023-03-07T18:46:44.711Z'

    expect(dateAbstract(dateToTest, 'iso').format('HH:mm')).toBe('15:46')
  })

  it('Deve retornar falso quando passado uma data anterior', () => {
    const dateAfter = dateAbstract().subDays(2)

    expect(dateAbstract(dateAfter).isAfterToday()).toBeFalsy()
  })

  it('Deve retornar falso quando passado uma data anterior', () => {
    expect(dateAbstract('01/01/2023', 'dd/MM/yyyy').isAfterToday()).toBeFalsy()
  })

  it('Deve retornar verdadeiro quando passado uma data posterior', () => {
    const dateAfter = dateAbstract().addDays(2)

    expect(dateAbstract(dateAfter, 'dd/MM/yyyy').isAfterToday()).toBeTruthy()
  })

  it('Deve retornar verdadeiro caso a data seja igual', () => {
    const dateToTestInitial = '23/03/2023'
    const dateToTestFinal = '23/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrAfter(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeTruthy()
  })

  it('Deve retornar verdadeiro caso a data seja posterior', () => {
    const dateToTestInitial = '25/03/2023'
    const dateToTestFinal = '23/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrAfter(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeTruthy()
  })

  it('Deve retornar falso caso a data seja anterior', () => {
    const dateToTestInitial = '20/03/2023'
    const dateToTestFinal = '23/03/2023'

    expect(
      dateAbstract(dateToTestInitial, 'dd/MM/yyyy').isSameOrAfter(
        dateToTestFinal,
        'dd/MM/yyyy'
      )
    ).toBeFalsy()
  })

  it('Deve alterar a data para o começo do dia', () => {
    const dateToStart = dateAbstract('25/05/2023', 'dd/MM/yyyy').startOfDay()

    expect(dateAbstract(dateToStart).format('dd/MM/yyyy HH:mm:ss')).toBe(
      '25/05/2023 00:00:00'
    )
  })

  it('Deve alterar a data para o fim do dia', () => {
    const dateToStart = dateAbstract('25/05/2023', 'dd/MM/yyyy').endOfDay()

    expect(dateAbstract(dateToStart).format('dd/MM/yyyy HH:mm:ss')).toBe(
      '25/05/2023 23:59:59'
    )
  })

  it('Deve adicionar meses a data', () => {
    const deteToAddMonths = dateAbstract('01/02/2023', 'dd/MM/yyyy').addMonths(
      2
    )

    expect(dateAbstract(deteToAddMonths).format('dd/MM/yyyy')).toBe(
      '01/04/2023'
    )
  })

  it('Deve subtrair dias ha uma data', () => {
    const deteToSubDays = dateAbstract('01/02/2023', 'dd/MM/yyyy').subDays(1)

    expect(dateAbstract(deteToSubDays).format('dd/MM/yyyy')).toBe('31/01/2023')
  })

  it('Deve adicionar dias ha uma data', () => {
    const deteToAddDays = dateAbstract('01/02/2023', 'dd/MM/yyyy').addDays(1)

    expect(dateAbstract(deteToAddDays).format('dd/MM/yyyy')).toBe('02/02/2023')
  })
})
