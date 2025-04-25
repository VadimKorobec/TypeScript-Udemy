var calculateInvestment = function (data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    if (initialAmount < 0) {
        return "Initial investment ammount must be at least zero.";
    }
    if (duration <= 0) {
        return "No valid amount of years provided.";
    }
    if (expectedReturn < 0) {
        return "Expected return must be at least zero";
    }
    var total = initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i += 1) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: "Year ".concat(i + 1),
            totalAmount: total,
            totalInterestEarned: totalInterestEarned,
            totalContributions: totalContributions,
        });
    }
    return annualResults;
};
var printResults = function (results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        console.log(result.year);
        console.log("Total: ".concat(result.totalAmount.toFixed(0)));
        console.log("Total Contributions: ".concat(result.totalContributions.toFixed(0)));
        console.log("Total Interest Earned: ".concat(result.totalInterestEarned.toFixed(0)));
        console.log("--------------------------");
    }
};
var investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
var results = calculateInvestment(investmentData);
printResults(results);
