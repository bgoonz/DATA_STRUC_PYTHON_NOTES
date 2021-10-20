# Random Examples

{% tabs %} {% tab title="Gists" %}

## Given an integer n, return any array containing n unique integers such that they add up to 0.

```python
# Example 1:  Input: n = 5   |   Output: [-7,-1,1,3,4]
# Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
# Example 2:  Input: n = 3   |   Output: [-1,0,1]
# Example 3:  Input: n = 1   |   Output: [0]
```

```python
# Constraints:  1 <= n <= 1000
```

```python
## time complexity:  O(1 or n)
## space complexity:  O(1)


def sumZero(self, n: int):
    """
    :type n: int
    :rtype: List[int]
    """
    # time complexity: O(1); create one range of digits
    # space complexity:  O(1); one unit of space

    # What's going on here?  Let's say n = 5.
    # Return a range of numbers which starts at 1-5, ends at 5, steps every 2
    # So that means it starts at -4, ends at 5, steps every 2
    # And it would return:  [-4, -2, 0, 2, 4]

    return range(1 - n, n, 2)
```

```python
# Min Moves to Obtain String Without 3 Identical Consecutive Letters
```

```python
# You are given a string S consisting of N letters ‘a’ and/or ‘b’.
# In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).
# Write a function solution that, given such a string S, returns the minimum number
# of moves required to obtain a string containing no instances of three identical
# consecutive letters.
```

```python
# time complexity:  O(n) because of the one while loop
# space complexity:  O(1) since this all takes up only one unit of space


def calculate_current_moves(start_sub, end_sub):
    sub_length = end_sub - start_sub
    # get current number of moves to add to total
    current_moves = sub_length // 3
    # add current number of moves to total
    return current_moves


def calculate_min_moves(string):
    # initialize start and end of first possible subsequence
    start_sub = 0
    end_sub = 1
    # initialize counter for number of moves
    moves = 0
    # initialize string length
    length = len(string)

    # loop until index of subsequence end gets to end of string
    while end_sub < length:
        # if index of subsequence end is at least one after start
        if string[end_sub] != string[start_sub]:
            # add current number of moves to total
            moves += calculate_current_moves(start_sub, end_sub)
            # move to end of current subsequence
            start_sub = end_sub
        # new end of subsequence = 1 after current start
        end_sub += 1

    # in cases where sub-sequence ends the string
    # add current number of moves to total
    moves += calculate_current_moves(start_sub, end_sub)

    return moves
```

```python
# checks whether IP digits are valid or not
def is_valid(possible_ip):

    # splitting at period
    ip_address = possible_ip.split(".")

    # checking for corner cases
    for subaddress in ip_address:

        # get length of subaddress
        length_subaddress = len(subaddress)
        # get int of subaddress
        int_subaddress = int(subaddress)
        # get first digit of subaddress
        first_digit = subaddress[0]

        # if length > 3 OR subaddress int is outside 0-255 OR
        # if length > 1 AND subaddress int is 0 OR
        # if length > 1  AND subaddress int is NOT 0 and first digit is 0
        # return false for invalid ip
        if length_subaddress > 3 or int_subaddress < 0 or int_subaddress > 255:
            return False
        elif length_subaddress > 1 and int_subaddress is 0:
            return False
        elif length_subaddress > 1 and int_subaddress is not 0 and first_digit is "0":
            return False

    # else return true for valid ip
    return True
```

```python
# converts string to IP address
def convert_string_to_ip(string):

    # get string length
    length = len(string)

    # if string of digits > 12, it's not an IP; return empty array
    if length > 12:
        return []

    # else set current possible ip as string AND
    current_possible_ip = string
    # initialize empty valid ip list
    valid_ip_list = []

    # loop through possible ips:
    # first period loop
    for i in range(1, length - 2):
        # second period loop
        for j in range(i + 1, length - 1):
            # third period loop
            for k in range(j + 1, length):

                # add first period to ip to check
                begin_to_k = current_possible_ip[:k]
                k_to_end = current_possible_ip[k:]
                current_possible_ip = begin_to_k + "." + k_to_end

                # add second period to ip to check
                begin_to_j = current_possible_ip[:j]
                j_to_end = current_possible_ip[j:]
                current_possible_ip = begin_to_j + "." + j_to_end

                # add third period to ip to check
                begin_to_i = current_possible_ip[:i]
                i_to_end = current_possible_ip[i:]
                current_possible_ip = begin_to_i + "." + i_to_end

                # if current combination is valid, add to valid ip list
                is_ip_valid = is_valid(current_possible_ip)
                if is_ip_valid:
                    valid_ip_list.append(current_possible_ip)

                # reset current possible id to original string before looping again
                current_possible_ip = string

    # return valid ip list
    return valid_ip_list


A = "25525511135"
# B = "25505011535"
print(convert_string_to_ip(A))
# print(convert_string_to_ip(B))
```

```python
# Given a string, what is the minimum number of adjacent swaps required to convert a string into
# a palindrome.
# If not possible, return -1.

"""
Example 1:  Input: "mamad"  | Output:  3
Example 2:  Input: "asflkj" | Output: -1
Example 3:  Input: "aabb"   | Output:  2
Example 4:  Input: "ntiin"  | Output:  1
    Explanation: swap 't' with 'i' => "nitin"
"""
```

```python
# time complexity:  O(n^2)
# space complexity: O(1)


def min_swap(string):
    # convert string to list
    list_of_string = list(string)
    # check if list_of_string can be palindrome
    odd = 0
    letter = [0] * 26

    for i in list_of_string:
        # get unicode char of current letter
        unicode_i = ord(i)
        # get unicode char of letter 'a'
        unicode_a = ord("a")
        # get alphabet index
        alphabet_index = unicode_i - unicode_a
        # get current letter count for each letter in string
        letter[alphabet_index] += 1

    for l in letter:
        if l & 1 == 1:
            odd += 1

    if odd > 1:
        return -1

    i, j, res = 0, len(list_of_string) - 1, 0

    while i < j:
        if list_of_string[i] == list_of_string[j]:
            i, j = i + 1, j - 1
            continue
        t = j - 1

        # find same letter with list_of_string[i] from right to left
        while t > i and list_of_string[t] != list_of_string[i]:
            t -= 1

        # if t == i, means this is the only letter in the list_of_string, should be swap to the middle
        # otherwise should be swap to the position of j

        target = len(list_of_string) // 2 if t == i else j

        while t < target:
            # swap
            tmp = list_of_string[t]
            list_of_string[t] = list_of_string[t + 1]
            list_of_string[t + 1] = tmp
            res, t = res + 1, t + 1

    return res


print(min_swap("racecra"))
```

```python
# Longest Substring Without 3 Contiguous Occurrences of Letter
```

```python
# Given a string s containing only a and b, find longest substring of s such that
# s does not contain more than two contiguous occurrences of a and b.
```

```python
## time complexity:  O(n)
## space complexity:  O(1)

"""
Example 1:  Input: "aabbaaaaabb"   |   Output: "aabbaa"
Example 2:  Input: "aabbaabbaabbaa"   |   Output: "aabbaabbaabbaa"
"""


def longest_substring(s):
    # initialize final string
    final_string = ""
    length = len(s)
    x = 0
    # loop through s
    while len(s) >= 2:
        beginning = s[0]
        middle = s[1]
        if len(s) > 2:
            end = s[2]
        # if current index + 1 != value of current index
        if beginning != middle:
            # add value of current index to final string
            final_string = final_string + beginning
        # if current index + 1 == value of current index
        elif beginning == middle:
            # check current index + 2
            # if current index + 2 == value of current index
            if beginning == end:
                # add value of current & current + 1 to final string
                final_string = final_string + beginning + middle
                # return string
                return final_string
            # if current index + 2 != value of current index
            else:
                # add value of current & current + 1 to final string
                final_string = final_string + beginning + middle
                # add 1 to index
                s = s[2:]
        elif len(s) == 2:
            final_string = final_string + beginning + middle
    # return string
    return final_string
```

```python
## aabbaa
print(longest_substring("aabbaaaaabb"))
## aabbaabbaabbaa
print(longest_substring("aabbaabbaabbaa"))
```

```python
# Mixed sorting

"""
Given a list of integers nums, sort the array such that:

All even numbers are sorted in increasing order
All odd numbers are sorted in decreasing order
The relative positions of the even and odd numbers remain the same
Example 1
Input

nums = [8, 13, 11, 90, -5, 4]
Output

[4, 13, 11, 8, -5, 90]
Explanation

The even numbers are sorted in increasing order, the odd numbers are sorted in
decreasing number, and the relative positions were
[even, odd, odd, even, odd, even] and remain the same after sorting.
"""
```

```python
# solution

import unittest


def mixed_sorting(nums):
    positions = []
    odd = []
    even = []
    sorted_list = []
    for i in nums:
        if i % 2 == 0:
            even.append(i)
            positions.append("E")
        else:
            odd.append(i)
            positions.append("O")
    even.sort()
    odd.sort()
    odd.reverse()
    j, k = 0, 0
    for i in range(len(nums)):
        if positions[i] == "E":
            while j < len(even):
                sorted_list.append(even[j])
                j += 1
                break
        else:
            while k < len(odd):
                sorted_list.append(odd[k])
                k += 1
                break

    return sorted_list
```

```python
# Lexicographically Smallest String
```

```python
# Lexicographically smallest string formed by removing at most
# one character.
```

```python
# Example 1:  Input: "abczd"   |   Output: "abcd"
```

```python
## time complexity:  O(n)
## space complexity:  O(1)


def lexi_smallest(s):
    length = len(s)
    length_one_short = length - 1

    for x in range(length_one_short):
        i_one_short = x - 1
        x_one_long = x + 1
        if s[x] > s[x_one_long]:
            return s[:x] + s[x_one_long:]
    return s[:-1]
```

```python
# abcd
print(lexi_smallest("abczd"))
```

```python
# String Without 3 Identical Consecutive Letters
```

```python
# Write a function solution that, given a string S of N lowercase English letters,
# returns a string with no instances of three identical consecutive letters,
# obtained from S by deleting the minimum possible number of letters.

"""
Examples:
Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”.
"""
```

