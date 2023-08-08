export function prettyDate(d) {
  var strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let date = d;
  if (typeof date === 'string') date = new Date(date);
  const day = date.getDate();
  const month = strArray[date.getMonth()];
  const year = date.getFullYear();
  return '' + month + ' ' + day + ', ' + year;
}
