# 🃏 The Math of Perfect Shuffles

Comprehensive research into "perfect shuffles" and their relationship to prime numbers
and the Euler totient function. The hypothesis, is that ranges where perfectly shuffling
range takes as many perfect shuffles as there are cards, is one less than a prime number.
For example, 4 cards (1, 2, 3, 4) takes 4 "perfect shuffles" to return to its original
position. This implies that 4+1 is a prime number, which 5 is. This conjecture is true
for the sample set up to \_.

## Brute Force

We can brute force the solution by "interlocking" a "deck of cards." Using the above
example of 4 cards, we see the following:

```ts
(Shuffle 0) [1, 2, 3, 4]
(Shuffle 1) [3, 1, 4, 2]
(Shuffle 2) [4, 3, 2, 1]
(Shuffle 3) [2, 4, 1, 3]
(Shuffle 4) [1, 2, 3, 4]
```

We can see that a deck containing 4 cards takes 4 shuffles to return to its original
position. It should also be noted that the deck inverts (counts backwards) halfway through
at 2 shuffles, which can be seen as a simplification to the brute force technique, and
a further conjecture that if the number of shuffles it takes to "invert" the deck is
half the length of the deck, that the length of the deck plus one is a prime number. Here,
that would mean since a deck of 4 cards inverts at 2 shuffles which is 4/2, then 4+1 is
a prime number, wich 5 is.

There exist two avenues to take in determining whether a number is a prime number or not.

1. speeding up the time it takes to brute force the answer;

2. and, determining if there exists a direct, analytical solution.

## Speeding Up the Brute Force

Does there exist an analytical solution to the above conjecture? It should be noted that
one does not need to trace the path of every card in the deck, rather if there exists an
analytical solution to the position of a card at any shuffle, we could more quickly come
to a solution for a set range. For example, the path of the "1" in the example of 4, is
`1 > 2 > 4 > 3 > 1`. This again implies that it takes 4 shuffles for the 1 to return to
its original position. This also goes for "2", `2 > 4 > 3 > 1 > 2`.

We can note from the above, that if the card is in the first half of the deck, that it's
position doubles. This is easily deduced by considering how the cards are interlocked.
Every card gets "paired" with a card from the back half, and since the front half
follows the back half, cards that were once in the front have their position doubled.

Let's take a look at a larger example:

```ts
(Shuffle 0) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(Shuffle 1) [6, 1, 7, 2, 8, 3, 9, 4, 10, 5]
```

You can see that the "card" in position 1 moves from `1 > 2`. The "card" in position 2
moves from `2 > 4`. The "card" in position 3 moves from `3 > 6` and so on. But, how does
this track the motion of the latter half of the deck?

## The Search for an Analytical Solution
