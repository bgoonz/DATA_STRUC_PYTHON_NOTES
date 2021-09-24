x = [input() for x in range(8)]

def dp(r, d):
    if r==8:
        return 1
    s = 0
    for i in range(8):
        if x[r][i]=='.' and (r,i) not in d:
            t = d.copy()
            t|={(y,i) for y in range(r+1,8)}
            t|={(y,i+y-r) for y in range(r+1,8)}
            t|={(y,i-y+r) for y in range(r+1,8)}
            s+=dp(r+1,t)
    return s

print(dp(0,set()))