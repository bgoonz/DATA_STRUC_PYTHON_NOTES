n = int(input())
for nn in range(n):
    a,b = [int(x) for x in input().split(' ')]
    if (2*a-b)%3==0 and 2*a-b>=0 and (2*b-a)%3==0 and 2*b-a>=0:
        print("YES")
    else:
        print("NO")