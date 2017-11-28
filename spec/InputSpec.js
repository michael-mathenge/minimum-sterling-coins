describe("Input.js", function() {

  describe("Helper", function() {

    it("formHTML() should return expected valid HTML", function() {
      var results = {
        '200': 1,
        '100': 1,
        '20': 2
      };
      var html = "<ul><li>2 x 20p</li><li>1 x £1</li><li>1 x £2</li></ul>";
      expect(Helper.formHTML(results)).toEqual(html);
    });

    it("transformKey() should transform '100' to '£1'", function() {
      expect(Helper.transformKey('100')).toEqual('£1');
    });

    it("transformKey() should transform '200' to '£2'", function() {
      expect(Helper.transformKey('200')).toEqual('£2');
    });

    it("transformKey() should transform '50' to '50p'", function() {
      expect(Helper.transformKey('50')).toEqual('50p');
    });

    it("transformKey() should transform '1' to '1p'", function() {
      expect(Helper.transformKey('1')).toEqual('1p');
    });

  });

});
