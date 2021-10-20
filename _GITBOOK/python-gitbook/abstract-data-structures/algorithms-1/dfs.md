# DFS

{% tabs %} {% tab title="First Tab" %}

```python
from .all_factors import *
from .count_islands import *
from .pacific_atlantic import *
from .sudoku_solver import *
from .walls_and_gates import *
from .maze_search import *

"""
Numbers can be regarded as product of its factors. For example,
8 = 2 x 2 x 2;
  = 2 x 4.


Write a function that takes an integer n and return all possible combinations
of its factors.Numbers can be regarded as product of its factors. For example,
8 = 2 x 2 x 2;
  = 2 x 4.

Examples:
input: 1
output:
[]


input: 37
output:
[]

input: 32
output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
"""


def get_factors(n):
    """[summary]

    Arguments:
        n {[int]} -- [to analysed number]

    Returns:
        [list of lists] -- [all factors of the number n]
    """

    def factor(n, i, combi, res):
        """[summary]
        helper function

        Arguments:
            n {[int]} -- [number]
            i {[int]} -- [to tested divisor]
            combi {[list]} -- [catch divisors]
            res {[list]} -- [all factors of the number n]

        Returns:
            [list] -- [res]
        """

        while i * i <= n:
            if n % i == 0:
                res += (combi + [i, int(n / i)],)
                factor(n / i, i, combi + [i], res)
            i += 1
        return res

    return factor(n, 2, [], [])


def get_factors_iterative1(n):
    """[summary]
    Computes all factors of n.
    Translated the function get_factors(...) in
    a call-stack modell.

    Arguments:
        n {[int]} -- [to analysed number]

    Returns:
        [list of lists] -- [all factors]
    """

    todo, res = [(n, 2, [])], []
    while todo:
        n, i, combi = todo.pop()
        while i * i <= n:
            if n % i == 0:
                res += (combi + [i, n // i],)
                todo.append((n // i, i, combi + [i])),
            i += 1
    return res


def get_factors_iterative2(n):
    """[summary]
    analog as above

    Arguments:
        n {[int]} -- [description]

    Returns:
        [list of lists] -- [all factors of n]
    """

    ans, stack, x = [], [], 2
    while True:
        if x > n // x:
            if not stack:
                return ans
            ans.append(stack + [n])
            x = stack.pop()
            n *= x
            x += 1
        elif n % x == 0:
            stack.append(x)
            n //= x
        else:
            x += 1

"""
Given a 2d grid map of '1's (land) and '0's (water),
count the number of islands.
An island is surrounded by water and is formed by
connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
"""


def num_islands(grid):
    count = 0
    for i in range(len(grid)):
        for j, col in enumerate(grid[i]):
            if col == 1:
                dfs(grid, i, j)
                count += 1
    return count


def dfs(grid, i, j):
    if (i < 0 or i >= len(grid)) or (j < 0 or j >= len(grid[0])):
        return
    if grid[i][j] != 1:
        return
    grid[i][j] = 0
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)

"""
Find shortest path from top left column to the right lowest column using DFS.
only step on the columns whose value is 1
if there is no path, it returns -1
(The first column(top left column) is not included in the answer.)

Ex 1)
If maze is
[[1,0,1,1,1,1],
 [1,0,1,0,1,0],
 [1,0,1,0,1,1],
 [1,1,1,0,1,1]],
the answer is: 14

Ex 2)
If maze is
[[1,0,0],
 [0,1,1],
 [0,1,1]],
the answer is: -1
"""


def find_path(maze):
    cnt = dfs(maze, 0, 0, 0, -1)
    return cnt


def dfs(maze, i, j, depth, cnt):
    directions = [(0, -1), (0, 1), (-1, 0), (1, 0)]

    row = len(maze)
    col = len(maze[0])

    if i == row - 1 and j == col - 1:
        if cnt == -1:
            cnt = depth
        else:
            if cnt > depth:
                cnt = depth
        return cnt

    maze[i][j] = 0

    for k in range(len(directions)):
        nx_i = i + directions[k][0]
        nx_j = j + directions[k][1]

        if nx_i >= 0 and nx_i < row and nx_j >= 0 and nx_j < col:
            if maze[nx_i][nx_j] == 1:
                cnt = dfs(maze, nx_i, nx_j, depth + 1, cnt)

    maze[i][j] = 1

    return cnt

# Given an m x n matrix of non-negative integers representing
# the height of each unit cell in a continent,
# the "Pacific ocean" touches the left and top edges of the matrix
# and the "Atlantic ocean" touches the right and bottom edges.

# Water can only flow in four directions (up, down, left, or right)
# from a cell to another one with height equal or lower.

# Find the list of grid coordinates where water can flow to both the
# Pacific and Atlantic ocean.

# Note:
# The order of returned grid coordinates does not matter.
# Both m and n are less than 150.
# Example:

# Given the following 5x5 matrix:

# Pacific ~   ~   ~   ~   ~
# ~  1   2   2   3  (5) *
# ~  3   2   3  (4) (4) *
# ~  2   4  (5)  3   1  *
# ~ (6) (7)  1   4   5  *
# ~ (5)  1   1   2   4  *
# *   *   *   *   * Atlantic

# Return:

# [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
# (positions with parentheses in above matrix).


def pacific_atlantic(matrix):
    """
    :type matrix: List[List[int]]
    :rtype: List[List[int]]
    """
    n = len(matrix)
    if not n:
        return []
    m = len(matrix[0])
    if not m:
        return []
    res = []
    atlantic = [[False for _ in range(n)] for _ in range(m)]
    pacific = [[False for _ in range(n)] for _ in range(m)]
    for i in range(n):
        dfs(pacific, matrix, float("-inf"), i, 0)
        dfs(atlantic, matrix, float("-inf"), i, m - 1)
    for i in range(m):
        dfs(pacific, matrix, float("-inf"), 0, i)
        dfs(atlantic, matrix, float("-inf"), n - 1, i)
    for i in range(n):
        for j in range(m):
            if pacific[i][j] and atlantic[i][j]:
                res.append([i, j])
    return res


def dfs(grid, matrix, height, i, j):
    if i < 0 or i >= len(matrix) or j < 0 or j >= len(matrix[0]):
        return
    if grid[i][j] or matrix[i][j] < height:
        return
    grid[i][j] = True
    dfs(grid, matrix, matrix[i][j], i - 1, j)
    dfs(grid, matrix, matrix[i][j], i + 1, j)
    dfs(grid, matrix, matrix[i][j], i, j - 1)
    dfs(grid, matrix, matrix[i][j], i, j + 1)

"""
It's similar to how human solve Sudoku.

create a hash table (dictionary) val to store possible values in every location.
Each time, start from the location with fewest possible values, choose one value
from it and then update the board and possible values at other locations.
If this update is valid, keep solving (DFS). If this update is invalid (leaving
zero possible values at some locations) or this value doesn't lead to the
solution, undo the updates and then choose the next value.
Since we calculated val at the beginning and start filling the board from the
location with fewest possible values, the amount of calculation and thus the
runtime can be significantly reduced:


The run time is 48-68 ms on LeetCode OJ, which seems to be among the fastest
python solutions here.


The PossibleVals function may be further simplified/optimized, but it works just
fine for now. (it would look less lengthy if we are allowed to use numpy array
for the board lol).
"""


class Sudoku:
    def __init__(self, board, row, col):
        self.board = board
        self.row = row
        self.col = col
        self.val = self.possible_values()

    def possible_values(self):
        a = "123456789"
        d, val = {}, {}
        for i in range(self.row):
            for j in range(self.col):
                ele = self.board[i][j]
                if ele != ".":
                    d[("r", i)] = d.get(("r", i), []) + [ele]
                    d[("c", j)] = d.get(("c", j), []) + [ele]
                    d[(i // 3, j // 3)] = d.get((i // 3, j // 3), []) + [ele]
                else:
                    val[(i, j)] = []
        for (i, j) in val.keys():
            inval = (
                d.get(("r", i), []) + d.get(("c", j), []) + d.get((i / 3, j / 3), [])
            )
            val[(i, j)] = [n for n in a if n not in inval]
        return val

    def solve(self):
        if len(self.val) == 0:
            return True
        kee = min(self.val.keys(), key=lambda x: len(self.val[x]))
        nums = self.val[kee]
        for n in nums:
            update = {kee: self.val[kee]}
            if self.valid_one(n, kee, update):  # valid choice
                if self.solve():  # keep solving
                    return True
            self.undo(kee, update)  # invalid choice or didn't solve it => undo
        return False

    def valid_one(self, n, kee, update):
        self.board[kee[0]][kee[1]] = n
        del self.val[kee]
        i, j = kee
        for ind in self.val.keys():
            if n in self.val[ind]:
                if (
                    ind[0] == i
                    or ind[1] == j
                    or (ind[0] / 3, ind[1] / 3) == (i / 3, j / 3)
                ):
                    update[ind] = n
                    self.val[ind].remove(n)
                    if len(self.val[ind]) == 0:
                        return False
        return True

    def undo(self, kee, update):
        self.board[kee[0]][kee[1]] = "."
        for k in update:
            if k not in self.val:
                self.val[k] = update[k]
            else:
                self.val[k].append(update[k])
        return None

    def __str__(self):
        """[summary]
        Generates a board representation as string.

        Returns:
            [str] -- [board representation]
        """

        resp = ""
        for i in range(self.row):
            for j in range(self.col):
                resp += " {0} ".format(self.board[i][j])
            resp += "\n"
        return resp

"""
You are given a m x n 2D grid initialized with these three possible values:
    -1: A wall or an obstacle.
    0: A gate.
    INF: Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF
         as you may assume that the distance to a gate is less than 2147483647.
Fill the empty room with distance to its nearest gate.
If it is impossible to reach a gate, it should be filled with INF.

For example, given the 2D grid:
    INF -1  0   INF
    INF INF INF -1
    INF -1  INF -1
    0   -1  INF INF
After running your function, the 2D grid should be:
    3   -1  0   1
    2   2   1   -1
    1   -1  2   -1
    0   -1  3   4
"""


def walls_and_gates(rooms):
    for i in range(len(rooms)):
        for j in range(len(rooms[0])):
            if rooms[i][j] == 0:
                dfs(rooms, i, j, 0)


def dfs(rooms, i, j, depth):
    if (i < 0 or i >= len(rooms)) or (j < 0 or j >= len(rooms[0])):
        return  # out of bounds
    if rooms[i][j] < depth:
        return  # crossed
    rooms[i][j] = depth
    dfs(rooms, i + 1, j, depth + 1)
    dfs(rooms, i - 1, j, depth + 1)
    dfs(rooms, i, j + 1, depth + 1)
    dfs(rooms, i, j - 1, depth + 1)


```

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %} {% endtabs %}

