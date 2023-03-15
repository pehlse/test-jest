import {
    isAfter,
    isBefore,
    isSameDay,
    parse,
    parseISO,
    addDays,
    subDays,
    addMonths,
    startOfDay,
    endOfDay,
  } from 'date-fns'
  import { format, utcToZonedTime } from 'date-fns-tz'
  
  function toParse(date, parseString) {
    if (date instanceof Date) {
      return date
    } else if (parseString === 'iso') {
      return parseISO(date)
    } else {
      return parse(date, parseString, new Date())
    }
  }
  
  function dateAbstract(date = new Date(), parseString) {
    const dateParsed = toParse(date, parseString)
    console.log('dateParsed', dateParsed)
    console.log('aquiii', dateParsed)
    return {
      date: dateParsed,
  
      format: (stringFormat) =>{
        console.log(utcToZonedTime(dateParsed, 'America/Sao_Paulo'))
        return format(utcToZonedTime(dateParsed, 'America/Sao_Paulo'), stringFormat, {
          timeZone: 'America/Sao_Paulo',
        })
      },
      isSameOrBefore: (dateToCompare, parseString) => {
        const finalDateParsed = toParse(dateToCompare, parseString)
  
        return (
          isSameDay(dateParsed, finalDateParsed) ||
          isBefore(dateParsed, finalDateParsed)
        )
      },
  
      isSameOrAfter: (finalDate, parseString) => {
        const finalDateParsed = toParse(finalDate, parseString)
  
        return (
          isSameDay(dateParsed, finalDateParsed) ||
          isAfter(dateParsed, finalDateParsed)
        )
      },
  
      addDays: (numberToAdd) => addDays(dateParsed, numberToAdd),
  
      subDays: (numberToSub) => subDays(dateParsed, numberToSub),
  
      isAfterToday: () => isAfter(dateParsed, new Date()),
  
      addMonths: (numberToAdd) => addMonths(dateParsed, numberToAdd),
  
      startOfDay: () => startOfDay(dateParsed),
  
      endOfDay: () => endOfDay(dateParsed),
    }
  }
  
  export default dateAbstract
  