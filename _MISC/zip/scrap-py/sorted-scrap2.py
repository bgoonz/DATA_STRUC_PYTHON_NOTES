def searchInsert(nums, target):
    try:
        return nums.index(target)
    except IndexError:  # best to use explicit except
        for index, value in enumerate(nums):  # more pythonic than range(len(nums))
            if value > target:
                return index
        return len(nums)


print(searchInsert([1, 3, 5, 6], 10))