#### Introduction <a id="introduction"></a>

Originating from mathematics, graphs are now widely used data structures in Computer Science. One of the first problems we encounter when constructing any algorithm regarding Graph processing or traversal, is _how we represent the graph_ and then, how to _traverse that representation_.

> Graph traversal is not a trivial problem, and given the difficulty of the task - many algorithms have been devised for efficient \(yet not perfect\) graph traversal.

In this guide, we'll take a look at one of the two fundamental and simplest algorithms for Graph traversal - _**Depth-First Search \(DFS\).**_ It's the most commonly used algorithm alongside the related _**Breadth-First Search \(BFS\)**_ given their simplicity. After going over the main idea used for DFS, we'll implement it in Python on a Graph representation - an _**adjacency list**_.

#### Depth-First Search - Theory <a id="depthfirstsearchtheory"></a>

_**Depth-First Search \(DFS\)**_ is an algorithm used to _**traverse**_ or locate a _**target**_ node in a graph or tree data structure. It priorities _depth_ and searches along one branch, as far as it can go - until the end of that branch. Once there, it **backtracks** to the first possible divergence from that branch, and searches until the end of _that_ branch, repeating the process.

Given the nature of the algorithm, you can easily implement it recursively - and you can always implement a recursive algorithm iteratively as well:

