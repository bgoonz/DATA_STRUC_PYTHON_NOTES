#
"""Manipulating the order of items in a deque.
"""

# end_pymotw_header
import collections

d = collections.deque(range(10))
print("Normal        :", d)

d = collections.deque(range(10))
d.rotate(2)
print("Right rotation:", d)

d = collections.deque(range(10))
d.rotate(-2)
print("Left rotation :", d)
