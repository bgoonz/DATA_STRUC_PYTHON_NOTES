s = int(input())
if s==1:
    print(1)
elif s<4:
    print("NO SOLUTION")
else:
    print(' '.join(str(x) for x in range(2,s+1,2)),' '.join(str(x) for x in range(1,s+1,2)))