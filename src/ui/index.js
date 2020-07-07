const moment = require("moment");
const $ = require("jquery");

const displayDateText = (dateText, selector) => {
  $(selector).text(dateText);
};

const refreshDate = () => {
  const textSpanSelector = ".dynamic";
  setInterval(function () {
    displayDateText(getDateText(), textSpanSelector);
  }, 1000);
};

const getDateText = (date) => {
  return moment().format("MM ddd, YYYY hh:mm:ss a");
};

//page loaded
$.ready(refreshDate());
