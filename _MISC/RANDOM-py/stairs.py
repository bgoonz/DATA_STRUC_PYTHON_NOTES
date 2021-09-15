# Python program to find n-th stair 
# using step size 1 or 2 or 3. 

# Returns count of ways to reach n-th 
# stair using 1 or 2 or 3 steps. 
def counting_stairs(n):
    if (n == 1 or n == 0):
        print(n)
        return 1
    elif (n == 2):
        print(n)
        return 2
    else:
        print(n - 3, n - 2, n - 1)
        return counting_stairs(n - 3) + counting_stairs(n - 2) + counting_stairs(n - 1)
    

# Driver code 
n = 5
print(counting_stairs(n)) 