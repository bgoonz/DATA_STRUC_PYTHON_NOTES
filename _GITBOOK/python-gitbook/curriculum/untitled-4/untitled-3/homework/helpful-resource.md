# Helpful Resource

#### Sorting a Linked List using Bubble Sort <a id="sortingalinkedlistusingbubblesort"></a>

There are two ways to sort a linked list using [bubble sort](https://en.wikipedia.org/wiki/Bubble_sort):

1. Exchanging data between nodes
2. Modifying the links between nodes

In this section, we will see how both these approaches work. We will use the bubble sort algorithm to first sort the linked list by changing the data, and then we will see how we can use bubble sort to change the links in order to sort the linked list.

**Sorting Linked List by Exchanging Data**

To sort a linked list by exchanging data, we need to declare three variables `p`, `q`, and `end`.

The variable `p` will be initialized with the start node, while `end` will be set to `None`.

It is important to remember that to sort the list with `n` elements using bubble sort, you need `n-1` iterations.

To implement bubble sort, we need two while loops. The outer while loop executes until the value of variable `end` is equal to the `self.start_node`.

The inner while loop executes until `p` becomes equal to the `end` variable. Inside the outer while loop, the value of `p` will be set to `self.start_node` which is the first node. Inside the inner while loop, the value of `q` will be set to `p.link` which is actually the node next to `q`. Then the values of `p` and `q` will be compared if `p` is greater than `q` the values of both the variables will be swapped and then `p` will point to `p.ref`, which is the next node. Finally, the `end` will be assigned the value of `p`. This process continues until the linked list is sorted.

Let's understand this process with the help of an example. Suppose we have the following list:

```python
8,7,1,6,9
```

Let's implement our algorithm to sort the list. We'll see what will happen during each iteration. The purpose of the bubble sort is that during each iteration, the largest value should be pushed to the end, hence at the end of all iterations, the list will automatically be sorted.

Before the loop executes, the value of `end` is set to `None`.

In the first iteration, `p` will be set to 8, and `q` will be set to `7`. Since `p` is greater than `q`, the values will be swapped and `p` will become `p.ref`. At this point of time the linked list will look like this:

```python
7,8,1,6,9
```

Since at this point of time, `p` is not equal to `end`, the loop will continue and now `p` will become 8 and `q` will become 1. Since again `p` is greater than `q`, the values will be swapped again and `p` will again become `p.ref`. The list will look like this:

```python
7,1,8,6,9
```

Here again, `p` is not equal to `end`, the loop will continue and now `p` will become 8 and `q` will become 6. Since again `p` is greater than `q`, the values will be swapped again and `p` will again become `p.ref`. The list will look like this:

```python
7,1,6,8,9
```

Again `p` is not equal to `end`, the loop will continue and now `p` will become 8 and `q` will become 9. Here since `p` is not greater than `q`, the values will not be swapped and `p` will become `p.ref`. At this point of time, the reference of `p` will point to `None`, and `end` also points to `None`. Hence the inner while loop will break and `end` will be set to `p`.

In the next set of iterations, the loop will execute until 8, since 9 is already at the end. The process continues until the list is completely sorted.

The Python code for sorting the linked list using bubble sort by exchanging the data is as follows:

```python
    def bub_sort_datachange(self):
        end = None
        while end != self.start_node:
            p = self.start_node
            while p.ref != end:
                q = p.ref
                if p.item > q.item:
                    p.item, q.item = q.item, p.item
                p = p.ref
            end = p
```

Add the `bub_sort_dataexchange()` method to the `LinkedList` class that you created in the last article.

Once you add the method to the linked list, create any set of nodes using the `make_new_list()` function and then use the `bub_sort_dataexchange()` to sort the list. You should see the sorted list when you execute the `traverse_list()` function.

**Sorting Linked List by Modifying Links**

Bubble sort can also be used to sort a linked list by modifying the links instead of changing data. The process remains quite similar to sorting the list by exchanging data, however, in this case, we have an additional variable `r` that will always correspond to the node previous than the `p` node.

Let's take a simple example of how we will swap two nodes by modifying links. Suppose we have a linked list with the following items:

```python
10,45,65,35,1
```

And we want to swap 65 and 35. At this point in time `p` corresponds to node 65, and `q` corresponds to node 35. The variable `r` will correspond to node 45 \(previous to node `p`\). Now if the node `p` is greater than node `q`, which is the case here, the `p.ref` will be set to `q.ref` and `q.ref` will be set to `p`. Similarly, `r.ref` will be set to `q`. This will swap nodes 65 and 35.

The following method implements the bubble sorting for the linked list by modifying links:

```python
    def bub_sort_linkchange(self):
        end = None
        while end != self.start_node:
            r = p = self.start_node
            while p.ref != end:
                q = p.ref
                if p.item > q.item:
                    p.ref = q.ref
                    q.ref = p
                    if p != self.start_node:
                        r.ref = q
                    else:
                        self.start_node = q
                    p,q = q,p
                r = p
                p = p.ref
            end = p
```

Add the `bub_sort_linkchange()` method to the `LinkedList` class that you created in the last article.

Once you add the method to the linked list, create any set of nodes using the `make_new_list()` function and then use the `bub_sort_linkchange()` to sort the list. You should see the sorted list when you execute the `traverse_list()` function.

#### Merging Sorted Linked List <a id="mergingsortedlinkedlist"></a>

In this section we will see how we can merge two sorted linked lists in a manner that the resulting linked list is also sorted. There are two approaches to achieve this. We can create a new linked list that contains individually sorted lists or we can simply change links of the two linked list to join the two sorted linked list. In the second case, we do not have to create a new linked list.

Let's first see how we can merge two linked lists by creating a new list.

**Merging Sorted Linked Lists by Creating a New List**

Let's first dry run the algorithm to see how we can merge two sorted linked list with the help of a new list.

Suppose we have the following two sorted linked lists:

**list1:**

```text
10,45,65,
```

**list2:**

```text
5,15,35,68
```

These are the two lists we want to merge. The algorithm is straight forward. All we will need is three variables, `p`, `q`, and `em`, and an empty list `newlist`.

At the beginning of the algorithm, `p` will point to the first element of the `list1` whereas `q` will point to the first element of the `list2`. The variable `em` will be empty. At the start of the algorithm, we will have the following values:

```python
p = 10
q = 5
em = none
newlist = none
```

Next, we will compare the first element of the `list1` with the first element of `list2`, in other words, we will compare the values of `p` and `q` and the smaller value will be stored in the variable `em` which will become the first node of the new list. The value of `em` will be added to the end of the `newlist`.

After the first comparison we will have the following values:

```python
p = 10
q = 15
em = 5
newlist = 5
```

Since `q` was less than `p`, therefore, we store the value of `q` in `em` moved 'q' one index to the right. In the second pass, we will have the following values:

```python
p = 45
q = 15
em = 10
newlist = 5, 10
```

Here since `p` was smaller, we add the value of `p` to `newlist`, and set `em` to `p` and then moved `p` one index to the right. In the next iteration we have:

```python
p = 45
q = 35
em = 15
newlist = 5, 10, 15
```

###

Similarly, in the next iteration:

```python
p = 45
q = 68
em = 35
newlist = 5, 10, 15, 35
```

And in the next iteration, `p` will again be smaller than `q`, hence:

```python
p = 65
q = 68
em = 45
newlist = 5, 10, 15, 35, 45
```

Finally,

```python
p = None
q = 68
em = 65
newlist = 5, 10, 15, 35, 45, 65
```

When one of the list becomes `None`, all the elements of the second list are added at the end of the new list. Therefore, the final list will be:

```python
p = None
q = None
em = 68
newlist = 5, 10, 15, 35, 45, 65, 68
```

The Python script for merging two sorted lists is as follows:

```python
    def merge_helper(self, list2):
        merged_list = LinkedList()
        merged_list.start_node = self.merge_by_newlist(self.start_node, list2.start_node)
        return merged_list

    def merge_by_newlist(self, p, q):
        if p.item <= q.item:
            startNode = Node(p.item)
            p = p.ref
        else:
            startNode = Node(q.item)
            q = q.ref

        em = startNode

        while p is not None and q is not None:
            if p.item <= q.item:
                em.ref = Node(p.item)
                p = p.ref
            else:
                em.ref = Node(q.item)
                q = q.ref
            em = em.ref

        while p is not None:
            em.ref = Node(p.item)
            p = p.ref
            em = em.ref

        while q is not None:
            em.ref = Node(q.item)
            q = q.ref
            em = em.ref

        return startNode
```

In the script above we have two methods: `merge_helper()` and `merge_by_newlist()`. The first method `merge_helper()` takes a linked list as a parameter and then passes the `self` class, which is a linked list itself and the linked list passed to it as a parameter, to the `merge_by_newlist()` method.

The `merge_by_newlist()` method merges the two linked by creating a new linked list and returns the start node of the new linked list. Add these two methods to the `LinkedList` class. Create two new linked lists, sort them using the `bub_sort_datachange()` or the `bub_sort_linkchange()` methods that you created in the last section and then use the `merge_by_newlist()` to see if you can merge two sorted linked lists or not.

**Merging Sorted Linked Lists by Rearranging Links**

In this approach, a new linked list is not used to store the merger of two sorted linked lists. Rather, the links of the two linked lists are modified in such a way that two linked lists are merged in a sorted manner.

Let's see a simple example of how we can do this. Suppose we have the same two lists `list1` and `list2`:

**list1:**

```python
10,45,65,
```

**list2:**

```python
5,15,35,68
```

We want to merge them in a sorted manner by rearranging the links. To do so we need variables `p`, `q` and `em`. Initially, they will have the following values:

```python
p = 10
q = 5
em = none
newlist = none
```

Next, we will compare the first element of the `list1` with the first element of `list2`, in other words, we will compare the values of `p` and `q` and the smaller value will be stored in the variable `em` which will become the first node of the new list.

After the first comparison we will have the following values:

```python
p = 10
q = 15
start = 5
em = start
```

After the first iteration, since `q` is less than `p`, the start node will point towards `q` and `q` will become `q.ref`. The `em` will be equal to start. The `em` will always refer to the newly inserted node in the merged list.

```python
p = 45
q = 15
em = 10
```

Here since `p` was smaller than the `q`, the variable `em` now points towards the original value of `p` and `p` becomes `p.ref`.

```python
p = 45
q = 35
em = 15
```

Here since `q` was smaller than `p`, `em` points towards `q` and `q` becomes `q.ref`.

```python
p = 45
q = 68
em = 35
```

Similarly `em` here points towards `q`.

```python
p = 65
q = 68
em = 45
newlist = 5, 10, 15, 35, 45
```

And here `em` points towards becomes `p`.

```python
p = None
q = 68
em = 65
newlist = 5, 10, 15, 35, 45, 65
```

When one of the lists becomes `None`, the elements from the second list are simply added at the end.

```python
p = None
q = None
em = 68
newlist = 5, 10, 15, 35, 45, 65, 68
```

The script that contains functions for merging two lists without creating a new list is as follows:

```python
    def merge_helper2(self, list2):
        merged_list = LinkedList()
        merged_list.start_node = self.merge_by_linkChange(self.start_node, list2.start_node)
        return merged_list

    def merge_by_linkChange(self, p, q):
        if p.item <= q.item:
            startNode = Node(p.item)
            p = p.ref
        else:
            startNode = Node(q.item)
            q = q.ref

        em = startNode

        while p is not None and q is not None:
            if p.item <= q.item:
                em.ref = Node(p.item)
                em = em.ref
                p = p.ref
            else:
                em.ref = Node(q.item)
                em = em.ref
                q = q.ref


        if p is None:
            em.ref = q
        else:
            em.ref = p

        return startNode
```

In the script above we have two methods: `merge_helper2()` and `merge_by_linkChange()`. The first method `merge_helper2()` takes a linked list as a parameter and then passes the self class which is a linked list itself and the linked list passed to it as a parameter, to the `merge_by_linkChange()`, which merges the two linked by modifying the links and returns the start node of the merged list. Add these two methods to the `LinkedList` class. Create two new linked lists, sort them using the `bub_sort_datachange()` or the `bub_sort_linkchange()` methods that you created in the last section and then use the `merge_by_newlist()` to see if you can merge two sorted linked lists or not. Let's see this process in action.

Create a new linked list using the following script:

```python
new_linked_list1 = LinkedList()
new_linked_list1.make_new_list()
```

The script will ask you for the number of nodes to enter. Enter as many nodes as you like and then add values for each node as shown below:

```python
How many nodes do you want to create: 4
Enter the value for the node:12
Enter the value for the node:45
Enter the value for the node:32
Enter the value for the node:61
```

Next, create another linked list repeating the above process:

```python
new_linked_list2 = LinkedList()
new_linked_list2.make_new_list()
```

Next, add a few dummy nodes with the help of the following script:

```python
How many nodes do you want to create: 4
Enter the value for the node:36
Enter the value for the node:41
Enter the value for the node:25
Enter the value for the node:9
```

The next step is to sort both the lists. Execute the following script:

```python
new_linked_list1. bub_sort_datachange()
new_linked_list2. bub_sort_datachange()
```

Finally, the following script merges the two linked lists:

```python
list3 = new_linked_list1.merge_helper2(new_linked_list2)
```

To see if the lists have actually been merged, execute the following script:

```python
list3.traverse_list()
```

The output looks like this:

```python
9
12
25
32
36
41
45
61
```

#### Conclusion <a id="conclusion"></a>

In this article, we continued from where we left in the [previous article](https://stackabuse.com/linked-lists-in-detail-with-python-examples-single-linked-lists/). We saw how we can sort merge lists by changing data and then my modifying links. Finally, we also studied different ways of merging two sorted linked lists.
