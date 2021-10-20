# General Data Structures Notes

[  
Data Types](https://www.integralist.co.uk/posts/data-types-and-data-structures/#data-types)

- [Data Structures](https://www.integralist.co.uk/posts/data-types-and-data-structures/#data-structures)
- [Array](https://www.integralist.co.uk/posts/data-types-and-data-structures/#array)
- [Linked List](https://www.integralist.co.uk/posts/data-types-and-data-structures/#linked-list)
- [Tree](https://www.integralist.co.uk/posts/data-types-and-data-structures/#tree)
  - [Binary Tree](https://www.integralist.co.uk/posts/data-types-and-data-structures/#binary-tree)
  - [Binary Search Tree](https://www.integralist.co.uk/posts/data-types-and-data-structures/#binary-search-tree)
  - [Red-Black Tree](https://www.integralist.co.uk/posts/data-types-and-data-structures/#red-black-tree)
  - [B-tree](https://www.integralist.co.uk/posts/data-types-and-data-structures/#b-tree)
  - [Weight-balanced Tree](https://www.integralist.co.uk/posts/data-types-and-data-structures/#weight-balanced-tree)
  - [Binary Heap](https://www.integralist.co.uk/posts/data-types-and-data-structures/#binary-heap)
- [Hash Table](https://www.integralist.co.uk/posts/data-types-and-data-structures/#hash-table)
- [Graph](https://www.integralist.co.uk/posts/data-types-and-data-structures/#graph)
- [Conclusion](https://www.integralist.co.uk/posts/data-types-and-data-structures/#conclusion)

In this post we will be looking briefly at, and at a high-level, the various data types and data structures used in designing software systems, and from which specific types of algorithms can subsequently be built upon and optimized for.

There are _many_ data structures, and even the ones that are covered here have many nuances that make it impossible to cover every possible detail. But my hope is that this will give you an interest to research them further.

**But before we get into it...** time for some self-promotion 🙊[Want to be up and running **quickly** with **Python**? Get started here with my book  
"**Python for Programmers**"!](https://leanpub.com/pythonforprogrammers)

### Data Types <a id="data-types"></a>

A data type is an [attribute](https://english.stackexchange.com/a/28098/334144) of data which tells the compiler \(or interpreter\) how the programmer intends to use the data.

- **Scalar**: basic building block \(boolean, integer, float, char etc.\)
- **Composite**: any data type \(struct, array, string etc.\) composed of scalars or composite types \(also referred to as a ‘compound’ type\).
- **Abstract**: data type that is defined by its behaviour \(tuple, set, stack, queue, graph etc\).

> **NOTE**: You might also have heard of a ‘primitive’ type, which is sometimes confused with the ‘scalar’ type. A primitive is typically used to represent a ‘value type’ \(e.g. pass-by-value semantics\) and this contrasts with ‘reference types’ \(e.g. pass-by-reference semantics\).

If we consider a composite type, such as a ‘string’, it _describes_ a data structure which contains a sequence of char scalars \(characters\), and as such is referred to as being a ‘composite’ type. Whereas the underlying _implementation_ of the string composite type is typically implemented using an array data structure \(we’ll cover [data structures](https://www.integralist.co.uk/posts/data-types-and-data-structures/#data-structures) shortly\).

> Note: in a language like C the length of the string’s underlying array will be the number of characters in the string followed by a ‘[null terminator](https://www.integralist.co.uk/posts/concepts-from-the-c-programming-language/#7)’.

An abstract data type \(ADT\) describes the expected _behaviour_ associated with a concrete data structure. For example, a ‘list’ is an abstract data type which represents a countable number of ordered values, but again the _implementation_ of such a data type could be implemented using a variety of different data structures, one being a ‘[linked list](https://en.wikipedia.org/wiki/Linked_list)’.

> Note: an ADT describes behaviour from the perspective of a consumer of that type \(e.g. it describes certain operations that can be performed on the data itself\). For example, a list data type can be considered a sequence of values and so one available operation/behaviour would be that it must be iterable.

### Data Structures <a id="data-structures"></a>

A data structure is a collection of data type ‘values’ which are stored and organized in such a way that it allows for efficient access and modification. In some cases a data structure can become the underlying implementation for a particular data type.

For example, composite data types are data structures that are composed of scalar data types and/or other composite types, whereas an abstract data type will define a set of behaviours \(almost like an ‘interface’ in a sense\) for which a particular data structure can be used as the concrete implementation for that data type.

When we think of data structures, there are generally four forms:

1. **Linear**: arrays, lists
2. **Tree**: binary, heaps, space partitioning etc.
3. **Hash**: distributed hash table, hash tree etc.
4. **Graphs**: decision, directed, acyclic etc.

> Note: for a more complete reference,  
> please see this [Wikipedia article](https://en.wikipedia.org/wiki/List_of_data_structures).

Let’s now take a look at the properties that make up a few of the more well known data structures.

### Array <a id="array"></a>

An array is a finite group of data, which is allocated contiguous \(i.e. sharing a common border\) memory locations, and each element within the array is accessed via an index key \(typically numerical, and zero based\).

The name assigned to an array is typically a pointer to the first item in the array. Meaning that given an array identifier of `arr` which was assigned the value `["a", "b", "c"]`, in order to access the `"b"` element you would use the index 1 to lookup the value: `arr[1]`.

Arrays are traditionally ‘finite’ in size, meaning you define their length/size \(i.e. memory capacity\) up front, but there is a concept known as ‘dynamic arrays’ \(and of which you’re likely more familiar with when dealing with certain high-level programmings languages\) which supports the _growing_ \(or resizing\) of an array to allow for more elements to be added to it.

In order to resize an array you first need to allocate a new slot of memory \(in order to copy the original array element values over to\), and because this type of operation is quite ‘expensive’ \(in terms of computation and performance\) you need to be sure you increase the memory capacity just the right amount \(typically double the original size\) to allow for more elements to be added at a later time without causing the CPU to have to resize the array over and over again unnecessarily.

One consideration that needs to be given is that you don’t want the resized memory space to be _too_ large, otherwise finding an appropriate slot of memory becomes more tricky.

When dealing with modifying arrays you also need to be careful because this requires significant overhead due to the way arrays are allocated memory slots.

So if you imagine you have an array and you want to remove an element from the middle of the array, try to think about that in terms of memory allocation: an array needs its indexes to be contiguous, and so we have to re-allocate a new chunk of memory and copy over the elements that were placed _around_ the deleted element.

These types of operations, when done at scale, are the foundation behind why it’s important to have an understanding of how data structures are implemented. The reason being, when you’re writing an algorithm you will hopefully be able to recognize when you’re about to do something \(let’s say modify an array many times within a loop construct\) that could ultimately end up being quite a memory intensive set of operations.

> Note: interestingly I’ve discovered that in some languages an array \(as in the composite data type\) has been implemented using a variety of different data structures such as hash table, linked list, and even a search tree.

### Linked List <a id="linked-list"></a>

A linked list is different to an array in that the order of the elements within the list are not determined by a contiguous memory allocation. Instead the elements of the linked list can be sporadically placed in memory due to its design, which is that each element of the list \(also referred to as a ‘node’\) consists of two parts:

1. the data
2. a pointer

The data is what you’ve assigned to that element/node, whereas the pointer is a memory address reference to the next node in the list.

![](https://www.integralist.co.uk/images/linked-list.png)

Also unlike an array, there is no index access. So in order to locate a specific piece of data you’ll need to traverse the entire list until you find the data you’re looking for.

This is one of the key performance characteristics of a linked list, and is why \(for most implementations of this data structure\) you’re not able to _append_ data to the list \(because if you think about the performance of such an operation it would require you to traverse the entire list to find the end/last node\). Instead linked lists generally will only allow _prepending_ to a list as it’s much quicker. The newly added node will then have its pointer set to the original ‘head’ of the list.

There is also a modified version of this data structure referred to as a ‘doubly linked list’ which is essentially the same concept but with the exception of a third attribute for each node: a pointer to the _previous_ node \(whereas a normal linked list would only have a pointer to the _following_ node\).

> Note: again, performance considerations need to be given for the types of operations being made with a doubly linked list, such as the addition or removal of nodes in the list, because you now have not only the pointers to the following node that need to be updated, but also the pointers back to a previous node that now also need to be updated.

### Tree <a id="tree"></a>

The concept of a ‘tree’ in its simplest terms is to represent a hierarchical tree structure, with a root value and subtrees of children \(with a parent node\), represented as a set of linked nodes.

![](https://www.integralist.co.uk/images/tree.png)

A tree contains “nodes” \(a node has a value associated with it\) and each node is connected by a line called an “edge”. These lines represent the _relationship_ between the nodes.

The top level node is known as the “root” and a node with no children is a “leaf”. If a node is connected to other nodes, then the preceeding node is referred to as the “parent”, and nodes following it are “child” nodes.

There are various incarnations of the basic tree structure, each with their own unique characteristics and performance considerations:

- Binary Tree
- Binary Search Tree
- Red-Black Tree
- B-tree
- Weight-balanced Tree
- Heap
- Abstract Syntax Tree

#### Binary Tree <a id="binary-tree"></a>

A binary tree is a ‘rooted tree’ and consists of nodes which have, at most, two children. This is as the name suggests \(i.e. ‘binary’: 0 or 1\), so _two_ potential values/directions.

Rooted trees suggest a notion of _distance_ \(i.e. distance from the ‘root’ node\)

> Note: in some cases you might refer to a binary tree as an ‘undirected’ graph \(we’ll look at [graphs](https://www.integralist.co.uk/posts/data-types-and-data-structures/#graph) shortly\) if talking in the context of graph theory or mathematics.

Binary trees are the building blocks of _other_ tree data structures \(see also: [this reference](https://stackoverflow.com/a/2200588/4288305) for more details\), and so when it comes to the performance of certain operations \(insertion, deletion etc\) consideration needs to be given to the number of ‘hops’ that need to be made as well as the re-balancing of the tree \(much the same way as the pointers for a linked list need to be updated\).

#### Binary Search Tree <a id="binary-search-tree"></a>

A binary search tree is a ‘sorted’ tree, and is named as such because it helps to support the use of a ‘binary search’ algorithm for searching more efficiently for a particular node \(more on that later\).

![](https://www.integralist.co.uk/images/binary-search-tree.png)

To understand the idea of the nodes being ‘sorted’ \(or ‘ordered’\) we need to compare the left node with the right node. The left node should always be a lesser number than the right node, and the parent node should be the decider as to whether a child node is placed to the left or the right.

Consider the example image above, where we can see the root node is `8`. Let’s imagine we’re going to construct this tree.

We start with `8` as the root node and then we’re given the number `3` to insert into the tree. At this point the underlying logic for constructing the tree will know that the number `3` is _less_ than `8` and so it’ll first check to see if there is already a left node \(there isn’t\), so in this scenario the logic will determine that the tree should have a new left node under `8` and assign it the value of `3`.

Now if we give the number `6` to be inserted, the logic will find that again it is less than `8` and so it’ll check for a left node. There is a left node \(it has a value of `3`\) and so the value `6` is _greater_ than `3`. This means the logic will now check to see if there is a right node \(there isn’t\) and subsequently creates a new right node and assigns it the value `6`.

This process continues on and on until the tree has been provided all of the relevant numbers to be sorted.

In essence what this sorted tree design facilitates is the means for an operation \(such as lookup, insertion, deletion\) to only take, on average, time proportional to the [logarithm](https://en.wikipedia.org/wiki/Logarithm) of the number of items stored in the tree.

So if there were 1000 nodes in the tree, and we wanted to find a specific node, then the average case number of comparisons \(i.e. comparing left/right nodes\) would be `10`.

By using the logarithm to calculate this we get: `log 2(10) = 1024` which is the inverse of the exponentiation `2^10` \(“2 raised to the power of 10”\), so this says we’ll execute 10 comparisons before finding the node we were after.

To break that down a bit further: the exponentiation calculation is `1024 = 2 × 2 × 2 x 2 x 2 x 2 × 2 × 2 x 2 x 2 = 2^10`, so the “logarithm to base 2” of 10 is 1024.

The logarithm \(i.e. the inverse function of exponentiation\) of 1000 to base 2, in this case abstracted to `n`, is denoted as `log 2 (n)`, but typically the base 2 is omitted to just `log(n)`.

When determining the ‘time complexity’ for operations on this type of data structure we typically use ‘Big O’ notation and thus the Big O complexity would be defined as `O(log n)` for the average search case \(which is good\), but the _worst case_ for searching would still be `O(n)` linear time \(which is bad – and I’ll explain why in the next section on [red-black trees](https://www.integralist.co.uk/posts/data-types-and-data-structures/#red-black-tree)\).

> Note: I’ve covered the basics of logarithm and binary search in a [much older post](https://www.integralist.co.uk/posts/big-o-for-beginners/#8) about Big O notation, and so I’ll refer you to that for more details.

Similarly when considering complexity for a particular algorithm, we should take into account both ‘time’ and ‘space’ complexity. The latter is the amount of memory necessary for the algorithm to execute and is similar to time complexity in that we’re interested in how that resource \(time vs space\) will change and affect the performance depending on the size of the input.

#### Red-Black Tree <a id="red-black-tree"></a>

The performance of a binary search tree is dependant on the height of the tree. Meaning we should aim to keep the tree as ‘balanced’ as possible, otherwise the logarithm performance is lost in favor of linear time.

To understand why that is, consider the following data stored in an array:

```text
[1, 2, 3, 4]
```

If we construct a binary search tree from this data, what we would ultimately end up with is a very ‘unbalanced’ tree in the sense that all the nodes would be to the right, and none to the left.

![](https://www.integralist.co.uk/images/bst-unbalanced.png)

When we search this type of tree \(which for all purposes is effectively a linked list\) we would, worst case, end up with linear time complexity: `O(n)`. To resolve that problem we need a way to balance the nodes in the tree.

This is where the concept of a red-black tree comes in to help us. With a red-black tree \(due to it being consistently balanced\) we get `O(log n)` for search/insert/delete operations \(which is great\).

Let’s consider the properties of a red-black tree:

- Each node is either red or black.
- The root node is always black.
- All leaves are ‘NIL’ and should also be black.
- All red nodes should have two black child nodes.
- All paths from given node to NIL must have same num of black nodes.
- New nodes should be red by default \(we’ll clarify below\).

> Note: when counting nodes we don’t include the root node, and we count each black node up to \(and including\) the NIL node.

![](https://www.integralist.co.uk/images/red-black-tree.png)

The height of the tree is referred to as its ‘black-height’, which is the number of black nodes \(not including the root\) to the furthest leaf, and should be no longer than twice as long as the length of the shortest path \(the nearest NIL\).

These properties are what enable the red-black tree to provide the performance characteristics it has \(i.e. `O(log n)`\), and so whenever changes are made to the tree we want to aim to keep the tree height as short as possible.

On every node insertion, or deletion, we need to ensure we have not violated the red-black properties. If we do, then there are two possible steps that we have to consider in order to keep the tree appropriately balanced \(which we’ll check in this order\):

1. **Recolour the node** in the case of a red node no longer having two black child nodes.
2. **Make a** [**rotation**](https://en.wikipedia.org/wiki/Tree_rotation) **\(left/right\)** in the case where recolouring then requires a structural change.

The goal of a rotation is to decrease the height of the tree. The way we do this is by moving larger subtrees up the tree, and smaller subtrees down the tree. We rotate in the direction of the smaller subtree, so if the smaller side is the right side we’ll do a right rotation.

> Note: there is an inconsistency between what node/subtree is affected by a rotation. Does the subtree being moved into the parent position indicate the direction or does the target node affected by the newly moved subtree indicate the direction \(I’ve opted for the latter, as we’ll see below, but be aware of this when reading research material\).

In essence there are three steps that need to be applied to the target node \(`T`\) being rotated, and this is the same for either a left rotation or a right rotation. Let’s quickly look at both of these rotation movements:

- **Left Rotation**:
  1. `T`’s right node \(`R`\) is unset & becomes `T`’s parent †
  2. `R`’s _original_ left node `L` is now orphaned.
  3. `T`’s right node is now set to `L`.

> † we now find `R`’s left pointer has to be set to `T` \(in order for it to become the parent node\), meaning `R`’s original left pointer is orphaned.

- **Right Rotation**:
  1. `T`’s left node \(`L`\) is unset & becomes `T`’s parent †
  2. `L`’s _original_ right node `R` is now orphaned.
  3. `T`’s left node is now set to `R`.

> † we now find `L`’s right pointer has to be set to `T` \(in order for it to become the parent node\), meaning `L`’s original right pointer is orphaned.

Let’s now visualize the movements for both rotations:

**Left Rotation**

![](https://www.integralist.co.uk/images/red-black-tree-left-rotation.png)

**Right Rotation**

![](https://www.integralist.co.uk/images/red-black-tree-right-rotation.png)

> Note: rotations are confusing, so I recommend watching [this short video](https://www.youtube.com/watch?v=95s3ndZRGbk) for some examples and pseudo-code.

#### B-tree <a id="b-tree"></a>

A B-tree is a sorted tree that is very similar in essence to a red-black tree in that it is self-balancing and as such can guarantee logarithmic time for search/insert/delete operations.

A B-tree is useful for large read/writes of data and is commonly used in the design of databases and file systems, but it’s important to note that a B-tree is _not_ a binary search tree because it allows more than two child nodes.

The reasoning for allowing multiple children for a node is to ensure the height of the tree is kept as small as possible. The rationale is that B-trees are designed for handling huge amounts of data which itself cannot exist in-memory, and so that data is pulled \(in chunks\) from external sources.

This type of I/O is expensive and so keeping the tree ‘fat’ \(i.e. to have a very short height instead of lots of node subtrees creating extra length\) helps to reduce the amount of disk access.

The design of a B-tree means that all nodes allow a set range for its children but not all nodes will need the full range, meaning that there is a potential for wasted space.

> Note: there are also variants of the B-tree, such as B+ trees and B\* trees \(which we’ll leave as a research exercise for the reader\).

#### Weight-balanced Tree <a id="weight-balanced-tree"></a>

A weight-balanced tree is a form of binary search tree and is similar in spirit to a weighted graph, in that individual nodes are ‘weighted’ to indicate the more likely successful route with regards to searching for a particular value.

The search performance is the driving motivation for using this data structure, and typically used for implementing sets and dynamic dictionaries.

#### Binary Heap <a id="binary-heap"></a>

A binary heap tree is a binary tree, not a binary search tree, and so it’s not a sorted tree. It has some additional properties that we’ll look at in a moment, but in essence the purpose of this data structure is primarily to be used as the underlying implementation for a [priority queue](https://en.wikipedia.org/wiki/Priority_queue).

The additional properties associated with a binary heap are:

- **heap property**: the node value is either greater \(or lesser depending on the direction of the heap\) or equal to the value of its parent.
- **shape property**: if the last level of the tree is incomplete, the missing nodes are filled.

The insertion and deletion operations yield a time complexity of `O(log n)`.

Below are some examples of a max and min binary heap tree structure.

**Max Heap**:

![](https://www.integralist.co.uk/images/binary-heap-max.png)

**Min Heap**:

![](https://www.integralist.co.uk/images/binary-heap-min.png)

### Hash Table <a id="hash-table"></a>

A hash table is a data structure which is capable of maping ‘keys’ to ‘values’, and you’ll typically find this is abstracted and enhanced with additional behaviours by many high-level programming languages such that they behave like an ‘[associative array](https://en.wikipedia.org/wiki/Associative_array)’ abstract data type.

In Python it’s called a ‘dictionary’ and has the following structure \(on top of which are functions such as `del`, `get` and `pop` etc that can manipulate the underlying data\):

```text
table = {'name': 'foobar',
         'number': 123}
```

The keys for the hash table are determined by way of a [hash function](https://en.wikipedia.org/wiki/Hash_function) but implementors need to be mindful of hash ‘collisions’ which can occur if the hash function isn’t able to create a distinct or unique key for the table.

The better the hash generation, the more _distributed_ the keys will be, and thus less likely to collide. Also the size of the underlying array data structure needs to accommodate the type of hash function used for the key generation.

For example, if using modular arithmetic you might find the array needs to be sized to a prime number.

There are many techniques for resolving hashing collisions, but here are two that I’ve encountered:

1. Separate Chaining
2. Linear Probing

#### Separate Chaining <a id="separate-chaining"></a>

With this option our keys will contain a nested data structure, and we’ll use a technique for storing our conflicting values into this nested structure, allowing us to store the same hashed value key in the top level of the array.

#### Linear Probing <a id="linear-probing"></a>

With this option when a collision is found, the hash table will check to see if the next available index is empty, and if so it’ll place the data into that next index.

The rationale behind this technique is that because the hash table keys are typically quite distributed \(e.g. they’re rarely sequential 0, 1, 2, 3, 4\), then it’s likely that you’ll have many empty empty elements and you can use that empty space to store your colliding data.

> Note: Linear Probing is suggested over Separate Chaining if your data structure is expected to be quite large.

Personally I don’t like the idea of the Linear Probing technique as it feels like it’ll introduce more complexity and bugs. Also, there is a problem with this technique which is that it relies on the top level data structure being an array. Which is fine if the key we’re constructing is numerical, but if you want to have strings for your keys then that wont work very well and so you’ll need to be clever with how you implement this.

### Graph <a id="graph"></a>

A graph is an abstract data type intended to guide the implementation of a data structure following the principles of [graph theory](https://en.wikipedia.org/wiki/Graph_theory).

The data struture itself is non-linear and it consists of:

- **nodes**: points on the graph \(also known as ‘vertices’\).
- **edges**: lines connecting each node.

The following image demonstrates a ‘directed’ graph \(notice the edges have arrows indicating the direction and flow\):![](https://www.integralist.co.uk/images/graph-directed.png)

> Note: an ‘undirected’ graph simply has no arrow heads, so the flow between nodes can go in either direction.

Some graphs are ‘weighted’ which means each ‘edge’ has a numerical attribute assigned to them. These weights can indicate a stronger preference for a particular flow of direction.

Graphs are used for representing networks \(both real and electronic\), such as streets on a map or friends on Facebook.

When it comes to searching a graph, there are two methods:

1. Breadth First Search: look at siblings.
2. Depth First Search: look at children.

Which approach you choose depends on the type of values you’re searching for. For example, relationship across fields would lend itself to BFS, whereas hierarchical tree searches would be better suited to DFS.

### Section 1: Data Structures and Algorithms

**Book:** [Problem Solving with Algorithms and Data Structures using Python](https://runestone.academy/runestone/books/published/pythonds/index.html)

- For those who needs to study the fundamental data structures and algorithms, highly recommend to go over above textbook thoroughly first, and then come back to the following content, or practice on Leetcode or other platform

**Basic data structures**:

- Array
- Linked List
- Stack
- Queue
- Hash Table
- Tree
- Graph

**Common Algorithm Types**:

- Brute Force
- Search and Sort
- Recursive
- Backtracking
- Dynamic Programming
- Divide and Conquer
- Greedy
- Branch and Bound

**Big O Notations**:

- It is critical that you understand and are able to calculate the Big O for the code you wrote.
- **The order of magnitude function describes the part of T\(n\) that increases the fastest as the value of n increases. Order of magnitude is often called Big-O notation \(for “order”\) and written as O\(f\(n\)\).**
- Basically, the Big O measures the number of assignment statements

  | f\(n\)  | Name        |
  | :------ | :---------- |
  | 1       | Constant    |
  | log n   | Logarithmic |
  | n       | Linear      |
  | n log n | Log Linear  |
  | n^2     | Quadratic   |
  | n^3     | Cubic       |
  | 2^n     | Exponential |

  [![BigO Image](https://camo.githubusercontent.com/0c10cd72cb4a5c73e7139648bcb79b107fb6df017d84b8f321fea2aa63d4d47d/68747470733a2f2f72756e6573746f6e652e61636164656d792f72756e6573746f6e652f626f6f6b732f7075626c69736865642f707974686f6e64732f5f696d616765732f6e6577706c6f742e706e67)](https://camo.githubusercontent.com/0c10cd72cb4a5c73e7139648bcb79b107fb6df017d84b8f321fea2aa63d4d47d/68747470733a2f2f72756e6573746f6e652e61636164656d792f72756e6573746f6e652f626f6f6b732f7075626c69736865642f707974686f6e64732f5f696d616765732f6e6577706c6f742e706e67)

#### Chapter 1: Data Structures

**1.1 Array**

- An array \(in Python its called _list_\) is a collection of items where each item holds a relative position with respect to the others.

**1.2 Linked List**

- Similar to array, but requires O\(N\) time on average to visit an element by index
- Linked list utilize memory better than array, since it can use discrete memory space, whereas array must use continuous memory space
- [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/linked_list.md)

**1.3 Stack**

- Stacks are fundamentally important, as they can be used to reverse the order of items.
- The order of insertion is the reverse of the order of removal.
- Stack maintain a FILO \(first in last out\) ordering property.
- When pop is called on the end of the list it takes O\(1\) but when pop is called on the first element in the list or anywhere in the middle it is O\(n\) \(in Python\).

**1.3.1 Arithmetic Expressions**

- Infix: the operator is in between the two operands that it is working on \(i.e. A+B\)
  - Fully Parenthesized expression: uses one pair of parentheses for each operator. \(i.e. \(\(A + \(B \* C\)\) + D\)\)
- Prefix: all operators precede the two operands that they work on \(i.e. +AB\)
- Postfix: operators come after the corresponding operands \(i.e. AB+\)

| Infix Expression       | Prefix Expression | Postfix Expression |
| :--------------------- | :---------------- | :----------------- |
| A + B                  | + A B             | A B +              |
| A + B \* C             | + A \* B C        | A B C \* +         |
| \(A + B\) \* C         | \* + A B C        | A B + C \*         |
| A + B \* C + D         | + + A \* B C D    | A B C \* + D +     |
| \(A + B\) \* \(C + D\) | \* + A B + C D    | A B + C D + \*     |
| A \* B + C \* D        | + \* A B \* C D   | A B \* C D \* +    |
| A + B + C + D          | + + + A B C D     | A B + C + D +      |

- **NOTE:**
  - Only infix notation requires parentheses to determine precedence
  - The order of operations within prefix and postfix expressions is completely determined by the position of the operator and nothing else

**1.4 Queue**

- A queue is structured as an ordered collection of items which are added at one end, called the “rear,” and removed from the other end, called the “front.”
- Queues maintain a FIFO ordering property.
- A _**deque**_, also known as a double-ended queue, is an ordered collection of items similar to the queue.
  - It has two ends, a front and a rear, and the items remain positioned in the collection.
  - New items can be added at either the front or the rear.
  - Likewise, existing items can be removed from either end.

**1.5 Hash Table**

- A **hash table** is a collection of items which are stored in such a way as to make it easy to find them later.
- Each position of the hash table, often called a slot, can hold an item and is named by an integer value starting at 0.
- The mapping between an item and the slot where that item belongs in the hash table is called the **hash function**.
  - **Remainder method** takes an item and divides it by the table size, returning the remainder as its hash value \(i.e. `h(item) = item % 11`\)
  - **load factor** is the number of items devided by the table size
  - **collision** refers to the situation that multiple items have the same hash value
  - **folding method** for constructing hash functions begins by dividing the item into equal-size pieces \(the last piece may not be of equal size\). These pieces are then added together to give the resulting hash value.
  - **mid-square method** first squares the item, and then extract some portion of the resulting digits. For example, 44^2 = 1936, extract middle two digits 93, then perform remainder step \(93%11=5\).
- **Collision Resolution** is the process to systemacticly place the second item in the hash table when two items hash to the same slot.
- **Open addressing \(linear probing\):** sequentially find the next open slot or address in the hash table
  - A disadvantage to linear probing is the tendency for clustering; items become clustered in the table.
  - **Rehashing** is one way to deal with clustering, which is to skip the slot when looking sequentially for the next open slot, thereby more evenly distributing the items that have caused collisions.
- **Quadratic probing:** instead of using a constant “skip” value, we use a rehash function that increments the hash value by 1, 3, 5, 7, 9, and so on. This means that if the first hash value is h, the successive values are h+1, h+4, h+9, h+16, and so on.
- **Chaining** allows many items to exist at the same location in the hash table.
  - When collisions happen, the item is still placed in the proper slot of the hash table.
  - As more and more items hash to the same location, the difficulty of searching for the item in the collection increases. [![](https://camo.githubusercontent.com/2f688991ef488f29242d72b62e9f5137545ee3653290adb7557dd875e5851c28/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f636861696e696e672e706e67)](https://camo.githubusercontent.com/2f688991ef488f29242d72b62e9f5137545ee3653290adb7557dd875e5851c28/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f636861696e696e672e706e67)
- The initial size for the hash table has to be a prime number so that the collision resolution algorithm can be as efficient as possible.

**1.6 Trees**

- A tree data structure has its root at the top and its leaves on the bottom.
- Three properties of tree:
  1. we start at the top of the tree and follow a path made of circles and arrows all the way to the bottom.
  2. all of the children of one node are independent of the children of another node.
  3. each leaf node is unique.
- **binary tree:** each node in the tree has a maximum of two children.
  - A **balanced binary tree** has roughly the same number of nodes in the left and right subtrees of the root.

**1.6.1 Tree Traversal: access the nodes of the tree**

- Tree traversal is the foundation of all tree related problems.
- Here are a few different ways to traverse a tree:
  - BFS: Level-order
  - DFS: Pre-order, In-order, Post-order
  - [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/tree_traversal.md)

**1.6.2 Binary Search Tree \(BST\)**

- BST Property \(left subtree &lt; root &lt; right subtree\):
  1. The value in each node must be `greater than (or equal to)` any values stored in its left subtree.
  2. The value in each node must be `less than (or equal to)` any values stored in its right subtree.
- `Inorder traversal` in BST will be in `ascending order`. Therefore, the inorder traversal is the most frequent used traversal method of a BST.
- **successor:** the node that has the next-largest key in the tree
  - it has no more than one child
- You could go over the [Leetcode Binary Search Tree topic](https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/) for details

**1.6.3 Heap / Priority Queue / Binary Heap**

- **Priority Queue:**
  - the logical order of items inside a queue is determined by their priority.
  - The highest priority items are at the front of the queue and the lowest priority items are at the back.
- **Binary Heap:** the classic way to implement a priority queue.
  - both enqueue and dequeue items are **O\(logn\)**
  - **min heap:** the smallest key is always at the front
  - **max heap:** the largest key value is always at the front
  - **complete binary tree:** a tree in which each level has all of its nodes \(except the bottom level\)
    - can be implemented using a single list
    - Because the tree is complete, the left child of a parent \(at position **p**\) is the node that is found in position **2p** in the list. Similarly, the right child of the parent is at position **2p+1** in the list. [![](https://camo.githubusercontent.com/8d52ed9541e243376b0824903076f293cee0a483c1487ed9d204e29637983c9a/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f686561704f726465722e706e67)](https://camo.githubusercontent.com/8d52ed9541e243376b0824903076f293cee0a483c1487ed9d204e29637983c9a/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f686561704f726465722e706e67)
  - **heap order property:** In a heap, for every node **x** with parent **p**, the key in **p** is smaller than or equal to the key in **x**.
    - For example, the root of the tree must be the smallest item in the tree
  - When to use heap:
    - Priority Queue implementation
    - whenever need quick access to largest/smallest item
      - Instant access to the item
      - insertions are fast, allow in-place sorting
    - More details can be seen in [this discussion](https://stackoverflow.com/questions/749199/when-would-i-want-to-use-a-heap)

**1.6.4 More Trees**

- _**Parse tree**_ can be used to represent real-world constructions like sentences or mathematical expressions.
  - A simple solution to keeping track of parents as we traverse the tree is to use a stack.
  - When we want to descend to a child of the current node, we first push the current node on the stack.
  - When we want to return to the parent of the current node, we pop the parent off the stack.
- _**AVL Tree**_: a balanced binary tree. the AVL is named for its inventors G.M. Adelson-Velskii and E.M. Landis.
  - For each node: _balanceFactor_ = _height\(leftSubTree\)_ − _height\(rightSubTree\)_
  - a subtree is left-heavy if _balance_factor &gt; 0_
  - a subtree is right-heavy if _balance_factor &lt; 0_
  - a subtree is perfectly in balance if _balance_factor = 0_
  - For simplicity we can define a tree to be in balance if the balance factor is -1, 0, or 1.
  - The number of nodes follows the pattern of _Fibonacci sequence_, as the number of elements get larger the ratio of Fi/Fi-1 closes to the golden ratio, so the time complexity is derived to be **O\(log n\)**
- _**Red-Black Tree**_
  - [Details in Wiki](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- _**B+ Tree**_: N-array tree
  - [Details in Wiki](https://en.wikipedia.org/wiki/B%2B_tree)
- _**Trie**_
  - _This is a common data structure in interviews_
  - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/trie.md)
- _**Binary Index Tree \(Fenwick Tree\)**_
  - [Binary Index Tree \(Fenwick Tree\)](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
  - [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)

**1.7 Graph**

**1.7.1 Vocabulary and Definitions**

- **Vertex \(or Node\):** the name is called "key" and the additional information is called "payload"
- **Edge \(or arc\):** it connects two vertices to show that there is a relationship between them.
  - One way edge is called **directed graph \(or digraph\)**
- **Weight:** edges maybe weighted to show that there is a coset to fo from one vertex to another.
- **Path:** a sequence of vertices that are connected bny edges
  - Unweighted path length is the number of edges in the path, specifically n-
  - Weighted path is the sum of the weights of all the edges in the path
- **Cycle:** a path that starts and ends at the same vertex
  - A graph with no cycles is called an **acyclic graph**.
  - A directed graph with no cycles is called a **directed acyclic graph \(or DAG\)**
- **Graph:** a graph \(G\) is composed with a set of vertices \(V\) and edges \(E\) Each edge is a tuple of vertex and weight \(v,w\). G=\(V,E\) where w,v∈V

**1.7.2 Graph Representation**

- Adjacency Matrix \(2D matrix\)
  - Good when number of edges is large
  - Each of the rows and columns represent a vertex in the graph.
  - The value in the cell at the intersection of row v and column w indicates if there is an edge from vertex v to vertex w. It also represents the weight of the edge from vertex v to vertex w.
  - When two vertices are connected by an edge, we say that they are **adjacent** [![](https://camo.githubusercontent.com/72d272bc0fbbee67b8b6a54f62208602d612edc61052a55c7fa339bd955ff4df/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a4d61742e706e67)](https://camo.githubusercontent.com/72d272bc0fbbee67b8b6a54f62208602d612edc61052a55c7fa339bd955ff4df/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a4d61742e706e67)
  - **sparse:** most of the cells in the matrix are empty
- Adjacency List
  - space-efficient way for implementation
  - keep a master list of all the vertices in the Graph object. each vertex is an element of the list with the vertex as ID and a list of its adjacent vertices as value [![](https://camo.githubusercontent.com/57590f7986a5ec8f3e66b93edd06da65ed00c57b199a11d210a4aa10e19cf6ce/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a6c6973742e706e67)](https://camo.githubusercontent.com/57590f7986a5ec8f3e66b93edd06da65ed00c57b199a11d210a4aa10e19cf6ce/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a6c6973742e706e67)

**1.7.3 Graph Algorithms**

- Graph traversal: BFS & DFS
  - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/graph_traversal.md)
- Graph Algorithms:
  - Shortest Path:
    - Dijkstra’s Algorithm \(Single source point\)
      - _**Essentially, this is a BFS using priority queue instead of queue**_
      - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/dijkstra.md)
    - Floyd Warshall Algorithm \(Multiple source point\)
  - Topological Sort
    - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/topological_sort.md)
  - Strongly Connected Components
    - [More Info](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/graph_SCC.md)
  - Prim’s Spanning Tree Algorithm
    - [More Info](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/prim_spanning_tree.md)

#### Chapter 2: Common Algorithm Types

**2.1 Brute Force**

- Most common algorithm
- Whenever you are facing a problem without many clues, you should solve it using brute force first, and observe the process and try to optimize your solution

**2.2 Search**

**2.2.1 Sequential Search**

- Sequential Search: visit the stored value in a sequence \(use loop\)

**2.2.2 Binary Search**

- Examine the middle item of an ordered list
- KEY is the search interval
- [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/binary_search.md)

**2.3 Sort**

**2.3.1 Bubble Sort**

- Compares adjacent items and exchanges those that are out of order.
- **Short bubble:** stop early if it finds that the list has become sorted.
- time complexity: O\(n2\)

**2.3.2 Selection Sort**

- Looks for the largest value as it makes a pass and, after completing the pass, places it in the proper location.
- time complexity: O\(n2\)

**2.3.3 Insertion Sort**

- Maintains a sorted sub-list in the lower positions of the list.
- Each new item is then “inserted” back into the previous sub-list such that the sorted sub-list is one item larger.
- time complexity: O\(n2\)

**2.3.4 Shell Sort**

- Breaks the original list into a number of smaller sub-lists, each of which is sorted using an insertion sort.
  - the shell sort uses an increment _i_, sometimes called the **gap**, to create a sub-list by choosing all items that are _i_ items apart.
  - After all the sub-lists are sorted, it finally does a standard insertion sort
  - time complexity goes between O\(n\) and O\(n2\), by changing the increment, a shell sort can perform at O\(n^\(3/2\)\).

**2.3.5 Merge Sort**

- A recursive algorithm that continually splits a list in half.
- [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/merge_sort.md)

**2.3.6 Quick Sort**

- First selects a value \(**pivot value**\), and then use this value to assist with splitting the list.
- [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/quick_sort.md)

**2.3.7 Heap Sort**

- Use the property of heap to sort the list

**2.4 Recursion**

**Recursion** is a method of solving problems that involves breaking a problem down into smaller and smaller sub-problems until you get to a small enough problem that it can be solved trivially. Usually recursion involves a function calling itself.

Three Laws of Recursion:

1. A recursive algorithm must have a base case.
2. A recursive algorithm must change its state and move toward the base case.
3. A recursive algorithm must call itself, recursively.

Recursive visualization: Fractal tree

- A **fractal** is something that looks the same at all different levels of magnification.
- A fractal tree: a small twig has the same shape and characteristics as a whole tree.

**2.4.1 Recursive function in Python**

- When a function is called in Python, a stack frame is allocated to handle the local variables of the function.
- When the function returns, the return value is left on top of the stack for the calling function to access.
- Even though we are calling the same function over and over, each call creates a new scope for the variables that are local to the function.

**2.5 Backtracking**

- a general algorithm for finding all \(or some\) solutions to constraint satisfaction problems \(i.e. chess, puzzles, crosswords, verbal arithmetic, Sudoku, etc\)
- [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/backtrack.md)

**2.6 Dynamic Programming**

**Dynamic Programming \(DP\)** is an algorithm technique which is usually based on a recurrent formula and one \(or some\) starting states. - A sub-solution of the problem is constructed from previously found ones. - Usually used to find the extreme cases such as shortest path, best fit, smallest set, etc.

**2.7 Divide and Conquer**

- **Divide**: break into non-overlapping sub-problems of the same type \(of problem\)
- **Conquer**: solve sub-problems
- the algorithm is to keep dividing and conquering, and finally combine them to get the solution
- the algorithm can be written in recursive or loop

**2.8 Greedy**

**Greedy algorithm:**

- find a safe move first
- prove safety
- solve subproblem \(which should be similar to original problem\)
- estimate running time