![](https://stackabuse.s3.amazonaws.com/media/graph-traversal-in-java-depth-first-search-dfs-1.gif)

The _**start node**_ is the _**root node**_ for _tree data structures_, while with more generic graphs - it can be any node.

DFS is widely-used as a part of many other algorithms that resolve graph-represented problems. From cycle searches, path finding, topological sorting, to finding articulation points and strongly connected components. The reason behind this widespread use of the DFS algorithm lays in its overall simplicity and easy recursive implementation.

#### The DFS Algorithm <a id="thedfsalgorithm"></a>

The DFS algorithm is pretty simple and consists of the following steps:

1. Mark the current node as **visited**.
2. Traverse the **neighbouring** nodes that _aren't visited_ and recursively call the DFS function for that node.

The algorithm stops either when the target node is found, or the whole graph has been **traversed** \(all nodes are visited\).

> Since graphs can have **cycles**, we'll need a system to avoid them so we don't fall into infinity loops. That's why we "mark" every node we pass as **visited** by adding them to a `Set` containing only unique entries.

By marking nodes as "visited", if we ever encounter that node again - we're in a loop! Endless computational power and time has been wasted on loops, lost in the aether.

**Pseudocode**

Given these steps, we can summarize DFS in pseudocode:

```text
DFS(G, u):
    # Input processing
    u.visited = true
    for each v in G.adj[u]:
        if !v.visited:
            DFS(G, v)
            # Output processing
```

**Input** and **output** processing are performed depending on the purpose of the graph search. Our input processing for DFS will be checking if the **current** node is equal to the **target** node.

With this view, you can really start to appreciate just how simple yet useful this algorithm is.

#### Depth-First Search - Implementation <a id="depthfirstsearchimplementation"></a>

Depth-First Search implementation is usually **recursive** in code given how natural of a pair that is, but it can also be easily implemented non-recursively. We'll be using the recursive method as it's simpler and more fitting:

```text
def dfs(adj_list, start, target, path, visited = set()):
    path.append(start)
    visited.add(start)
    if start == target:
        return path
    for neighbour in adj_list[start]:
        if neighbour not in visited:
            result = dfs(adj_list, neighbour, target, path, visited)
            if result is not None:
                return result
	  path.pop()
    return None
```

We added the start node to the beginning of our traversal path and marked it as **visited** by adding it to a set of `visited` nodes. Then, we traversed the start node's neighbours that **aren't** already visited and called the function recursively for each of them. Recursive calls result in going as deep as we can along one "branch".

We saved the recursion result in a variable - in the case it returns `None` that means that the target node was not found in this branch and that we should try another. If the recursive call, in fact, does not return `None`, that means we have found our target node and we return the traversal path as result.

In the end, if we find ourselves outside of the `for` loop, it means that all the neighbour branches of the current node have been visited and none of them lead to our target node. So, we remove the current node from the path, and return `None` as result.

#### Running DFS <a id="runningdfs"></a>

Let's illustrate how the code works through an example. We'll be using a Python **dictionary** to represent the graph as an adjacency list. Here's the graph we'll be using in the following example:

```text
adj_list = {
    0 : [1, 2],
    1 : [0, 3],
    2 : [0, 3],
    3 : [1, 2, 4],
    4 : [3]
}
```

> An adjacency list is a type of graph representation in code, it consists of **keys** which represent each node, and a **list** of values for each of them containing nodes that are connected to the key node with an edge.

Using a dictionary for this is the easiest way to quickly represent a graph in Python, though you could also define your own `Node` classes and add them to a `Graph` instance.

Here's what our example graph looks like:

![graph](https://s3.amazonaws.com/s3.stackabuse.com/media/articles/depth-first-search-dfs-in-python-theory-and-implementation-1.jpg)

We're searching for a path from node `0` to node `3`, if it exists, the path will be saved into a set of visited nodes, called `traversal_path` so we can reconstruct it for printing:

```
traversal_path = []
```

```text
traversal_path = dfs(adj_list, 0, 3, traversal_path)
print(traversal_path)
```

The steps our algorithm will take are as follows:

- Add node `0` to the traversal path and mark it as visited. Check if node `0` is equal to target node `3`, since it's not, continue and traverse it's neighbours \(`1` and `2`\).
- Is neighbour `1` visited? - No. Then, the algorithm calls the function recursively for that node.
  - Recursive call for node `1`: Add node `1` to the traversal path and mark it as visited, . Is `1` equal to our target node `3`? - No, continue and traverse it's neighbours \(`0` and `3`\).
  - Is neighbour `0` visited? - Yes, move onto the next one.
  - Is neighbour `3` visited? - No, call the function recursively for this node.
    - Recursive call for node `3`: Add node `3` to the traversal path and mark it as visited. Is `3` equal to our target node `3`? - Yes, target node has been found, return the traversal path.

| Current Node | Path              | Visited         |
| :----------- | :---------------- | :-------------- |
| `0`          | \[`0`\]           | {`0`}           |
| `1`          | \[`0`, `1`\]      | {`0`, `1`}      |
| `3`          | \[`0`, `1`, `3`\] | {`0`, `1`, `3`} |

The algorithm stops and our program prints out the resulting traversal path from node `0` to node `3`:

```text
[0, 1, 3]
```

After the search, the marked nodes on the graph represent the path we took to get to the target node:

![marked graph](https://s3.amazonaws.com/s3.stackabuse.com/media/articles/depth-first-search-dfs-in-python-theory-and-implementation-2.png)

In case there was no path between the start and target node, the traversal path would be **empty**.

**Note**: Graphs can also be **disconnected**, meaning that there are at least two nodes that cannot be connected by a path. In this case, DFS would ignore the nodes that it can't get to:

![disconnected graph](https://s3.amazonaws.com/s3.stackabuse.com/media/articles/depth-first-search-dfs-in-python-theory-and-implementation-3.png)

For example in this graph, if we were to start DFS from node `0` to node `4`, there would be no such path because it has no way of getting to the target node.

#### Conclusion <a id="conclusion"></a>

In this article we've explained the theory behind the Depth-First Search algorithm. We've depicted the widely-used recursive Python implementation, and went over the borderline cases for which the algorithm will not work properly.
