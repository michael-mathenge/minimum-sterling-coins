describe("Input Validation", function() {
  var response;

  beforeEach(function () {
    response = {
      'status': false,
      'message': ''
    };
  });

  describe("Empty string", function() {
    it("to fail with error 'Input contains no characters.'", function() {
      response.message = 'Input contains no characters.';
      expect(Validation.checkInput('')).toEqual(response);
    });
  });

  describe("'0'", function() {
    it("to fail with error 'Input must be greater than 0.'", function() {
      response.message = 'Input must be greater than 0.';
      expect(Validation.checkInput('0')).toEqual(response);
    });
  });

  describe("'£p'", function() {
    it("to fail with error 'Input contains no numbers.'", function() {
      response.message = 'Input contains no numbers.';
      expect(Validation.checkInput('£p')).toEqual(response);
    });
  });

  describe("Non-Numerical Characters", function() {

    describe("'1x'", function() {
      it("to fail with error 'Input contains unaccepted non-numerical characters.'", function() {
        response.message = 'Input contains unaccepted non-numerical characters.';
        expect(Validation.checkInput('1x')).toEqual(response);
      });
    });

    describe("'£1x.0p'", function() {
      it("to fail with error 'Input contains unaccepted non-numerical characters.'", function() {
        response.message = 'Input contains unaccepted non-numerical characters.';
        expect(Validation.checkInput('£1x.0p')).toEqual(response);
      });
    });

  });

});