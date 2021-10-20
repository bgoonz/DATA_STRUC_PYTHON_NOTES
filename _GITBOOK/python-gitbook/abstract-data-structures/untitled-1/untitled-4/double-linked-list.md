# Double Linked List

In single linked list each node of the list has two components, the actual value of the node and the reference to the next node in the linked list. In the doubly linked list, each node has three components: the value of the node, the reference to the previous node, and the reference to the next node. For the start node of the doubly linked list, the reference to the previous node is null. Similarly, for the last node in the doubly linked list, the reference to next node is null.

#### Pros and Cons of a Doubly Linked List <a id="prosandconsofadoublylinkedlist"></a>

Following are some of the pros and cons of a doubly linked list:

**Pros**

- Unlike a single linked list, the doubly linked list can be traversed and searched in both directions. The reference to the next node helps in traversing the node in the forward direction while the references to the previous nodes allow traversal in the backward direction.
- Basic operations such as insertion and deletion are easier to implement in the doubly linked lists since, unlike single linked lists, we do not need to traverse to the predecessor node and store its reference. Rather, in a doubly linked list the reference of the predecessor node can be retrieved from the node that we want to delete.

**Cons**

- One of the major drawbacks of the doubly linked list is that you need more memory space to store one extra reference for each node.
- A few additional steps are required to be performed in order to perform insertion and deletion operations.

#### Implementing the Doubly Linked List with Python <a id="implementingthedoublylinkedlistwithpython"></a>

