def checkBlanagrams(word1, word2):

    lenWord1 = len(word1)
    lenWord2 = len(word2)
    # To store the frequencies of characters
    # of string word1 and word2
    freq1 = [0] * 26
    freq2 = [0] * 26

    # To store the count of valid pairs
    count = 0

    # Update the frequencies of the characters of string word1
    for i in range(lenWord1):
        freq1[ord(word1[i]) - ord("a")] += 1

    # update the frequencies of   the characters of string word2
    for i in range(lenWord2):
        freq2[ord(word2[i]) - ord("a")] += 1

    # Find the count of valid pairs
    for i in range(26):
        count += min(freq1[i], freq2[i])

    return count == lenWord1 - 1 == lenWord2 - 1


# Driver code
if __name__ == "__main__":

    print(checkBlanagrams("tangram", "anagram"))
