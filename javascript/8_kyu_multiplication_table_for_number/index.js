/*
  Title: Multiplication table for number

  Kata Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

  Discuss Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/discuss

  Solutions Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/solutions

  Description:
  Your goal is to return multiplication table for ```number``` that is always an integer from 1 to 10.

For example, a multiplication table (string) for ```number == 5``` looks like below:

```
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```

P. S. You can use ```\n``` in string to jump to the next line.


Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

  Examples:

  Notes:
*
*/

function multiTable(number) {
  return Array.from({ length: 10 }, (_, index) => `${index + 1} * ${number} = ${(index + 1) * number}`).join('\n')
}

module.exports = multiTable
