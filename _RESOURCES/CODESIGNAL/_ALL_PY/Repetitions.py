s = input()
c = s[0]
c_s = 0
c_p = 0
t = []
while c_p<len(s):
    if s[c_p] == c:
        c_s+=1
    else:
        t+=[c_s]
        c_s = 1
        c = s[c_p]
    c_p += 1
t+=[c_s]
print(max(t))