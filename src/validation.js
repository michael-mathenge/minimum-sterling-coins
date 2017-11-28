/**
 * Object holding functionality to validate user input from input field (sterling amount).
 */
var Validation = {
  /**
   * Validates a string against requirements;
   * Not empty, Greater than 0, Does not contain non-numerical characters, Contains numerical character(s).
   * Returns an object containing the result (boolean) and error message (string) if applicable.
   * @param {String} str
   * @return {Object} response
   */
  checkInput: function(str) {
    str = this.removeWhitespace(str);

    // Init of response object.
    var response = {
      'status': false,
      'message': ''
    };

    if (!str) {
      response.message = 'Input contains no characters.';
    } else if (str === '0'){
      response.message = 'Input must be greater than 0.';
    } else if (this.containsAlpha(str)) {
      response.message = 'Input contains unaccepted non-numerical characters.';
    } else if (this.containsNoNumeric(str)) {
      response.message = 'Input contains no numbers.';
    } else {
      response.status = true;
    }

    return response;
  },
  
  /**
   * Using regex, replaces all whitespace within given string with nothing, thus removing it.
   * Returns modified string.
   * @param {String} str
   * @return {String} str
   */
  removeWhitespace: function(str) {
    return str.replace(/\s+/g, '');
  },

  /**
   * Using regex, tests if given string contains characters other than;
   * '£', 'p', '.', 0-9
   * Returns true if the string contains unaccepted non-numerical characters.
   * @param {String} str
   * @return {Boolean} result
   */
  containsAlpha: function(str) {
    var regex = /[^£.p\d]/g;
    return regex.test(str);
  },

  /**
   * Using regex, tests if given string contains no numerical values (0-9).
   * Returns true if no numerical characters are present within string.
   * @param {String} str
   * @return {Boolean} result
   */
  containsNoNumeric: function(str) {
    var regex = /\d+/g;
    return !regex.test(str);
  }
};