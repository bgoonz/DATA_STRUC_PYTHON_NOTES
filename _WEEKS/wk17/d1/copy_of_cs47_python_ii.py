# -*- coding: utf-8 -*-
"""Copy of CS47 Python II.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Kdl9UT7_y5rkc6WD_SKMGjvlaX66tUQu



# Imports / Lists / Classes

- import modules
- perform basic list operations
- create user defined classes
"""

"""
Import the "math" module. Then, print an alphabetically sorted list of all the functions available in the
"math" module that start with the letters "is".
"""
# YOUR CODE HERE

"""
- import the math module
- create an empty output list
- extract the functions as a list from the math module (use the built in dir() function)
- iterate over the functions extracting each function
  - take a slice of the first two characters in the function string and check if they are equal to "is"
    - append the function string to the output list

- sort the output list

- print the output list

"""
import math

output = []

math_module_functions_list = dir(math)

for function_string in math_module_functions_list:
  if function_string[0:2] == "is":
    output.append(function_string)

output.sort()

print(output)




  # print(func)
  # if func == "isinf":
  #   print("i got one!")
# print("bobinf".startswith("is"))
# print("isinf"[0] == "i" and "isinf"[1] == "s")
# print("isinf"[0:2])
# print("isinf"[0:2] == "is")
# output = []
# output.append("joe")
# output.append("dave")
# output.sort()
# print(output)

# output = [1, "hello", 3.6, [12, 22, [2, 3, 6 [55, 66],543]]]
# output = list(1, 2, 3, 4)

# output[3][1]
# output[::-1]
# result = []
# for i in range(len(output) - 1, -1, -1):
#   result.append(output[i])
"""
 slicing from element 0 to last element stepping in increments of negative 1
"""
s = "this is a string"
s_l = s.split()
s_l.reverse()
reversed_string = " ".join(s_l)
print(s)
print(reversed_string)

"""
Below, you'll find a class definition for animals. Create two new animals `cat`
and `dog`. Set `cat` to have a name of "Purrfect", kind of "cat",
and color of "brown". Set `dog` to have a name of "Fido",
kind of "dog", and color of "black".
"""
class Animal:
    def __init__(self, name="", kind="", color=""):
      self.name = name
      self.color = color
      self.kind = kind

    def description(self):
        # return "%s is a %s %s." % (self.name, self.color, self.kind)
        return f"{self.name} is a {self.color} {self.kind}"
"""
instantiate an instance of the Animal class labeled cat
instantiate an instance of the Animal class labeled dog

set the name of cat to equal "Purrfect"
set the kind of cat to "cat"
set the color of cat to "brown"

set the name of dog to equal "Fido"
set the kind of dog to "dog"
set the color of dog to "black"

"""
# Create instances of Animal here and modify the instance attributes
# as described above.

# YOUR CODE HERE
cat = Animal("Purrfect", "cat", "Brown")
dog = Animal()

# cat.name = "Purrfect"
# cat.kind = "cat"
# cat.color = "brown"

dog.name = "Fido"
dog.kind = "dog"
dog.color = "black"

# print(help([].sort))


# Should print Purrfect is a brown cat.
print(cat.description())
# Should print Fido is a black dog.
print(dog.description())

"""# Demo"""

"""
Challenge #1:
Write a function that retrieves the last n elements from a list.
Examples:
- last([1, 2, 3, 4, 5], 1) ➞ [5]
- last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]
- last([1, 2, 3, 4, 5], 7) ➞ "invalid"
- last([1, 2, 3, 4, 5], 0) ➞ []
Notes:
- Return "invalid" if n exceeds the length of the list.
- Return an empty list if n == 0.

- check if n exceeds the length of the list
  - return "invalid" to the caller
- check if n == 0
  return an empty list to the caller

- get a slice from zero minus n to the last item in the list



"""
# l = [1, 2, 3, 4, 5]
# n = 3
# print(l[0 - n: len(l)])

def last(a, n):
  if n > len(a):
    return "invalid"

  if n == 0:
    return []

  return a[0 - n: len(a)]

# tests
print(last([1, 2, 3, 4, 5], 1)) #  ➞ [5]
print(last([4, 3, 9, 9, 7, 6], 3)) #  ➞ [9, 7, 6]
print(last([1, 2, 3, 4, 5], 7)) # ➞ "invalid"
print(last([1, 2, 3, 4, 5], 0)) #  ➞ []

"""# U**.**P**.**E**.**R

- **U**nderstand
- **P**lan
- **E**xecute
- **R**eflect


"""

"""
Given a list of numbers, create a function that returns the list but with each
element's index in the list added to itself. You should add 0 to the number at
index 0, add 1 to the number at index 1, etc.
Examples:
- add_indexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
- add_indexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
- add_indexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
Notes:
- The input list will only contain integers.
"""


def add_indexes(numbers):
    pass
