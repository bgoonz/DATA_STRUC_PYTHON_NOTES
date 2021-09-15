# O(1) space complexity

# no matter how big n gets the space used will remain the same

def o_1_space(n):
    total = 0

    for i in range(n):
        total += i
    return total

# O(n) space complexity

def o_n_space(n):
    sums = []

    for i in range(n):
        sums.append(i + i)
    
    return sums

# O(n^2)

def o_n2_space(n):
    times_table = [] # empty list

    for i in range(n):
        row = []

        for j in range(n):
            row.append(j * i)
        
        times_table.append(row)
    
    return times_table

