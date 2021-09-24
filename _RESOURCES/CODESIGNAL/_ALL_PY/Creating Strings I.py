n = input()

def mul(n):
    if len(n)==1:
        return n[0]
    return mul(n[1:])*n[0]

def fac(n):
    if n==1:
        return 1
    return fac(n-1)*n

def ap(h,n):
    if len(n)==0:
        print(h)
    for k in sorted(set(n)):
        t = list(n)
        t.remove(k)
        ap(h+k,t)
print(fac(len(n))//mul([fac(n.count(x)) for x in set(n)]))
ap('',n)