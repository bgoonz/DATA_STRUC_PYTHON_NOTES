n = int(input())
c,s = 5,0
while c<=n:
    s+=n//c
    c*=5
print(s)