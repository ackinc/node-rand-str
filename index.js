const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "1234567890";
const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

function generateRandomString(nChars = 6, constraints = {}) {
  const retval = [];
  let allowed = "";

  if (Object.keys(constraints).length === 0) {
    allowed = lowercase + uppercase + digits + symbols;
  } else {
    if (constraints.lowercase) allowed += lowercase;
    if (constraints.uppercase) allowed += uppercase;
    if (constraints.digits) allowed += digits;
    if (constraints.symbols) allowed += symbols;
  }

  if (allowed.length === 0) {
    if (nChars === 0) return "";
    throw new Error(`Cannot generate a string if no characters are allowed!`);
  }

  for (let i = 0; i < nChars; i++) {
    retval.push(allowed[Math.floor(allowed.length * Math.random())]);
  }
  return retval.join("");
}

module.exports = generateRandomString;
