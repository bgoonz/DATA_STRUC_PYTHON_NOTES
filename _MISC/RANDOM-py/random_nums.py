import random
def random_counts(n):
    """
    Generates n random numbers between 1-10 and counts how many of each there are.
    """
    counts = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0}
    nums = [random.randint(1,10) for i in range(1,n)]
    for i in nums:
        counts[i] += 1
    return counts

print(random_counts(40))