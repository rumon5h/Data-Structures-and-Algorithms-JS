# Data-Structures-and-Algorithms-JS

### What is an algorithms?

* Ans:- An algorithm is a set of well-defined instructions to particular problem.
* Ans:- An algorithm is a set of well-defined instructions to solve a particular problem.

### Characteristics

* Well defined inputs and outputs
* Each step should be clear and unambiguous
* Language independent

### Why algorithms?

* As a developer, you're going to come across problems that you nee to solve.
* Learning algorithms translates to learning different techniques to efficiently solve those problems.
* One problem can be solved in many ways using different algorithms.
* Every algorithm comes with its own tradeoffs when it comes to performance.

### Algorithm analysis
* There are multiple ways to solve one problem.
* Ex: There are multiple algorithms to sort a list of numbers.
* How do we analyse which one of them is the most efficient algorithm?
* Generally, when we talk about performance, we use an absolute measure.
* if I can run 100 metters in 12 seconds, I'm faster then someone who takas 15 seconds.

### Algorithm analysis contd.

* The absolute runnign time of an algorithm connot be predicted, since it depends on a number of factors.

* - Programming language used to implement the algorithm 
* - The computer the program runs on.
* - Other programs running at the same time.
* - Quality of the operating system.

#### We evaluate the performance of an algorithm in terms of its input size

* Time complexity - Amount of time taken by an algorithm to run, as a function of input sizw.
* Space complexity - Amount of memory taken by an algorithm to run, as a function of input size.

* By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.

* there is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.
* If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.
* If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.


### How to represent complexity?

#### Asymptotic notations
#### - Mathematical tools to represent time and space complexity
* 1. Big-O Notation (O-notation) -Worst case complexity.
* 2. Omega Notatiion ( Omega - Notation) - Best case complexity.
* 3. The Notation (Theta-notation) - Average case complexity.