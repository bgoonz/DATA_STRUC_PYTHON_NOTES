# Stack grows downward.
#
# 700: 0
#
# 699: 2  (a)   main's stack frame
# 698: 14 (b)
# 
# 697: 2  (x)   mult2's stack frame
# 696: 7  (y)
# 695: 14 (z)  <-- SP

def mult2(x, y):
    z = x * y
    return z

def main():
    a = 2
    
    b = mult2(a, 7)

    print(b) # 14