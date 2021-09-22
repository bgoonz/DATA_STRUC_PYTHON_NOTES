# You are given a sorted array in ascending order that is rotated at some unknown pivot(i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]) and a target value.
#
# Write a function that returns the target value's index. If the target value is not present in the array, return -1.
#
# You may assume no duplicate exists in the array.
#
# Your algorithm's runtime complexity must be in the order of O(log n).
#
# Example 1:
#
# Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
# Output: 4
#
# Example 2:
#
# Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
# Output: -1
#
# [execution time limit] 4 seconds(py3)
#
# [input] array.integer nums
#
# [input] integer target
#
# [output] integer
##-------------------------------------------------------------------------------------------
##-------------------------------------------------------------------------------------------
##-------------------------------------------------------------------------------------------


# def findValueSortedShiftedArray(nums, target):
#     strt = 0
# # start index
#     end = len(nums) - 1
# # end index
#     mid = 0
# # stores the middle of the array
#     while strt <= end:
# # find middle of range of interest
#         mid = strt + (end - strt)//2
#         if target == nums[mid]:
#             return mid
#         if target < nums[mid]:
# # target can only be in the first half
#             end = mid - 1
# # adjust range to exclude the second half
#         elif target > nums[mid]:
# # target can only be in the second half
#             strt = mid + 1
# # adjust range to exclude first half
#     return -1 # not in array, but start is intended index
##-------------------------------------------------------------------------------------------
# def findValueSortedShiftedArray(nums, target):
#     try:
#         return nums.index(target)
#     except IndexError:  # best to use explicit except
#         # more pythonic than range(len(nums))
#         for index, value in enumerate(nums):
#             if value > target:
#                 return index
#         return len(nums)
#
#
# print(findValueSortedShiftedArray([1, 3, 5, 6], 10))
##-------------------------------------------------------------------------------------------
# def findValueSortedShiftedArray(nums, target):
#   nums.append(target)
#   nums.sort()
#   for i, j in enumerate(nums):
#       if target == j:
#           return i


def binarySearch(arr, key):
    min = 0
    max = len(arr) - 1
    while not max < min:
        guess = (max + min) // 2
        if key == arr[guess]:
            return arr[guess]
        elif key > arr[guess]:
            min = guess + 1
        else:
            max = guess - 1
    return -1


def findValueSortedShiftedArray(nums, target):
    pivot = 3
    if nums[pivot] == target:
        return pivot
    if nums[pivot] >= target:
        value = binarySearch(nums[pivot + 1 :], target)
        print(value)
        if value == target:
            return nums.index(value)


##-------------------------------------------------------------------------------------------


print(
    "---------------------nums = [4,5,6,7,0,1,2],, target = 0-----------------------------------"
)
nums1 = [4, 5, 6, 7, 0, 1, 2]
target1 = 3
print(findValueSortedShiftedArray(nums1, target1))
print("---------------nums = [4,5,6,7,0,1,2], target = 3--------------------------")
print(findValueSortedShiftedArray([4, 5, 6, 7, 0, 1, 2], 3))
print(
    "---------------nums = [1, 3, 5, 6]-------target = 5----------------------------------"
)
nums = [1, 3, 5, 6]
target = 5
print(findValueSortedShiftedArray(nums, target))