```python
# Write an efficient algorithm for the following assumptions:
# N is an integer within the range [1..200,000]
# string S consists only of lowercase letters (a-z)
```

```python
## time complexity:  O(n)
## space complexity:  O(1)


def no_three_consecutive(s):
    final_string = s[0:2]
    length = len(s)
    # loop through original string
    for x in range(2, length):
        string_x = s[x]
        string_x_one_short = s[x - 1]
        string_x_two_short = s[x - 2]
        if string_x == string_x_one_short and string_x == string_x_two_short:
            # don't append if previous chars are same
            continue
        else:
            final_string += string_x
    return final_string
```

```python
# eedaad
print(no_three_consecutive("eedaaad"))
```

```python
# xxtxx
print(no_three_consecutive("xxxtxxx"))
```

```python
# uuxaaxuu
print(no_three_consecutive("uuuuxaaaaxuuu"))
```

```python
# You are given a string s of length n containing only characters a and b.
# A substring of s called a semi-alternating substring if it does not
# contain three identical consecutive characters.
# Return the length of the longest semi-alternating substring.
```

```python
# Example 1:  Input: "baaabbabbb"   |   Output: 7
# Explanation: "aabbabb"
# Example 2:  Input: "abaaaa"   |   Output: 4
# Explanation: "abaa"
```

```python
# time complexity:  O(n)
# space complexity:  O(1)


def longest_semialternating_ss(s):
    length = len(s)
    if not s or length == 0:
        return 0

    if length < 3:
        return length

    beginning = 0
    end = 1
    # first character
    comparison_char = s[0]
    # count the occurrence of the first char
    count_first_char = 1
    max_length = 1

    while end < length:
        end_char = s[end]
        if end_char == comparison_char:
            # add one to char count
            count_first_char += 1
            # if char found at least two times
            if count_first_char == 2:
                x = end - beginning + 1
                if x > max_length:
                    max_length = x
            elif count_first_char > 2:
                # reset beginning pointer
                beginning = end - 1
        else:
            comparison_char = end_char
            count_first_char = 1
            if end - beginning + 1 > max_length:
                max_length = end - beginning + 1
        end += 1

    return max_length
```

```python
# alternate solution
def longest_semi(s):
    max_length = 0
    left = 0
    for right in range(len(s)):
        if right - left + 1 >= 3 and s[right] == s[right - 1] == s[right - 2]:
            left = right - 1
        max_length = max(max_length, right - left + 1)
    return max_length
```

```python
# 7
print(longest_semialternating_ss("baaabbabbb"))
```

```python
# 4
print(longest_semialternating_ss("abaaaa"))
```

{% endtab %}

{% tab title="Gists2" %}

```python
# Alexa is given n piles of equal or unequal heights.
# In one step, Alexa can remove any number of boxes from
# the pile which has the maximum height and try to make
# it equal to the one which is just lower than the maximum
# height of the stack.
# Determine the minimum number of steps required to make all of
# the piles equal in height.
```

```python
# Example 1:   Input: piles = [5, 2, 1]   |   Output: 3

"""
Explanation:

    Step 1: reducing 5 -> 2 [2, 2, 1]
    Step 2: reducing 2 -> 1 [2, 1, 1]
    Step 3: reducing 2 -> 1 [1, 1, 1]

So final number of steps required is 3.
"""
```

```python
## time complexity:  O(n)
## space complexity:  O(1)


def min_steps_equal_piles(piles):
    steps = 0
    length = len(piles)
    if piles == []:
        return 0
    else:
        # get sorted list
        sorted_piles = set(piles)
        sorted_piles = sorted(sorted_piles)
        # get min, max and 2nd max
        minimum = sorted_piles[0]
        second_largest = sorted_piles[-2]
        max_pile = sorted_piles[-1]
        # subtract from max to equal 2nd max
        # repeat until all equal second max
        for x in range(length):
            if piles[x] == max_pile:
                difference = max_pile - second_largest
                piles[x] = piles[x] - difference
                steps += 1
        # loop again to make second max equal to min
        for x in range(length):
            if piles[x] != minimum:
                difference = piles[x] - minimum
                piles[x] = piles[x] - difference
                steps += 1
        # return # of steps
        return steps
```

```python
# 3
print(min_steps_equal_piles([5, 2, 1]))
```

```python
# Day of Week That Is k Days Later
```

```python
# Days of the week are represented as three-letter strings.
# "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
# Write a javaScript function solution that, given a string
# S representing the day of the week and an integer K
# (between 0 and 500), returns the day of the week that
# is K days later.
```

```python
# For example, given S = "Wed" and K = 2, the function
# should return "Fri".
# Given S = "Sat" and K = 23, the function should return
# "Mon".
```

```python
## time complexity:  O(1)
## space complexity:  O(1)


def k_days_later(s, k):
    days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    remainder = k % 7
    s_index = days_of_week.index(s)
    move_forward = remainder + s_index
    if move_forward < 7:
        return days_of_week[move_forward]
    else:
        correct_day_index = move_forward - 7
        return days_of_week[correct_day_index]
```

```python
# 0
print(k_days_later("Wed", 2))
print("----")
# 2
print(k_days_later("Sat", 23))
print("----")
print(k_days_later("Sat", 300))
```

```python
# Max Inserts to Obtain String Without 3 Consecutive 'a'
```

```python
# Write a function solution that, given a string S
# consisting of N characters, returns the maximum
# number of letters 'a' that can be inserted into
# S (including at the front and end of S) so that
# the resulting string doesn't contain 3 consecutive
# letters 'a'.
```

```python
# If string S already contains the substring "aaa", then
# your function should return -1.

"""
Examples:
1. Given S = "aabab", the function should return 3,
    because a string "aabaabaa" can be made.
2. Given S = "dog", the function should return 8,
    because a string "aadaaoaagaa" can be made.
3. Given S = "aa", the function should return 0,
    because no longer string can be made.
4. Given S= "baaaa", the function should return -1,
    because there is a substring "aaa".
"""
```

```python
## time complexity:  O()
## space complexity:  O()
```

```python
# Rotting Oranges
# https://leetcode.com/problems/rotting-oranges/
```

```python
# In a given grid, each cell can have one of three values:
```

```python
# the value 0 representing an empty cell;
# the value 1 representing a fresh orange;
# the value 2 representing a rotten orange.
```

```python
# Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
```

```python
# Return the minimum number of minutes that must elapse until no cell has a fresh orange.
# If this is impossible, return -1 instead.
```

```python
# Input: [[2,1,1],[1,1,0],[0,1,1]]
# Output: 4
```

```python
# Input: [[2,1,1],[0,1,1],[1,0,1]]
# Output: -1
# Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only
# happens 4-directionally.
```

```python
# Input: [[0,2]]
# Output: 0
# Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
```

```python
# 1 <= grid.length <= 10
# 1 <= grid[0].length <= 10
# grid[i][j] is only 0, 1, or 2


def oranges_rotting(grid):
    minute_count = 0

    def create_set(grid, target_value):
        result = set()
        for y in range(len(grid)):
            for x in range(len(grid[0])):
                if grid[y][x] == target_value:
                    result.add((x, y))
        return result

    # create a set of rotten & fresh orange locations
    rotten_os = create_set(grid, 2)
    fresh_oranges = create_set(grid, 1)

    length_fresh = len(fresh_oranges)

    # For each time interval iteration
    while length_fresh > 0:
        going_bad = set()
        # loop through fresh oranges and create a set going bad
        for x, y in fresh_oranges:
            up_cell = (x - 1, y)
            down_cell = (x + 1, y)
            left_cell = (x, y - 1)
            right_cell = (x, y + 1)
            if (
                up_cell in rotten_os
                or down_cell in rotten_os
                or left_cell in rotten_os
                or right_cell in rotten_os
            ):
                currently_going_bad = (x, y)
                going_bad.add(currently_going_bad)

        # if none are going bad, it's impossible
        length_gb = len(going_bad)
        if length_gb == 0:
            return -1

        # remove oranges going bad from fresh and add to rotten
        fresh_oranges.difference_update(going_bad)
        rotten_os.update(going_bad)

        minute_count += 1
        length_fresh = len(fresh_oranges)

    return minute_count
```

```python
# 4
grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
print(oranges_rotting(grid))
```

```python
# -1
grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
print(oranges_rotting(grid))
```

```python
# 0
grid = [[0, 2]]
print(oranges_rotting(grid))

import turtle
 t = turtle.Turtle()
t.circle(20)
t1=turtle.Turtle()
t1.circle(25)
```

```python
# Milk Bottles
# https://leetcode.com/discuss/interview-question/707939/Microsoft-or-Azure-or-Milk-Bottles
```

```python
# If i can exchange 3 empty bottles for one full bottle, given that i have 18 full milk bottles
# initially, how many milk bottles can i drink?
```

```python
# Generalize this for 'n' bottles


def bottles(n):
    bottles_to_drink = int((3 * n - 1) / 2)
    return bottles_to_drink


print(bottles(18))
```

```python
# find the largest BST subtree in a given binary tree
# https://www.geeksforgeeks.org/find-the-largest-subtree-in-a-tree-that-is-also-a-bst/
```

```python
# Given a Binary Tree, write a function that returns the size of the largest subtree which
# is also a Binary Search Tree (BST).
```

