s = int(input())
while s!=1:
    print(s, end=' ')
    s = s*3+1 if s%2 else s//2
print(1)