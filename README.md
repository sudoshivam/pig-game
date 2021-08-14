# Pig Dice Game
An implementation of the famous <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)">Pig (Dice Game)</a> created with
HTML, CSS and Javascript.

## Rules
<ul>
  <li>Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold".</li>
  <li>If the player rolls a 1, they score nothing and it becomes the next player's turn.</li>
  <li>If the player rolls any other number, it is added to their turn total and the player's turn continues.</li>
  <li>If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.</li>
  <li>The first player to score 100 or more points wins.</li>
</ul>

For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn total of 22 points to her score.

Players can start a new game anytime by clicking on "new game" button.
