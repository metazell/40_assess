// timeWord.js

/**
 * Converts a 24-hour time string into words.
 *
 * @param {string} timeStr - The time in "HH:MM" format.
 * @returns {string} - The time expressed in words.
 */
function timeWord(timeStr) {
    const [hourStr, minuteStr] = timeStr.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    let period = 'am';
  
    // Determine period and adjust hour for 12-hour format
    if (hour === 0) {
      hour = 12; // Change "00" to "12" for midnight hour
      period = 'am';
    } else if (hour === 12) {
      period = 'pm';
    } else if (hour > 12) {
      period = 'pm';
      hour -= 12;
    }
  
    // Special cases
    if (hourStr === '00' && minute === 0) return 'midnight';
    if (hourStr === '12' && minute === 0) return 'noon';
  
    const numberWords = [
      'zero', 'one', 'two', 'three', 'four', 'five',
      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
      'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen', 'twenty',
      'twenty one', 'twenty two', 'twenty three', 'twenty four',
      'twenty five', 'twenty six', 'twenty seven', 'twenty eight',
      'twenty nine', 'thirty', 'thirty one', 'thirty two',
      'thirty three', 'thirty four', 'thirty five', 'thirty six',
      'thirty seven', 'thirty eight', 'thirty nine', 'forty',
      'forty one', 'forty two', 'forty three', 'forty four',
      'forty five', 'forty six', 'forty seven', 'forty eight',
      'forty nine', 'fifty', 'fifty one', 'fifty two',
      'fifty three', 'fifty four', 'fifty five', 'fifty six',
      'fifty seven', 'fifty eight', 'fifty nine'
    ];
  
    const hourWord = numberWords[hour];  // Corrected mapping for hours
    let minuteWord = '';
  
    if (minute === 0) {
      minuteWord = "o'clock";
    } else if (minute < 10) {
      minuteWord = `oh ${numberWords[minute]}`;
    } else {
      minuteWord = numberWords[minute];
    }
  
    return `${hourWord} ${minuteWord} ${period}`;
  }
  
  module.exports = timeWord;
  