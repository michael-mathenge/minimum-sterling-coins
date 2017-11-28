// Wait for DOM to be fully loaded
$(function() {
  /**
   * jQuery bind function to the input field.
   * Will only process input when user presses enter
   */
  $('#pennies-input').bind('keypress', function(e) {
    if (e.which === 13) {
      // Skip default behaviour
      e.preventDefault();
      // Hide unwanted parts of the UI
      Helper.hideElements();
      
      // Validate the users input
      var response = Validation.checkInput(this.value)
      if (response.status === true) {
        // Parse the users input to an amount of pennies (float)
        var amount = Parsing.new(this.value);
        // Calculate the minimum number of coins for amount
        var results = Calculation.minimumCoins(amount);
        // Display results to user
        Helper.displayResult(results);
      } else {
        // Display error if validation failed
        Helper.displayError(response.message);
      }
    }
  });
});

/**
 * Object holding functionality to help with displaying/manipulating data in the UI.
 */
var Helper = {
  /**
   * Hides error alert and results pane.
   */
  hideElements: function() {
    $('#error-alert').hide();
    $('#results-panel').hide();
  },

  /**
   * Displays error message in error alert element
   * @param {String} msg
   */
  displayError: function(msg) {
    $('#error-alert').html('<p>Error: ' + msg + '</p>')
    $('#error-alert').show();
  },

  /**
   * Given an Object containing results, will style and display them in the results pane.
   * @param {Object} hash
   */
  displayResult: function(hash) {
    var html = this.formHTML(hash);
    $('#results').html(html);
    $('#results-panel').show();
  },

  /**
   * Given an Object of results, will style each key-value pair using HTML.
   * Returns a string of HTML, with each key-value on a seperate line. 
   * @param {Object} hash
   * @return {String} html
   */
  formHTML: function(hash) {
    var html = '<ul>'
    for (var key in hash) {
      html += '<li>' + hash[key] + ' x ' + this.transformKey(key) + '</li>';
    }
    html += '</ul>'
    return html;
  },

  /**
   * Converts a key (numeric coin value eg. £1 = 100) to a more human readable form.
   * @param {String} key
   * @return {String} key
   */
  transformKey: function(key) {
    if (key === '100' || key === '200') {
      key = '£' + key[0];
    } else {
      key += 'p';
    }
    return key;
  }
};