```python
# If the complete Binary Tree is BST, then return the size of whole tree.


class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def largest_BST(self):
        # Set the initial values for calling
        # largestBSTUtil()
        Min = [999999999999]  # For minimum value in right subtree
        Max = [-999999999999]  # For maximum value in left subtree

        max_size = [0]  # For size of the largest BST
        is_bst = [0]

        largestBSTUtil(node, Min, Max, max_size, is_bst)

        return max_size[0]

    # largestBSTUtil() updates max_size_ref[0]
    # for the size of the largest BST subtree.
    # Also, if the tree rooted with node is
    # non-empty and a BST, then returns size of
    # the tree. Otherwise returns 0.
    def largestBSTUtil(node, min_ref, max_ref, max_size_ref, is_bst_ref):

        # Base Case
        if node == None:
            is_bst_ref[0] = 1  # An empty tree is BST
            return 0  # Size of the BST is 0

        Min = 999999999999

        # A flag variable for left subtree property
        # i.e., max(root.left) < root.data
        left_flag = False

        # A flag variable for right subtree property
        # i.e., min(root.right) > root.data
        right_flag = False

        ls, rs = 0, 0  # To store sizes of left and
        # right subtrees

        # Following tasks are done by recursive
        # call for left subtree
        # a) Get the maximum value in left subtree
        #   (Stored in max_ref[0])
        # b) Check whether Left Subtree is BST or
        #    not (Stored in is_bst_ref[0])
        # c) Get the size of maximum size BST in
        #    left subtree (updates max_size[0])
        max_ref[0] = -999999999999
        ls = largestBSTUtil(node.left, min_ref, max_ref, max_size_ref, is_bst_ref)
        if is_bst_ref[0] == 1 and node.data > max_ref[0]:
            left_flag = True

        # Before updating min_ref[0], store the min
        # value in left subtree. So that we have the
        # correct minimum value for this subtree
        Min = min_ref[0]

        # The following recursive call does similar
        # (similar to left subtree) task for right subtree
        min_ref[0] = 999999999999
        rs = largestBSTUtil(node.right, min_ref, max_ref, max_size_ref, is_bst_ref)
        if is_bst_ref[0] == 1 and node.data < min_ref[0]:
            right_flag = True

        # Update min and max values for the
        # parent recursive calls
        if Min < min_ref[0]:
            min_ref[0] = Min
        if node.data < min_ref[0]:  # For leaf nodes
            min_ref[0] = node.data
        if node.data > max_ref[0]:
            max_ref[0] = node.data

        # If both left and right subtrees are BST.
        # And left and right subtree properties hold
        # for this node, then this tree is BST.
        # So return the size of this tree
        if left_flag and right_flag:
            if ls + rs + 1 > max_size_ref[0]:
                max_size_ref[0] = ls + rs + 1
            return ls + rs + 1
        else:

            # Since this subtree is not BST, set is_bst
            # flag for parent calls is_bst_ref[0] = 0;
            return 0
```

```python
# Driver Code
if __name__ == "__main__":

    # Let us construct the following Tree
    #     50
    # /     \
    # 10     60
    # / \     / \
    # 5 20 55 70
    #         /     / \
    #     45     65 80
    root = newNode(50)
    root.left = newNode(10)
    root.right = newNode(60)
    root.left.left = newNode(5)
    root.left.right = newNode(20)
    root.right.left = newNode(55)
    root.right.left.left = newNode(45)
    root.right.right = newNode(70)
    root.right.right.left = newNode(65)
    root.right.right.right = newNode(80)
```

```python
# The complete tree is not BST as 45 is in
# right subtree of 50. The following subtree
# is the largest BST
#     60
# / \
# 55     70
# /     / \
# 45     65 80

print("Size of the largest BST is", largestBST(root))
```

```python
# This code is contributed by PranchalK
```

```python
# Return Strings That Do Not Contain Identical Neighbors
```

```python
# Consider all words of length N, consisting only of letters "b' and/or "c",
# that do not contain two identical neighbouring letters.
# For example, "aba' is such a word but "abb" is not (two letters "b" occur
# next to each other).
# We are interested in finding the K alphabetically smallest words of length
# N that do not contain two identical neighbouring letters.
# For example, the first four words consisting of two letters are: "ab',
# "ac•, "ba", "bc•.
# All correct two-letters words are: "ab", "ac", "ba•, "bc", "ca•, "cb".
```

```python
# Find and fix bug(s) in a given implementation of a function:
```

```python
# class Solution { public String[] solution(int N, int K) }
```

```python
# that, given integers N and K, retums an array of strings: the first
# K words of the alphabetically sorted sequence of words of length
# N, in which no two neighbouring letters are the same. If K is
# bigger than the sequence's length, the entire sequence is returned.
```

```python
# Examples:
# 1 . Given N = 2 and K = 4, the function should retum tab", "ac", "ban,
# 'bc'] as explained above.
# 2. Given N = 3 and K = 20, the function should retum ['aba", •abc",
# •aca", •acb", "bab", "bac", 'bca", "bcb', "cab", •cac•, "cba",
# "cbcl.
# 3. Given N = 5 and K = 6, the function should retum ['ababa", "ababc•,
# "abaca', "abacb", "abcab", •abcac"].
```

```python
# The attached code is still incorrect for some inputs.
# Despite the error(s), the code may produce a correct answer for the
# example test cases.
# The goal of the exercise is to find and fix the bug(s) in the
# implementation.
# You can modify at most two lines.
```

```python
# Assume that:
# N is an integer within the range [1..101;
# K is an integer within the range [1..100].
```

```python
# In your solution, focus on correctness.

"""
Find the size of longest subset of A, in which
any 2 elements' different is divisible by M.
"""

t = turtle.Turtle()
t.circle(50)

"""
Problem:
The prime factors of 13195 are 5,7,13 and 29. What is the largest prime factor
of a given number N?

e.g. for 10, largest prime factor = 5. For 17, largest prime factor = 17.
"""
```

```python
# def solution(n: int) -> int:
def solution(n: int = 600851475143) -> int:
    """Returns the largest prime factor of a given number n.
    >>> solution(13195)
    29
    >>> solution(10)
    5
    >>> solution(17)
    17
    >>> solution(3.4)
    3
    >>> solution(0)
    Traceback (most recent call last):
        ...
    ValueError: Parameter n must be greater or equal to one.
    >>> solution(-17)
    Traceback (most recent call last):
        ...
    ValueError: Parameter n must be greater or equal to one.
    >>> solution([])
    Traceback (most recent call last):
        ...
    TypeError: Parameter n must be int or passive of cast to int.
    >>> solution("asd")
    Traceback (most recent call last):
        ...
    TypeError: Parameter n must be int or passive of cast to int.
    """
    try:
        n = int(n)
    except (TypeError, ValueError):
        raise TypeError("Parameter n must be int or passive of cast to int.")
    if n <= 0:
        raise ValueError("Parameter n must be greater or equal to one.")

    i = 2
    ans = 0

    if n == 2:
        return 2

    while n > 2:
        while n % i != 0:
            i += 1

        ans = i

        while n % i == 0:
            n = n / i

        i += 1

    return int(ans)


if __name__ == "__main__":
    # print(solution(int(input().strip())))
    import doctest

    doctest.testmod()
    print(solution(int(input().strip())))
```

```python
# Python3 program to add two numbers

number1 = input("First number: ")
number2 = input("\nSecond number: ")
```

```python
# Adding two numbers
# User might also enter float numbers
sum = float(number1) + float(number2)
```

```python
# Display the sum
# will print value in float
print("The sum of {0} and {1} is {2}".format(number1, number2, sum))

def sumOfSeries(n):
    x = n * (n + 1) / 2
    return (int)(x * x)
```

```python
# Driver Function
n = 5
print(sumOfSeries(n))
```

```python
# Program to find the ASCII value of the given character

c = "p"
print("The ASCII value of '" + c + "' is", ord(c))

"""
Problem:
The prime factors of 13195 are 5,7,13 and 29. What is the largest prime factor
of a given number N?

e.g. for 10, largest prime factor = 5. For 17, largest prime factor = 17.
"""
```

```python
# def solution(n: int) -> int:
def solution(n: int = 600851475143) -> int:
    """Returns the largest prime factor of a given number n.
    >>> solution(13195)
    29
    >>> solution(10)
    5
    >>> solution(17)
    17
    >>> solution(3.4)
    3
    >>> solution(0)
    Traceback (most recent call last):
        ...
    ValueError: Parameter n must be greater or equal to one.
    >>> solution(-17)
    Traceback (most recent call last):
        ...
    ValueError: Parameter n must be greater or equal to one.
    >>> solution([])
    Traceback (most recent call last):
        ...
    TypeError: Parameter n must be int or passive of cast to int.
    >>> solution("asd")
    Traceback (most recent call last):
        ...
    TypeError: Parameter n must be int or passive of cast to int.
    """
    try:
        n = int(n)
    except (TypeError, ValueError):
        raise TypeError("Parameter n must be int or passive of cast to int.")
    if n <= 0:
        raise ValueError("Parameter n must be greater or equal to one.")

    i = 2
    ans = 0

    if n == 2:
        return 2

    while n > 2:
        while n % i != 0:
            i += 1

        ans = i

        while n % i == 0:
            n = n / i

        i += 1

    return int(ans)


if __name__ == "__main__":
    # print(solution(int(input().strip())))
    import doctest

    doctest.testmod()
    print(solution(int(input().strip())))

import time

pwd = "AKS2608"  # any password u want to set


def IInd_func():
    count1 = 0
    for j in range(5):
        a = 0
        count = 0
        user_pwd = input("")  # password you remember
        for i in range(len(pwd)):
            if user_pwd[i] == pwd[a]:  # comparing remembered pwd with fixed pwd
                a += 1
                count += 1
        if count == len(pwd):
            print("correct pwd")
            break
        else:
            count1 += 1
            print("not correct")
    if count1 == 5:
        time.sleep(30)
        IInd_func()


IInd_func()
```

```python
# This program adds two numbers

num1 = 1.5
num2 = 6.3
```

```python
# Add two numbers
sum = num1 + num2
```

```python
# Display the sum
print("The sum of {0} and {1} is {2}".format(num1, num2, sum))

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Linked_List:
    def __init__(self):
        self.head = None

    def Insert_At_Beginning(self, new_data):
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node
            return
        new_node.next = self.head
        self.head = new_node

    def Add_two_no(self, First, Second):
        prev = None
        temp = None
        carry = 0
        while First is not None or Second is not None:
            first_data = 0 if First is None else First.data
            second_data = 0 if Second is None else Second.data
            Sum = carry + first_data + second_data
            carry = 1 if Sum >= 10 else 0
            Sum = Sum if Sum < 10 else Sum % 10
            temp = Node(Sum)
            if self.head is None:
                self.head = temp
            else:
                prev.next = temp
            prev = temp
            if First is not None:
                First = First.next
            if Second is not None:
                Second = Second.next
        if carry > 0:
            temp.next = Node(carry)

    def Display(self):
        temp = self.head
        while temp:
            print(temp.data, "->", end=" ")
            temp = temp.next
        print("None")


if __name__ == "__main__":
    First = Linked_List()
    Second = Linked_List()
    First.Insert_At_Beginning(6)
    First.Insert_At_Beginning(4)
    First.Insert_At_Beginning(9)

    Second.Insert_At_Beginning(2)
    Second.Insert_At_Beginning(2)

    print("First Linked List: ")
    First.Display()
    print("Second Linked List: ")
    Second.Display()

    Result = Linked_List()
    Result.Add_two_no(First.head, Second.head)
    print("Final Result: ")
    Result.Display()
```

