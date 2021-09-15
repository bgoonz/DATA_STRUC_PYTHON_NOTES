def rec_func(n):
    if n == 0:
        return
    print(n)
    rec_func(n - 1)
    rec_func(n - 2)
    rec_func(n - 3)

z = 12

rec_func(1000)