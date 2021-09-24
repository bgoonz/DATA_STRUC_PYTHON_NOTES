s = int(input())
a = sum(int(x) for x in input().split(' '))
print(s*(s+1)//2-a)