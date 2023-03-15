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
    addHours,
  } from 'date-fns'
  import { utcToZonedTime, zonedTimeToUtc, formatInTimeZone, getTimezoneOffset } from 'date-fns-tz'
  
  const timeZone = 'America/Sao_Paulo'

  function toParse(date, parseString) {
    if (date instanceof Date) {
      return date
    } else if (parseString === 'iso') {
      return parseISO(date)
    } else {
      const zonedDate = utcToZonedTime(new Date(), timeZone);
      const parsedDate = parse(date, parseString, zonedDate);
      return zonedTimeToUtc(parsedDate, timeZone);
    }
  }
  
  function dateAbstract(date = new Date(), parseString) {
    const dateParsed = toParse(date, parseString)

    const offsSetTimeZoneInMileSeconds = getTimezoneOffset(timeZone, dateParsed)
    const offSetInHours = (offsSetTimeZoneInMileSeconds * -1) / 3600000

    return {
      date: dateParsed,
  
      format: (stringFormat) =>{
        return formatInTimeZone(dateParsed,timeZone, stringFormat, {
          timeZone: timeZone,
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
  
      startOfDay: () => {
        return addHours(startOfDay(dateParsed), offSetInHours)
      },
  
      endOfDay: () => {
        return addHours(endOfDay(dateParsed), offSetInHours)
      },
    }
  }
  
  export default dateAbstract
  