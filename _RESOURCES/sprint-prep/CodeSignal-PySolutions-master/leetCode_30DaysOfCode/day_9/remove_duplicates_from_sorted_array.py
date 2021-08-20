"""
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

"""


def removeDuplicates(nums):
    """
    TimeComplexity: O(n)
    SpaceComplexity: O(1)
    """
    i = 0
    for j in range(len(nums)):
        if nums[i] != nums[j]:
            i += 1
            nums[i], nums[j] = nums[j], nums[i]
    return nums[0:i+1]


print(removeDuplicates([1, 2, 2, 2]))
