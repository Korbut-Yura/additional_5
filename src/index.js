module.exports = function check(str, bracketsConfig) {
  while (str.length) {
    let count = 0;

        for (let i = 0; i < bracketsConfig.length; i++) {
            let brackets = bracketsConfig[i].join('');
            let foundedPos = str.indexOf(brackets);
    
            if (foundedPos != -1) {
                str = str.slice(0, foundedPos) + str.slice(foundedPos + 2);
                count += 1;
            }
            else {
                continue;
            }
        }
        if (count == 0) break;
    }
    if (str.length)  return false
     else return true;
  }
