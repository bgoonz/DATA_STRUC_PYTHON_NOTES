n = int(input())
for nn in range(n):
    a,b = [int(x) for x in input().split(' ')]
    if a>b:
        if a%2:
            print((a-1)**2+b)
        else:
            print((a)**2-b+1)
    else:
        if b%2:
            print((b)**2-a+1)
        else:
            print((b-1)**2+a)