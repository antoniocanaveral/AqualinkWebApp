/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

const idGenerator = (events, length = 1) => {
  const arrayData = [];
  events.map((data) => {
    return arrayData.push(parseInt(data.id, 10));
  });
  const number = (Math.max(...arrayData) + 1).toString();
  return number.length < length ? `${'0'.repeat(length - number.length)}${number}` : number;
};

const formatNumber = (value) => {
  if(!value) return "";
  return new Intl.NumberFormat("es-Es").format(value)
}


const inputFormatter = (val) => {
  if (!val) return 0;
  return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/\.(?=\d{0,2}$)/g, ",");
}

const parserNumber = (val) => {
  if (!val) return 0;
  return Number.parseFloat(val.replace(/\$\s?|(\.*)/g, "").replace(/(\,{1})/g, ".")).toFixed(2)
}

export { ellipsis, idGenerator, formatNumber, inputFormatter, parserNumber };
