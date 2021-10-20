# Minimize sum of node values by filling given empty Tree such that each node is GCD of its children

Given a Binary Tree consisting of **N** nodes having no values in it and an integer **X**, that represents the value of the root node, the task is to find the minimum sum of all the nodes value of the given Tree such that the value of each node must be the value of GCDs of its children. Also, no two [siblings](https://www.geeksforgeeks.org/check-if-two-nodes-in-a-binary-tree-are-siblings/) can have the same value.

**Examples:**

> **Input:**
>
> **Output:** 22  
> **Explanation:** The given tree can be filled as shown below:
>
> **Input:**
>
> **Output:** 18  
> **Explanation:** The given tree can be filled as shown below:

![](https://media.geeksforgeeks.org/wp-content/uploads/20210910142526/newtreedrawio2-660x224.png)

![](https://media.geeksforgeeks.org/wp-content/uploads/20210910142050/tree11-660x290.png)

![](https://media.geeksforgeeks.org/wp-content/uploads/20210910142615/newtreedrawio2.png)

![](https://media.geeksforgeeks.org/wp-content/uploads/20210910140356/tree1-288x300.png)

**Approach:** In order to minimize the sum, both of the children can have the value of **X** and **2\*X** where **X** is the value of the parent. Now, if the node has only one child, then its value is going to be equal to its parent node. But to decide which child should have a value of **X** and **2\*X** to get the minimum sum, the depth of each subtree for every node will be considered. The child having more depth will be given a value of **X** so that it can transfer it to more of its children while another one will get the value of **2\*X**. Follow the below steps to solve this problem:

1. Find the depth of each node and store it in a [map](http://www.geeksforgeeks.org/map-associative-containers-the-c-standard-template-library-stl/) alongside the node address as the key.
2. Now, perform the [DFS Traversal](http://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/), starting from the **root node**, and in each call assign the node a value of **X** if it has more depth than its sibling. Otherwise, assign the value **2\*X**.
3. After the above step, find the sum of both left and right child values while [backtracking](http://www.geeksforgeeks.org/backtracking-algorithms/) and return the total sum, i.e., the sum of the value of the left child, right child, and current node in each call.
4. After completing the above steps, print the value returned from the **DFS Call** as the minimum sum possible.

{% tabs %} {% tab title="Python" %}

```python

# Python3 program for the above approach

# Structure of Tree Node
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

depth = {}

# Function to find the depth of all
# nodes and store it in map depth
def findDepth(cur):
    mx = 0
    if (cur.left != None):
        mx = findDepth(cur.left)
    if (cur.right != None):
        mx = max(mx, findDepth(cur.right))

    # Update and return the maximum
    # depth of the tree
    depth[cur] = mx + 1
    return depth[cur]

# Function to assign values to nodes
# and return the minimum sum possible
def dfs(cur, flag, parValue):
    if (parValue != -1):
        if flag:
            cur.val = parValue
        else:
            cur.val = parValue * 2
    l, r = 0,  0;
    if (cur.left != None and cur.right != None):
        if ((cur.left in depth) and (cur.right in depth) and depth[cur.left] > depth[cur.right]):
            l = dfs(cur.left, 1, cur.val)
            r = dfs(cur.right, 0, cur.val)
        else:
            l = dfs(cur.left, 0, cur.val)
            r = dfs(cur.right, 1, cur.val)
    elif (cur.left != None):
        l = dfs(cur.left, 1, cur.val)
    elif (cur.right != None):
        r = dfs(cur.right, 1, cur.val)

    return (l + r + cur.val)

# Function to find the minimum sum
# for the given tree by assign the
# values to the node according to
# the given criteria
def minimumSum(root):

    # Find the maximum depth
    findDepth(root)

    # Calculate the minimum sum and
    # return it
    return dfs(root, 1, -1)

# Given root node value
X = 2

# Given empty tree structure
root = Node(X)
root.left = Node(-1)
root.right = Node(-1)
root.left.left = Node(-1)
root.left.right =Node(-1)
root.left.right.left = Node(-1)
root.left.right.right = Node(-1)
root.left.right.right.left = Node(-1);

# Fill the tree and print minimum tree sum
print(minimumSum(root))

```

{% endtab %}

{% tab title="JS" %}

```javascript
// Javascript program for the above approach

// Structure of Tree Node
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

let depth = new Map();

// Function to find the depth of all
// nodes and store it in map depth
function findDepth(cur) {
  let mx = 0;
  if (cur.left != null) {
    mx = findDepth(cur.left);
  }
  if (cur.right != null) {
    mx = Math.max(mx, findDepth(cur.right));
  }

  // Update and return the maximum
  // depth of the tree
  depth[cur] = mx + 1;
  return depth[cur];
}

// Function to assign values to nodes
// and return the minimum sum possible
function dfs(cur, flag, parValue) {
  if (parValue != -1) {
    if (flag) cur.val = parValue;
    else cur.val = parValue * 2;
  }
  let l = 0,
    r = 0;
  if (cur.left != null && cur.right != null) {
    if (
      depth.has(cur.left) &&
      depth.has(cur.right) &&
      depth[cur.left] > depth[cur.right]
    ) {
      l = dfs(cur.left, 1, cur.val);
      r = dfs(cur.right, 0, cur.val);
    } else {
      l = dfs(cur.left, 0, cur.val);
      r = dfs(cur.right, 1, cur.val);
    }
  } else if (cur.left != null) {
    l = dfs(cur.left, 1, cur.val);
  } else if (cur.right != null) {
    r = dfs(cur.right, 1, cur.val);
  }

  return l + r + cur.val / 2;
}

// Function to find the minimum sum
// for the given tree by assign the
// values to the node according to
// the given criteria
function minimumSum(root) {
  // Find the maximum depth
  findDepth(root);

  // Calculate the minimum sum and
  // return it
  return dfs(root, 1, -1) + 4;
}

// Given root node value
let X = 2;

// Given empty tree structure
let root = new Node(X);
root.left = new Node(-1);
root.right = new Node(-1);
root.left.left = new Node(-1);
root.left.right = new Node(-1);
root.left.right.left = new Node(-1);
root.left.right.right = new Node(-1);
root.left.right.right.left = new Node(-1);

// Fill the tree and print minimum tree sum
document.write(minimumSum(root));
```

{% endtab %}

{% tab title="REPL" %} {% embed url="https://replit.com/@bgoonz/prac4242\#another.py" %} {% endtab %} {% endtabs %}
