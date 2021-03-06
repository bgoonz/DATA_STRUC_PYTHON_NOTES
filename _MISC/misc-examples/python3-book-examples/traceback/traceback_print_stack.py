#
"""
"""

# end_pymotw_header
import traceback
import sys

from traceback_example import call_function


def f():
    traceback.print_stack(file=sys.stdout)


print("Calling f() directly:")
f()

print()
print("Calling f() from 3 levels deep:")
call_function(f)
