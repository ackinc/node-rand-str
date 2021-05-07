# random-string-generator

https://github.com/ackinc/random-string-generator

Generate a random string (/[A-Za-z0-9]+/) of specified length, and satisfying the specified constraints

If no constraints are specified, the library assumes all characters are allowed

# Use case

Password or temporary token generation

# Usage

```
const rsg = require('random-string-generator');
console.log(rsg(0)); //=> ""
console.log(rsg(5)); //=> "3R8aE"
console.log(rsg(5, { lowercase: true })); //=> "fewjk"
```

# To Do

- Tests
- Docs (usage)
- Specify support node version in package.json
- Allow browser usage
- Constraint: whitelisted chars
- Constraint: blacklisted chars
- Constraint: symbols that can be part of a url-component (See https://stackoverflow.com/questions/695438/what-are-the-safe-characters-for-making-urls)
