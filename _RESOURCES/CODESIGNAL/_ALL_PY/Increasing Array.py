n = int(input())
data = [int(x) for x in input().split(' ')]
s = 0
c = data[0]
for x in range(1,n):
    s += c-data[x] if data[x]<c else 0
    c = max(data[x],c)
print(s)