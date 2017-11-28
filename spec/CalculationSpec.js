describe("Calculating Minimum Coins", function() {
  var results;

  beforeEach(function() {
    results = {};
  });

  it("48 should equal {'20':2, '5':1, '2':1, '1':1}", function() {
    results['20'] = 2;
    results['5'] = 1;
    results['2'] = 1;
    results['1'] = 1;
    expect(Calculation.minimumCoins(48)).toEqual(results); 
  });

  it("123 should equal {'100':1, '20':1, '2':1, '1':1}", function() {
    results['100'] = 1;
    results['20'] = 1;
    results['2'] = 1;
    results['1'] = 1;
    expect(Calculation.minimumCoins(123)).toEqual(results); 
  });

  it("256 should equal {'200':1, '50':1, '5':1, '1':1}", function() {
    results['200'] = 1;
    results['50'] = 1;
    results['5'] = 1;
    results['1'] = 1;
    expect(Calculation.minimumCoins(256)).toEqual(results); 
  });

  it("100 should equal {'100':1}", function() {
    results['100'] = 1;
    expect(Calculation.minimumCoins(100)).toEqual(results); 
  });

  it("200 should equal {'200':1}", function() {
    results['200'] = 1;
    expect(Calculation.minimumCoins(200)).toEqual(results); 
  });

  it("400 should equal {'200':2}", function() {
    results['200'] = 2;
    expect(Calculation.minimumCoins(400)).toEqual(results); 
  });

});