minimum-coins
=============

Simple JavaScript application that given a number of pennies will calculate the minimum number of coins needed to make that amount.

## Usage

1. Download/clone the repository 
2. open `views/index.html` in a browser. 
3. Then enter a Sterling amount (e.g. £4.74) and press Enter.

## Structure

### `src/`

Contains the Javascript required to:

* **validation.js** - validate the user's input.
* **parsing.js** - convert the user's input to an amount of pennies.
* **calculation.js** - calculate the minimum number of coins for a given amount of pennies.
* **input.js** - process events from the user and display/manipulate data within the UI.

### `spec/`

Contains unit tests for the Javascript files using the [Jasmine](http://pivotal.github.io/jasmine/) testing framework.

### `views/`

Contains the single html file required for the UI, including the libraries used ([Bootstrap](http://getbootstrap.com/), [jQuery](http://jquery.com/)).

## Algorithm

A simple greedy algorithm was used within the application, instead of using dynamic programming. This is due to the requirements for the application specifiying that Sterling coins were used as currency, which thus allowed for the use of a greedy algorithm.

If in the future the application were to be extended, for example to include multiple alternative currencies then a recursive algorithm may need to be added. The following denominations would not work with the current greedy algorithm for example: [1,2,3,4,5].



