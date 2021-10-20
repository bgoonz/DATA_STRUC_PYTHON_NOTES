# Reverse A List

#### Introduction <a id="introduction"></a>

Python is a flexible language, and there's typically several ways to perform the same, menial task. Choosing an approach can depend on the time or space complexity, or simply on your personal preference.

Python's data structures are quite handy and intuitive, and their built-in functionalities are easy to work with. In this article, we'll be looking at **how to reverse a list in Python**. A **Python List** is a heterogenous \(can contain differing types\) array-like structure that stores references to objects in memory.

When manipulating a list, we can either create a _new, changed list_, or change the original list _in-place_. We'll see the differences in these as we proceed through the article.

#### Reverse a List Using the _reverse\(\)_ Method <a id="reversealistusingthereversemethod"></a>

Python has a powerful built-in library of methods when it comes to manipulating data in data structures. For the purposes of reversing a list, we can utilize the built-in **`reverse()`** method.

**Note:** The `reverse()` method reverses the list _in-place_. Reversing a list _in-place_ means that the original list is changed, instead of creating a new, reversed list.

Due to this, we can't assign the resulting object to a new variable, and if you want to keep the original list in memory, you'll have to copy it before reversing:

```text
my_list = [1, 2, 3, 4]
my_list.reverse()
print(my_list) # Output: [4, 3, 2, 1]

new_list = my_list.reverse()
print(new_list) # Output: None
```

There's no return value - the list is reversed in-place. However, we can `copy()` it before reversing:

```text
list_1 = [1, 2, 3, 4]
list_2 = list_1.copy()

list_1.reverse()

print('Reversed list: ', list_1)
print('Saved original list: ', list_2)
```

This results in

```text
Reversed list:  [4, 3, 2, 1]
Saved original list:  [1, 2, 3, 4]
```

#### Reverse a List Using _Slice Notation_ <a id="reversealistusingslicenotation"></a>

The _slice notation_ allows us to slice and reproduce parts of various collections or collection-based objects in Python, such as [_Lists_](https://stackabuse.com/python-slice-notation-on-list), [_Strings_](https://stackabuse.com/python-slice-notation-on-string), [_Tuples_](https://stackabuse.com/python-slice-notation-on-tuple) and [_NumPy Arrays_](https://stackabuse.com/python-slice-notation-on-numpy-arrays).

When you _slice_ a list, a portion is returned from that list, and every `step`th element is included:

```text
my_list = [1, 2, 3, 4, 5, 6]

# list[start:end:step]
segment_1 = my_list[1:5:1]
segment_2 = my_list[1:5:2]

print(segment_1)
print(segment_2)
```

This results in:

```text
[2, 3, 4, 5]
[2, 4]
```

By omitting the `start` and `end` arguments, you can include the _entire_ collection. And by setting the `step` to a negative number, you _iterate through the collection in reverse_. Naturally, if you pair these together:

```text
original_list = [1, 2, 3, 4, 5, 6]

reversed_list = original_list[::-1]
print('Original list: ', original_list)
print('Reversed list: ', reversed_list)
```

This results in:

```text
Original list:  [1, 2, 3, 4, 5, 6]
Reversed list:  [6, 5, 4, 3, 2, 1]
```

The _Slice Notation_ doesn't affect the original list at all, so the `original_list` stays the same even after the operation.

#### Reverse a List Using _slice\(\)_ Method <a id="reversealistusingslicemethod"></a>

The `slice()` method accepts the very same parameters - `start`, `end` and `step`, and performs much the same operation as the Slice Notation. Though, instead of omitting the `start` and `end` arguments, you can pass in `None`.

Its return type is a `Slice` object, which can be then be used to _slice a collection according to its contents_. It's not called on the collection you're slicing - you're passing in the `Slice` object after creation, allowing you to create a single reusable and callable object for many different collections.

It's internally transpiled into Slice Notation, so the end result is the same:

```text
original_list = [1, 2, 3, 4, 5, 6]

slice_obj = slice(None, None, -1)

print('slice_obj type:', type(slice_obj))
print('Reversed list:', original_list[slice_obj])
```

This results in:

```text
slice_obj type: <class 'slice'>
Reversed list: [6, 5, 4, 3, 2, 1]
```

#### Reverse a List Using a _For Loop_ <a id="reversealistusingaforloop"></a>

Depending on whether we want to keep the original list intact or not, we can `pop()` elements from the original list and add them to a new one, or we can just append them in reverse order.

`pop()` removes the _last_ element from a collection and returns it. We can combine the `append()` method with this to directly append the removed element to a new list, effectively resulting in a reversed list:

```text
original_list = [1, 2, 3, 4]
reversed_list = []

for i in range(len(original_list)):
    reversed_list.append(original_list.pop())

print(reversed_list) # Output: [4, 3, 2, 1]
```

###

Alternatively, we can iterate through the list _backwards_, until the `-1`th index \(non-inclusive\) and add each element we see along that list. The `range()` method accepts 3 arguments - `start`, `end` and `step`, which can again be used in much the same way as before:

```text
original_list = [1, 2, 3, 4]
reversed_list = []

for i in range(len(original_list)-1, -1, -1):
    reversed_list.append(original_list[i])

print(reversed_list) # Output: [4, 3, 2, 1]
```

#### Reversing a List Using the _reversed\(\)_ Method <a id="reversingalistusingthereversedmethod"></a>

Since iterating with a negative step and then accessing each element in the original list is a bit verbose, the `reversed()` method was added, which makes it much easier to manually implement the reversal logic, in case you want to add your own twist on it.

The `reversed()` method returns an iterator, iterating over the collection in a reversed order - and we can easily add these elements into a new list:

```text
original_list = [1, 2, 3, 4]
new_list = []

for i in reversed(original_list):
	new_list.append(i)

print(new_list) # Output: [4, 3, 2, 1]
print(original_list) # Output: [1, 2, 3, 4] --> Original hasn't changed
```

#### Conclusion <a id="conclusion"></a>

Depending on whether you need a new reversed list, an in-place reversed list, as well as whether you want the logic to be taken care of for you, or if you'd like to have the flexibility of adding additional operations or twists during the reversal - there are several ways to reverse a list in Python.

In this tutorial, we've gone over these scenarios, highlighting the difference between each.
