describe("calculateMontlyPayment tests", function () {
  it("should calculate the monthly rate correctly", function () {
    const values = {
      amount: 5000,
      years: 4,
      rate: 5.5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("116.28");
  });

  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 2400,
      years: 1,
      rate: 10,
    };
    expect(calculateMonthlyPayment(values)).toEqual("211.00");
  });

  it("should work with zero interest rate", function () {
    const values = {
      amount: 1000,
      years: 4,
      rate: 0,
    };
    expect(calculateMonthlyPayment(values)).toEqual("20.83");
  });
});
