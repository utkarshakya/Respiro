function clockDigit(value) {
    return `${value < 10 ? "0" : ""}${value}`;
}

function getTimerInfoFromURL(url) {
    const query = url.split("?");
    query.shift();
    const obj = {};
    query.forEach((element) => {
      const temp = element.split("=");
      obj[temp[0]] = Number(temp[1]);
    });
    return obj;
  }

export {clockDigit, getTimerInfoFromURL}