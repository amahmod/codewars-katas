/*
  Title: Friend or Foe?

  Kata Link: https://www.codewars.com/kata/55b42574ff091733d900002f

  Discuss Link: https://www.codewars.com/kata/55b42574ff091733d900002f/discuss

  Solutions Link: https://www.codewars.com/kata/55b42574ff091733d900002f/solutions

  Description:
  Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.
```haskell
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
```

Note: keep the original order of the names in the output.

  Examples:

  Notes:
*
*/

function friend(friends) {
  return friends.filter(f => f.length === 4)
}

module.exports = friend
