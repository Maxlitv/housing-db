let store = {
  personerData: {
    numberOfAdults: 1,
    numberOfCars: 0,
    numberOfAllPeople: 0,
    income: '',
    downPayment: '',
  },
  errorTips: {
    savings: false,
    downPayment: false,
  },
  ageSpecs: {
    age0_2: "0-2 år",
    age3_5: "3-5 år",
    age6_9: "6-9 år",
    age10_17: "10-17 år",
    age18up: "18+ år",
  },
  numberOfChildren: {
    age0_2: 0,
    age3_5: 0,
    age6_9: 0,
    age10_17: 0,
    age18up: 0,
    total: 0,
  },
};

export default store;
