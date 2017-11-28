/**
 * Object holding functionality to parse user input from String into Float.
 */
var Parsing = {
  /**
   * Parses a String to a Float representing the correct number of pennies.
   * Removes non-numeric characters, converts to Float and converts from pounds to pennies if necessary.
   * Returns a Float representing the original Strings value in pennies.
   * @param {String} str
   * @return {Float} num
   */
  new: function(str) {
    // Check if string contains pound sign and hold state.
    var convert = false;
    if (this.isPound(str)) {
      convert = true;
    }

    str = this.removeNonNumeric(str);

    var num = parseFloat(str);
    // If Float is a decimal or orignal String contained a pound sign,
    // then convert from pounds to pennies.
    if (this.isDecimal(num) || convert) {
      num = this.convertToPennies(num);
    } 

    return num;
  },

  /**
   * Tests if String contains a '£' character.
   * Returns true if present.
   * @param {String} str
   * @return {Boolean} result
   */
  isPound: function(str) {
    return (str.indexOf('£') !== -1);
  },

  /**
   * Using regex, removes any amount of '£' and/or 'p' from String.
   * Returns modified String.
   * @param {String} str
   * @return {String} str
   */
  removeNonNumeric: function(str) {
    return str.replace(/[£p]+/g, '');
  },

  /**
   * Tests if Float is decimal, by calculating the modulus of 1 of the number.
   * Returns true if Float is decimal.
   * @param {Float} num
   * @return {Boolean} result
   */
  isDecimal: function(num) {
    return (num % 1 !== 0);
  },

  /**
   * Converts pounds to pennies by multiplying by 100 and rounding to 2 decimal places.
   * Returns modified Float.
   * @param {Float} num
   * @return {Float} num
   */
  convertToPennies: function(num) {
    return (num.toFixed(2) * 100);
  }
};