//TextHelper
function TextHelper (
  paymentMethod,
  cost,
  cardPaymentInfo,
  length,
  format,
  contactText,
  method
) {
  this.paymentMethod = paymentMethod;
  this.cost = cost;
  this.cardPaymentInfo = cardPaymentInfo;
  this.length = length;
  this.format = format;
  this.contactText = contactText;
  this.method = method;
};

TextHelper.prototype.setContactText = function (text, email) {
  var tempString = "We have sent the following prepayment details to";
  if (text === null && email === null) {
    tempString = "You should make a note of the following:";
  } else if (text != null && email === null) {
    tempString = tempString + " " + text;
  } else if (text === null && email != null) {
    tempString = tempString + " " + email;
  } else {
    tempString = tempString + " " + text + " and " + email;
  }
  this.contactText = tempString;
  console.log(tempString);
};

TextHelper.prototype.setMethod = function (email) {
  if (email != null) {
    this.method = "an email"
  }
};

TextHelper.prototype.setPaymentText = function (duration) {
  if (duration === "dd") {
    this.paymentMethod = "10 payments of £10.40 by Direct debit";
    this.cost = "£104";
    this.length = "12 months";
    this.format = "account";
    this.doneText = "Done";
  } else if (duration === "three") {
    this.paymentMethod = "Card payment";
    this.cost = "£29.10";
    this.cardPaymentInfo = '3 month prescription prepayment';
    this.length = "3 months";
    this.format = "card";
  } else if (duration === "twelve") {
    this.paymentMethod = "Card payment";
    this.cost = "£104";
    this.cardPaymentInfo = '12 month prescription prepayment';
    this.length = "12 months";
    this.format = "card";
  }
};

function createTextHelper() {
  return new TextHelper();
};

module.exports.createTextHelper = createTextHelper;