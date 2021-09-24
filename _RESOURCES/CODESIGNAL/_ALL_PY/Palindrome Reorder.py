n = input()
s = list(set(n))
k = [n.count(x) for x in s]
if sum(x%2 for x in k) > 1:
    print("NO SOLUTION")
else:
    t =''.join([str(x)*(k[i]//2) for i,x in enumerate(s)])
    c = [str(x) for i,x in enumerate(s) if k[i]%2==1]
    c = c[0] if len(c) else ''
    print(t+c+t[::-1])