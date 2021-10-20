# Recursion

**Recursion:** In programming terms, a recursive function can be defined as a routine that calls itself directly or indirectly. Using the recursive algorithm, certain problems can be solved quite easily. [Towers of Hanoi \(TOH\)](https://www.geeksforgeeks.org/iterative-tower-of-hanoi/) is one such programming exercise. Try to write an _iterative_ algorithm for TOH. Moreover, every recursive program can be written using iterative methods. Mathematically, recursion helps to solve a few puzzles easily. For example, a routine interview question, In a party of N people, each person will shake her/his hand with each other person only once. In total how many hand-shakes would happen?

_**Solution:**_ It can be solved in different ways; graphs, recursions, etc. Let us see how recursively it can be solved. There are N persons. Each person shakes hands with each other only once. Considering N-th person, \(s\)he has to shake a hand with \(N-1\) the person. Now the problem is reduced to small instances of \(N-1\) persons. Assuming TN as a total shake-hands, it can be formulated recursively. TN = \(N-1\) + TN-1 \[T1 = 0, i.e. the last person has already shook-hand with every one\] Solving it recursively yields an arithmetic series, which can be evaluated into N\(N-1\)/2. _Exercise: In a party of N couples, only one gender \(either male or female\) can shake hands with everyone. How many shake-hands would happen?_ Usually, recursive programs result in poor time complexity. An example is a Fibonacci series. The time complexity of calculating the n-th Fibonacci number using recursion is approximately 1.6n. It means the same computer takes almost 60% more time for the next Fibonacci number. The recursive Fibonacci algorithm has overlapping subproblems. There are other techniques like _dynamic programming_ to improve such overlapped algorithms. However, a few algorithms, \(e.g. merge sort, quick sort, etc...\) result in optimal time complexity using recursion.

**Base Case:**  
One critical requirement of recursive functions is the termination point or base case. Every recursive program must have a base case to make sure that the function will terminate. Missing base case results in unexpected behavior.

**Different Ways of Writing Recursive Functions**  
**Function calling itself: \(Direct way\)**  
Most of us are aware of at least two different ways of writing recursive programs. Given below are towers of the Hanoi code. It is an example of direct calling.

{% embed url="https://replit.com/@bgoonz/prac4242\#another.py" %}

The time complexity of TOH can be calculated by formulating the number of moves.  
We need to move the first N-1 disks from Source to Auxiliary and from Auxiliary to Destination, i.e. the first N-1 disk requires two moves. One more move of the last disk from Source to Destination. Mathematically, it can be defined recursively.  
MN = 2MN-1 + 1.  
We can easily solve the above recursive relation \(2N-1\), which is exponential.

**Recursion using mutual function call: \(Indirect way\)**  
Indirect calling. Though least practical, a function \[funA\(\)\] can call another function \[funB\(\)\] which in turn calls \[funA\(\)\] the former function. In this case, both the functions should have the base case.  
**Defensive Programming:**  
We can combine defensive coding techniques with recursion for the graceful functionality of the application. Usually, recursive programming is not allowed in safety-critical applications, such as flight controls, health monitoring, etc. However, one can use a static count technique to avoid uncontrolled calls \(NOT in safety-critical systems, but may be used in soft real-time systems\).

callDepth depth depends on function stack frame size and maximum stack size.

**Recursion using function pointers: \(Indirect way\)**  
Recursion can also implemented with function pointers. An example is a signal handler in POSIX compliant systems. If the handler causes to trigger the same event due to which the handler being called, the function will reenter.