```python
# This program adds two numbers

num1 = 1.5
num2 = 6.3
```

```python
# Add two numbers
sum = num1 + num2
```

```python
# Display the sum
print("The sum of {0} and {1} is {2}".format(num1, num2, sum))

a = 5
b = 6
c = 7
# a = float(input('Enter first side: '))
# b = float(input('Enter second side: '))
# c = float(input('Enter third side: '))
```

```python
# calculate the semi-perimeter
s = (a + b + c) / 2
```

```python
# calculate the area
area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
print("The area of the triangle is %0.2f" % area)

a = 5
b = 6
c = 7
# a = float(input('Enter first side: '))
# b = float(input('Enter second side: '))
# c = float(input('Enter third side: '))
```

```python
# calculate the semi-perimeter
s = (a + b + c) / 2
```

```python
# calculate the area
area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
print("The area of the triangle is %0.2f" % area)
```

```python
# Python Program to find the area of triangle when all three side-lengths are known!

a = 5
b = 6
c = 7
```

```python
# Uncomment below to take inputs from the user
# a = float(input('Enter first side: '))
# b = float(input('Enter second side: '))
# c = float(input('Enter third side: '))
```

```python
# calculate the semi-perimeter
s = (a + b + c) / 2
```

```python
# calculate the area
area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
print("The area of the triangle is %0.2f" % area)

num = int(input("enter 1-digit number:"))
f = num
sum = 0
while f > 0:
    a = f % 10
    f = int(f / 10)
    sum = sum + (a ** 3)
if sum == num:
    print("it is an armstrong number:", num)
else:
    print("it is not an armstrong number:", num)

num=int(input("Enter a number:"))
sum=0
temp=num
   while temp>0:
     digit=temp%10
     sum+=digit**3
     temp//=10
if num==sum:
   print(num,"is an Armstrong number")
else:
   print(num,"is not an Armstrong number")

from tkinter import Tk, Canvas

from PIL.Image import open as openImage
from PIL.ImageTk import PhotoImage


class Background(Canvas):
    """
    Classe para gerar um plano de fundo animado
    """

    __background = []
    __stop = False

    def __init__(self, tk_instance, *geometry, fp="background.png", animation_speed=50):

        # Verifica se o parâmetro tk_instance é uma instância de Tk
        if not isinstance(tk_instance, Tk):
            raise TypeError("The tk_instance argument must be an instance of Tk.")

        # Recebe o caminho de imagem e a velocidade da animação
        self.image_path = fp
        self.animation_speed = animation_speed

        # Recebe a largura e altura do widget
        self.__width = geometry[0]
        self.__height = geometry[1]

        # Inicializa o construtor da classe Canvas
        Canvas.__init__(
            self, master=tk_instance, width=self.__width, height=self.__height
        )

        # Carrega a imagem que será usada no plano de fundo
        self.__bg_image = self.getPhotoImage(
            image_path=self.image_path,
            width=self.__width,
            height=self.__height,
            closeAfter=True,
        )[0]

        # Cria uma imagem que será fixa, ou seja, que não fará parte da animação e serve em situações de bugs na animação
        self.__background_default = self.create_image(
            self.__width // 2, self.__height // 2, image=self.__bg_image
        )

        # Cria as imagens que serão utilizadas na animação do background
        self.__background.append(
            self.create_image(
                self.__width // 2, self.__height // 2, image=self.__bg_image
            )
        )
        self.__background.append(
            self.create_image(
                self.__width + (self.__width // 2),
                self.__height // 2,
                image=self.__bg_image,
            )
        )

    def getBackgroundID(self):
        """
        Retorna os id's das imagens de background
        """
        return [self.__background_default, *self.__background]

    @staticmethod
    def getPhotoImage(
        image=None, image_path=None, width=None, height=None, closeAfter=False
    ):
        """
        Retorna um objeto da classe PIL.ImageTk.PhotoImage de uma imagem e as imagens criadas de PIL.Image
        (photoImage, new, original)

        @param image: Instância de PIL.Image.open
        @param image_path: Diretório da imagem
        @param width: Largura da imagem
        @param height: Altura da imagem
        @param closeAfter: Se True, a imagem será fechada após ser criado um PhotoImage da mesma
        """

        if not image:
            if not image_path:
                return

            # Abre a imagem utilizando o caminho dela
            image = openImage(image_path)

        # Será redimesionada a imagem somente se existir um width ou height
        if not width:
            width = image.width
        if not height:
            height = image.height

        # Cria uma nova imagem já redimensionada
        newImage = image.resize([width, height])

        # Cria um photoImage
        photoImage = PhotoImage(newImage)

        # Se closeAfter for True, ele fecha as imagens
        if closeAfter:
            # Fecha a imagem nova
            newImage.close()
            newImage = None

            # Fecha a imagem original
            image.close()
            image = None

        # Retorna o PhotoImage da imagem,a nova imagem que foi utilizada e a imagem original
        return photoImage, newImage, image

    def reset(self):
        """
        Método para resetar o background, apagando todos os itens que não sejam o plano de fundo
        """

        # Deleta todos os itens do canvas
        self.delete("all")

        # Para a animação passando False para o atributo "stop"
        self.__stop = False

        # Limpa a lista de imagens usadas na animação
        self.__background.clear()

        # Cria uma imagem que será fixa, ou seja, que não fará parte da animação e serve em situações de bugs na animação
        self.__background_default = self.create_image(
            self.__width // 2, self.__height // 2, image=self.__bg_image
        )

        # Cria as imagens que serão utilizadas na animação do background
        self.__background.append(
            self.create_image(
                self.__width // 2, self.__height // 2, image=self.__bg_image
            )
        )
        self.__background.append(
            self.create_image(
                self.__width + (self.__width // 2),
                self.__height // 2,
                image=self.__bg_image,
            )
        )

    def run(self):
        """
        Método para iniciar a animação do background
        """

        # Enquanto o atributo "stop" for False, a animação continuará em um loop infinito
        if not self.__stop:

            # Move as imagens de background na posição X
            self.move(self.__background[0], -10, 0)
            self.move(self.__background[1], -10, 0)
            self.tag_lower(self.__background[0])
            self.tag_lower(self.__background[1])
            self.tag_lower(self.__background_default)

            # Se a primeira imagem da lista tiver saído da área do widget, uma nova será criada depois da segunda imagem
            if self.bbox(self.__background[0])[2] <= 0:
                # Deleta a primeira imagem da lista (imagem que saiu da área do widget)
                self.delete(self.__background[0])
                self.__background.remove(self.__background[0])

                # Cria uma nova imagem a partir da última imagem da animação
                width = self.bbox(self.__background[0])[2] + self.__width // 2
                self.__background.append(
                    self.create_image(width, self.__height // 2, image=self.__bg_image)
                )

            # Executa novamente o método depois de um certo tempo
            self.after(self.animation_speed, self.run)

    def stop(self):
        """
        Método para parar a animação do background
        """
        self.__stop = True

def base_check(xnumber, xbase):
    for char in xnumber[len(xnumber ) -1]:
        if int(char) >= int(xbase):
            return False
    return True

def convert_from_10(xnumber, xbase, arr, ybase):
    if int(xbase) == 2 or int(xbase) == 4 or int(xbase) == 6 or int(xbase) == 8:

        if xnumber == 0:
            return arr
        else:
            quotient = int(xnumber) // int(xbase)
            remainder = int(xnumber) % int(xbase)
            arr.append(remainder)
            dividend = quotient
            convert_from_10(dividend, xbase, arr, base)
    elif int(xbase) == 16:
        if int(xnumber) == 0:
            return arr
        else:
            quotient = int(xnumber) // int(xbase)
            remainder = int(xnumber) % int(xbase)
            if remainder > 9:
                if remainder == 10: remainder = 'A'
                if remainder == 11: remainder = 'B'
                if remainder == 12: remainder = 'C'
                if remainder == 13: remainder = 'D'
                if remainder == 14: remainder = 'E'
                if remainder == 15: remainder = 'F'
            arr.append(remainder)
            dividend = quotient
            convert_from_10(dividend, xbase, arr, ybase)
def convert_to_10(xnumber, xbase, arr, ybase):
    if int(xbase) == 10:
        for char in xnumber:
            arr.append(char)
        flipped = arr[::-1]
        ans = 0
        j = 0

        for i in flipped:
            ans = ans + (int(i) * (int(ybase) ** j))
            j = j + 1
        return ans
arrayfrom = []
arrayto = []
is_base_possible = False
number = input("Enter the number you would like to convert: ")

while not is_base_possible:
    base = input("What is the base of this number? ")
    is_base_possible = base_check(number, base)
    if not is_base_possible:
        print(f"The number {number} is not a base {base} number")
        base = input
    else:
        break
dBase = input("What is the base you would like to convert to? ")
if int(base) == 10:
    convert_from_10(number, dBase, arrayfrom, base)
    answer = arrayfrom[::-1]  # reverses the array
    print(f"In base {dBase} this number is: ")
    print(*answer, sep='')
elif int(dBase) == 10:
    answer = convert_to_10(number, dBase, arrayto, base)
    print(f"In base {dBase} this number is: {answer} ")
else:
    number = convert_to_10(number, 10, arrayto, base)
    convert_from_10(number, dBase, arrayfrom, base)
    answer = arrayfrom[::-1]
    print(f"In base {dBase} this number is: ")
    print(*answer, sep='')
© 2020 GitHub, Inc.

def base_check(xnumber, xbase):
    for char in xnumber[len(xnumber ) -1]:
        if int(char) >= int(xbase):
            return False
    return True

def convert_from_10(xnumber, xbase, arr, ybase):
    if int(xbase) == 2 or int(xbase) == 4 or int(xbase) == 6 or int(xbase) == 8:

        if xnumber == 0:
            return arr
        else:
            quotient = int(xnumber) // int(xbase)
            remainder = int(xnumber) % int(xbase)
            arr.append(remainder)
            dividend = quotient
            convert_from_10(dividend, xbase, arr, base)
    elif int(xbase) == 16:
        if int(xnumber) == 0:
            return arr
        else:
            quotient = int(xnumber) // int(xbase)
            remainder = int(xnumber) % int(xbase)
            if remainder > 9:
                if remainder == 10: remainder = 'A'
                if remainder == 11: remainder = 'B'
                if remainder == 12: remainder = 'C'
                if remainder == 13: remainder = 'D'
                if remainder == 14: remainder = 'E'
                if remainder == 15: remainder = 'F'
            arr.append(remainder)
            dividend = quotient
            convert_from_10(dividend, xbase, arr, ybase)
def convert_to_10(xnumber, xbase, arr, ybase):
    if int(xbase) == 10:
        for char in xnumber:
            arr.append(char)
        flipped = arr[::-1]
        ans = 0
        j = 0

        for i in flipped:
            ans = ans + (int(i) * (int(ybase) ** j))
            j = j + 1
        return ans
arrayfrom = []
arrayto = []
is_base_possible = False
number = input("Enter the number you would like to convert: ")

while not is_base_possible:
    base = input("What is the base of this number? ")
    is_base_possible = base_check(number, base)
    if not is_base_possible:
        print(f"The number {number} is not a base {base} number")
        base = input
    else:
        break
dBase = input("What is the base you would like to convert to? ")
if int(base) == 10:
    convert_from_10(number, dBase, arrayfrom, base)
    answer = arrayfrom[::-1]  # reverses the array
    print(f"In base {dBase} this number is: ")
    print(*answer, sep='')
elif int(dBase) == 10:
    answer = convert_to_10(number, dBase, arrayto, base)
    print(f"In base {dBase} this number is: {answer} ")
else:
    number = convert_to_10(number, 10, arrayto, base)
    convert_from_10(number, dBase, arrayfrom, base)
    answer = arrayfrom[::-1]
    print(f"In base {dBase} this number is: ")
    print(*answer, sep='')
© 2020 GitHub, Inc.

def pascal_triangle(lineNumber):
    list1 = list()
    list1.append([1])
    i = 1
    while i <= lineNumber:
        j = 1
        l = []
        l.append(1)
        while j < i:
            l.append(list1[i - 1][j] + list1[i - 1][j - 1])
            j = j + 1
        l.append(1)
        list1.append(l)
        i = i + 1
    return list1


def binomial_coef(n, k):
    pascalTriangle = pascal_triangle(n)
    return pascalTriangle[n][k - 1]

def pascal_triangle(lineNumber):
    list1 = list()
    list1.append([1])
    i = 1
    while i <= lineNumber:
        j = 1
        l = []
        l.append(1)
        while j < i:
            l.append(list1[i - 1][j] + list1[i - 1][j - 1])
            j = j + 1
        l.append(1)
        list1.append(l)
        i = i + 1
    return list1


def binomial_coef(n, k):
    pascalTriangle = pascal_triangle(n)
    return pascalTriangle[n][k - 1]

def Binary_Search(Test_arr, low, high, k):
    if high >= low:
        Mid = (low + high) // 2
        if Test_arr[Mid] < k:
            return Binary_Search(Test_arr, Mid + 1, high, k)
        elif Test_arr[Mid] > k:
            return Binary_Search(Test_arr, low, Mid - 1, k)
        else:
            return Mid
    else:
        return low


def Insertion_Sort(Test_arr):
    for i in range(1, len(Test_arr)):
        val = Test_arr[i]
        j = Binary_Search(Test_arr[:i], 0, len(Test_arr[:i]) - 1, val)
        Test_arr.pop(i)
        Test_arr.insert(j, val)
    return Test_arr


if __name__ == "__main__":
    Test_list = input("Enter the list of Numbers: ").split()
    Test_list = [int(i) for i in Test_list]
    print(f"Binary Insertion Sort: {Insertion_Sort(Test_list)}")
```

