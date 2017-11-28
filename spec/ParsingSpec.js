describe("Input Parsing", function() {

  describe("Digit(s)", function() {
    it("'4' should return 4", function() {
      expect(Parsing.new('4')).toEqual(4);
    });
    it("'85' should return 85", function() {
      expect(Parsing.new('85')).toEqual(85);
    });
  });

  describe("Pence symbol", function() {
    it("'197p' should return 197", function() {
      expect(Parsing.new('197p')).toEqual(197);
    });
    it("'2p' should return 2", function() {
      expect(Parsing.new('2p')).toEqual(2);
    });
  });

  describe("Pounds decimal", function() {
    it("'1.87' should return 187", function() {
      expect(Parsing.new('1.87')).toEqual(187);
    });
  });

  describe("Pounds symbol", function() {
    it("'£1.23' should return 123", function() {
      expect(Parsing.new('£1.23')).toEqual(123);
    });
    it("'£2' should return 200", function() {
      expect(Parsing.new('£2')).toEqual(200);
    });
    it("'£10' should return 1000", function() {
      expect(Parsing.new('£10')).toEqual(1000);
    });
  });

  describe("Pound & pence decimal", function() {
    it("'£1.87p' should return 187", function() {
      expect(Parsing.new('£1.87p')).toEqual(187);
    });
  });

  describe("Missing pence", function() {
    it("'£1p' should return 100", function() {
      expect(Parsing.new('£1p')).toEqual(100);
    });
  });

  describe("Missing pence but present decimal point", function() {
    it("'£1.p' should return 100", function() {
      expect(Parsing.new('£1.p')).toEqual(100);
    });
  });

  describe("Buffered zeros", function() {
    it("'001.41p' should return 141", function() {
      expect(Parsing.new('001.41p')).toEqual(141);
    });
  });

  describe("Rounding three decimal places to two", function() {
    it("'4.235p' should return 424", function() {
      expect(Parsing.new('4.235p')).toEqual(424);
    });
  });

  describe("Rounding with symbols", function() {
    it("'£1.257422457p' should return 126", function() {
      expect(Parsing.new('£1.257422457p')).toEqual(126);
    });
  });
  
});