n = input()
d = [int(x) for x in input().split(' ')]
s = sum(d)
target = s//2

def dp(c,x,l):
    if c>target:
        return c-l
    elif len(x)==0:
        return c
    return max(dp(c+x[0],x[1:],x[0]),dp(c,x[1:],0))

print(abs(int((dp(0,d,0) - s/2)*2)))