```python
# Program to convert binary to decimal


def binaryToDecimal(binary):
    """
    >>> binaryToDecimal(111110000)
    496
    >>> binaryToDecimal(10100)
    20
    >>> binaryToDecimal(101011)
    43
    """
    decimal, i, n = 0, 0, 0
    while binary != 0:
        dec = binary % 10
        decimal = decimal + dec * pow(2, i)
        binary = binary // 10
        i += 1
    print(decimal)


binaryToDecimal(100)

from threading import Thread

from Background import Background
from PIL.Image import open as openImage
from PIL.ImageTk import PhotoImage


class Bird(Thread):
    """
    Classe para criar um pássaro
    """

    __tag = "Bird"
    __isAlive = None
    __going_up = False
    __going_down = 0
    __times_skipped = 0
    __running = False

    decends = 0.00390625
    climbsUp = 0.0911458333

    def __init__(
        self,
        background,
        gameover_function,
        *screen_geometry,
        fp="bird.png",
        event="<Up>",
        descend_speed=5
    ):

        # Verifica se "background" é uma instância de Background e se o "gamerover_method" é chamável

        if not isinstance(background, Background):
            raise TypeError(
                "The background argument must be an instance of Background."
            )
        if not callable(gameover_function):
            raise TypeError("The gameover_method argument must be a callable object.")

        # Instância os parâmetros
        self.__canvas = background
        self.image_path = fp
        self.__descend_speed = descend_speed
        self.gameover_method = gameover_function

        # Recebe a largura e altura do background
        self.__width = screen_geometry[0]
        self.__height = screen_geometry[1]

        # Define a decida e subida do pássaro com base na altura do background
        self.decends *= self.__height
        self.decends = int(self.decends + 0.5)
        self.climbsUp *= self.__height
        self.climbsUp = int(self.climbsUp + 0.5)

        # Invoca o método construtor de Thread
        Thread.__init__(self)

        # Calcula o tamanho do pássaro com base na largura e altura da janela
        self.width = (self.__width // 100) * 6
        self.height = (self.__height // 100) * 11

        # Carrega e cria a imagem do pássaro no background
        self.__canvas.bird_image = self.getPhotoImage(
            image_path=self.image_path,
            width=self.width,
            height=self.height,
            closeAfter=True,
        )[0]
        self.__birdID = self.__canvas.create_image(
            self.__width // 2,
            self.__height // 2,
            image=self.__canvas.bird_image,
            tag=self.__tag,
        )

        # Define evento para fazer o pássaro subir
        self.__canvas.focus_force()
        self.__canvas.bind(event, self.jumps)
        self.__isAlive = True

    def birdIsAlive(self):
        """
        Método para verificar se o pássaro está vivo
        """

        return self.__isAlive

    def checkCollision(self):
        """
        Método para verificar se o pássaro ultrapassou a borda da janela ou colidiu com algo
        """

        # Recebe a posição do pássaro no background
        position = list(self.__canvas.bbox(self.__tag))

        # Se o pássaro tiver ultrapassado a borda de baixo do background, ele será declarado morto
        if position[3] >= self.__height + 20:
            self.__isAlive = False

        # Se o pássaro tiver ultrapassado a borda de cima do background, ele será declarado morto
        if position[1] <= -20:
            self.__isAlive = False

        # Dá uma margem de erro ao pássaro de X pixels
        position[0] += int(25 / 78 * self.width)
        position[1] += int(25 / 77 * self.height)
        position[2] -= int(20 / 78 * self.width)
        position[3] -= int(10 / 77 * self.width)

        # Define os objetos a serem ignorados em colisões
        ignored_collisions = self.__canvas.getBackgroundID()
        ignored_collisions.append(self.__birdID)

        # Verifica possíveis colisões com o pássaro
        possible_collisions = list(self.__canvas.find_overlapping(*position))

        # Remove das possíveis colisões os objetos ignorados
        for _id in ignored_collisions:
            try:
                possible_collisions.remove(_id)
            except:
                continue

        # Se houver alguma colisão o pássaro morre
        if len(possible_collisions) >= 1:
            self.__isAlive = False

        return not self.__isAlive

    def getTag(self):
        """
        Método para retornar a tag do pássaro
        """

        return self.__tag

    @staticmethod
    def getPhotoImage(
        image=None, image_path=None, width=None, height=None, closeAfter=False
    ):
        """
        Retorna um objeto da classe PIL.ImageTk.PhotoImage de uma imagem e as imagens criadas de PIL.Image
        (photoImage, new, original)

        @param image: Instância de PIL.Image.open
        @param image_path: Diretório da imagem
        @param width: Largura da imagem
        @param height: Altura da imagem
        @param closeAfter: Se True, a imagem será fechada após ser criado um PhotoImage da mesma
        """

        if not image:
            if not image_path:
                return

            # Abre a imagem utilizando o caminho dela
            image = openImage(image_path)

        # Será redimesionada a imagem somente se existir um width ou height
        if not width:
            width = image.width
        if not height:
            height = image.height

        # Cria uma nova imagem já redimensionada
        newImage = image.resize([width, height])

        # Cria um photoImage
        photoImage = PhotoImage(newImage)

        # Se closeAfter for True, ele fecha as imagens
        if closeAfter:
            # Fecha a imagem nova
            newImage.close()
            newImage = None

            # Fecha a imagem original
            image.close()
            image = None

        # Retorna o PhotoImage da imagem,a nova imagem que foi utilizada e a imagem original
        return photoImage, newImage, image

    def jumps(self, event=None):
        """
        Método para fazer o pássaro pular
        """

        # Verifica se o pássaro saiu da área do background
        self.checkCollision()

        # Se o pássaro estiver morto, esse método não pode ser executado
        if not self.__isAlive or not self.__running:
            self.__going_up = False
            return

        # Declara que o pássaro está subindo
        self.__going_up = True
        self.__going_down = 0

        # Move o pássaro enquanto o limite de subida por animação não tiver excedido
        if self.__times_skipped < self.climbsUp:

            # Move o pássaro para cima
            self.__canvas.move(self.__tag, 0, -1)
            self.__times_skipped += 1

            # Executa o método novamente
            self.__canvas.after(3, self.jumps)

        else:

            # Declara que o pássaro não está mais subindo
            self.__going_up = False
            self.__times_skipped = 0

    def kill(self):
        """
        Método para matar o pássaro
        """

        self.__isAlive = False

    def run(self):
        """
        #Método para iniciar a animação do passáro caindo
        """

        self.__running = True

        # Verifica se o pássaro saiu da área do background
        self.checkCollision()

        # Enquanto o pássaro não tiver chegado em sua velocidade máxima, a velocidade aumentará em 0.05
        if self.__going_down < self.decends:
            self.__going_down += 0.05

        # Executa a animação de descida somente se o pássaro estiver vivo
        if self.__isAlive:

            # Executa a animação de descida somente se o pássaro não estiver subindo
            if not self.__going_up:
                # Move o pássaro para baixo
                self.__canvas.move(self.__tag, 0, self.__going_down)

            # Executa novamente o método
            self.__canvas.after(self.__descend_speed, self.run)

        # Se o pássaro estiver morto, será executado um método de fim de jogo
        else:
            self.__running = False
            self.gameover_method()

from itertools import product


def findPassword(chars, function, show=50, format_="%s"):

    password = None
    attempts = 0
    size = 1
    stop = False

    while not stop:

        # Obtém todas as combinações possíveis com os dígitos do parâmetro "chars".
        for pw in product(chars, repeat=size):

            password = "".join(pw)

            # Imprime a senha que será tentada.
            if attempts % show == 0:
                print(format_ % password)

            # Verifica se a senha é a correta.
            if function(password):
                stop = True
                break
            else:
                attempts += 1
        size += 1

    return password, attempts


def getChars():
    """
    Método para obter uma lista contendo todas as
    letras do alfabeto e números.
    """
    chars = []

    # Acrescenta à lista todas as letras maiúsculas
    for id_ in range(ord("A"), ord("Z") + 1):
        chars.append(chr(id_))

    # Acrescenta à lista todas as letras minúsculas
    for id_ in range(ord("a"), ord("z") + 1):
        chars.append(chr(id_))

    # Acrescenta à lista todos os números
    for number in range(10):
        chars.append(str(number))

    return chars
```

