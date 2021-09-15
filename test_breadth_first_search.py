import unittest
from binary_search_tree import BinarySearchTree

class BinarySearchTreeTests(unittest.TestCase):
  def setUp(self):
    self.bst = BinarySearchTree(5)

  def test_breadth_first_traversal_1(self):
    arr = []
    cb = lambda x: arr.append(x)

    self.bst.breadth_first_for_each(cb)

    self.assertEqual(arr, [5])

  def test_breadth_first_traversal_2(self):
    arr = []
    cb = lambda x: arr.append(x)

    self.bst.insert(3)
    self.bst.insert(4)
    self.bst.insert(10)
    self.bst.insert(9)
    self.bst.insert(11)
    self.bst.breadth_first_for_each(cb)

    self.assertEqual(arr, [5, 3, 10, 4, 9, 11])


if __name__ == '__main__':
  unittest.main()