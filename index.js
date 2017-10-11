const CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

// throws an error if len cannot be coerced to a number
// NOTE: null and [] are coerced to 0 by unary+
function GetRandomString (len) {
  len = +len;
  if (isNaN(len)) throw new TypeError(`Argument 'len' must be a number!`);

  const n = CHARS.length;

  let ret = "";
  for (let i = 0; i < len; i++) ret += CHARS[Math.floor(Math.random() * n)];
  return ret;
}

module.exports = GetRandomString;