```python
# Se este módulo não for importado, o programa será testado.
# Para realizar o teste, o usuário deverá inserir uma senha para ser encontrada.

if __name__ == "__main__":

    import datetime
    import time

    # Pede ao usuário uma senha
    pw = input("\n Type a password: ")
    print("\n")

    def testFunction(password):
        global pw
        if password == pw:
            return True
        else:
            return False

    # Obtém os dígitos que uma senha pode ter
    chars = getChars()

    t = time.process_time()

    # Obtém a senha encontrada e o múmero de tentativas
    password, attempts = findPassword(
        chars, testFunction, show=1000, format_=" Trying %s"
    )

    t = datetime.timedelta(seconds=int(time.process_time() - t))
    input(f"\n\n Password found: {password}\n Attempts: {attempts}\n Time: {t}\n")

def bubblesort(list):

    # Swap the elements to arrange in order
    for iter_num in range(len(list) - 1, 0, -1):
        for idx in range(iter_num):
            if list[idx] > list[idx + 1]:
                temp = list[idx]
                list[idx] = list[idx + 1]
                list[idx + 1] = temp


list = [19, 2, 31, 45, 6, 11, 121, 27]
bubblesort(list)
print(list)

def bubble_sort(Lists):
    for i in range(len(Lists)):
        for j in range(len(Lists) - 1):
            # We check whether the adjecent number is greater or not
            if Lists[j] > Lists[j + 1]:
                Lists[j], Lists[j + 1] = Lists[j + 1], Lists[j]
```

```python
# Lets the user enter values of an array and verify by himself/herself
array = []
array_length = int(
    input(print("Enter the number of elements of array or enter the length of array"))
)
for i in range(array_length):
    value = int(input(print("Enter the value in the array")))
    array.append(value)

bubble_sort(array)
print(array)

def res(R1, R2):
    sum = R1 + R2
    if option == "series":
        return sum
    else:
        return (R1 * R2) / (R1 + R2)


Resistance1 = int(input("Enter R1 : "))
Resistance2 = int(input("Enter R2 : "))
option = str(input("Enter series or parallel :"))
print("\n")
R = res(Resistance1, Resistance2)
print("The total resistance is", R)

def res(R1, R2):
    sum = R1 + R2
    if option == "series":
        return sum
    else:
        return (R1 * R2) / (R1 + R2)


Resistance1 = int(input("Enter R1 : "))
Resistance2 = int(input("Enter R2 : "))
option = str(input("Enter series or parallel :"))
print("\n")
R = res(Resistance1, Resistance2)
print("The total resistance is", R)

from tkinter import *
import calendar

root = Tk()
# root.geometry("400x300")
root.title("Calendar")
```

```python
# Function


def text():
    month_int = int(month.get())
    year_int = int(year.get())
    cal = calendar.month(year_int, month_int)
    textfield.delete(0.0, END)
    textfield.insert(INSERT, cal)
```

```python
# Creating Labels
label1 = Label(root, text="Month:")
label1.grid(row=0, column=0)

label2 = Label(root, text="Year:")
label2.grid(row=0, column=1)
```

```python
# Creating spinbox
month = Spinbox(root, from_=1, to=12, width=8)
month.grid(row=1, column=0, padx=5)

year = Spinbox(root, from_=2000, to=2100, width=10)
year.grid(row=1, column=1, padx=10)
```

```python
# Creating Button
button = Button(root, text="Go", command=text)
button.grid(row=1, column=2, padx=10)
```

```python
# Creating Textfield
textfield = Text(root, width=25, height=10, fg="red")
textfield.grid(row=2, columnspan=2)


root.mainloop()

from tkinter import *
import calendar

root = Tk()
# root.geometry("400x300")
root.title("Calendar")
```

```python
# Function


def text():
    month_int = int(month.get())
    year_int = int(year.get())
    cal = calendar.month(year_int, month_int)
    textfield.delete(0.0, END)
    textfield.insert(INSERT, cal)
```

```python
# Creating Labels
label1 = Label(root, text="Month:")
label1.grid(row=0, column=0)

label2 = Label(root, text="Year:")
label2.grid(row=0, column=1)
```

```python
# Creating spinbox
month = Spinbox(root, from_=1, to=12, width=8)
month.grid(row=1, column=0, padx=5)

year = Spinbox(root, from_=2000, to=2100, width=10)
year.grid(row=1, column=1, padx=10)
```

```python
# Creating Button
button = Button(root, text="Go", command=text)
button.grid(row=1, column=2, padx=10)
```

```python
# Creating Textfield
textfield = Text(root, width=25, height=10, fg="red")
textfield.grid(row=2, columnspan=2)


root.mainloop()

import pyautogui  # pip install pyautogui
from PIL import Image, ImageGrab  # pip install pillow
```

```python
# from numpy import asarray
import time


def hit(key):
    pyautogui.press(key)
    return


def isCollide(data):

    # for cactus
    for i in range(329, 425):
        for j in range(550, 650):
            if data[i, j] < 100:
                hit("up")
                return

    # Draw the rectangle for birds
    # for i in range(310, 425):
    #     for j in range(390, 550):
    #         if data[i, j] < 100:
    #             hit("down")
    #             return

    # return


if __name__ == "__main__":
    print("Hey.. Dino game about to start in 3 seconds")
    time.sleep(2)
    # hit('up')

    while True:
        image = ImageGrab.grab().convert("L")
        data = image.load()
        isCollide(data)

        # print(aarray(image))

        # Draw the rectangle for cactus
        # for i in range(315, 425):
        #     for j in range(550, 650):
        #         data[i, j] = 0

        # # # # # Draw the rectangle for birds
        # for i in range(310, 425):
        #     for j in range(390, 550):
        #         data[i, j] = 171

        # image.show()
        # break

import pyautogui  # pip install pyautogui
from PIL import Image, ImageGrab  # pip install pillow
```

```python
# from numpy import asarray
import time


def hit(key):
    pyautogui.press(key)
    return


def isCollide(data):

    # for cactus
    for i in range(329, 425):
        for j in range(550, 650):
            if data[i, j] < 100:
                hit("up")
                return

    # Draw the rectangle for birds
    # for i in range(310, 425):
    #     for j in range(390, 550):
    #         if data[i, j] < 100:
    #             hit("down")
    #             return

    # return


if __name__ == "__main__":
    print("Hey.. Dino game about to start in 3 seconds")
    time.sleep(2)
    # hit('up')

    while True:
        image = ImageGrab.grab().convert("L")
        data = image.load()
        isCollide(data)

        # print(aarray(image))

        # Draw the rectangle for cactus
        # for i in range(315, 425):
        #     for j in range(550, 650):
        #         data[i, j] = 0

        # # # # # Draw the rectangle for birds
        # for i in range(310, 425):
        #     for j in range(390, 550):
        #         data[i, j] = 171

        # image.show()
        # break

import pickle

import tensorflow as tf

model = tf.keras.models.Sequential(
    [
        tf.keras.layers.Conv2D(
            16, (3, 3), activation="relu", input_shape=(200, 200, 3)
        ),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Conv2D(16, (3, 3), activation="relu"),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Conv2D(16, (3, 3), activation="relu"),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(512, activation="relu"),
        tf.keras.layers.Dense(1, activation="sigmoid"),
    ]
)
model.summary()
from tensorflow.keras.optimizers import RMSprop

model.compile(optimizer=RMSprop(lr=0.001), loss="binary_crossentropy", metrics=["acc"])
from tensorflow.keras.preprocessing.image import ImageDataGenerator

train_datagen = ImageDataGenerator(rescale=1 / 255)
train_generator = train_datagen.flow_from_directory(
    "../Classification_human-or-horse",
    target_size=(200, 200),
    batch_size=222,
    class_mode="binary",
)
model.fit_generator(train_generator, steps_per_epoch=6, epochs=1, verbose=1)
filename = "myTf1.sav"
pickle.dump(model, open(filename, "wb"))

from tkinter import Tk
from tkinter.filedialog import askopenfilename
from keras.preprocessing import image
import numpy as np

Tk().withdraw()
filename = askopenfilename()
print(filename)
img = image.load_img(filename, target_size=(200, 200))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
images = np.vstack([x])
classes = model.predict(images, batch_size=10)
print(classes[0])
if classes[0] > 0.5:
    print(filename + " is a human")
else:
    print(filename + " is a horse")
```