In this section, we will see how we can create a very simple doubly linked list in Python. If you have read [Part 1](https://stackabuse.com/linked-lists-in-detail-with-python-examples-single-linked-lists/) and [Part 2](https://stackabuse.com/sorting-and-merging-single-linked-list/) of this series of articles, the code should be pretty straight-forward.

As always, let's first create a class for the single node in the list. Add the following code to your file:

```python
class Node:
    def __init__(self, data):
        self.item = data
        self.nref = None
        self.pref = None
```

You can see in the above code, we create a `Node` class with three member variables: `item`, `nref`, and `pref`. The `item` variable will store the actual data for the node. The `nref` stores the reference to the next node, while `pref` stores the reference to the previous node in the doubly linked list.

Next, we need to create the `DoublyLinkedList` class, which contains different doubly linked list related functions. Add the following code:

```python
class DoublyLinkedList:
    def __init__(self):
        self.start_node = None
```

Throughout this article we will keep adding functions to this class.

**Inserting Items in Doubly Linked List**

In this section, we will see the different ways of inserting items in a doubly linked list.

**Inserting Items in Empty List**

The easiest way to insert an item in a doubly linked list is to insert an item in the empty list. The following script inserts an element at the start of the doubly linked list:

```python
 def insert_in_emptylist(self, data):
        if self.start_node is None:
            new_node = Node(data)
            self.start_node = new_node
        else:
            print("list is not empty")
```

In the script above, we define a method `insert_in_emptylist()`. The method first checks whether the `self.start_node` variable is `None` or not. If the variable is `None`, it means that the list is actually empty. Next, a new node is created and its value is initialized by the value passed as a parameter to the `data` parameter of the `insert_in_emptylist()` function. Finally, the value of `self.start_node` variable is set to the new node. In case if the list is not empty, a message is simply displayed to the user that the list is not empty.

Add the `insert_in_emptylist()` method to the `DoublyLinkedList` class that you created earlier.

**Inserting Items at the Start**

To insert an item at the beginning of the doubly linked list, we have to first check whether the list is empty or not. If the list is empty, we can simply use the logic defined in the `insert_in_emptylist()` to insert the element since in an empty list, the first element is always at the start.

Else, if the list is not empty, we need to perform three operations:

1. For the new node, the reference to the next node will be set to `self.start_node`.
2. For the `self.start_node` the reference to the previous node will be set to the newly inserted node.
3. Finally, the `self.start_node` will become the newly inserted node.

The following script inserts an item at the start of the doubly linked list:

```python
    def insert_at_start(self, data):
        if self.start_node is None:
            new_node = Node(data)
            self.start_node = new_node
            print("node inserted")
            return
        new_node = Node(data)
        new_node.nref = self.start_node
        self.start_node.pref = new_node
        self.start_node = new_node
```

Add the `insert_at_start()` method to the `DoublyLinkedList` class that you created earlier.

**Inserting Items at the End**

Inserting an element at the end of the doubly linked list is somewhat similar to inserting an element at the start. At first, we need to check if the list is empty. If the list is empty then we can simply use the `insert_in_emptylist()` method to insert the element. If the list already contains some element, we traverse through the list until the reference to the next node becomes `None`. When the next node reference becomes `None` it means that the current node is the last node.

The previous reference for the new node is set to the last node, and the next reference for the last node is set to the newly inserted node. The script for inserting an item at the last node is as follows:

```python
    def insert_at_end(self, data):
        if self.start_node is None:
            new_node = Node(data)
            self.start_node = new_node
            return
        n = self.start_node
        while n.nref is not None:
            n = n.nref
        new_node = Node(data)
        n.nref = new_node
        new_node.pref = n
```

Add the `insert_at_end()` method to the `DoublyLinkedList` class that you created earlier.

**Inserting Item after another Item**

To insert an item after another item, we first check whether or not the list is empty. If the list is actually empty, we simply display the message that the "list is empty".

Otherwise we iterate through all the nodes in the doubly linked list. In case if the node after which we want to insert the new node is not found, we display the message to the user that the item is not found. Else if the node is found, it is selected and we perform four operations:

1. Set the previous reference of the newly inserted node to the selected node.
2. Set the next reference of the newly inserted node to the next reference of the selected.
3. If the selected node is not the last node, set the previous reference of the next node after the selected node to the newly added node.
4. Finally, set the next reference of the selected node to the newly inserted node.

The script for inserting item after another item is as follows:

```python
    def insert_after_item(self, x, data):
        if self.start_node is None:
            print("List is empty")
            return
        else:
            n = self.start_node
            while n is not None:
                if n.item == x:
                    break
                n = n.nref
            if n is None:
                print("item not in the list")
            else:
                new_node = Node(data)
                new_node.pref = n
                new_node.nref = n.nref
                if n.nref is not None:
                    n.nref.prev = new_node
                n.nref = new_node
```

Add the `insert_after_item()` method to the `DoublyLinkedList` class that you created earlier.

**Inserting Item before another Item**

To insert an item before another item, we first check whether or not the list is empty. If the list is actually empty, we simply display the message that the "list is empty".

Otherwise we iterate through all the nodes in the doubly linked list. In case if the node before which we want to insert the new node is not found, we display the message to the user that the item is not found. Else if the node is found, it is selected and we perform four operations:

1. Set the next reference of the newly inserted node to the selected node.
2. Set the previous reference of the newly inserted node to the previous reference of the selected.
3. Set the next reference of the node previous to the selected node, to the newly added node.
4. Finally, set the previous reference of the selected node to the newly inserted node.

The script for adding item before another item in a doubly linked list is as follows:

```python
    def insert_before_item(self, x, data):
        if self.start_node is None:
            print("List is empty")
            return
        else:
            n = self.start_node
            while n is not None:
                if n.item == x:
                    break
                n = n.nref
            if n is None:
                print("item not in the list")
            else:
                new_node = Node(data)
                new_node.nref = n
                new_node.pref = n.pref
                if n.pref is not None:
                    n.pref.nref = new_node
                n.pref = new_node
```

Add the `insert_before_item()` method to the `DoublyLinkedList` class that you created earlier.

**Traversing a Doubly Linked List**

Traversing a doubly linked list is very similar to traversing a single linked list. The script is as follows:

```python
    def traverse_list(self):
        if self.start_node is None:
            print("List has no element")
            return
        else:
            n = self.start_node
            while n is not None:
                print(n.item , " ")
                n = n.nref
```

Add the `traverse_list()` method to the `DoublyLinkedList` class that you created earlier.

**Deleting Elements from Doubly Linked List**

Like insertion, there can be multiple ways to delete elements from a doubly linked list. In this section, we will review some of them.

**Deleting Elements from the Start**

The easiest way to delete an element from a doubly linked list is from the start. To do so, all you have to do is set the value of the start node to the next node and then set the previous reference of the start node to `None`. However before we do that we need to perform two checks. First, we need to see if the list is empty. And then we have to see if the list contains only one element or not. If the list contains only one element then we can simply set the start node to `None`. The following script can be used to delete elements from the start of the doubly linked list.

```python
   def delete_at_start(self):
        if self.start_node is None:
            print("The list has no element to delete")
            return
        if self.start_node.nref is None:
            self.start_node = None
            return
        self.start_node = self.start_node.nref
        self.start_prev = None;
```

Add the `delete_at_start()` method to the `DoublyLinkedList` class that you created earlier.

**Deleting Elements from the End**

To delete the element from the end, we again check if the list is empty or if the list contains a single element. If the list contains a single element, all we have to do is to set the start node to `None`. If the list has more than one element, we iterate through the list until the last node is reached. Once we reach the last node, we set the next reference of the node previous to the last node, to `None` which actually removes the last node. The following script can be used to delete the element from the end.

```python
    def delete_at_end(self):
        if self.start_node is None:
            print("The list has no element to delete")
            return
        if self.start_node.nref is None:
            self.start_node = None
            return
        n = self.start_node
        while n.nref is not None:
            n = n.nref
        n.pref.nref = None
```

Add the `delete_at_end()` method to the `DoublyLinkedList` class that you created earlier.

**Deleting Elements by Value**

Deleting an element by value is the trickiest of all the deletion functions in doubly linked lists since several cases have to be handled in order to remove an element by value. Let's first see how the function looks like and then we will see the explanation of the individual piece of code.

```python
    def delete_element_by_value(self, x):
        if self.start_node is None:
            print("The list has no element to delete")
            return
        if self.start_node.nref is None:
            if self.start_node.item == x:
                self.start_node = None
            else:
                print("Item not found")
            return

        if self.start_node.item == x:
            self.start_node = self.start_node.nref
            self.start_node.pref = None
            return

        n = self.start_node
        while n.nref is not None:
            if n.item == x:
                break;
            n = n.nref
        if n.nref is not None:
            n.pref.nref = n.nref
            n.nref.pref = n.pref
        else:
            if n.item == x:
                n.pref.nref = None
            else:
                print("Element not found")
```

In the above script we create `delete_element_by_value()` function that takes the node value as parameter and deletes that node. At the beginining of the function we check if the list is empty or not. If the list is empty we simply display the user that the list is empty.

This logic is implemented in the following piece of code:

```python
        if self.start_node is None:
            print("The list has no element to delete")
            return
```

Next, we check if the list has a single element and that element is actually the element we want to delete. If the only element is the one that we want to delete, we simply set the `self.start_node` to `None` which means that the list will now have no item. If there is only one item and that is not the item that we want to delete, we will simply display the message that item to be deleted is not found.

The following piece of code implements this logic:

```python
        if self.start_node.nref is None:
            if self.start_node.item == x:
                self.start_node = None
            else:
                print("Item not found")
            return
```

Next, we handle the case where the list has more than one items but the item to be deleted is the first item. In that case we simply execute the logic that we wrote for the method `delete_at_start()`. The following piece of code deletes an element from the start in case of multiple items:

```python
        if self.start_node.item == x:
            self.start_node = self.start_node.nref
            self.start_node.pref = None
            return
```

Finally, if the list contains multiple items and the item to be deleted is not the first item, we traverse all the elements in the list except the last one and see if any of the nodes has the value that matches the value be deleted. If the node is found, we perform the following two operations:

1. Set the value of the next reference of the previous node to the next reference of the node to be deleted.
2. Set the previous value of the next node to the previous reference of the node to be deleted.

Finally, if the node to be deleted is the last node, the next reference of the node previous to the last node is set to `None`. The following script implements this logic:

```python
        n = self.start_node
        while n.nref is not None:
            if n.item == x:
                break;
            n = n.nref
        if n.nref is not None:
            n.pref.nref = n.nref
            n.nref.pref = n.pref
        else:
            if n.item == x:
                n.pref.nref = None
            else:
                print("Element not found")
```

Add the `delete_element_by_value()` method to the `DoublyLinkedList` class that you created earlier.

**Reversing a Doubly Linked List**

To reverse a doubly linked list, you basically have to perform the following operations:

1. The next reference of the start node should be set none because the first node will become the last node in the reversed list.
2. The previous reference of the last node should be set to `None` since the last node will become the previous node.
3. The next references of the nodes \(except the first and last node\) in the original list should be swapped with the previous references.

The script for reversing a doubly linked list is as follows:

```python
    def reverse_linked_list(self):
        if self.start_node is None:
            print("The list has no element to delete")
            return
        p = self.start_node
        q = p.nref
        p.nref = None
        p.pref = q
        while q is not None:
            q.pref = q.nref
            q.nref = p
            p = q
            q = q.pref
        self.start_node = p
```

Add the `reverse_linked_list()` method to the `DoublyLinkedList` class that you created earlier.

**Testing Doubly Linked List Functions**

In this section, we will test the doubly linked functions that we created in the previous sections.

Let's first create the object of the `DoublyLinkedList` class. Execute the following script:

```python
new_linked_list = DoublyLinkedList()
```

**Testing Insertion Functions**

Let's test the insertion functions first. We'll first add elements in the empty list. Execute the following script:

```python
new_linked_list.insert_in_emptylist(50)
```

Now if you traverse the list, you should see 50 as the only element in the list as shown below:

```python
new_linked_list.traverse_list()
```

Output:

```python
50
```

Now let's add a few elements at the start. Execute the following script:

```python
new_linked_list.insert_at_start(10)
new_linked_list.insert_at_start(5)
new_linked_list.insert_at_start(18)
```

Now if you traverse the list, you should see the following elements in the list:

```python
18
5
10
50
```

To add the elements at the end, execute the following script:

```python
new_linked_list.insert_at_end(29)
new_linked_list.insert_at_end(39)
new_linked_list.insert_at_end(49)
```

Now if you traverse the doubly linked list, you should see the following elements:

```python
18
5
10
50
29
39
49
```

Let's insert an element after 50.

```text
new_linked_list.insert_after_item(50, 65)
```

Now the list should look like this:

```text
18
5
10
50
65
29
39
49
```

Finally, let's add an element before item 29.

```text
new_linked_list.insert_before_item(29, 100)
```

The list at this point of time, should contain the following elements:

```text
18
5
10
50
65
100
29
39
49
```

**Testing Deletion Functions**

Let's now test the deletion functions on the items that we inserted in the last sections. Let's first delete an element from the start.

```text
new_linked_list.delete_at_start()
```

Item 18 will be removed and the list will now look like this:

```text
5
10
50
65
100
29
39
49
```

Similarly, the following script deletes the element from the end of the doubly linked list:

```text
new_linked_list.delete_at_end()
```

Traversing the list now will return the following items:

```text
5
10
50
65
100
29
39
```

Finally, you can also delete the elements by value using the `delete_element_by_value()` function as shown below:

```text
new_linked_list.delete_element_by_value(65)
```

If you traverse the list now, you will see that item 65 will be deleted from the list.

**Testing Reverse Function**

Finally, let's reverse the list using the `reverse_linked_list()` function. Execute the following script:

```text
new_linked_list.reverse_linked_list()
```

Now if you traverse the list, you will see the reversed linked list:

```text
39
29
100
50
10
5
```

#### Conclusion <a id="conclusion"></a>

The doubly linked list is extremely useful specifically when you have to perform lots of inserts and delete operations. The links to the previous and next nodes make it very easy to insert and delete new elements without keeping track of the previous and next nodes.

In this article, we saw how doubly linked list can be implemented with Python. We also saw different ways to perform insert and delete operations on doubly linked list. Finally we studied how to reverse a doubly linked list.

```python
# Each ListNode holds a reference to its previous node
# as well as its next node in the List.


class ListNode:
    def __init__(self, value, prev=None, next=None):
        self.value = value
        self.prev = prev
        self.next = next

    def __repr__(self):
        return (
            "Value: {}, ".format(self.value if self.value else None)
            + "Prev: {}, ".format(self.prev.value if self.prev else None)
            + "Next: {} \n".format(self.next.value if self.next else None)
        )
# Wrap the given value in a ListNode and insert it
# after this node. Note that this node could already
# have a next node it is pointing to.

    def insert_after(self, value):
        current_next = self.next
        self.next = ListNode(value, self, current_next)
        if current_next:
            current_next.prev = self.next
# Wrap the given value in a ListNode and insert it
# before this node. Note that this node could already
# have a previous node it is pointing to.

    def insert_before(self, value):
        current_prev = self.prev
        self.prev = ListNode(value, current_prev, self)
        if current_prev:
            current_prev.next = self.prev
# Rearranges this ListNode's previous and next pointers
# accordingly, effectively deleting this ListNode.

    def delete(self):
        if self.prev:
            self.prev.next = self.next
        if self.next:
            self.next.prev = self.prev
# Our doubly-linked list class. It holds references to
# the list's head and tail nodes.


class DoublyLinkedList:
    def __init__(self, node=None):
        self.head = node
        self.tail = node
        self.length = 1 if node is not None else 0

    def __repr__(self):
        return f"Head: {self.head} \n Tail: {self.tail} \n Length: {self.length}"

    def __len__(self):
        return self.length
# Replaces the head of the list with a new value that is passed in.

    def add_to_head(self, value):
        new_node = ListNode(value)
        self.length += 1
# if there is no head or tail, it needs to become both:
        if not self.head and not self.tail:
            self.head = new_node
            self.tail = new_node
# otherwise it only needs to become the head:
        else:
            self.head.prev = new_node
            new_node.next = self.head
            self.head = new_node
# Replaces the tail of the list with a new value that is passed in.

    def remove_from_head(self):
        # if there is no head, just return None because we can't remove
        if not self.head:
            return None
# reduce the length
        self.length -= 1
# we need to store the current head to return it once removed
        current_head = self.head
# if there is solely one node, we set both head and tail to None
        if self.head == self.tail:
            self.head = None
            self.tail = None
            return current_head.value
# changes the head to the next node
        else:
            self.head = self.head.next
  # Removes pointers to any previous node
            self.head.prev = None
            return current_head.value
# Removes the head node and returns the value stored in it.

    def add_to_tail(self, value):
        new_node = ListNode(value)
        self.length += 1
# if there is no head or tail, it needs to become both:
        if not self.head and not self.tail:
            self.head = new_node
            self.tail = new_node
# otherwise it only needs to become the tail:
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
# Removes the tail node and returns the value stored in it

    def remove_from_tail(self):
        # if there is no tail, just return None because we can't remove
        if not self.tail:
            return None
# reduce the length
        self.length -= 1
# we need to store the current tail to return it once removed
        current_tail = self.tail
# if there is solely one node, we set both head and tail to None
        if self.head == self.tail:
            self.head = None
            self.tail = None
            return current_tail.value
# changes the tail to the next node
        else:
            self.tail = self.tail.prev
  # Removes pointers to any next node
            self.tail.next = None
            return current_tail.value
# Takes a reference to a node in the list and moves it to the front of the list, shifting all other list nodes down.

    def move_to_head(self, node):
        # if the passed node is already the head, we just return it
        if node is self.head:
            return node
# if the passed node is the tail, we need to remove it from the tail
        if node is self.tail:
            self.remove_from_tail()
        else:
            node.delete()
            self.length -= 1
# we should add it but only the value of the passed node
        self.add_to_head(node.value)
# Takes a reference to a node in the list and moves it to the end of the list, shifting all other list nodes up.

    def move_to_tail(self, node):
        if node is self.tail:
            return node
        if node is self.head:
            self.remove_from_head()
        else:
            node.delete()
            self.length -= 1
        self.add_to_tail(node.value)
# Takes a reference to a node in the list and removes it from the list. The deleted node's `previous` and `next` pointers should point to each afterwards.

    def delete(self, node):
        if self.head is self.tail:
            self.remove_from_head()
        elif node is self.head:
            self.remove_from_head()
        elif node is self.tail:
            self.remove_from_tail()
        else:
            node.delete()
            return node.value
# Returns the maximum value in the list.

    def get_max(self):
        # if there is no head, we know the list is empty
        if not self.head:
            return None
# we'll set our starting max value as the first value we'll begin looping through in the list, the head
        max_value = self.head.value
# we'll set a current value to check against
        current = self.head
        while current:
            if current.value > max_value:
                max_value = current.value
  # increment current
            current = current.next
# once all values are checked, return max value
        return max_value


ll = DoublyLinkedList()
print(f"ll: {ll}")  # should be empty
ll.add_to_head(2)  # should be 2
ll.add_to_head(5)  # should be 5,2
ll.add_to_head(7)  # should be 7,5,2
ll.remove_from_head()  # should be 5,2
ll.add_to_tail(9)  # should be 5,2,9
ll.add_to_tail(11)  # should be 5,2,9,11
ll.add_to_tail(13)  # should be 5,2,9,11,13
ll.remove_from_tail()  # should be 5,2,9,11
ll.get_max()  # should return 11
print(f"ll: {ll}")  # return length 4, head: 5, tail: 11

```
