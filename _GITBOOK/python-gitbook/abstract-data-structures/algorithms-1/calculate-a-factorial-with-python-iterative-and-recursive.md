# Calculate a Factorial With Python - Iterative and Recursive

#### Introduction <a id="introduction"></a>

By definition, a **factorial** is the product of a positive integer and all the positive integers that are less than or equal to the given number. In other words, getting a factorial of a number means to multiply all whole numbers from that number, down to 1.

> **0!** equals 1 as well, by convention.

A factorial is denoted by the integer and followed by an exclamation mark.

> **5!** denotes a _**factorial**_ of _**five**_.

And to calculate that factorial, we multiply the number with every whole number smaller than it, until we reach 1:

```text
5! = 5 * 4 * 3 * 2 * 1
5! = 120
```

Keeping these rules in mind, in this tutorial, we will learn how to calculate the factorial of an integer with Python, using loops and recursion. Let's start with calculating the factorial using loops.

#### Calculating Factorial Using Loops <a id="calculatingfactorialusingloops"></a>

We can calculate factorials using both the `while` loop and the `for` loop. The general process is pretty similar for both. All we need is a parameter as input and a counter.

Let's start with the `for` loop:

```text
def get_factorial_for_loop(n):
    result = 1
    if n > 1:
        for i in range(1, n+1):
            result = result * i
        return result
    else:
        return 'n has to be positive'
```

You may have noticed that we are counting starting from **1** to the `n`, whilst the definition of factorial was _from the given number down to 1_. But mathematically:

1∗2∗3∗4...∗n=n∗\(n−1\)∗\(n−2\)∗\(n−3\)∗\(n−4\)...∗\(n−\(n−1\)\)1∗2∗3∗4...∗n=n∗\(n−1\)∗\(n−2\)∗\(n−3\)∗\(n−4\)...∗\(n−\(n−1\)\)

> To simplify, `(n - (n-1))` will always be equal to **1**.

That means that it doesn't matter in which direction we're counting. It can start from **1** and increase towards the `n`, or it can start from `n` and decrease towards **1**. Now that's clarified, let's start breaking down the function we've just wrote.

Our function takes in a parameter `n` which denotes the number we're calculating a factorial for. First, we define a variable named `result` and assign `1` as a value to it.

> Why assign **1** and not **0** you ask?

Because if we were to assign **0** to it then all the following multiplications with **0**, naturally would result in a huge **0**.

Then we start our `for` loop in the range from `1` to `n+1`. Remember, the Python range will stop before the second argument. To include the last number as well, we simply add an additional `1`.

Inside the `for` loop, we multiply the current value of `result` with the current value of our index `i`.

Finally, we return the final value of the `result`. Let's test our function print out the result:

```text
inp = input("Enter a number: ")
inp = int(inp)

print(f"The result is: {get_factorial_for_loop(inp)}")
```

> If you'd like to read more about how to get user input, read our [Getting User Input in Python](https://stackabuse.com/getting-user-input-in-python/).

It will prompt the user to give input. We'll try it with `4`:

```text
Enter a number: 4
The result is: 24
```

You can use a calculator to verify the result:

**4!** is `4 * 3 * 2 * 1`, which results **24**.

Now let's see how we can calculate factorial using the `while` loop. Here's our modified function:

```text
def get_factorial_while_loop(n):
    result = 1
    while n > 1:
        result = result * n
        n -= 1
    return result
```

This is pretty similar to the `for` loop. Except for this time we're moving from `n` towards the **1**, closer to the mathematical definition. Let's test our function:

```text
inp = input("Enter a number: ")
inp = int(inp)

print(f"The result is: {get_factorial_while_loop(inp)}")
```

We'll enter 4 as an input once more:

```text
Enter a number: 4
The result is: 24
```

###

Although the calculation was `4 * 3 * 2 * 1` the final result is the same as before.

Calculating factorials using loops was easy. Now let's take a look at how to calculate the factorial using a recursive function.

#### Calculating Factorial Using Recursion <a id="calculatingfactorialusingrecursion"></a>

A recursive function is a function that _calls itself_. It may sound a bit intimidating at first but bear with us and you'll see that recursive functions are easy to understand.

In general, every recursive function has two main components: a **base case** and a **recursive step**.

Base cases are the smallest instances of the problem. Also a break, a case that will return a value and will _get out_ of the recursion. In terms of factorial functions, the base case is when we return the final element of the factorial, which is **1**.

> Without a base case or with an incorrect base case, your recursive function can run infinitely, causing an overflow.

Recursive steps - as the name implies- are the recursive part of the function, where the whole problem is transformed into something smaller. If the recursive step fails to shrink the problem, then again recursion can run infinitely.

Consider the recurring part of the factorials:

- **5!** is `5 * 4 * 3 * 2 * 1`.

But we also know that:

- `4 * 3 * 2 * 1` _is_ **4!**.

In other words **5!** is `5 * 4!`, and **4!** is `4 * 3!` and so on.

> So we can say that `n! = n * (n-1)!`. This will be the recursive step of our factorial!

A factorial recursion ends when it hits **1**. This will be our **base case**. We will return `1` if `n` is `1` or less, covering the zero input.

Let's take a look at our recursive factorial function:

```text
def get_factorial_recursively(n):
    if n <= 1:
        return 1
    else:
        return n * get_factorial_recursively(n-1)
```

As you see the `if` block embodies our **base case**, while the `else` block covers the **recursive step**.

Let's test our function:

```text
inp = input("Enter a number: ")
inp = int(inp)

print(f"The result is: {get_factorial_recursively(inp)}")
```

We will enter 3 as input this time:

```text
Enter a number:3
The result is: 6
```

We get the same result. But this time, what goes under the hood is rather interesting:

You see, when we enter the input, the function will check with the `if` block, and since 3 is greater than 1, it will skip to the `else` block. In this block, we see the line `return n * get_factorial_recursively(n-1)`.

> We know the current value of `n` for the moment, it's `3`, but `get_factorial_recursively(n-1)` is still to be calculated.

Then the program calls the same function once more, _but_ this time our function takes **2** as the parameter. It checks the `if` block and skips to the `else` block and again encounters with the last line. Now, the current value of the `n` is `2` but the program still must calculate the `get_factorial_recursively(n-1)`.

So it calls the function once again, but this time the `if` block, or rather, the base class succeeds to return 1 and breaks out from the recursion.

Following the same pattern to upwards, it returns each function result, multiplying the current result with the previous `n` and returning it for the previous function call. In other words, our program first gets to the bottom of the factorial \(which is 1\), then builds its way up, while multiplying on each step.

Also removing the function from the call stack one by one, up until the final result of the `n * (n-1)` is returned.

This is generally how recursive functions work. Some more complicated problems may require deeper recursions with more than one base case or more than one recursive step. But for now, this simple recursion is good enough to solve our factorial problem!
