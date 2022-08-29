/*
  Title: Jaden Casing Strings

  Kata Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6

  Discuss Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/discuss

  Solutions Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions

  Description:
  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for [some of his philosophy that he delivers via Twitter](https://twitter.com/jaden). When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

    Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
    Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

```if:java
Note that the **Java version** expects a return value of null for an empty string or null.
```

[Link to Jaden's former Twitter account @officialjaden via archive.org](https://web.archive.org/web/20190624190255/https://twitter.com/officialjaden)

  Examples:

  Notes:
*
*/

String.prototype.toJadenCase = function () {
  return this.valueOf().replace(/(?<!')\b\w/g, char => char.toUpperCase())
}

module.exports = String
