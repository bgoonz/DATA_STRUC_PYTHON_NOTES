n = int(input())
if n%4==1 or n%4==2:
    print("NO")
else:
    print("YES")
    if n%2:
        print((n+1)//2-1)
        x = -1
        for x in range((n+1)//4-1):
            print(n-x,1+x,end=' ')
        print(n-x-1)
        print((n+1)//2)
        for x in range((n+1)//4,(n+1)//2):
            print(x,n-x,end=' ')
    else:
        print(n//2)
        for x in range(n//4):
            print(n-x,1+x,end=' ' if x != n//4-1 else '\n')
        print(n//2)
        for x in range(n//4,n//2):
            print(n-x,1+x,end=' ' if x != n//2-1 else '\n')