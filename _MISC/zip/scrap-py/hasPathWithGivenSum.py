#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def hasPathWithGivenSum(t, s):
    if t is None:
        if s == 0:
            return True
        else:
            return False
    else:
        if t.left is not None and t.right is not None:
            return any(
                [
                    hasPathWithGivenSum(t.left, s - t.value),
                    hasPathWithGivenSum(t.right, s - t.value),
                ]
            )
        elif t.left is not None:
            return hasPathWithGivenSum(t.left, s - t.value)
        elif t.right is not None:
            return hasPathWithGivenSum(t.right, s - t.value)
        else:
            if t.value == s:
                return True
            else:
                return False