```python
# libraraies

import pytube
import sys


class YouTubeDownloder:
    def __init__(self):
        self.url = str(input("Enter the url of video : "))
        self.youtube = pytube.YouTube(
            self.url, on_progress_callback=YouTubeDownloder.onProgress
        )
        self.showTitle()

    def showTitle(self):
        print("title : {0}\n".format(self.youtube.title))
        self.showStreams()

    def showStreams(self):
        self.streamNo = 1
        for stream in self.youtube.streams:
            print(
                "{0} => resolution:{1}/fps:{2}/type:{3}".format(
                    self.streamNo, stream.resolution, stream.fps, stream.type
                )
            )
            self.streamNo += 1
        self.chooseStream()

    def chooseStream(self):
        self.choose = int(input("please select one : "))
        self.validateChooseValue()

    def validateChooseValue(self):
        if self.choose in range(1, self.streamNo):
            self.getStream()
        else:
            print("please enter a correct option on the list.")
            self.chooseStream()

    def getStream(self):
        self.stream = self.youtube.streams[self.choose - 1]
        self.getFileSize()

    def getFileSize(self):
        global file_size
        file_size = self.stream.filesize / 1000000
        self.getPermisionToContinue()

    def getPermisionToContinue(self):
        print(
            "\n title : {0} \n author : {1} \n size : {2:.2f}MB \n resolution : {3} \n fps : {4} \n ".format(
                self.youtube.title,
                self.youtube.author,
                file_size,
                self.stream.resolution,
                self.stream.fps,
            )
        )
        if input("do you want it ?(defualt = (y)es) or (n)o ") == "n":
            self.showStreams()
        else:
            self.main()

    def download(self):
        self.stream.download()

    @staticmethod
    def onProgress(stream=None, chunk=None, remaining=None):
        file_downloaded = file_size - (remaining / 1000000)
        print(
            f"downloading ... {file_downloaded/file_size*100:0.2f} % [{file_downloaded:.1f}MB of {file_size:.1f}MB]",
            end="\r",
        )

    def main(self):
        try:
            self.download()
        except KeyboardInterrupt:
            print("Canceled. ")
            sys.exit(0)


if __name__ == "__main__":
    try:
        YouTubeDownloder()
    except KeyboardInterrupt:
        pass
    except Exception as e:
        print(e)

number = int(input())


counter = 0
while number > 0:
    number = number // 10
    print(number)
    counter += 1
print("number of digits :", counter)
```

```python
# dictionary initialization using {}
mydict = {"a": 1, "b": 2}
```

```python
# add new (key,value) pair
mydict["c"] = 3
```

```python
# modify existing (key,value) pair
mydict["a"] = 5
```

```python
# remove (key,value) pair
mydict.pop("a")
```

```python
# get length of the dictionary
print(len(mydict))
```

```python
# iteration through keys
for key in mydict.keys():
    print(key)
```

```python
# iteration through values
for value in mydict.values():
    print(value)
```

```python
# iteration through (key,value) pairs
for key, value in mydict.items():
    print(key, value)
```

```python
#!/usr/bin/env python2
# -*- coding:utf8 -*-
"""
A simple Python 3.4+ script to send a text message to a Free Mobile phone.

- Warning: it only works in France to a French number, using the mobile operator Free Mobile.
- Warning: some initial configuration is required before running this script (see the error messages).
- Copyright 2014-20 Lilian Besson
- License MIT.

Examples
--------
$ FreeSMS.py --help
Gives help

$ FreeSMS.py "I like using Python to send SMS to myself from my laptop -- and it's free thanks to Free Mobile !"
Will send a test message to your mobile phone.


- Last version? Take a look to the latest version at https://github.com/Naereen/FreeSMS.py
- Initial Copyright : José - Juin 2014 (http://eyesathome.free.fr/index.php/tag/freemobile/)
- License:

    MIT License

    Copyright (c) 2014-21 Lilian Besson (Naereen), https://github.com/Naereen

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
"""

from __future__ import print_function
```

```python
# Use sys.version to be compatible with Python 2
import sys
```

```python
# Use os.getenv to see try to emulate os.path.expanduser if needed
import os
```

```python
# Use time to sleep and get string for today current hour
import time
```

```python
# Use JSON to pretty print a dictionary
import json
```

```python
# Use base64 to not keep plaintext files of the number, username and password in your home
import base64

today = time.strftime("%H:%M:%S %Y-%m-%d")

try:
    from os.path import expanduser
except ImportError:
    print(
        "Warning, os.path.expanduser is not available, trying to use os.getenv('USER') = {} ...".format(
            os.getenv("USER")
        )
    )

    def expanduser(s):
        """ Try to simulate the os.path.expanduser function. """
        return "/home/" + os.getenv("USER") + "/" + s


if sys.version_info < (3, 0):
    from urllib import urlencode
    from urllib2 import urlopen, HTTPError
else:
    from urllib3.request import urlencode
    from urllib.request import urlopen
    from urllib.error import HTTPError


try:
    try:
        from ansicolortags import printc
    except ImportError:
        print(
            "Optional dependancy (ansicolortags) is not available, using regular print function."
        )
        print(
            "  You can install it with : 'pip install ansicolortags' (or sudo pip)..."
        )
        from ANSIColors import printc
except ImportError:
    print(
        "Optional dependancy (ANSIColors) is not available, using regular print function."
    )
    print(
        "  You can install it with : 'pip install ANSIColors-balises' (or sudo pip)..."
    )

    def printc(*a, **kw):
        """ Fake function printc.

        ansicolortags or ANSIColors are not installed...
        Install ansicolortags from pypi (with 'pip install ansicolortags')
        """
        print(*a, **kw)


def testSpecialFile(name, number=""):
    """ Test if the hidden file '~/.smsapifreemobile_name.b64' exists and decodes (base64) correctly.
    """
    assert name in [
        "number",
        "user",
        "password",
    ], "Error: unknown or incorrect value for 'name' for the function openSpecialFile(name) ..."
    # printc("<cyan>Testing the hidden file <white>'<u>~/.smsapifreemobile_{}.b64<U>'<cyan>...<white>".format(name))  # DEBUG
    try:
        with open(
            expanduser("~/") + ".smsapifreemobile_" + name + number + ".b64"
        ) as f:
            variable = base64.b64decode(f.readline()[:-1])
            while variable[-1] == "\n":
                variable = variable[:-1]
            return True
    except OSError:
        return False


def openSpecialFile(name, number=""):
    """ Open the hidden file '~/.smsapifreemobile_name.b64', read and decode (base64) and return its content.
    """
    assert name in [
        "number",
        "user",
        "password",
    ], "Error: unknown or incorrect value for 'name' for the function openSpecialFile(name) ..."
    printc(
        "<cyan>Opening the hidden file <white>'<u>~/.smsapifreemobile_{}.b64<U>'<cyan>, read and decode (base64) and return its content...<white>".format(
            name
        )
    )
    try:
        with open(
            expanduser("~/") + ".smsapifreemobile_" + name + number + ".b64"
        ) as f:
            variable = base64.b64decode(f.readline()[:-1])
            while variable[-1] == "\n":
                variable = variable[:-1]
            return variable
    except OSError:
        printc(
            "<red>Error: unable to read the file '~/.smsapifreemobile_{}.b64' ...<white>".format(
                name
            )
        )
        printc(
            "<yellow>Please check that it is present, and if it not there, create it:<white>"
        )
        if name == "number":
            print(
                "To create '~/.smsapifreemobile_number.b64', use your phone number (like '0612345678', not wiht +33), and execute this command line (in a terminal):"
            )
            printc(
                "<black>echo '0612345678' | base64 > '~/.smsapifreemobile_number.b64'<white>".format()
            )
        elif name == "user":
            print(
                "To create '~/.smsapifreemobile_user.b64', use your Free Mobile identifier (a 8 digit number, like '83123456'), and execute this command line (in a terminal):"
            )
            printc(
                "<black>echo '83123456' | base64 > '~/.smsapifreemobile_user.b64'<white>".format()
            )
        elif name == "password":
            print(
                "To create '~/.smsapifreemobile_password.b64', go to this webpage, https://mobile.free.fr/moncompte/index.php?page=options&show=20 (after logging to your Free Mobile account), and copy the API key (a 14-caracters string on [a-zA-Z0-9]*, like 'H6ahkTABEADz5Z'), and execute this command line (in a terminal):"
            )
            printc(
                "<black>echo 'H6ahkTABEADz5Z' | base64 > '~/.smsapifreemobile_password.b64<white>' ".format()
            )


numbers = []
```

```python
#: Number (not necessary)
# number = base64.b64decode(open(expanduser('~') + ".smsapifreemobile_number.b64").readline()[:-1])
# if number[-1] == '\n':
#     number = number[:-1]
number = openSpecialFile("number")
numbers.append(number)

if testSpecialFile("number", "2"):
    number2 = openSpecialFile("number", "2")
    numbers.append(number2)
```

```python
# Detect language
language = os.getenv("LANG")
language = language[0:2] if language else "fr"
```

