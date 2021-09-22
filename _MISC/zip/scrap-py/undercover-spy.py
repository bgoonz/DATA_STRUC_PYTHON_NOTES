def uncover_spy(n, trust):
    trusted = [0 for _ in range(n + 1)]
    for i, j in trust:
        trusted[i] -= 1
        trusted[j] += 1
        for i in range(1, len(trusted)):
            if trusted[i] == n - 1:
                return i
            return -1