```python
# Maximum size that can be sent
# XXX Reference: https://en.wikipedia.org/wiki/Short_Message_Service#Message_size
# "6 to 8 segment messages are the practical maximum"
MAX_SIZE = 4 * 159
STR_MAX_SIZE = "4*159"


if language == "fr":
    errorcodes = {
        400: "Un des paramètres obligatoires est manquant.",
        402: "Trop de SMS ont été envoyés en trop peu de temps.",
        403: """Le service n'est pas activé sur l'espace abonné, ou login / clé incorrect.
Allez sur '<black>https://mobile.free.fr/moncompte/index.php?page=options&show=20<white>' svp, et activez l'option correspondate.""",
        500: "Erreur côté serveur. Veuillez réessayez ultérieurement.",
        1: "Le SMS a été envoyé sur votre mobile ({}).".format(number)
        if len(numbers) <= 1
        else "Le SMS a été envoyé sur vos numéros ({}).".format(numbers),
        "toolong": "<red>Attention<white> : le message est trop long (+ de <black>{}<white> caracters, soit plus de 3 SMS).".format(
            STR_MAX_SIZE
        ),
    }
else:
    errorcodes = {
        400: "One of the necessary parameter is missing.",
        402: "Too many SMSs has been sent in a short time (you might be a spammer!).",
        403: """Access denied: the service might not be activated on the online personnal space, or login/password is wrong.
Please go on '<black>https://mobile.free.fr/moncompte/index.php?page=options&show=20<white>' please, and enable the corresponding option.""",
        500: "Error from the server side. Please try again later.",
        1: "The SMS has been sent to your mobile ({}).".format(number)
        if len(numbers) <= 1
        else "The SMS has been sent to all your mobile numbers ({}).".format(numbers),
        "toolong": "<red>Warning<white>: message is too long (more than <black>{}<white> caracters, so more than 3 SMS).".format(
            STR_MAX_SIZE
        ),
    }


def send_sms(text="Empty!", secured=True, sleep_duration=0):
    """ Sens a free SMS to the user identified by [user], with [password].

    :user: Free Mobile id (of the form [0-9]{8}),
    :password: Service password (of the form [a-zA-Z0-9]{14}),
    :text: The content of the message (a warning is displayed if the message is bigger than 480 caracters)
    :secured: True to use HTTPS, False to use HTTP.

    Returns a boolean and a status string.
    """
    # DONE split the text into smaller pieces if length is too big (automatically, or propose to do it ?)
    if len(text) > MAX_SIZE:
        printc(errorcodes["toolong"])
        nb_sub_messages = len(text) / MAX_SIZE
        printc(
            "\n<red>Warning<white>: message will be split in <red>{} piece{}<white> of size smaller than <black>{} characters<white>...".format(
                nb_sub_messages + 1, "s" if nb_sub_messages > 0 else "", MAX_SIZE
            )
        )
        printc(
            "  <magenta>Note that new lines and other information can be lost!<white>"
        )
        for i, index in enumerate(range(0, len(text), MAX_SIZE)):
            answer = send_sms(text[index : index + MAX_SIZE])
            printc(
                "For piece #{} of the message, the answer is:\n  <magenta>{}<white>...\n".format(
                    i + 1, answer[1]
                )
            )
        return answer
        # raise ValueError(errorcodes["toolong"])

    # Read user and password

    users = []
    #: Identification Number free mobile
    user = openSpecialFile("user")
    users.append(user)
    if testSpecialFile("user", "2"):
        user2 = openSpecialFile("user", "2")
        users.append(user2)

    passwords = []
    #: Password
    password = openSpecialFile("password")
    passwords.append(password)
    if testSpecialFile("password", "2"):
        password2 = openSpecialFile("password", "2")
        passwords.append(password2)

    printc("\n<green>Your message is:<white>\n<yellow>" + text + "<white>")
    url = "https" if secured else "http"

    # Sending to all the numbers
    results = []

    for (user, password) in zip(users, passwords):
        dictQuery = {"user": user, "pass": password, "msg": text}
        string_query = json.dumps(dictQuery, sort_keys=True, indent=4)
        string_query = string_query.replace(password, "*" * len(password))
        printc(
            "\nThe web-based query to the Free Mobile API (<u>{}://smsapi.free-mobile.fr/sendmsg?query<U>) will be based on:\n{}.".format(
                url, string_query
            )
        )
        if sleep_duration > 0:
            printc(
                "\nSleeping for <red>{}<reset><white> seconds before querying the API...".format(
                    sleep_duration
                )
            )
            try:
                time.sleep(sleep_duration)
            except KeyboardInterrupt as e:
                printc(
                    "<red>You interrupted the process of sending this message, skipping to next one (or stopping now)...<reset><white>"
                )
            else:
                printc(
                    "\nDone sleeping for <red>{}<reset><white> seconds, it's time to query the API !".format(
                        sleep_duration
                    )
                )

        query = urlencode(dictQuery)
        url += "://smsapi.free-mobile.fr/sendmsg?{}".format(query)

        try:
            urlopen(url)
            results.append((0, errorcodes[1]))
        except HTTPError as e:
            if hasattr(e, "code"):
                results.append((e.code, errorcodes[e.code]))
            else:
                print("Unknown error...")
                results.append((2, "Unknown error..."))

    # Now we return the list of results
    return results


def main(argv):
    """ Main function. Use the arguments of the command line (sys.argv).
    """
    # TODO use docopt to handle the command line arguments! Cf. http://docopt.org/
    # TODO can docopt handle a cli documentation with ansicolortags tags in it? Cf. http://ansicolortags.rtfd.io/
    # Manual handing of the command line arguments
    if "-h" in argv or "--help" in argv:
        printc(
            """
<green>FreeSMS.py<white> --help|-h | -f file | [--sleep] body of the message

A simple Python script to send a text message to a Free Mobile phone.
The message should be smaller than 480 caracters.

<u>Examples:<U>
<black>$ FreeSMS.py --help<white>
Print this help message!

<black>$ FreeSMS.py -f MyMessageFile.txt<white>
Try to send the content of the file MyMessageFile.txt.

<black>$ FreeSMS.py "I like using Python to send me SMS from my laptop -- and it"s free thanks to Free !"<white>
Will send a test message to your mobile phone.

<black>$ FreeSMS.py --sleep 1 "This option makes the script sleep for one minute"<white>
Sleep one minute.

<magenta>Copyright 2014-21 Lilian Besson (License MIT)<white>
<b>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.<reset><white>
"""
        )
        return [(0, None)]

    sleep = False
    sleep_duration = 15  # in seconds
    if "--sleep" in argv:
        sleep = True
        index = argv.index("--sleep")
        if index + 1 < len(argv):
            try:
                sleep_duration = int(argv[index + 1])
            except:
                printc(
                    "<red>Unable to get a sleep duration value from the command line argument ('{}' does not convert to an integer).".format(
                        argv[index + 1]
                    )
                )  # DEBUG
            else:
                argv.pop(index)  # remove sleep_duration
        argv.pop(index)  # remove "--sleep"

    if "-f" in argv:
        try:
            with open(argv[argv.index("-f") + 1], "r") as filename:
                text = "".join(filename.readlines())[:-1]
        except Exception as e:
            print(e)
            print("Trying to use the rest of the arguments to send the text message...")
            text = " ".join(argv)
    else:
        if argv:
            # Text of the SMS
            if isinstance(argv, list):
                text = " ".join(argv)
            elif isinstance(argv, str):
                text = argv
            else:
                printc(
                    "<Warning>argv seems to be of unknown type (not list, not str, but {}) ...".format(
                        type(argv)
                    )
                )
                text = argv
            text = text.replace("\\n", "\n")
            # Durty hack to have true new lines in the message
        else:
            text = """Test SMS sent from {machinename} with FreeSMS.py (the {date}).

    (a Python 2.7+ / 3.4+ script by Lilian Besson, open source, you can find the code
    at https://github.com/Naereen/FreeSMS.py
    or https://perso.crans.org/besson/bin/FreeSMS.py)

    For any issues, reach me by email at jarvis[at]crans[dot]org !"""
            # FIXED Check that this is working correctly!
            machinename = "jarvis"  # Default name!
            try:
                machinename = open("/etc/hostname").readline()[:-1]
            except OSError:
                print(
                    "Warning: unknown machine name (file '/etc/hostname' not readable?)..."
                )
                machinename = "unknown machine"
            text = text.format(date=today, machinename=machinename)
            text = text.replace("[at]", "@").replace("[dot]", ".")

    answers = send_sms(text, sleep_duration=sleep_duration)
    return answers


if __name__ == "__main__":
    # from doctest import testmod  # DEBUG ?
    # testmod(verbose=False)  # DEBUG ?
    results = main(sys.argv[1:])
    first_result = results[0]
    code, message = first_result
    sys.exit(int(code))

def add(param1, param2):
    return param1 + param2
```

{% endtab %} {% endtabs %}

{% file src="../../.gitbook/assets/backpedal.py" %}

{% file src="../../.gitbook/assets/bfs\_search\_dict.py" %}

{% file src="../../.gitbook/assets/bfs\_paths\_dict \(2\).py" %}

{% file src="../../.gitbook/assets/bfs\_search\_grid \(1\).py" %}

{% file src="../../.gitbook/assets/bipartite\_matching\_single.py" %}

{% file src="../../.gitbook/assets/bisect\_search \(1\).py" %}

{% file src="../../.gitbook/assets/bst\_make\_balanced\_recur.py" %}

{% file src="../../.gitbook/assets/bt\_inorder\_traversal\_recur \(1\).py" %}

{% file src="../../.gitbook/assets/bt\_level\_order\_traversal\_iter.py" %}

{% file src="../../.gitbook/assets/celebrity.py" %}

{% file src="../../.gitbook/assets/counting\_sort\_dict \(1\).py" %}

{% file src="../../.gitbook/assets/counting\_sort\_list.py" %}

{% file src="../../.gitbook/assets/dfs\_component\_dict \(2\).py" %}

{% file src="../../.gitbook/assets/selection\_sort\_recur.py" %}

{% file src="../../.gitbook/assets/selection\_sort\_iter.py" %}

{% file src="../../.gitbook/assets/dijkstras\_path\_pq.py" %}

{% file src="../../.gitbook/assets/dijkstras\_distances\_min \(1\).py" %}

{% file src="../../.gitbook/assets/quicksort \(2\).py" %}

{% file src="../../.gitbook/assets/counting\_sort\_list \(1\).py" %}

{% file src="../../.gitbook/assets/dfs\_component\_dict.py" %}

{% file src="../../.gitbook/assets/dfs\_component\_dict\_recur \(1\).py" %}
