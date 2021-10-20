# Practice Problems

{% embed url="https://replit.com/@bgoonz/SmallWorldlyAbstraction\#main.py" %}

{% tabs %} {% tab title="" %}

```text

```

{% endtab %}

{% tab title="Arcade" %}

```python
def add(param1, param2):
    return param1 + param2
#------------------------------------------------------------------------------------------------#


#------------------------------------------------------------------------------------------------#


def centuryFromYear(year):
    return ((year - 1) // 100) + 1


#------------------------------------------------------------------------------------------------#


def checkPalindrome(inputString):
    return inputString == inputString[::-1]


#------------------------------------------------------------------------------------------------#


def adjacentElementsProduct(inputArray):
    max = inputArray[0] * inputArray[1]
    for i in range(len(inputArray) - 1):
        if inputArray[i] * inputArray[i + 1] > max:
            max = inputArray[i] * inputArray[i + 1]
    return max


#------------------------------------------------------------------------------------------------#


def shapeArea(n):
    sum = n * 2 - 1
    for i in range(1, (n * 2) - 1, 2):
        sum += i * 2
    return sum


#------------------------------------------------------------------------------------------------#


def makeArrayConsecutive2(statues):
    return max(statues) - min(statues) - len(statues) + 1


#------------------------------------------------------------------------------------------------#


def almostIncreasingSequence(sequence):
    i = 0
    while i < len(sequence) - 1:
        if not sequence[i] < sequence[i + 1]:
            if increasingSequence(
                sequence[:i] + sequence[i + 1 :]
            ) or increasingSequence(sequence[: i + 1] + sequence[i + 2 :]):
                return True
            else:
                return False
        i += 1
    return True


#------------------------------------------------------------------------------------------------#


def increasingSequence(sequence):
    for i in range(len(sequence) - 1):
        if not sequence[i] < sequence[i + 1]:
            return False
    return True


#------------------------------------------------------------------------------------------------#


def matrixElementsSum(matrix):
    if len(matrix) > 1:
        for row in range(1, len(matrix)):
            for room in range(len(matrix[row])):
                if matrix[row - 1][room] == 0:
                    matrix[row][room] = 0
    sum = 0
    for row in matrix:
        for room in row:
            sum += room
    return sum


#------------------------------------------------------------------------------------------------#


def allLongestStrings(inputArray):
    length = max([len(word) for word in inputArray])
    result = [word for word in inputArray if len(word) == length]
    return result


#------------------------------------------------------------------------------------------------#


def commonCharacterCount(s1, s2):
    count = 0
    word2 = list(s2)
    for letter in s1:
        if letter in word2:
            word2.remove(letter)
            count += 1
    return count


#------------------------------------------------------------------------------------------------#


def isLucky(n):
    string = str(n)
    top = [int(x) for x in string[: len(string) // 2]]
    bottom = [int(x) for x in string[len(string) // 2 :]]
    return sum(top) == sum(bottom)


#------------------------------------------------------------------------------------------------#


def sortByHeight(a):
    treePositions = [x for x in range(len(a)) if a[x] == -1]
    people = sorted([x for x in a if x != -1])
    for tree in treePositions:
        people.insert(tree, -1)
    return people


import re


#------------------------------------------------------------------------------------------------#


def reverseParentheses(s):
    while "(" in s:
        match = re.search("\([^()]*\)", s)
        match_string = match.group(0)[1 : len(match.group(0)) - 1]
        reversed_match_string = match_string[::-1]
        s = s[: match.start()] + reversed_match_string + s[match.end() :]
    return s


#------------------------------------------------------------------------------------------------#


def alternatingSums(a):
    team1 = sum(a[0::2])
    team2 = sum(a[1::2])
    return [team1, team2]


#------------------------------------------------------------------------------------------------#


def addBorder(picture):
    picture = ["*" + string + "*" for string in picture]
    picture = [("*" * len(picture[0]))] + picture + [("*" * len(picture[0]))]
    return picture


#------------------------------------------------------------------------------------------------#


def areSimilar(a, b):
    diff = [i for i in range(len(a)) if a[i] != b[i]]
    if len(diff) == 2:
        b[diff[0]], b[diff[1]] = b[diff[1]], b[diff[0]]
    return a == b


#------------------------------------------------------------------------------------------------#


def arrayChange(inputArray):
    count = 0
    for i in range(1, len(inputArray)):
        if inputArray[i - 1] >= inputArray[i]:
            difference = inputArray[i - 1] - inputArray[i]
            inputArray[i] += difference + 1
            count += difference + 1
    return count


#------------------------------------------------------------------------------------------------#


def palindromeRearranging(inputString):
    inputList = sorted(inputString)
    foundMiddle = False
    while len(inputList) > 1:
        if inputList[0] == inputList[1]:
            del inputList[1]
        elif not foundMiddle:
            foundMiddle = True
        else:
            return False
        del inputList[0]
    return len(inputList) == 0 or not foundMiddle


#------------------------------------------------------------------------------------------------#


def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    sameHands = yourLeft == friendsLeft and yourRight == friendsRight
    differentHands = yourLeft == friendsRight and yourRight == friendsLeft
    return sameHands or differentHands


#------------------------------------------------------------------------------------------------#


def arrayMaximalAdjacentDifference(inputArray):
    diffs = []
    for i in range(len(inputArray) - 1):
        diffs.append(abs(inputArray[i] - inputArray[i + 1]))
    return max(diffs)


#------------------------------------------------------------------------------------------------#


def isIPv4Address(inputString):
    strings = [string for string in inputString.split(".")]
    for string in strings:
        if not string.isdecimal():
            return False
    nums = [int(num) for num in strings]
    return max(nums) <= 255 and min(nums) >= 0 and len(nums) == 4


#------------------------------------------------------------------------------------------------#


def avoidObstacles(inputArray):
    for length in range(2, max(inputArray) + 2):
        done = True
        jump = length
        while jump < (max(inputArray) + length):
            if jump in inputArray:
                done = False
                break
            jump += length
        if done:
            return length


#------------------------------------------------------------------------------------------------#


def boxBlur(image):
    outImage = []
    for row in range(1, len(image) - 1):
        line = []
        for pixel in range(1, len(image[row]) - 1):
            total = (
                image[row - 1][pixel - 1]
                + image[row - 1][pixel]
                + image[row - 1][pixel + 1]
                + image[row][pixel - 1]
                + image[row][pixel]
                + image[row][pixel + 1]
                + image[row + 1][pixel - 1]
                + image[row + 1][pixel]
                + image[row + 1][pixel + 1]
            )
            line.append(total // 9)
        outImage.append(line)
    return outImage


#------------------------------------------------------------------------------------------------#


def minesweeper(matrix):
    TOP = 0
    BOTTOM = len(matrix) - 1
    LEFT = 0
    RIGHT = len(matrix[0]) - 1

    outMatrix = []
    for row in range(len(matrix)):
        outRow = []
        for cell in range(len(matrix[row])):
            outRow.append(0)
            if row != TOP:
                outRow[cell] += matrix[row - 1][cell]
            if row != BOTTOM:
                outRow[cell] += matrix[row + 1][cell]
            if cell != LEFT:
                outRow[cell] += matrix[row][cell - 1]
            if cell != RIGHT:
                outRow[cell] += matrix[row][cell + 1]
            if row != TOP and cell != LEFT:
                outRow[cell] += matrix[row - 1][cell - 1]
            if row != TOP and cell != RIGHT:
                outRow[cell] += matrix[row - 1][cell + 1]
            if row != BOTTOM and cell != LEFT:
                outRow[cell] += matrix[row + 1][cell - 1]
            if row != BOTTOM and cell != RIGHT:
                outRow[cell] += matrix[row + 1][cell + 1]
        outMatrix.append(outRow)
    return outMatrix


#------------------------------------------------------------------------------------------------#


def arrayReplace(inputArray, elemToReplace, substitutionElem):
    return [x if x != elemToReplace else substitutionElem for x in inputArray]


#------------------------------------------------------------------------------------------------#


def evenDigitsOnly(n):
    return all(
        (True if digit in ("0", "2", "4", "6", "8") else False for digit in str(n))
    )


#------------------------------------------------------------------------------------------------#


def variableName(name):
    return name.replace("_", "").isalnum() and not name[0].isdigit()


#------------------------------------------------------------------------------------------------#


def alphabeticShift(inputString):
    return "".join([chr(ord(x) + 1) if x != "z" else "a" for x in inputString])


#------------------------------------------------------------------------------------------------#


def chessBoardCellColor(cell1, cell2):
    color1 = ((ord(cell1[0]) - ord("A")) + ord(cell1[1]) - ord("1")) % 2 == 0
    color2 = ((ord(cell2[0]) - ord("A")) + ord(cell2[1]) - ord("1")) % 2 == 0
    return color1 == color2


#------------------------------------------------------------------------------------------------#


def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n / 2)) % n


#------------------------------------------------------------------------------------------------#


def depositProfit(deposit, rate, threshold):
    year = 0
    while deposit < threshold:
        deposit *= 1 + (rate / 100)
        year += 1
    return year

#------------------------------------------------------------------------------------------------#
#------------------------------------------------------------------------------------------------#


def absoluteValuesSumMinimization(a):
    sums = {}
    for num in a:
        total = sum([abs(a[i] - num) for i in range(len(a))])
        if total in sums:
            sums[total] = min(num, sums[total])
        else:
            sums[total] = num
        print(sums)
    return sums[min(sums)]


import itertools


#------------------------------------------------------------------------------------------------#


def stringsRearrangement(inputArray):
    permutations = itertools.permutations(inputArray)
    for array in permutations:
        if testArrangement(array):
            return True
    return False


#------------------------------------------------------------------------------------------------#


def testArrangement(array):
    for i in range(len(array) - 1):
        if sum([a != b for a, b in zip(array[i], array[i + 1])]) != 1:
            return False
    return True


#------------------------------------------------------------------------------------------------#


def extractEachKth(inputArray, k):
    return [inputArray[x] for x in range(len(inputArray)) if (x + 1) % k != 0]


#------------------------------------------------------------------------------------------------#


def firstDigit(inputString):
    for char in inputString:
        if char.isdigit():
            return char


#------------------------------------------------------------------------------------------------#


def differentSymbolsNaive(s):
    return len(set(s))


#------------------------------------------------------------------------------------------------#


def arrayMaxConsecutiveSum(inputArray, k):
    sums = [sum(inputArray[:k])]
    for i in range(1, len(inputArray) - k + 1):
        sums.append(sums[i - 1] - inputArray[i - 1] + inputArray[i + k - 1])
    return max(sums)


#------------------------------------------------------------------------------------------------#


def growingPlant(upSpeed, downSpeed, desiredHeight):
    height = 0
    days = 1
    height += upSpeed
    while height < desiredHeight:
        days += 1
        height -= downSpeed
        height += upSpeed
    return days


#------------------------------------------------------------------------------------------------#


def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and (weight2 > maxW or value1 >= value2):
        return value1
    if weight2 <= maxW and (weight1 > maxW or value2 >= value1):
        return value2
    return 0


#------------------------------------------------------------------------------------------------#


def longestDigitsPrefix(inputString):
    for char in range(len(inputString)):
        if not inputString[char].isdigit():
            return inputString[:char]
    return inputString


#------------------------------------------------------------------------------------------------#


def digitDegree(n):
    degree = 0
    while len(str(n)) > 1:
        n = sum((int(digit) for digit in str(n)))
        degree += 1
    return degree


#------------------------------------------------------------------------------------------------#


def bishopAndPawn(bishop, pawn):
    return abs(ord(bishop[0]) - ord(pawn[0])) == abs(ord(bishop[1]) - ord(pawn[1]))


#------------------------------------------------------------------------------------------------#


def isBeautifulString(inputString):
    for letter in range(ord("a"), ord("z")):
        if inputString.count(chr(letter)) < inputString.count(chr(letter + 1)):
            return False
    return True


#------------------------------------------------------------------------------------------------#


def findEmailDomain(address):
    return address[address.rfind("@") + 1 :]


#------------------------------------------------------------------------------------------------#


def buildPalindrome(st):
    if st == st[::-1]:  # Check for initial palindrome
        return st
    index = 0
    subStr = st[index:]
    while subStr != subStr[::-1]:  # while substring is not a palindrome
        index += 1
        subStr = st[index:]
    return st + st[index - 1 :: -1]


#------------------------------------------------------------------------------------------------#


def electionsWinners(votes, k):
    winners = 0
    current_winner = max(votes)
    for candidate in votes:
        if k > 0 and candidate + k > current_winner:
            winners += 1
        if k == 0 and candidate == current_winner and votes.count(candidate) == 1:
            winners += 1
    return winners


#------------------------------------------------------------------------------------------------#


def isMAC48Address(inputString):
    hex_chars = (
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    )
    groups = inputString.split("-")
    if len(groups) != 6:
        return False
    if not all((len(group) == 2 for group in groups)):
        return False
    if not all((group[0] in hex_chars and group[1] in hex_chars for group in groups)):
        return False
    return True


#------------------------------------------------------------------------------------------------#


def isDigit(symbol):
    return symbol.isdigit()


#------------------------------------------------------------------------------------------------#


def lineEncoding(s):
    count = 1
    output = []
    for char in range(1, len(s)):
        if s[char] == s[char - 1]:
            count += 1
        else:
            if count > 1:
                output.append(str(count) + s[char - 1])
            else:
                output.append(s[char - 1])
            count = 1
    if s[len(s) - 1] == s[len(s) - 2]:
        output.append(str(count) + s[len(s) - 1])
    else:
        output.append(s[len(s) - 1])
    return "".join(output)


#------------------------------------------------------------------------------------------------#


def chessKnight(cell):
    moves = 0
    # Starting at the top left, going counter-clockwise
    if ord(cell[0]) >= ord("b") and ord(cell[1]) <= ord("6"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) >= ord("b") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) <= ord("6"):
        moves += 1

    return moves


#------------------------------------------------------------------------------------------------#


def deleteDigit(n):
    num = str(n)
    highest = 0
    for digit in range(len(num)):
        output = num[:digit] + num[digit + 1 :]
        if int(output) > int(highest):
            highest = output
    return int(highest)


#------------------------------------------------------------------------------------------------#


def longestWord(text):
    longest = []
    word = []
    for char in text:
        if ord("A") <= ord(char) <= ord("Z") or ord("a") <= ord(char) <= ord("z"):
            word.append(char)
        else:
            if len(word) > len(longest):
                longest = word
            word = []
    if len(word) > len(longest):
        longest = word
    return "".join(longest)


#------------------------------------------------------------------------------------------------#


def validTime(time):
    groups = time.split(":")
    if len(groups) != 2:
        return False
    if not (groups[0].isdigit() and groups[1].isdigit()):
        return False
    if int(groups[0]) > 23 or int(groups[1]) > 59:
        return False
    return True


#------------------------------------------------------------------------------------------------#


def sumUpNumbers(inputString):
    total = 0
    current_num = []
    for char in inputString:
        if char.isdigit():
            current_num.append(char)
        else:
            if len(current_num) > 0:
                num = int("".join(current_num))
                total += num
                current_num = []
    if len(current_num) > 0:
        num = int("".join(current_num))
        total += num
    return total


#------------------------------------------------------------------------------------------------#


def differentSquares(matrix):
    squares = set()
    for row in range(len(matrix) - 1):
        for cell in range(len(matrix[row]) - 1):
            square = (
                (matrix[row][cell], matrix[row][cell + 1]),
                (matrix[row + 1][cell], matrix[row + 1][cell + 1]),
            )
            squares.add(square)
    return len(squares)


#------------------------------------------------------------------------------------------------#


def digitsProduct(product):
    # New idea: add product to factors
    # while max(factors) > 10: split that num into factors
    if product == 0:
        return 10

    factors = [product]
    while max(factors) > 9:
        factored = findFactors(max(factors))
        if factored:
            factors.remove(max(factors))
            factors.extend(factored)
        else:
            return -1

    while factors.count(3) >= 2:
        factors.remove(3)
        factors.remove(3)
        factors.append(9)

    while factors.count(2) > 2:
        factors.remove(2)
        factors.remove(2)
        factors.remove(2)
        factors.append(8)

    while factors.count(2) > 1:
        factors.remove(2)
        factors.remove(2)
        factors.append(4)

    while 2 in factors and 3 in factors:
        factors.remove(2)
        factors.remove(3)
        factors.append(6)

    return int("".join(map(str, sorted(factors))))


#------------------------------------------------------------------------------------------------#


def findFactors(n):
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return i, n // i
    return False


#------------------------------------------------------------------------------------------------#


def fileNaming(names):
    outnames = []
    for name in names:
        if name in outnames:
            k = 1
            while "{}({})".format(name, k) in outnames:
                k += 1
            name = "{}({})".format(name, k)
        outnames.append(name)
    return outnames


#------------------------------------------------------------------------------------------------#


def messageFromBinaryCode(code):
    output = []
    for i in range(0, len(code), 8):
        letter = chr(int(code[i : i + 8], 2))
        output.append(letter)
    return "".join(output)


#------------------------------------------------------------------------------------------------#


def spiralNumbers(n):
    LEFT = "left"
    RIGHT = "right"
    UP = "up"
    DOWN = "down"
    direction = RIGHT
    spiral = [[0 for i in range(n)] for j in range(n)]
    row = 0
    cell = 0
    for num in range(1, (n * n) + 1):
        spiral[row][cell] = num
        if direction == RIGHT:
            if cell != n - 1 and spiral[row][cell + 1] == 0:
                cell += 1
            else:
                direction = DOWN
                row += 1
        elif direction == DOWN:
            if row != n - 1 and spiral[row + 1][cell] == 0:
                row += 1
            else:
                direction = LEFT
                cell -= 1
        elif direction == LEFT:
            if cell != 0 and spiral[row][cell - 1] == 0:
                cell -= 1
            else:
                direction = UP
                row -= 1
        elif direction == UP:
            if row != 0 and spiral[row - 1][cell] == 0:
                row -= 1
            else:
                direction = RIGHT
                cell += 1
    return spiral


print(spiralNumbers(5))


#------------------------------------------------------------------------------------------------#


def sudoku(grid):
    match = [i for i in range(1, 10)]
    for row in grid:
        if sorted(row) != match:
            return False
    for column_index in range(9):
        column = [grid[row_index][column_index] for row_index in range(9)]
        if sorted(column) != match:
            return False
    for row in range(0, 9, 3):
        for column in range(0, 9, 3):
            box = []
            box.extend(grid[row][column : column + 3])
            box.extend(grid[row + 1][column : column + 3])
            box.extend(grid[row + 2][column : column + 3])
            if sorted(box) != match:
                return False
    return True


#------------------------------------------------------------------------------------------------#


def addTwoDigits(n):
    return (n // 10) + (n % 10)


#------------------------------------------------------------------------------------------------#


def largestNumber(n):
    return int("9" * n)


#------------------------------------------------------------------------------------------------#


def candies(n, m):
    return (m // n) * n


#------------------------------------------------------------------------------------------------#


def seatsInTheater(nCols, nRows, col, row):
    return (nCols - col + 1) * (nRows - row)


#------------------------------------------------------------------------------------------------#


def maxMultiple(divisor, bound):
    for num in range(bound, 1, -1):
        if num % divisor == 0:
            return num
    return 0


#------------------------------------------------------------------------------------------------#


def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n // 2)) % n


#------------------------------------------------------------------------------------------------#


def lateRide(n):
    hours = n // 60
    minutes = n % 60
    return (hours // 10) + (hours % 10) + (minutes // 10) + (minutes % 10)


#------------------------------------------------------------------------------------------------#


def phoneCall(min1, min2_10, min11, s):
    if s < min1:
        return 0
    if s == min1:
        return 1
    if s <= min1 + (min2_10 * 9):
        s -= min1
        return (s // min2_10) + 1
    s -= min1
    s -= min2_10 * 9
    return (s // min11) + 10


#------------------------------------------------------------------------------------------------#


def reachNextLevel(experience, threshold, reward):
    return experience + reward >= threshold


#------------------------------------------------------------------------------------------------#


def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and weight2 <= maxW:
        return max(value1, value2)
    if weight1 <= maxW:
        return value1
    if weight2 <= maxW:
        return value2
    return 0


#------------------------------------------------------------------------------------------------#


def extraNumber(a, b, c):
    if a == b:
        return c
    if a == c:
        return b
    return a


#------------------------------------------------------------------------------------------------#


def isInfiniteProcess(a, b):
    return a > b or (a % 2 != b % 2)


#------------------------------------------------------------------------------------------------#


def arithmeticExpression(a, b, c):
    return a + b == c or a - b == c or a * b == c or a / b == c


#------------------------------------------------------------------------------------------------#


def tennisSet(score1, score2):
    if max(score1, score2) == 6 and min(score1, score2) < 5:
        return True
    if 5 <= min(score1, score2) <= 6 and max(score1, score2) == 7:
        return True
    return False


#------------------------------------------------------------------------------------------------#


def willYou(young, beautiful, loved):
    return (young and beautiful) != loved


#------------------------------------------------------------------------------------------------#


def metroCard(lastNumberOfDays):
    if lastNumberOfDays == 30 or lastNumberOfDays == 28:
        return [31]
    return [28, 30, 31]


#------------------------------------------------------------------------------------------------#


def killKthBit(n, k):
    return n & ~(2 ** (k - 1))


#------------------------------------------------------------------------------------------------#


def arrayPacking(a):
    binary_array = [bin(num)[2:].rjust(8, "0") for num in a]
    out_string = "".join(binary_array[::-1])
    return int(out_string, 2)


#------------------------------------------------------------------------------------------------#


def rangeBitCount(a, b):
    array = list(range(a, b + 1))
    binary_array = [bin(num) for num in array]
    count_array = [binary.count("1") for binary in binary_array]
    return sum(count_array)


#------------------------------------------------------------------------------------------------#


def mirrorBits(a):
    binary = bin(a)[2:]
    return int(binary[::-1], 2)


#------------------------------------------------------------------------------------------------#


def secondRightmostZeroBit(n):
    return 2 ** bin(n)[::-1].find("0", bin(n)[::-1].find("0") + 1)


#------------------------------------------------------------------------------------------------#


def swapAdjacentBits(n):
    return ((n >> 1) & 1431655765) | ((n << 1) & 2863311530)


#------------------------------------------------------------------------------------------------#


def differentRightmostBit(n, m):
    return 2 ** bin((n ^ m))[::-1].find("1")


#------------------------------------------------------------------------------------------------#


def equalPairOfBits(n, m):
    return 2 ** bin(~(n ^ m))[::-1].find("1")


#------------------------------------------------------------------------------------------------#


def leastFactorial(n):
    factorial = 1
    index = 1
    while factorial < n:
        index += 1
        factorial *= index
    return factorial


#------------------------------------------------------------------------------------------------#


def countSumOfTwoRepresentations2(n, l, r):
    count = 0
    a = max(n - r, l)
    b = n - a
    while a <= r and a <= b:
        count += 1
        a += 1
        b -= 1
    return count


#------------------------------------------------------------------------------------------------#


def magicalWell(a, b, n):
    total = 0
    for i in range(n):
        total += a * b
        a += 1
        b += 1
    return total


#------------------------------------------------------------------------------------------------#


def lineUp(commands):
    count = 0
    smart_student = 0
    dumb_student = 0
    for command in commands:
        if command == "L":
            smart_student = (smart_student - 1) % 4
            dumb_student = (dumb_student + 1) % 4
        elif command == "R":
            smart_student = (smart_student + 1) % 4
            dumb_student = (dumb_student - 1) % 4
        elif command == "A":
            smart_student = (smart_student + 2) % 4
            dumb_student = (dumb_student + 2) % 4

        if smart_student == dumb_student:
            count += 1
    return count


#------------------------------------------------------------------------------------------------#


def additionWithoutCarrying(param1, param2):
    # Convert numbers to strings
    str1 = str(param1)
    str2 = str(param2)
    # Pad both to the same length with zeroes (to the left of the numbers)
    length = max(len(str2), len(str1))
    str1 = str1.rjust(length, "0")
    str2 = str2.rjust(length, "0")
    output = []
    for num1, num2 in zip(str1, str2):
        result = str(int(num1) + int(num2))[-1]
        output.append(result)
    return int("".join(output))


#------------------------------------------------------------------------------------------------#


def appleBoxes(k):
    red = 0
    yellow = 0
    for i in range(1, k + 1, 2):
        yellow += i * i
    for i in range(2, k + 1, 2):
        red += i * i

    return red - yellow


#------------------------------------------------------------------------------------------------#


def increaseNumberRoundness(n):
    string = str(n)
    # Check for immediate rejection
    if "0" not in string or len(string) < 2:
        return False
    # Since we know there's a 0, if it's not on
    # the left, then we know to accept
    if string[-1] != "0":
        return True
    # If there is only one 0, it must be at the end, so reject.
    if string.count("0") == 1:
        return False
    # If there are any numbers between the first 0
    # and the end of the string, then accept.
    first_zero = string.find("0")
    zero_sandwich = string[first_zero:]
    return zero_sandwich.count("0") != len(zero_sandwich)


#------------------------------------------------------------------------------------------------#


def rounders(value):
    length = len(str(value))
    magnitude = length - 1
    for i in range(length - 1):
        value = int((value / 10) + 0.5)
    return value * (10 ** magnitude)


#------------------------------------------------------------------------------------------------#


def candles(candlesNumber, makeNew):
    totalBurned = 0
    leftovers = 0
    while candlesNumber > 0:
        totalBurned += candlesNumber
        leftovers += candlesNumber
        candlesNumber = 0
        candlesNumber = leftovers // makeNew
        leftovers = leftovers % makeNew
    return totalBurned


#------------------------------------------------------------------------------------------------#


def countBlackCells(n, m):
    gcd = find_gcd(n, m)
    line_cells = n + m - gcd
    line_corner_cells = (gcd - 1) * 2
    return line_cells + line_corner_cells


#------------------------------------------------------------------------------------------------#


def find_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a


#------------------------------------------------------------------------------------------------#


def createArray(size):
    return [1] * size


#------------------------------------------------------------------------------------------------#


def arrayReplace(inputArray, elemToReplace, substitutionElem):
    output = [
        elem if elem != elemToReplace else substitutionElem for elem in inputArray
    ]
    return output


#------------------------------------------------------------------------------------------------#


def firstReverseTry(arr):
    if len(arr) < 2:
        return arr
    if len(arr) < 4:
        return arr[::-1]
    return arr[-1:] + arr[1:-1] + arr[:1]


#------------------------------------------------------------------------------------------------#


def concatenateArrays(a, b):
    return a + b


#------------------------------------------------------------------------------------------------#


def removeArrayPart(inputArray, l, r):
    return inputArray[:l] + inputArray[r + 1 :]


#------------------------------------------------------------------------------------------------#


def isSmooth(arr):
    if arr[0] != arr[-1]:
        return False
    if len(arr) % 2 == 0:
        middle = arr[len(arr) // 2] + arr[(len(arr) // 2) - 1]
    else:
        middle = arr[len(arr) // 2]
    return arr[0] == middle


#------------------------------------------------------------------------------------------------#


def replaceMiddle(arr):
    if len(arr) % 2 != 0:
        return arr
    right_middle = len(arr) // 2
    middle_value = arr[right_middle] + arr[right_middle - 1]
    return arr[: right_middle - 1] + [middle_value] + arr[right_middle + 1 :]


#------------------------------------------------------------------------------------------------#


def makeArrayConsecutive2(statues):
    count = 0
    for i in range(min(statues), max(statues)):
        if i not in statues:
            count += 1
    return count


#------------------------------------------------------------------------------------------------#


def isPower(n):
    if n == 1:
        return True

    a = 2
    b = 2
    while a ** 2 <= n:
        while a ** b <= n:
            if a ** b == n:
                return True
            b += 1
        b = 2
        a += 1
    return False


#------------------------------------------------------------------------------------------------#


def isSumOfConsecutive2(n):
    count = 0
    right = 2
    arr = [1, 2]
    while right <= (n // 2) + 1:
        total = sum(arr)
        if total == n:
            count += 1
            del arr[0]
        elif total < n:
            right += 1
            arr.append(right)
        elif total > n:
            del arr[0]
    return count


#------------------------------------------------------------------------------------------------#


def squareDigitsSequence(a0):
    sequence = [a0]
    while sequence[-1] not in sequence[:-1]:
        next_value = 0
        for digit in str(sequence[-1]):
            next_value += int(digit) ** 2
        sequence.append(next_value)
    return len(sequence)


#------------------------------------------------------------------------------------------------#


def pagesNumberingWithInk(current, numberOfDigits):
    numberOfDigits -= len(str(current))
    next_digits = len(str(current + 1))
    while numberOfDigits >= next_digits:
        current += 1
        numberOfDigits -= next_digits
        next_digits = len(str(current))
    return current


#------------------------------------------------------------------------------------------------#


def comfortableNumbers(l, r):
    count = 0
    for a in range(l, r):
        for b in range(a + 1, r + 1):
            a_sum = sum(int(digit) for digit in str(a))
            b_sum = sum(int(digit) for digit in str(b))
            if b <= a + a_sum and a >= b - b_sum:
                count += 1
    return count


#------------------------------------------------------------------------------------------------#


def weakNumbers(n):
    all_factors = [count_factors(num) for num in range(1, n + 1)]
    weaknesses = []
    for num, num_factors in enumerate(all_factors, 1):
        weakness = 0
        for factor in all_factors[:num]:
            if factor > num_factors:
                weakness += 1
        weaknesses.append(weakness)
        weakest = max(weaknesses)
        return [weakest, weaknesses.count(weakest)]


#------------------------------------------------------------------------------------------------#


def count_factors(n):
    factors = 0
    for i in range(1, n + 1):
        if n % i == 0:
            factors += 1
    return factors


print(weakNumbers(500))

import math


#------------------------------------------------------------------------------------------------#


def rectangleRotation(a, b):
    n = a / (2 ** 0.5)
    m = b / (2 ** 0.5)
    points = (math.floor(n) * math.floor(m)) + (math.ceil(n) * math.ceil(m))
    if math.floor(n) % 2 != math.floor(m) % 2:
        points -= 1
    return points


# rectangleRotation(6, 4)
print(rectangleRotation(8, 6))
```

{% endtab %}

{% tab title="Codesignal" %}

```python
# ------------------------------------------------------------------------------------------------#
```

```python
# ------------------------------------------------------------------------------------------------#


def centuryFromYear(year):
    return ((year - 1) // 100) + 1
```

```python
# ------------------------------------------------------------------------------------------------#


def checkPalindrome(inputString):
    return inputString == inputString[::-1]
```

```python
# ------------------------------------------------------------------------------------------------#


def adjacentElementsProduct(inputArray):
    max = inputArray[0] * inputArray[1]
    for i in range(len(inputArray) - 1):
        if inputArray[i] * inputArray[i + 1] > max:
            max = inputArray[i] * inputArray[i + 1]
    return max
```

```python
# ------------------------------------------------------------------------------------------------#


def shapeArea(n):
    sum = n * 2 - 1
    for i in range(1, (n * 2) - 1, 2):
        sum += i * 2
    return sum
```

```python
# ------------------------------------------------------------------------------------------------#


def makeArrayConsecutive2(statues):
    return max(statues) - min(statues) - len(statues) + 1
```

```python
# ------------------------------------------------------------------------------------------------#


def almostIncreasingSequence(sequence):
    i = 0
    while i < len(sequence) - 1:
        if not sequence[i] < sequence[i + 1]:
            if increasingSequence(
                sequence[:i] + sequence[i + 1 :]
            ) or increasingSequence(sequence[: i + 1] + sequence[i + 2 :]):
                return True
            else:
                return False
        i += 1
    return True
```

```python
# ------------------------------------------------------------------------------------------------#


def increasingSequence(sequence):
    for i in range(len(sequence) - 1):
        if not sequence[i] < sequence[i + 1]:
            return False
    return True
```

```python
# ------------------------------------------------------------------------------------------------#


def matrixElementsSum(matrix):
    if len(matrix) > 1:
        for row in range(1, len(matrix)):
            for room in range(len(matrix[row])):
                if matrix[row - 1][room] == 0:
                    matrix[row][room] = 0
    sum = 0
    for row in matrix:
        for room in row:
            sum += room
    return sum
```

```python
# ------------------------------------------------------------------------------------------------#


def allLongestStrings(inputArray):
    length = max([len(word) for word in inputArray])
    result = [word for word in inputArray if len(word) == length]
    return result
```

```python
# ------------------------------------------------------------------------------------------------#


def commonCharacterCount(s1, s2):
    count = 0
    word2 = list(s2)
    for letter in s1:
        if letter in word2:
            word2.remove(letter)
            count += 1
    return count
```

```python
# ------------------------------------------------------------------------------------------------#


def isLucky(n):
    string = str(n)
    top = [int(x) for x in string[: len(string) // 2]]
    bottom = [int(x) for x in string[len(string) // 2 :]]
    return sum(top) == sum(bottom)
```

```python
# ------------------------------------------------------------------------------------------------#


def sortByHeight(a):
    treePositions = [x for x in range(len(a)) if a[x] == -1]
    people = sorted([x for x in a if x != -1])
    for tree in treePositions:
        people.insert(tree, -1)
    return people


import re
```

```python
# ------------------------------------------------------------------------------------------------#


def reverseParentheses(s):
    while "(" in s:
        match = re.search("\([^()]*\)", s)
        match_string = match.group(0)[1 : len(match.group(0)) - 1]
        reversed_match_string = match_string[::-1]
        s = s[: match.start()] + reversed_match_string + s[match.end() :]
    return s
```

```python
# ------------------------------------------------------------------------------------------------#


def alternatingSums(a):
    team1 = sum(a[0::2])
    team2 = sum(a[1::2])
    return [team1, team2]
```

```python
# ------------------------------------------------------------------------------------------------#


def addBorder(picture):
    picture = ["*" + string + "*" for string in picture]
    picture = [("*" * len(picture[0]))] + picture + [("*" * len(picture[0]))]
    return picture
```

```python
# ------------------------------------------------------------------------------------------------#


def areSimilar(a, b):
    diff = [i for i in range(len(a)) if a[i] != b[i]]
    if len(diff) == 2:
        b[diff[0]], b[diff[1]] = b[diff[1]], b[diff[0]]
    return a == b
```

```python
# ------------------------------------------------------------------------------------------------#


def arrayChange(inputArray):
    count = 0
    for i in range(1, len(inputArray)):
        if inputArray[i - 1] >= inputArray[i]:
            difference = inputArray[i - 1] - inputArray[i]
            inputArray[i] += difference + 1
            count += difference + 1
    return count
```

```python
# ------------------------------------------------------------------------------------------------#


def palindromeRearranging(inputString):
    inputList = sorted(inputString)
    foundMiddle = False
    while len(inputList) > 1:
        if inputList[0] == inputList[1]:
            del inputList[1]
        elif not foundMiddle:
            foundMiddle = True
        else:
            return False
        del inputList[0]
    return len(inputList) == 0 or not foundMiddle
```

```python
# ------------------------------------------------------------------------------------------------#


def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    sameHands = yourLeft == friendsLeft and yourRight == friendsRight
    differentHands = yourLeft == friendsRight and yourRight == friendsLeft
    return sameHands or differentHands
```

```python
# ------------------------------------------------------------------------------------------------#


def arrayMaximalAdjacentDifference(inputArray):
    diffs = []
    for i in range(len(inputArray) - 1):
        diffs.append(abs(inputArray[i] - inputArray[i + 1]))
    return max(diffs)
```

```python
# ------------------------------------------------------------------------------------------------#


def isIPv4Address(inputString):
    strings = [string for string in inputString.split(".")]
    for string in strings:
        if not string.isdecimal():
            return False
    nums = [int(num) for num in strings]
    return max(nums) <= 255 and min(nums) >= 0 and len(nums) == 4
```

```python
# ------------------------------------------------------------------------------------------------#


def avoidObstacles(inputArray):
    for length in range(2, max(inputArray) + 2):
        done = True
        jump = length
        while jump < (max(inputArray) + length):
            if jump in inputArray:
                done = False
                break
            jump += length
        if done:
            return length
```

```python
# ------------------------------------------------------------------------------------------------#


def boxBlur(image):
    outImage = []
    for row in range(1, len(image) - 1):
        line = []
        for pixel in range(1, len(image[row]) - 1):
            total = (
                image[row - 1][pixel - 1]
                + image[row - 1][pixel]
                + image[row - 1][pixel + 1]
                + image[row][pixel - 1]
                + image[row][pixel]
                + image[row][pixel + 1]
                + image[row + 1][pixel - 1]
                + image[row + 1][pixel]
                + image[row + 1][pixel + 1]
            )
            line.append(total // 9)
        outImage.append(line)
    return outImage
```

```python
# ------------------------------------------------------------------------------------------------#


def minesweeper(matrix):
    TOP = 0
    BOTTOM = len(matrix) - 1
    LEFT = 0
    RIGHT = len(matrix[0]) - 1

    outMatrix = []
    for row in range(len(matrix)):
        outRow = []
        for cell in range(len(matrix[row])):
            outRow.append(0)
            if row != TOP:
                outRow[cell] += matrix[row - 1][cell]
            if row != BOTTOM:
                outRow[cell] += matrix[row + 1][cell]
            if cell != LEFT:
                outRow[cell] += matrix[row][cell - 1]
            if cell != RIGHT:
                outRow[cell] += matrix[row][cell + 1]
            if row != TOP and cell != LEFT:
                outRow[cell] += matrix[row - 1][cell - 1]
            if row != TOP and cell != RIGHT:
                outRow[cell] += matrix[row - 1][cell + 1]
            if row != BOTTOM and cell != LEFT:
                outRow[cell] += matrix[row + 1][cell - 1]
            if row != BOTTOM and cell != RIGHT:
                outRow[cell] += matrix[row + 1][cell + 1]
        outMatrix.append(outRow)
    return outMatrix
```

```python
# ------------------------------------------------------------------------------------------------#


def arrayReplace(inputArray, elemToReplace, substitutionElem):
    return [x if x != elemToReplace else substitutionElem for x in inputArray]
```

```python
# ------------------------------------------------------------------------------------------------#


def evenDigitsOnly(n):
    return all(
        (True if digit in ("0", "2", "4", "6", "8") else False for digit in str(n))
    )
```

```python
# ------------------------------------------------------------------------------------------------#


def variableName(name):
    return name.replace("_", "").isalnum() and not name[0].isdigit()
```

```python
# ------------------------------------------------------------------------------------------------#


def alphabeticShift(inputString):
    return "".join([chr(ord(x) + 1) if x != "z" else "a" for x in inputString])
```

```python
# ------------------------------------------------------------------------------------------------#


def chessBoardCellColor(cell1, cell2):
    color1 = ((ord(cell1[0]) - ord("A")) + ord(cell1[1]) - ord("1")) % 2 == 0
    color2 = ((ord(cell2[0]) - ord("A")) + ord(cell2[1]) - ord("1")) % 2 == 0
    return color1 == color2
```

```python
# ------------------------------------------------------------------------------------------------#


def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n / 2)) % n
```

```python
# ------------------------------------------------------------------------------------------------#


def depositProfit(deposit, rate, threshold):
    year = 0
    while deposit < threshold:
        deposit *= 1 + (rate / 100)
        year += 1
    return year
```

```python
# ------------------------------------------------------------------------------------------------#
# ------------------------------------------------------------------------------------------------#


def absoluteValuesSumMinimization(a):
    sums = {}
    for num in a:
        total = sum([abs(a[i] - num) for i in range(len(a))])
        if total in sums:
            sums[total] = min(num, sums[total])
        else:
            sums[total] = num
        print(sums)
    return sums[min(sums)]


import itertools
```

```python
# ------------------------------------------------------------------------------------------------#


def stringsRearrangement(inputArray):
    permutations = itertools.permutations(inputArray)
    for array in permutations:
        if testArrangement(array):
            return True
    return False
```

```python
# ------------------------------------------------------------------------------------------------#


def testArrangement(array):
    for i in range(len(array) - 1):
        if sum([a != b for a, b in zip(array[i], array[i + 1])]) != 1:
            return False
    return True
```

```python
# ------------------------------------------------------------------------------------------------#


def extractEachKth(inputArray, k):
    return [inputArray[x] for x in range(len(inputArray)) if (x + 1) % k != 0]
```

```python
# ------------------------------------------------------------------------------------------------#


def firstDigit(inputString):
    for char in inputString:
        if char.isdigit():
            return char
```

```python
# ------------------------------------------------------------------------------------------------#


def differentSymbolsNaive(s):
    return len(set(s))
```

```python
# ------------------------------------------------------------------------------------------------#


def arrayMaxConsecutiveSum(inputArray, k):
    sums = [sum(inputArray[:k])]
    for i in range(1, len(inputArray) - k + 1):
        sums.append(sums[i - 1] - inputArray[i - 1] + inputArray[i + k - 1])
    return max(sums)
```

```python
# ------------------------------------------------------------------------------------------------#


def growingPlant(upSpeed, downSpeed, desiredHeight):
    height = 0
    days = 1
    height += upSpeed
    while height < desiredHeight:
        days += 1
        height -= downSpeed
        height += upSpeed
    return days
```

```python
# ------------------------------------------------------------------------------------------------#


def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and (weight2 > maxW or value1 >= value2):
        return value1
    if weight2 <= maxW and (weight1 > maxW or value2 >= value1):
        return value2
    return 0
```

```python
# ------------------------------------------------------------------------------------------------#


def longestDigitsPrefix(inputString):
    for char in range(len(inputString)):
        if not inputString[char].isdigit():
            return inputString[:char]
    return inputString
```

```python
# ------------------------------------------------------------------------------------------------#


def digitDegree(n):
    degree = 0
    while len(str(n)) > 1:
        n = sum((int(digit) for digit in str(n)))
        degree += 1
    return degree
```

```python
# ------------------------------------------------------------------------------------------------#


def bishopAndPawn(bishop, pawn):
    return abs(ord(bishop[0]) - ord(pawn[0])) == abs(ord(bishop[1]) - ord(pawn[1]))
```

```python
# ------------------------------------------------------------------------------------------------#


def isBeautifulString(inputString):
    for letter in range(ord("a"), ord("z")):
        if inputString.count(chr(letter)) < inputString.count(chr(letter + 1)):
            return False
    return True
```

```python
# ------------------------------------------------------------------------------------------------#


def findEmailDomain(address):
    return address[address.rfind("@") + 1 :]
```

```python
# ------------------------------------------------------------------------------------------------#


def buildPalindrome(st):
    if st == st[::-1]:  # Check for initial palindrome
        return st
    index = 0
    subStr = st[index:]
    while subStr != subStr[::-1]:  # while substring is not a palindrome
        index += 1
        subStr = st[index:]
    return st + st[index - 1 :: -1]
```

```python
# ------------------------------------------------------------------------------------------------#


def electionsWinners(votes, k):
    winners = 0
    current_winner = max(votes)
    for candidate in votes:
        if k > 0 and candidate + k > current_winner:
            winners += 1
        if k == 0 and candidate == current_winner and votes.count(candidate) == 1:
            winners += 1
    return winners
```

```python
# ------------------------------------------------------------------------------------------------#


def isMAC48Address(inputString):
    hex_chars = (
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    )
    groups = inputString.split("-")
    if len(groups) != 6:
        return False
    if not all((len(group) == 2 for group in groups)):
        return False
    if not all((group[0] in hex_chars and group[1] in hex_chars for group in groups)):
        return False
    return True
```

```python
# ------------------------------------------------------------------------------------------------#


def isDigit(symbol):
    return symbol.isdigit()
```

```python
# ------------------------------------------------------------------------------------------------#


def lineEncoding(s):
    count = 1
    output = []
    for char in range(1, len(s)):
        if s[char] == s[char - 1]:
            count += 1
        else:
            if count > 1:
                output.append(str(count) + s[char - 1])
            else:
                output.append(s[char - 1])
            count = 1
    if s[len(s) - 1] == s[len(s) - 2]:
        output.append(str(count) + s[len(s) - 1])
    else:
        output.append(s[len(s) - 1])
    return "".join(output)
```

```python
# ------------------------------------------------------------------------------------------------#


def chessKnight(cell):
    moves = 0
    # Starting at the top left, going counter-clockwise
    if ord(cell[0]) >= ord("b") and ord(cell[1]) <= ord("6"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) >= ord("b") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) <= ord("6"):
        moves += 1

    return moves
```

```python
# ------------------------------------------------------------------------------------------------#


def deleteDigit(n):
    num = str(n)
    highest = 0
    for digit in range(len(num)):
        output = num[:digit] + num[digit + 1 :]
        if int(output) > int(highest):
            highest = output
    return int(highest)
```

```python
# ------------------------------------------------------------------------------------------------#


def longestWord(text):
    longest = []
    word = []
    for char in text:
        if ord("A") <= ord(char) <= ord("Z") or ord("a") <= ord(char) <= ord("z"):
            word.append(char)
        else:
            if len(word) > len(longest):
                longest = word
            word = []
    if len(word) > len(longest):
        longest = word
    return "".join(longest)
```

```python
# ------------------------------------------------------------------------------------------------#


def validTime(time):
    groups = time.split(":")
    if len(groups) != 2:
        return False
    if not (groups[0].isdigit() and groups[1].isdigit()):
        return False
    if int(groups[0]) > 23 or int(groups[1]) > 59:
        return False
    return True
```

```python
# ------------------------------------------------------------------------------------------------#


def sumUpNumbers(inputString):
    total = 0
    current_num = []
    for char in inputString:
        if char.isdigit():
            current_num.append(char)
        else:
            if len(current_num) > 0:
                num = int("".join(current_num))
                total += num
                current_num = []
    if len(current_num) > 0:
        num = int("".join(current_num))
        total += num
    return total
```

```python
# ------------------------------------------------------------------------------------------------#


def differentSquares(matrix):
    squares = set()
    for row in range(len(matrix) - 1):
        for cell in range(len(matrix[row]) - 1):
            square = (
                (matrix[row][cell], matrix[row][cell + 1]),
                (matrix[row + 1][cell], matrix[row + 1][cell + 1]),
            )
            squares.add(square)
    return len(squares)
```

```python
# ------------------------------------------------------------------------------------------------#


def digitsProduct(product):
    # New idea: add product to factors
    # while max(factors) > 10: split that num into factors
    if product == 0:
        return 10

    factors = [product]
    while max(factors) > 9:
        factored = findFactors(max(factors))
        if factored:
            factors.remove(max(factors))
            factors.extend(factored)
        else:
            return -1

    while factors.count(3) >= 2:
        factors.remove(3)
        factors.remove(3)
        factors.append(9)

    while factors.count(2) > 2:
        factors.remove(2)
        factors.remove(2)
        factors.remove(2)
        factors.append(8)

    while factors.count(2) > 1:
        factors.remove(2)
        factors.remove(2)
        factors.append(4)

    while 2 in factors and 3 in factors:
        factors.remove(2)
        factors.remove(3)
        factors.append(6)

    return int("".join(map(str, sorted(factors))))
```

```python
# ------------------------------------------------------------------------------------------------#


def findFactors(n):
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return i, n // i
    return False
```

```python
# ------------------------------------------------------------------------------------------------#


def fileNaming(names):
    outnames = []
    for name in names:
        if name in outnames:
            k = 1
            while "{}({})".format(name, k) in outnames:
                k += 1
            name = "{}({})".format(name, k)
        outnames.append(name)
    return outnames
```

```python
# ------------------------------------------------------------------------------------------------#


def messageFromBinaryCode(code):
    output = []
    for i in range(0, len(code), 8):
        letter = chr(int(code[i : i + 8], 2))
        output.append(letter)
    return "".join(output)
```

```python
# ------------------------------------------------------------------------------------------------#


def spiralNumbers(n):
    LEFT = "left"
    RIGHT = "right"
    UP = "up"
    DOWN = "down"
    direction = RIGHT
    spiral = [[0 for i in range(n)] for j in range(n)]
    row = 0
    cell = 0
    for num in range(1, (n * n) + 1):
        spiral[row][cell] = num
        if direction == RIGHT:
            if cell != n - 1 and spiral[row][cell + 1] == 0:
                cell += 1
            else:
                direction = DOWN
                row += 1
        elif direction == DOWN:
            if row != n - 1 and spiral[row + 1][cell] == 0:
                row += 1
            else:
                direction = LEFT
                cell -= 1
        elif direction == LEFT:
            if cell != 0 and spiral[row][cell - 1] == 0:
                cell -= 1
            else:
                direction = UP
                row -= 1
        elif direction == UP:
            if row != 0 and spiral[row - 1][cell] == 0:
                row -= 1
            else:
                direction = RIGHT
                cell += 1
    return spiral


print(spiralNumbers(5))
```

```python
# ------------------------------------------------------------------------------------------------#


def sudoku(grid):
    match = [i for i in range(1, 10)]
    for row in grid:
        if sorted(row) != match:
            return False
    for column_index in range(9):
        column = [grid[row_index][column_index] for row_index in range(9)]
        if sorted(column) != match:
            return False
    for row in range(0, 9, 3):
        for column in range(0, 9, 3):
            box = []
            box.extend(grid[row][column : column + 3])
            box.extend(grid[row + 1][column : column + 3])
            box.extend(grid[row + 2][column : column + 3])
            if sorted(box) != match:
                return False
    return True
```

```python
# ------------------------------------------------------------------------------------------------#


def addTwoDigits(n):
    return (n // 10) + (n % 10)
```

```python
# ------------------------------------------------------------------------------------------------#


def largestNumber(n):
    return int("9" * n)
```

```python
# ------------------------------------------------------------------------------------------------#


def candies(n, m):
    return (m // n) * n
```

```python
# ------------------------------------------------------------------------------------------------#


def seatsInTheater(nCols, nRows, col, row):
    return (nCols - col + 1) * (nRows - row)
```

```python
# ------------------------------------------------------------------------------------------------#


def maxMultiple(divisor, bound):
    for num in range(bound, 1, -1):
        if num % divisor == 0:
            return num
    return 0
```

```python
# ------------------------------------------------------------------------------------------------#


def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n // 2)) % n
```

```python
# ------------------------------------------------------------------------------------------------#


def lateRide(n):
    hours = n // 60
    minutes = n % 60
    return (hours // 10) + (hours % 10) + (minutes // 10) + (minutes % 10)
```

```python
# ------------------------------------------------------------------------------------------------#


def phoneCall(min1, min2_10, min11, s):
    if s < min1:
        return 0
    if s == min1:
        return 1
    if s <= min1 + (min2_10 * 9):
        s -= min1
        return (s // min2_10) + 1
    s -= min1
    s -= min2_10 * 9
    return (s // min11) + 10
```

```python
# ------------------------------------------------------------------------------------------------#


def reachNextLevel(experience, threshold, reward):
    return experience + reward >= threshold
```

```python
# ------------------------------------------------------------------------------------------------#


def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and weight2 <= maxW:
        return max(value1, value2)
    if weight1 <= maxW:
        return value1
    if weight2 <= maxW:
        return value2
    return 0
```

```python
# ------------------------------------------------------------------------------------------------#


def extraNumber(a, b, c):
    if a == b:
        return c
    if a == c:
        return b
    return a
```

```python
# ------------------------------------------------------------------------------------------------#


def isInfiniteProcess(a, b):
    return a > b or (a % 2 != b % 2)
```

```python
# ------------------------------------------------------------------------------------------------#


def arithmeticExpression(a, b, c):
    return a + b == c or a - b == c or a * b == c or a / b == c
```

```python
# ------------------------------------------------------------------------------------------------#


def tennisSet(score1, score2):
    if max(score1, score2) == 6 and min(score1, score2) < 5:
        return True
    if 5 <= min(score1, score2) <= 6 and max(score1, score2) == 7:
        return True
    return False
```

```python
# ------------------------------------------------------------------------------------------------#


def willYou(young, beautiful, loved):
    return (young and beautiful) != loved
```

```python
# ------------------------------------------------------------------------------------------------#


def metroCard(lastNumberOfDays):
    if lastNumberOfDays == 30 or lastNumberOfDays == 28:
        return [31]
    return [28, 30, 31]
```

```python
# ------------------------------------------------------------------------------------------------#


def killKthBit(n, k):
    return n & ~(2 ** (k - 1))
```

```python
# ------------------------------------------------------------------------------------------------#


def arrayPacking(a):
    binary_array = [bin(num)[2:].rjust(8, "0") for num in a]
    out_string = "".join(binary_array[::-1])
    return int(out_string, 2)
```

```python
# ------------------------------------------------------------------------------------------------#


def rangeBitCount(a, b):
    array = list(range(a, b + 1))
    binary_array = [bin(num) for num in array]
    count_array = [binary.count("1") for binary in binary_array]
    return sum(count_array)
```

```python
# ------------------------------------------------------------------------------------------------#


def mirrorBits(a):
    binary = bin(a)[2:]
    return int(binary[::-1], 2)
```

```python
# ------------------------------------------------------------------------------------------------#


def secondRightmostZeroBit(n):
    return 2 ** bin(n)[::-1].find("0", bin(n)[::-1].find("0") + 1)
```

```python
# ------------------------------------------------------------------------------------------------#


def swapAdjacentBits(n):
    return ((n >> 1) & 1431655765) | ((n << 1) & 2863311530)
```

```python
# ------------------------------------------------------------------------------------------------#


def differentRightmostBit(n, m):
    return 2 ** bin((n ^ m))[::-1].find("1")
```

```python
# ------------------------------------------------------------------------------------------------#


def equalPairOfBits(n, m):
    return 2 ** bin(~(n ^ m))[::-1].find("1")
```

```python
# ------------------------------------------------------------------------------------------------#


def leastFactorial(n):
    factorial = 1
    index = 1
    while factorial < n:
        index += 1
        factorial *= index
    return factorial
```

```python
# ------------------------------------------------------------------------------------------------#


def countSumOfTwoRepresentations2(n, l, r):
    count = 0
    a = max(n - r, l)
    b = n - a
    while a <= r and a <= b:
        count += 1
        a += 1
        b -= 1
    return count
```

```python
# ------------------------------------------------------------------------------------------------#


def magicalWell(a, b, n):
    total = 0
    for i in range(n):
        total += a * b
        a += 1
        b += 1
    return total
```

```python
# ------------------------------------------------------------------------------------------------#


def lineUp(commands):
    count = 0
    smart_student = 0
    dumb_student = 0
    for command in commands:
        if command == "L":
            smart_student = (smart_student - 1) % 4
            dumb_student = (dumb_student + 1) % 4
        elif command == "R":
            smart_student = (smart_student + 1) % 4
            dumb_student = (dumb_student - 1) % 4
        elif command == "A":
            smart_student = (smart_student + 2) % 4
            dumb_student = (dumb_student + 2) % 4

        if smart_student == dumb_student:
            count += 1
    return count
```

```python
# ------------------------------------------------------------------------------------------------#


def additionWithoutCarrying(param1, param2):
    # Convert numbers to strings
    str1 = str(param1)
    str2 = str(param2)
    # Pad both to the same length with zeroes (to the left of the numbers)
    length = max(len(str2), len(str1))
    str1 = str1.rjust(length, "0")
    str2 = str2.rjust(length, "0")
    output = []
    for num1, num2 in zip(str1, str2):
        result = str(int(num1) + int(num2))[-1]
        output.append(result)
    return int("".join(output))
```

```python
# ------------------------------------------------------------------------------------------------#


def appleBoxes(k):
    red = 0
    yellow = 0
    for i in range(1, k + 1, 2):
        yellow += i * i
    for i in range(2, k + 1, 2):
        red += i * i

    return red - yellow
```

```python
# ------------------------------------------------------------------------------------------------#


def increaseNumberRoundness(n):
    string = str(n)
    # Check for immediate rejection
    if "0" not in string or len(string) < 2:
        return False
    # Since we know there's a 0, if it's not on
    # the left, then we know to accept
    if string[-1] != "0":
        return True
    # If there is only one 0, it must be at the end, so reject.
    if string.count("0") == 1:
        return False
    # If there are any numbers between the first 0
    # and the end of the string, then accept.
    first_zero = string.find("0")
    zero_sandwich = string[first_zero:]
    return zero_sandwich.count("0") != len(zero_sandwich)
```

```python
# ------------------------------------------------------------------------------------------------#


def rounders(value):
    length = len(str(value))
    magnitude = length - 1
    for i in range(length - 1):
        value = int((value / 10) + 0.5)
    return value * (10 ** magnitude)
```

```python
# ------------------------------------------------------------------------------------------------#


def candles(candlesNumber, makeNew):
    totalBurned = 0
    leftovers = 0
    while candlesNumber > 0:
        totalBurned += candlesNumber
        leftovers += candlesNumber
        candlesNumber = 0
        candlesNumber = leftovers // makeNew
        leftovers = leftovers % makeNew
    return totalBurned
```

```python
# ------------------------------------------------------------------------------------------------#


def countBlackCells(n, m):
    gcd = find_gcd(n, m)
    line_cells = n + m - gcd
    line_corner_cells = (gcd - 1) * 2
    return line_cells + line_corner_cells
```

```python
# ------------------------------------------------------------------------------------------------#


def find_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
```

```python
# ------------------------------------------------------------------------------------------------#


def createArray(size):
    return [1] * size
```

```python
# ------------------------------------------------------------------------------------------------#


def arrayReplace(inputArray, elemToReplace, substitutionElem):
    output = [
        elem if elem != elemToReplace else substitutionElem for elem in inputArray
    ]
    return output
```

```python
# ------------------------------------------------------------------------------------------------#


def firstReverseTry(arr):
    if len(arr) < 2:
        return arr
    if len(arr) < 4:
        return arr[::-1]
    return arr[-1:] + arr[1:-1] + arr[:1]
```

```python
# ------------------------------------------------------------------------------------------------#


def concatenateArrays(a, b):
    return a + b
```

```python
# ------------------------------------------------------------------------------------------------#


def removeArrayPart(inputArray, l, r):
    return inputArray[:l] + inputArray[r + 1 :]
```

```python
# ------------------------------------------------------------------------------------------------#


def isSmooth(arr):
    if arr[0] != arr[-1]:
        return False
    if len(arr) % 2 == 0:
        middle = arr[len(arr) // 2] + arr[(len(arr) // 2) - 1]
    else:
        middle = arr[len(arr) // 2]
    return arr[0] == middle
```

```python
# ------------------------------------------------------------------------------------------------#


def replaceMiddle(arr):
    if len(arr) % 2 != 0:
        return arr
    right_middle = len(arr) // 2
    middle_value = arr[right_middle] + arr[right_middle - 1]
    return arr[: right_middle - 1] + [middle_value] + arr[right_middle + 1 :]
```

```python
# ------------------------------------------------------------------------------------------------#


def makeArrayConsecutive2(statues):
    count = 0
    for i in range(min(statues), max(statues)):
        if i not in statues:
            count += 1
    return count
```

```python
# ------------------------------------------------------------------------------------------------#


def isPower(n):
    if n == 1:
        return True

    a = 2
    b = 2
    while a ** 2 <= n:
        while a ** b <= n:
            if a ** b == n:
                return True
            b += 1
        b = 2
        a += 1
    return False
```

```python
# ------------------------------------------------------------------------------------------------#


def isSumOfConsecutive2(n):
    count = 0
    right = 2
    arr = [1, 2]
    while right <= (n // 2) + 1:
        total = sum(arr)
        if total == n:
            count += 1
            del arr[0]
        elif total < n:
            right += 1
            arr.append(right)
        elif total > n:
            del arr[0]
    return count
```

```python
# ------------------------------------------------------------------------------------------------#


def squareDigitsSequence(a0):
    sequence = [a0]
    while sequence[-1] not in sequence[:-1]:
        next_value = 0
        for digit in str(sequence[-1]):
            next_value += int(digit) ** 2
        sequence.append(next_value)
    return len(sequence)
```

```python
# ------------------------------------------------------------------------------------------------#


def pagesNumberingWithInk(current, numberOfDigits):
    numberOfDigits -= len(str(current))
    next_digits = len(str(current + 1))
    while numberOfDigits >= next_digits:
        current += 1
        numberOfDigits -= next_digits
        next_digits = len(str(current))
    return current
```

```python
# ------------------------------------------------------------------------------------------------#


def comfortableNumbers(l, r):
    count = 0
    for a in range(l, r):
        for b in range(a + 1, r + 1):
            a_sum = sum(int(digit) for digit in str(a))
            b_sum = sum(int(digit) for digit in str(b))
            if b <= a + a_sum and a >= b - b_sum:
                count += 1
    return count
```

```python
# ------------------------------------------------------------------------------------------------#


def weakNumbers(n):
    all_factors = [count_factors(num) for num in range(1, n + 1)]
    weaknesses = []
    for num, num_factors in enumerate(all_factors, 1):
        weakness = 0
        for factor in all_factors[:num]:
            if factor > num_factors:
                weakness += 1
        weaknesses.append(weakness)
        weakest = max(weaknesses)
        return [weakest, weaknesses.count(weakest)]
```

```python
# ------------------------------------------------------------------------------------------------#


def count_factors(n):
    factors = 0
    for i in range(1, n + 1):
        if n % i == 0:
            factors += 1
    return factors


print(weakNumbers(500))

import math
```

\`\`\`py

## ------------------------------------------------------------------------------------------------\#

{% endtab %}

{% tab title="Guesses" %}

```python
Given an array A return an output array B of size `[A.length - 2]` where B[i] = 1 if sides A[i],A[i+1] and A[i+2] form a triangle. Otherwise, set B[i] = 0.\
ex. A = [1, 2, 2, 5, 5, 4] should return B = [1,0,0,1]

Given two strings a and b, merge the strings so that the letters are added in alternating order starting with string a. If one string is longer than the other, then append the letters to the end of the merged string.\
ex. "abcd", "efghi" -> "aebfcgdhi"\
ex. "", "abcd" -> "abcd"\
ex. "abcdefg", "zxy" -> "azbxycdefg"\
Pretty easy. Just interlace them like a merge sort.

Given a string s, return the longest and lexicographically smallest palindromic string that can be formed from the characters.\
ex. "abbaa" -> "abba"\
ex. "adeadeadevue" -> "adeeaeeda"

```

def smallestPalindrome(s): if not s: return s res = [] counts = collections.Counter(s) alphabet = "abcdefghijklmnopqrstuvwxyz" middle_letter = "" for letter in alphabet: count = counts.get(letter, 0) if count > 0: if count % 2 == 1 and middle_letter == "": middle_letter = letter res.append(letter _ ((count - 1) // 2)) else: res.append(letter _ (count // 2)) first= "".join(sb) return first + middle_letter + first[::-1]

```

* * * * *

Easy-Medium:\
Given a list of strings `string_list` and a list of words `words`, determine whether each word in `words`\
can be formed as a concatenation of consecutive strings in `string_list` starting with index 0.\
ex. word = "oneTwoThree", string_list = ["one", "Three", "Two"] is false because the words aren't consecutive in string_list\
ex. word = "one", string_list = ["one", "Three", "Two"] is True because the concatenation stops at the first index in string_list\
ex. word = "one", string_list = ["One", "one", "Two"] is False because the concatenation doesn't start at 0.\
Just use the base idea from the LeetCode problem and then modify it for the consecutive concatenation requirement. It's actually easier than the LeetCode problem.

* * * * *

Medium:

Beauty of a matrix.\
Given an n x n matrix `M` and an int `k` where `n % k == 0`, divide the M into blocks of size `k x k` starting with the top left corner. i.e. a 9x9 matrix turns into 9 3x3s. The *beauty* of a block is the smallest positive number missing from a block. Rearrange `M` so that the blocks with the lowest beauty come before those with higher beauty (top left to bottom right). In a tie, you should place the block that came first in M before the other block.\
`Just do what the problem says. Make an array A = [(int beauty, int[][] block)...] and a stable sorting algorithm will handle things. Then glue the blocks back into the matrix.`

Rotate matrix around diagonals.\
Given an n x n matrix `M`, where n is odd and n > 1, and an integer `k`, rotate `M` counterclockwise `k` times which are not on the main diagonal or on the diagonal from the top right to the bottom left.\
Return the new matrix.\
Ex. I put *s to show which elements are fixed on the diagonals.

```

[*1*, 2, 3, 4, *5*] [6, *7*, 8, *9*, 10] [11, 12, *13*, 14, 15] [16, *17*, 18, *19*, 20] [*21*, 22, 23, 24, *25*]

```

Rotates to:

```

[*1*, 16, 11, 6, *5*] [22, *7*, 12, *9*, 2] [23, 18, *13*, 8, 3] [24, *17*, 14, *19*, 4] [*21*, 20, 15, 10, *25*]

```

Just do the obvious % 4 and then rotate a deepcopy like the LeetCode problem <https://leetcode.com/problems/rotate-image/discuss/18872/A-common-method-to-rotate-the-image>, but you check whether the element is on the diagonal before you reverse it or transpose it.

* * * * *

Medium/Hard:\
Given two arrays `a` and `b` of equal length, the absolute sum difference is the `sum Math.abs(a[i] - b[i])`. Replace one number in `a` with any number in `a` to minimize the absolute sum difference.





---



I tried answering all questions. Find them in serial order.\
I have tried giving credits wherever I used other's solution

```

# Author - https://leetcode.com/techdude/

# Question - 1

""" Given an array A return an output array B of size [A.length - 2] where B[i] = 1 if sides A[i],A[i+1] and A[i+2] form a triangle. Otherwise, set B[i] = 0. ex. A = [1, 2, 2, 5, 5, 4] should return B = [1,0,0,1] """

A = [1, 2, 2, 5, 5, 4]

def validTriangle(A): B = []; i=0 while i < len(A) - 2: a,b,c = A[i], A[i+1], A[i+2]

        if a+b>c and b+c>a and a+c>b:
            B.append(1)
        else:
            B.append(0)
        i += 1
    return B

print(validTriangle(A)) print('********************\*********************')

""" Given two strings a and b, merge the strings so that the letters are added in alternating order starting with string a. If one string is longer than the other, then append the letters to the end of the merged string. ex. "abcd", "efghi" -> "aebfcgdhi" ex. "", "abcd" -> "abcd" ex. "abcdefg", "zxy" -> "azbxycdefg" """

a='abcd' b = 'efghi'

def mergeStrings(a,b): res = '' for l1,l2 in zip(a,b): res += l1 + l2 if len(a) < len(b): res += b[len(a):] elif len(a) > len(b): res += a[len(b):] return res

print(mergeStrings(a,b)) # aebfcgdhi a=''; b='abcd' print(mergeStrings(a,b)) # abcd a="abcdefg"; b="zxy" print(mergeStrings(a,b)) # azbxcydefg print('********************\*********************')

""" Given a string s, return the longest and lexicographically smallest palindromic string that can be formed from the characters.

ex. "abbaa" -> "abba" ex. "adeadeadevue" -> "adeeaeeda" """

import collections def smallestPalindrome(str): store = collections.Counter(str) lexic_store = [[key,val] for key,val in sorted(store.items(), key=lambda x:x[0]) if val > 1] lexic_store_single = [[key,val] for key,val in sorted(store.items(), key=lambda x:x[0]) if val % 2 == 1][0][0]

    res = ''
    for key,val in lexic_store:
        res += (key * int(val/2))
    return res + lexic_store_single + res[::-1]

str = "abbaa" print(smallestPalindrome(str)) str = "adeadeadevue" print(smallestPalindrome(str))

# OP's solution - similar :)

def smallestPalindromeOP(s): if not s: return s res = [] counts = collections.Counter(s) alphabet = "abcdefghijklmnopqrstuvwxyz" middle_letter = "" for letter in alphabet: count = counts.get(letter, 0) if count > 0: if count % 2 == 1 and middle_letter == "": middle_letter = letter res.append(letter _ ((count - 1) // 2)) else: res.append(letter _ (count // 2))

    first = "".join(res)

    return first + middle_letter + first[::-1]

print(smallestPalindromeOP('abbaa')) print('********************\*********************')

# Easy - Medium

""" Given a list of strings string_list and a list of words words, determine whether each word in words can be formed as a concatenation of consecutive strings in string_list starting with index 0. ex. word = "oneTwoThree", string_list = ["one", "Three", "Two"] is false because the words aren't consecutive in string_list ex. word = "one", string_list = ["one", "Three", "Two"] is True because the concatenation stops at the first index in string_list ex. word = "one", string_list = ["One", "one", "Two"] is False because the concatenation doesn't start at 0. Just use the base idea from the LeetCode problem and then modify it for the consecutive concatenation requirement. It's actually easier than the LeetCode problem. """

word = "one"; string_list = ["one", "Three", "Two"]

def isConcatenate(word, string_list): res = '' for w in string_list: res += w if res == word: return True return False

print(isConcatenate(word, string_list)) print('********************\*********************')

# Medium

""" Beauty of a matrix. Given an n x n matrix M and an int k where n % k == 0, divide the M into blocks of size k x k starting with the top left corner. i.e. a 9x9 matrix turns into 9 3x3s. The beauty of a block is the smallest positive number missing from a block. Rearrange M so that the blocks with the lowest beauty come before those with higher beauty (top left to bottom right). In a tie, you should place the block that came first in M before the other block. """

matrix = [ [1,2,2,3], [3,4,10,4], [2,10,1,2], [5,4,4,5], ]

size = 2 # 2 x 2

def get_beauty(sub_matrix): sm = sorted(sub_matrix) magic_num = 1 for num in sm: if num > magic_num: return magic_num magic_num += 1 return magic_num

def magic_number(matrix): sub_matrices = [] serial = 0 for j in range(size): for i in range(size): x, y = j _ len(matrix)//size, i _ len(matrix)//size

            sub_matrix = []
            for p in range(size):
                for q in range(size):
                    sub_matrix.append(matrix[x+p][y+q])

            beauty_num = get_beauty(sub_matrix)
            sub_matrices.append([sub_matrix, beauty_num, serial])
            serial += 1

    sub_matrices.sort(key=lambda x: (x[1],x[2]))

    serial = 0
    for j in range(size):
        for i in range(size):
            x, y = j * len(matrix)//size, i * len(matrix)//size

            iter1 = iter(sub_matrices[serial][0])
            for p in range(size):
                for q in range(size):
                    matrix[x+p][y+q] = next(iter1)
            serial += 1

    for row in matrix:
        print(row)

    return matrix

magic_number(matrix)

print('********************\*********************')

""" Rotate matrix around diagonals. Given an n x n matrix M, where n is odd and n > 1, and an integer k, rotate M counterclockwise k times which are not on the main diagonal or on the diagonal from the top right to the bottom left. Return the new matrix. Ex. I put \*s to show which elements are fixed on the diagonals.

[*1*, 2, 3, 4, *5*] [6, *7*, 8, *9*, 10] [11, 12, *13*, 14, 15] [16, *17*, 18, *19*, 20] [*21*, 22, 23, 24, *25*]

Rotates to:

[*1*, 16, 11, 6, *5*] [22, *7*, 12, *9*, 2] [23, 18, *13*, 8, 3] [24, *17*, 14, *19*, 4] [*21*, 20, 15, 10, *25*] """

# Brilliant method - https://leetcode.com/problems/rotate-image/discuss/18872/A-common-method-to-rotate-the-image

# \* clockwise rotate

# \* first reverse up to down, then swap the symmetry

# \* 1 2 3 7 8 9 7 4 1

# \* 4 5 6 => 4 5 6 => 8 5 2

# \* 7 8 9 1 2 3 9 6 3

matrix = [ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25], ]

def reverseImage(matrix): start, end = 0, len(matrix)-1

    while start < end:
        for i in range(len(matrix)):
            if start != i and end!= i:
                matrix[start][i], matrix[end][i] = matrix[end][i], matrix[start][i]
        start += 1
        end -= 1
    return matrix

def swapMatrix(matrix): for i in range(len(matrix)): for j in range(i+1, len(matrix)): if i != j and i+j != len(matrix) -1: matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j] return matrix

def rotateImage(matrix, num_rotate): num_rotate = num_rotate % 4 # because 4 rotations = original image

    for _ in range(num_rotate):
        matrix = reverseImage(matrix)
        matrix = swapMatrix(matrix)

    return matrix

print(rotateImage(matrix, 17))

# Medium/Hard

""" Given two arrays a and b of equal length, the absolute sum difference is the sum Math.abs(a[i] - b[i]). Replace one number in a with any number in a to minimize the absolute sum difference.

ref: https://leetcode.com/discuss/interview-question/949484/codesignal-gca-i-have-a-question idea: https://leetcode.com/discuss/interview-question/949484/CodeSignal-GCA-(I-have-a-question)/779839 """

arr1 = [1,2,3,4] arr2 = [1,2,4,0]

def find_in_arr1(num, arr): return min(arr, key=lambda x:abs(x[0]-num))[1]

def minAbsSumDiff(arr1, arr2): sorted_arr1 = [(num,i) for i, num in enumerate(sorted(arr1))] min_diff_sum = orig_sum_diff = sum([abs(num1 - num2) for num1, num2 in zip(arr1, arr2)])

    for i, num in enumerate(arr1):
        index = find_in_arr1(arr2[i], sorted_arr1)
        if index != i:
            min_diff_sum = min(min_diff_sum, orig_sum_diff - (abs(arr1[i]-arr2[i])) + (abs(arr1[index] - arr2[i])))

    return min_diff_sum

print(minAbsSumDiff(arr1, arr2))

```





Python - beauty of matrix

```

def firstMissingPositive(nums): n = len(nums)

    if 1 not in nums:
        return 1

    if len(nums)==1:
        return 2

    for i, num in enumerate(nums):
        if num<=0 or num>n:
            nums[i] = 1

    for i, num in enumerate(nums):
        a = abs(nums[i])
        if a==n:
            nums[0] = -abs(nums[0])
        else:
            nums[a] = -abs(nums[a])

    for i in range(1, len(nums)):
        if nums[i]>0:
            return i

    if nums[0]>0:
        return n

    return n+1

def beautyOfMatrix(matrix, k): n = len(matrix) new_n = n//k lst = [[] for j in range(new_n\*new_n)]

    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            idx = j//new_n + (i//new_n)*new_n
            lst[idx].append(matrix[i][j])

    missing =[]
    for i in range(len(lst)):
        mis_pos = firstMissingPositive(copy.deepcopy(lst[i]))
        missing.append((mis_pos, i))

    missing = sorted(missing)

    n_box_idx = 0
    for i in range(len(missing)):
        box_idx = missing[i][1]
        for j in range(len(lst[box_idx])):
            r = (n_box_idx//new_n)*new_n + j//new_n
            c = (n_box_idx%new_n)*new_n + j%new_n
            matrix[r][c] = lst[box_idx][j]
        n_box_idx += 1
    return matrix

```



def max_k_occurences(sequence,word):
    k = 1
    while word*k in sequence:
        k += 1
    return k-1

l = []
for i in words:
    l.append(max_k_occurences(sequence, i))
print l







class Solution:

    def arrayShift(self, A):
        n = len(A)
        start = A[0]
        cyclicShift = True
        for a in A:
            if a != start:
                cyclicShift = False
                break
            start = (start + 1) % n
            if start == 0:
                start = n
        if cyclicShift:
            return True

        start = A[0]
        for a in A:
            if a != start:
                return False
            start = (start - 1) % n
            if start == 0:
                start = n
        return True


if __name__ == "__main__":
    s = Solution()

    A = [5, 1, 2, 3, 4]
    print(s.arrayShift(A))
    A = [4, 3, 2, 1, 5]
    print(s.arrayShift(A))

    A = [2, 3, 4, 5, 1]
    print(s.arrayShift(A))
    A = [2, 1, 5, 4, 3]
    print(s.arrayShift(A))

    A = [5, 2, 2, 3, 4]
    print(s.arrayShift(A))
    A = [4, 2, 2, 1, 5]
    print(s.arrayShift(A))











```

{% endtab %} {% endtabs %}

{% tabs %} {% tab title="All CODESIGNAL" %}

{% endtab %}

{% tab title="SOLUTIONS" %}

```python
def add(param1, param2):
    return param1 + param2
def centuryFromYear(year):
    return ((year-1) // 100) + 1

def checkPalindrome(inputString):
    return inputString == inputString[::-1]

def adjacentElementsProduct(inputArray):
    max = inputArray[0] * inputArray[1]
    for i in range(len(inputArray) - 1):
        if inputArray[i] * inputArray[i+1] > max:
            max = inputArray[i] * inputArray[i+1]
    return max

def shapeArea(n):
    sum = n*2 - 1
    for i in range(1, (n*2)-1, 2):
        sum += i*2
    return sum
def makeArrayConsecutive2(statues):
    return max(statues) - min(statues) - len(statues) + 1
def almostIncreasingSequence(sequence):
    i = 0
    while i < len(sequence) - 1:
        if not sequence[i] < sequence[i + 1]:
            if increasingSequence(sequence[:i] + sequence[i+1:]) or \
                    increasingSequence(sequence[:i+1] + sequence[i+2:]):
                return True
            else:
                return False
        i += 1
    return True


def increasingSequence(sequence):
    for i in range(len(sequence) - 1):
        if not sequence[i] < sequence[i + 1]:
            return False
    return True

def matrixElementsSum(matrix):
    if len(matrix) > 1:
        for row in range(1, len(matrix)):
            for room in range(len(matrix[row])):
                if matrix[row - 1][room] == 0:
                    matrix[row][room] = 0
    sum = 0
    for row in matrix:
        for room in row:
            sum += room
    return sum

def allLongestStrings(inputArray):
    length = max([len(word) for word in inputArray])
    result = [word for word in inputArray if len(word) == length]
    return result
def commonCharacterCount(s1, s2):
    count = 0
    word2 = list(s2)
    for letter in s1:
        if letter in word2:
            word2.remove(letter)
            count += 1
    return count

def isLucky(n):
    string = str(n)
    top = [int(x) for x in string[:len(string)//2]]
    bottom = [int(x) for x in string[len(string)//2:]]
    return sum(top) == sum(bottom)
def sortByHeight(a):
    treePositions = [x for x in range(len(a)) if a[x] == -1]
    people = sorted([x for x in a if x != -1])
    for tree in treePositions:
        people.insert(tree, -1)
    return people

import re
def reverseParentheses(s):
    while "(" in s:
        match = re.search("\([^()]*\)", s)
        match_string = match.group(0)[1: len(match.group(0)) - 1]
        reversed_match_string = match_string[::-1]
        s = s[:match.start()] + reversed_match_string + s[match.end():]
    return s

def alternatingSums(a):
    team1 = sum(a[0::2])
    team2 = sum(a[1::2])
    return [team1, team2]
def addBorder(picture):
    picture = ["*" + string + "*" for string in picture]
    picture = [("*" * len(picture[0]))] + picture + [("*" * len(picture[0]))]
    return picture

def areSimilar(a, b):
    diff = [i for i in range(len(a)) if a[i] != b[i]]
    if len(diff) == 2:
        b[diff[0]], b[diff[1]] = b[diff[1]], b[diff[0]]
    return a == b

def arrayChange(inputArray):
    count = 0
    for i in range(1, len(inputArray)):
        if inputArray[i-1] >= inputArray[i]:
            difference = inputArray[i-1] - inputArray[i]
            inputArray[i] += difference + 1
            count += difference + 1
    return count

def palindromeRearranging(inputString):
    inputList = sorted(inputString)
    foundMiddle = False
    while len(inputList) > 1:
        if inputList[0] == inputList[1]:
            del inputList[1]
        elif not foundMiddle:
            foundMiddle = True
        else:
            return False
        del inputList[0]
    return len(inputList) == 0 or not foundMiddle

def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    sameHands = yourLeft == friendsLeft and yourRight == friendsRight
    differentHands = yourLeft == friendsRight and yourRight == friendsLeft
    return sameHands or differentHands

def arrayMaximalAdjacentDifference(inputArray):
    diffs = []
    for i in range(len(inputArray) - 1):
        diffs.append(abs(inputArray[i] - inputArray[i + 1]))
    return max(diffs)

def isIPv4Address(inputString):
    strings = [string for string in inputString.split('.')]
    for string in strings:
        if not string.isdecimal():
            return False
    nums = [int(num) for num in strings]
    return max(nums) <= 255 and min(nums) >= 0 and len(nums) == 4

def avoidObstacles(inputArray):
    for length in range(2, max(inputArray) + 2):
        done = True
        jump = length
        while jump < (max(inputArray) + length):
            if jump in inputArray:
                done = False
                break
            jump += length
        if done:
            return length

def boxBlur(image):
    outImage = []
    for row in range(1, len(image) - 1):
        line = []
        for pixel in range(1, len(image[row]) - 1):
            total = (image[row - 1][pixel - 1]
                     + image[row - 1][pixel]
                     + image[row - 1][pixel + 1]
                     + image[row][pixel - 1]
                     + image[row][pixel]
                     + image[row][pixel + 1]
                     + image[row + 1][pixel - 1]
                     + image[row + 1][pixel]
                     + image[row + 1][pixel + 1])
            line.append(total // 9)
        outImage.append(line)
    return outImage

def minesweeper(matrix):
    TOP = 0
    BOTTOM = len(matrix) - 1
    LEFT = 0
    RIGHT = len(matrix[0]) - 1

    outMatrix = []
    for row in range(len(matrix)):
        outRow = []
        for cell in range(len(matrix[row])):
            outRow.append(0)
            if row != TOP:
                outRow[cell] += matrix[row - 1][cell]
            if row != BOTTOM:
                outRow[cell] += matrix[row + 1][cell]
            if cell != LEFT:
                outRow[cell] += matrix[row][cell - 1]
            if cell != RIGHT:
                outRow[cell] += matrix[row][cell + 1]
            if row != TOP and cell != LEFT:
                outRow[cell] += matrix[row - 1][cell - 1]
            if row != TOP and cell != RIGHT:
                outRow[cell] += matrix[row - 1][cell + 1]
            if row != BOTTOM and cell != LEFT:
                outRow[cell] += matrix[row + 1][cell - 1]
            if row != BOTTOM and cell != RIGHT:
                outRow[cell] += matrix[row + 1][cell + 1]
        outMatrix.append(outRow)
    return outMatrix

def arrayReplace(inputArray, elemToReplace, substitutionElem):
    return [x if x != elemToReplace else substitutionElem for x in inputArray]

def evenDigitsOnly(n):
    return all((True if digit in ('0', '2', '4', '6', '8') else False for digit in str(n)))

def variableName(name):
    return name.replace("_", "").isalnum() and not name[0].isdigit()

def alphabeticShift(inputString):
    return ''.join([chr(ord(x) + 1) if x != 'z' else 'a' for x in inputString])

def chessBoardCellColor(cell1, cell2):
    color1 = ((ord(cell1[0]) - ord('A')) + ord(cell1[1]) - ord('1')) % 2 == 0
    color2 = ((ord(cell2[0]) - ord('A')) + ord(cell2[1]) - ord('1')) % 2 == 0
    return color1 == color2

def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n / 2)) % n

def depositProfit(deposit, rate, threshold):
    year = 0
    while deposit < threshold:
        deposit *= 1 + (rate / 100)
        year += 1
    return year

def absoluteValuesSumMinimization(a):
    sums = {}
    for num in a:
        total = sum([abs(a[i] - num) for i in range(len(a))])
        if total in sums:
            sums[total] = min(num, sums[total])
        else:
            sums[total] = num
        print(sums)
    return sums[min(sums)]

import itertools

def stringsRearrangement(inputArray):
    permutations = itertools.permutations(inputArray)
    for array in permutations:
        if testArrangement(array):
            return True
    return False

def testArrangement(array):
    for i in range(len(array) - 1):
        if sum([a != b for a, b in zip(array[i], array[i + 1])]) != 1:
            return False
    return True

def extractEachKth(inputArray, k):
    return [inputArray[x] for x in range(len(inputArray)) if (x + 1) % k != 0]

def firstDigit(inputString):
    for char in inputString:
        if char.isdigit():
            return char

def differentSymbolsNaive(s):
    return len(set(s))

def arrayMaxConsecutiveSum(inputArray, k):
    sums = [sum(inputArray[:k])]
    for i in range(1, len(inputArray) - k + 1):
        sums.append(sums[i - 1] - inputArray[i - 1] + inputArray[i + k - 1])
    return max(sums)

def growingPlant(upSpeed, downSpeed, desiredHeight):
    height = 0
    days = 1
    height += upSpeed
    while height < desiredHeight:
        days += 1
        height -= downSpeed
        height += upSpeed
    return days

def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and (weight2 > maxW or value1 >= value2):
        return value1
    if weight2 <= maxW and (weight1 > maxW or value2 >= value1):
        return value2
    return 0

def longestDigitsPrefix(inputString):
    for char in range(len(inputString)):
        if not inputString[char].isdigit():
            return inputString[:char]
    return inputString

def digitDegree(n):
    degree = 0
    while len(str(n)) > 1:
        n = sum((int(digit) for digit in str(n)))
        degree += 1
    return degree

def bishopAndPawn(bishop, pawn):
    return abs(ord(bishop[0]) - ord(pawn[0])) == abs(ord(bishop[1]) - ord(pawn[1]))

def isBeautifulString(inputString):
    for letter in range(ord('a'), ord('z')):
        if inputString.count(chr(letter)) < inputString.count(chr(letter + 1)):
            return False
    return True

def findEmailDomain(address):
    return address[address.rfind('@') + 1:]

def buildPalindrome(st):
    if st == st[::-1]:  # Check for initial palindrome
        return st
    index = 0
    subStr = st[index:]
    while subStr != subStr[::-1]:  # while substring is not a palindrome
        index += 1
        subStr = st[index:]
    return st + st[index - 1::-1]

def electionsWinners(votes, k):
    winners = 0
    current_winner = max(votes)
    for candidate in votes:
        if k > 0 and candidate + k > current_winner:
            winners += 1
        if k == 0 and candidate == current_winner and votes.count(candidate) == 1:
            winners += 1
    return winners

def isMAC48Address(inputString):
    hex_chars = ('1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
                 'A', 'B', 'C', 'D', 'E', 'F',
                 'a', 'b', 'c', 'd', 'e', 'f')
    groups = inputString.split('-')
    if len(groups) != 6:
        return False
    if not all((len(group) == 2 for group in groups)):
        return False
    if not all((group[0] in hex_chars and group[1] in hex_chars for group in groups)):
        return False
    return True

def isDigit(symbol):
    return symbol.isdigit()

def lineEncoding(s):
    count = 1
    output = []
    for char in range(1, len(s)):
        if s[char] == s[char - 1]:
            count += 1
        else:
            if count > 1:
                output.append(str(count) + s[char - 1])
            else:
                output.append(s[char - 1])
            count = 1
    if s[len(s) - 1] == s[len(s) - 2]:
        output.append(str(count) + s[len(s) - 1])
    else:
        output.append(s[len(s) - 1])
    return ''.join(output)

def chessKnight(cell):
    moves = 0
    # Starting at the top left, going counter-clockwise
    if ord(cell[0]) >= ord("b") and ord(cell[1]) <= ord("6"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) >= ord("c") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) >= ord("b") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) >= ord("3"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) >= ord("2"):
        moves += 1
    if ord(cell[0]) <= ord("f") and ord(cell[1]) <= ord("7"):
        moves += 1
    if ord(cell[0]) <= ord("g") and ord(cell[1]) <= ord("6"):
        moves += 1

    return moves

def deleteDigit(n):
    num = str(n)
    highest = 0
    for digit in range(len(num)):
        output = num[:digit] + num[digit + 1:]
        if int(output) > int(highest):
            highest = output
    return int(highest)

def longestWord(text):
    longest = []
    word = []
    for char in text:
        if ord("A") <= ord(char) <= ord("Z") or ord("a") <= ord(char) <= ord("z"):
            word.append(char)
        else:
            if len(word) > len(longest):
                longest = word
            word = []
    if len(word) > len(longest):
        longest = word
    return "".join(longest)
def validTime(time):
    groups = time.split(":")
    if len(groups) != 2:
        return False
    if not (groups[0].isdigit() and groups[1].isdigit()):
        return False
    if int(groups[0]) > 23 or int(groups[1]) > 59:
        return False
    return True

def sumUpNumbers(inputString):
    total = 0
    current_num = []
    for char in inputString:
        if char.isdigit():
            current_num.append(char)
        else:
            if len(current_num) > 0:
                num = int("".join(current_num))
                total += num
                current_num = []
    if len(current_num) > 0:
        num = int("".join(current_num))
        total += num
    return total

def differentSquares(matrix):
    squares = set()
    for row in range(len(matrix) - 1):
        for cell in range(len(matrix[row]) - 1):
            square = ((matrix[row][cell], matrix[row][cell + 1]),
                      (matrix[row + 1][cell], matrix[row + 1][cell + 1]))
            squares.add(square)
    return len(squares)

def digitsProduct(product):
    # New idea: add product to factors
    # while max(factors) > 10: split that num into factors
    if product == 0:
        return 10

    factors = [product]
    while max(factors) > 9:
        factored = findFactors(max(factors))
        if factored:
            factors.remove(max(factors))
            factors.extend(factored)
        else:
            return -1

    while factors.count(3) >= 2:
        factors.remove(3)
        factors.remove(3)
        factors.append(9)

    while factors.count(2) > 2:
        factors.remove(2)
        factors.remove(2)
        factors.remove(2)
        factors.append(8)

    while factors.count(2) > 1:
        factors.remove(2)
        factors.remove(2)
        factors.append(4)

    while 2 in factors and 3 in factors:
        factors.remove(2)
        factors.remove(3)
        factors.append(6)

    return int("".join(map(str, sorted(factors))))


def findFactors(n):
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return i, n // i
    return False

def fileNaming(names):
    outnames = []
    for name in names:
        if name in outnames:
            k = 1
            while "{}({})".format(name, k) in outnames:
                k += 1
            name = "{}({})".format(name, k)
        outnames.append(name)
    return outnames

def messageFromBinaryCode(code):
    output = []
    for i in range(0, len(code), 8):
        letter = chr(int(code[i:i + 8], 2))
        output.append(letter)
    return ''.join(output)

def spiralNumbers(n):
    LEFT = 'left'
    RIGHT = 'right'
    UP = 'up'
    DOWN = 'down'
    direction = RIGHT
    spiral = [[0 for i in range(n)] for j in range(n)]
    row = 0
    cell = 0
    for num in range(1, (n * n) + 1):
        spiral[row][cell] = num
        if direction == RIGHT:
            if cell != n - 1 and spiral[row][cell + 1] == 0:
                cell += 1
            else:
                direction = DOWN
                row += 1
        elif direction == DOWN:
            if row != n - 1 and spiral[row + 1][cell] == 0:
                row += 1
            else:
                direction = LEFT
                cell -= 1
        elif direction == LEFT:
            if cell != 0 and spiral[row][cell - 1] == 0:
                cell -= 1
            else:
                direction = UP
                row -= 1
        elif direction == UP:
            if row != 0 and spiral[row - 1][cell] == 0:
                row -= 1
            else:
                direction = RIGHT
                cell += 1
    return spiral


print(spiralNumbers(5))

def sudoku(grid):
    match = [i for i in range(1, 10)]
    for row in grid:
        if sorted(row) != match:
            return False
    for column_index in range(9):
        column = [grid[row_index][column_index] for row_index in range(9)]
        if sorted(column) != match:
            return False
    for row in range(0, 9, 3):
        for column in range(0, 9, 3):
            box = []
            box.extend(grid[row][column:column + 3])
            box.extend(grid[row + 1][column:column + 3])
            box.extend(grid[row + 2][column:column + 3])
            if sorted(box) != match:
                return False
    return True

# def isAdult(age, majority):
#     return age >= majority

isAdult = lambda a, m: a >= m

def bishopAndPawn(bishop, pawn):
    if ord(bishop[0]) == ord(pawn[0]):
        return False
    else:
        bishop_elm = ord(bishop[0]) + int(bishop[1])
        pawn_elm = ord(pawn[0]) + int(pawn[1])
        return (bishop_elm + pawn_elm) % 2 == 0

"""Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the
(n - 1)-interesting polygon and appending 1-interesting polygons to its rim, side by side.
You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below. (PICTURE PROVIDED AT:WWW.CODESIGNAL.COM)

Example:
- For n = 2, the output should be shapeArea(n) = 5;
- For n = 3, the output should be shapeArea(n) = 13."""


def shapeArea(n):
    # Case 1: If the polygon is 0-interesting, it has an area equal to zero.
    if n == 0:
        return None
    # Case 2: If the polygon is 1-interesting, it has an area equal to one.
    elif n == 1:
        return 1
    # Case 3: If the polygon is n-interesting, it has an area equal to the sum of the square of n
    # and the square of n-1. A way that I thought of it (based on the picture provided) is the following:
    # - n**2: Counted the number of the blue squares from the middle line upwards (INCLUDING the blue squares of the middle line).
    # - (n-1)**2: Counted the number of the blue squares from the middle line downwards (EXCLUDING the blue squares of the middle line).
    # Of course, you can easily check that the terms "upwards/downwards" could be inverted, without affecting the validity of your counting.
    elif n > 1:
        result = (n ** 2) + ((n - 1) ** 2)
        return result

"""Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the
previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of
additional statues needed.

Example:
For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3.
Ratiorg needs statues of sizes 4, 5 and 7."""


def makeArrayConsecutive2(statues):
    # Step 1: We begin by creating a new array called "stat_arr", which will accommodate the sorted version of the original "statues" array.
    stat_arr = sorted(statues)
    # Step 2: Furthermore, we use the first element of the sorted array as our index (that will be used in the following steps).
    i = stat_arr[0]
    # Step 3: We create an empty list called "result" to store our (numbered) missing statues.
    result = list()
    # Step 4: We initiate a while-loop with the condition that the index from Step 2 is not equal to the last (hence largest) entry of
    # the stat_arr. You must make sure that you add the "incrementation by 1" part to make the while loop proceed to the next element.
    while i != stat_arr[-1]:
        i += 1
        # Step 5: Here, using a simple if statement, we examine whether the i-th (integer) element is included in the stat_arr.
        # If it is not, we append it to the result list. Otherwise, the loop continues.
        if i not in stat_arr:
            result.append(i)
        else:
            continue
    # Step 6: Finally, we return the length/size of the result list, i.e. the number of our "missing" statues.
    return len(result)

a, b = eval(dir()[0])
return a + b

# 28
# return sum(eval(dir()[0]), [])

# 36
# return [x for l in eval(dir()[0]) for x in l]

# def twoArraysNthElement(array1, array2, n):
#     return sorted(array1 + array2)[n]
# 70

# twoArraysNthElement = lambda a, b, n: sorted(a + b)[n]
# 46

a, b, n = eval(dir()[0])
return sorted(a + b)[n]
# 40

n, d = eval(dir()[0])
while n % d < 1:
    n /= d
return n

# def divideAsLongAsPossible(n, d):
#     while n % d == 0:
#         n /= d
#     return n

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def bstFromPreorder(self, preorder):
        if not preorder:
            return None
        root = TreeNode(preorder[0])
        i = 1
        while i < len(preorder) and preorder[i] < root.val:
            i += 1
        root.left = self.bstFromPreorder(preorder[1:i])
        root.right = self.bstFromPreorder(preorder[i:])
        return root


preorder = [19, 4, 8, 11]
bst = Solution()
bst.bstFromPreorder(preorder)

def isBeautifulString(inputString):
    counter = [inputString.count(i) for i in string.ascii_lowercase]
    return counter[::-1] == sorted(counter)

def boxBlur(image):
    def pixels(matrix, i, j):
        summ = 0
        for x in range(i - 1, i + 2):
            for y in range(j - 1, j + 2):
                summ += matrix[x][y]
                mean = summ // 9
        return mean

    output = []
    row = len(image)
    col = len(image[0])
    for i in range(1, row - 1):
        arr = []
        for j in range(1, col - 1):
            arr.append(pixels(image, i, j))
        output.append(arr)
    return output

def chessBoardCellColor(cell1, cell2):
    cell1_elm = ord(cell1[0]) + int(cell1[1])
    cell2_elm = ord(cell2[0]) + int(cell2[1])
    return (cell1_elm + cell2_elm) % 2 == 0

def addBorder(picture):
    new_pic = []
    border = ""
    pic_len = len(picture)
    for i in range(0, len(picture[0]) + 2):
        border += "*"
    new_pic.append(border)
    for i in range(0, pic_len):
        new_pic.append("*" + picture[i] + "*")
    new_pic.append(border)
    return new_pic

sulkyBoy = lambda x: not x

import itertools as i

# *re.findall('...', 'abcdefghijklmno')
# >>> 'abc', 'def', 'ghi', 'jkl', 'mno'

#  [0,0,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
return [
    "".join(s)
    for s in i.product(
        *[
            "0 0 abc def ghi jkl mno pqrs tuv wxyz".split()[int(i)]
            for i in eval(dir()[0])[0]
        ]
    )
    if s
]

def maxProfit(prices):
    i = 0
    max_profit = 0
    while i < len(prices) - 1:
        while i < len(prices) - 1 and prices[i] >= prices[i + 1]:
            i += 1
        min_pri = prices[i]
        while i < len(prices) - 1 and prices[i] <= prices[i + 1]:
            i += 1
        max_pri = prices[i]
        max_profit += max_pri - min_pri
    return max_profit


print(maxProfit([1, 2, 3, 4, 5, 6]))

A, = numpy.r_[eval(dir()[0])]
A[A > 0] = sorted(A[A > 0])
return A

"""Some people are standing in a row in a park. There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
People can be very tall!

Example:
- For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]."""


def sortByHeight(a):
    # Step 1: We begin by creating a counter, starting from 0, that will be used in the subsequent for-loop.
    j = 0
    # Step 2: We also create a new array, called "a_sort", where we sort (in ascending order) all elements of the given array "a"
    # that are not "trees" (i.e. do not have a value of -1).
    a_sort = sorted([i for i in a if i != -1])
    # Step 3: By implementing a for-loop, we investigate all elements of the given array "a" (NOT a_sort!) and check:
    # if the element i in array "a" is equal to -1, the for-loop continues. Otherwise, the element i in array "a" should be
    # the same as element j in array "a_sort" (starting from 0 index, as defined in step 1).
    # You can think of it as working through elements of array "a", disregarding the "trees" (-1s) and sorting the rest
    # of the elements in ascending order (as in a_sort).
    for i in range(len(a)):
        if a[i] == -1:
            pass
        else:
            a[i] = a_sort[j]
            j += 1
    # Step 4: The final step is the return of the modified array "a".
    return a

def arrayChange(inputArray):
    first = inputArray[0]
    count = 0
    for i in inputArray[1:]:
        if i <= first:
            count += first - i + 1
            first = first + 1
        else:
            first = i
    return count

"""Given two strings, find the number of common characters between them.

Example:
For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
Strings have 3 common characters - 2 "a"s and 1 "c"."""


def commonCharacterCount(s1, s2):
    # Step 1: We create two lists, namely s1_l and s2_l, where we store the characters of strings s1 and s2 respectively.
    s1_l = list(s1)
    s2_l = list(s2)
    # Step 2: We also create an empty list, where we are going to store all common characters.
    common = []
    # Step 3: Using a for-loop, we investigate the list of the first string, element by element.
    for i in s1_l:
        # Step 4: If the i-th element from the list of the first string is also present in the list of the second string,
        # we append it to the common array. BE CAREFUL: We must implement the s2_l.remove(i) to avoid double-counting.
        # I checked myself and I can assure you that you can substitute s1_l for s2_l and vice versa (in the for-loop,
        # the if statement and the double-counting term), without affecting the validity of your code.
        if i in s2_l:
            common.append(i)
            s2_l.remove(i)
    # Step 5: Finally, we return the length of the common list, to find the number of the common characters
    # between the two strings given.
    return len(common)

# def passwordCheck(s):
#    if any(i.isdigit() for i in s) and any(i.islower() for i in s) and any(i.isupper() for i in s) and len(s) >= 5:
#        return True
#    else:
#        return False

# passwordCheck = lambda s: (any(i.isdigit()) and any(i.islower()) and any(i.isupper())) for i in s and len(s) > 4

# Regex:

# def passwordCheck(s):
#    return len(s) > 4 and all(re.search(p, s) for p in ('[A-Z]', '\d', '[a-z]'))

passwordCheck = lambda s: len(s) > 4 and all(
    re.search(i, s) for i in ("[A-Z]", "\d", "[a-z]")
)

# def fractionComparison(a, b):
#     d = a[0] / a[1]
#     f = b[0] / b[1]
#     if d < f:
#         return "<"
#     elif d > f:
#         return ">"
#     else:
#         return "="

(a, b), (c, d) = eval(dir()[0])
r = (a * d) / (b * c)
return "<" if r < 1 else ">" if r > 1 else "="

# 72 chars

# Nique toi Sylvere

L, = eval(dir()[0])
s = 0


while len(L) > 1:
    L = (
        numpy.add(L[:-1:2], L[1::2])
        if s % 2 == 0
        else numpy.multiply(L[:-1:2], L[1::2])
    )
    s += 1

return L[0]

L, = eval(dir()[0])
s = 0


while len(L) > 1:
    L = (
        numpy.add(L[:-1:2], L[1::2])
        if s % 2 == 0
        else numpy.multiply(L[:-1:2], L[1::2])
    )
    s += 1

return L[0]

def addTwoDigits(n):
    return (n // 10) + (n % 10)
def largestNumber(n):
    return int("9" * n)

def candies(n, m):
    return (m // n) * n

def seatsInTheater(nCols, nRows, col, row):
    return (nCols - col + 1) * (nRows - row)

def maxMultiple(divisor, bound):
    for num in range(bound, 1, -1):
        if num % divisor == 0:
            return num
    return 0

def circleOfNumbers(n, firstNumber):
    return (firstNumber + (n // 2)) % n

def lateRide(n):
    hours = n // 60
    minutes = n % 60
    return (hours // 10) + (hours % 10) + (minutes // 10) + (minutes % 10)

def phoneCall(min1, min2_10, min11, s):
    if s < min1:
        return 0
    if s == min1:
        return 1
    if s <= min1 + (min2_10 * 9):
        s -= min1
        return (s // min2_10) + 1
    s -= min1
    s -= min2_10 * 9
    return (s // min11) + 10

def reachNextLevel(experience, threshold, reward):
    return experience + reward >= threshold

def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if weight1 <= maxW and weight2 <= maxW:
        return max(value1, value2)
    if weight1 <= maxW:
        return value1
    if weight2 <= maxW:
        return value2
    return 0

def extraNumber(a, b, c):
    if a == b:
        return c
    if a == c:
        return b
    return a

def isInfiniteProcess(a, b):
    return a > b or (a % 2 != b % 2)

def arithmeticExpression(a, b, c):
    return a + b == c or a - b == c or a * b == c or a / b == c

def tennisSet(score1, score2):
    if max(score1, score2) == 6 and min(score1, score2) < 5:
        return True
    if 5 <= min(score1, score2) <= 6 and max(score1, score2) == 7:
        return True
    return False

def willYou(young, beautiful, loved):
    return (young and beautiful) != loved

def metroCard(lastNumberOfDays):
    if lastNumberOfDays == 30 or lastNumberOfDays == 28:
        return [31]
    return [28, 30, 31]

def killKthBit(n, k):
    return n & ~(2 ** (k - 1))

def arrayPacking(a):
    binary_array = [bin(num)[2:].rjust(8, '0') for num in a]
    out_string = ''.join(binary_array[::-1])
    return int(out_string, 2)

def rangeBitCount(a, b):
    array = list(range(a, b + 1))
    binary_array = [bin(num) for num in array]
    count_array = [binary.count('1') for binary in binary_array]
    return sum(count_array)

def mirrorBits(a):
    binary = bin(a)[2:]
    return int(binary[::-1], 2)

def secondRightmostZeroBit(n):
    return 2 ** bin(n)[::-1].find('0', bin(n)[::-1].find('0') + 1)

def swapAdjacentBits(n):
    return ((n >> 1) & 1431655765) | ((n << 1) & 2863311530)

def differentRightmostBit(n, m):
    return 2 ** bin((n ^ m))[::-1].find('1')

def equalPairOfBits(n, m):
    return 2 ** bin(~(n ^ m))[::-1].find('1')

def leastFactorial(n):
    factorial = 1
    index = 1
    while factorial < n:
        index += 1
        factorial *= index
    return factorial

def countSumOfTwoRepresentations2(n, l, r):
    count = 0
    a = max(n - r, l)
    b = n - a
    while a <= r and a <= b:
        count += 1
        a += 1
        b -= 1
    return count

def magicalWell(a, b, n):
    total = 0
    for i in range(n):
        total += a * b
        a += 1
        b += 1
    return total

def lineUp(commands):
    count = 0
    smart_student = 0
    dumb_student = 0
    for command in commands:
        if command == 'L':
            smart_student = (smart_student - 1) % 4
            dumb_student = (dumb_student + 1) % 4
        elif command == 'R':
            smart_student = (smart_student + 1) % 4
            dumb_student = (dumb_student - 1) % 4
        elif command == 'A':
            smart_student = (smart_student + 2) % 4
            dumb_student = (dumb_student + 2) % 4

        if smart_student == dumb_student:
            count += 1
    return count

def additionWithoutCarrying(param1, param2):
    # Convert numbers to strings
    str1 = str(param1)
    str2 = str(param2)
    # Pad both to the same length with zeroes (to the left of the numbers)
    length = max(len(str2), len(str1))
    str1 = str1.rjust(length, '0')
    str2 = str2.rjust(length, '0')
    output = []
    for num1, num2 in zip(str1, str2):
        result = str(int(num1) + int(num2))[-1]
        output.append(result)
    return int(''.join(output))

def appleBoxes(k):
    red = 0
    yellow = 0
    for i in range(1, k + 1, 2):
        yellow += i * i
    for i in range(2, k + 1, 2):
        red += i * i

    return red - yellow

def increaseNumberRoundness(n):
    string = str(n)
    # Check for immediate rejection
    if '0' not in string or len(string) < 2:
        return False
    # Since we know there's a 0, if it's not on
    # the left, then we know to accept
    if string[-1] != '0':
        return True
    # If there is only one 0, it must be at the end, so reject.
    if string.count('0') == 1:
        return False
    # If there are any numbers between the first 0
    # and the end of the string, then accept.
    first_zero = string.find('0')
    zero_sandwich = string[first_zero:]
    return zero_sandwich.count('0') != len(zero_sandwich)

def rounders(value):
    length = len(str(value))
    magnitude = length - 1
    for i in range(length - 1):
        value = int((value / 10) + 0.5)
    return value * (10 ** magnitude)

def candles(candlesNumber, makeNew):
    totalBurned = 0
    leftovers = 0
    while candlesNumber > 0:
        totalBurned += candlesNumber
        leftovers += candlesNumber
        candlesNumber = 0
        candlesNumber = leftovers // makeNew
        leftovers = leftovers % makeNew
    return totalBurned

def countBlackCells(n, m):
    gcd = find_gcd(n, m)
    line_cells = n + m - gcd
    line_corner_cells = (gcd - 1) * 2
    return line_cells + line_corner_cells


def find_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def createArray(size):
    return [1] * size

def arrayReplace(inputArray, elemToReplace, substitutionElem):
    output = [elem if elem != elemToReplace else substitutionElem for elem in inputArray]
    return output
def firstReverseTry(arr):
    if len(arr) < 2:
        return arr
    if len(arr) < 4:
        return arr[::-1]
    return arr[-1:] + arr[1:-1] + arr[:1]

def concatenateArrays(a, b):
    return a + b

def removeArrayPart(inputArray, l, r):
    return inputArray[:l] + inputArray[r + 1:]

def isSmooth(arr):
    if arr[0] != arr[-1]:
        return False
    if len(arr) % 2 == 0:
        middle = arr[len(arr) // 2] + arr[(len(arr) // 2) - 1]
    else:
        middle = arr[len(arr) // 2]
    return arr[0] == middle
def replaceMiddle(arr):
    if len(arr) % 2 != 0:
        return arr
    right_middle = len(arr) // 2
    middle_value = arr[right_middle] + arr[right_middle - 1]
    return arr[:right_middle - 1] + [middle_value] + arr[right_middle + 1:]

def makeArrayConsecutive2(statues):
    count = 0
    for i in range(min(statues), max(statues)):
        if i not in statues:
            count += 1
    return count

def isPower(n):
    if n == 1:
        return True

    a = 2
    b = 2
    while a ** 2 <= n:
        while a ** b <= n:
            if a ** b == n:
                return True
            b += 1
        b = 2
        a += 1
    return False
def isSumOfConsecutive2(n):
    count = 0
    right = 2
    arr = [1, 2]
    while right <= (n // 2) + 1:
        total = sum(arr)
        if total == n:
            count += 1
            del arr[0]
        elif total < n:
            right += 1
            arr.append(right)
        elif total > n:
            del arr[0]
    return count

def squareDigitsSequence(a0):
    sequence = [a0]
    while sequence[-1] not in sequence[:-1]:
        next_value = 0
        for digit in str(sequence[-1]):
            next_value += int(digit) ** 2
        sequence.append(next_value)
    return len(sequence)

def pagesNumberingWithInk(current, numberOfDigits):
    numberOfDigits -= len(str(current))
    next_digits = len(str(current + 1))
    while numberOfDigits >= next_digits:
        current += 1
        numberOfDigits -= next_digits
        next_digits = len(str(current))
    return current

def comfortableNumbers(l, r):
    count = 0
    for a in range(l, r):
        for b in range(a + 1, r + 1):
            a_sum = sum(int(digit) for digit in str(a))
            b_sum = sum(int(digit) for digit in str(b))
            if b <= a + a_sum and a >= b - b_sum:
                count += 1
    return count

def weakNumbers(n):
    all_factors = [count_factors(num) for num in range(1, n+1)]
    weaknesses = []
    for num, num_factors in enumerate(all_factors, 1):
        weakness = 0
        for factor in all_factors[:num]:
            if factor > num_factors:
                weakness += 1
        weaknesses.append(weakness)
    weakest = max(weaknesses)
    return [weakest, weaknesses.count(weakest)]

def count_factors(n):
    factors = 0
    for i in range(1, n+1):
        if n % i == 0:
            factors += 1
    return factors

print(weakNumbers(500))
import math

def rectangleRotation(a, b):
    n = a / (2 ** 0.5)
    m = b / (2 ** 0.5)
    points = (math.floor(n) * math.floor(m)) + (math.ceil(n) * math.ceil(m))
    if math.floor(n) % 2 != math.floor(m) % 2:
        points -= 1
    return points

# rectangleRotation(6, 4)
print(rectangleRotation(8,6))

# def insertDashes(s):
#     return "-".join(s).replace("- -", " ")
# 55

# insertDashes = lambda s: "-".join(s).replace("- -", " ")
# 51

# return "-".join(*eval(dir()[0])).replace("- -", " ")
# 50

# return re.sub("- -", " ", "-".join(*eval(dir()[0])))
# 49

# insertDashes = lambda s: re.sub('\B', '-', s)
# 39

return re.sub("\B", "-", *eval(dir()[0]))
# 38

def digitDegree(n):
    degree = 0
    while 10 <= n:
        num = str(n)
        n = sum(int(i) for i in num)
        degree += 1
    return degree

def deleteDigit(n):
    num = str(n)
    result = list(int("".join(num[:i] + num[1 + i :])) for i in range(len(num)))
    return max(result)

def evenDigitsOnly(n):
    digits_of_n = []
    while n > 0:
        rem = n % 10
        digits_of_n.append(rem)
        n = int(n / 10)
    for i in range(len(digits_of_n)):
        if digits_of_n[i] % 2 != 0:
            return False
    return True

def longestDigitsPrefix(inputString):
    count = 0
    for i in range(len(inputString)):
        if inputString[i].isdigit():
            count += 1
        else:
            return inputString[0:count]
    return inputString

# def removeDuplicateStrings(a):
#     return list(OrderedDict.fromkeys(a))
# 64

# removeDuplicateStrings = lambda a: list(OrderedDict.fromkeys(a))
# 60

return list(OrderedDict.fromkeys(*eval(dir()[0])))
# 49

def extractEachKth(inputArray, k):
    inp = []
    for i in range(len(inputArray)):
        if (i + 1) % k == 0:
            pass
        else:
            inp.append(inputArray[i])
    return inp

"""Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example:
For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product."""


def adjacentElementsProduct(inputArray):
    # Step 1: Initially, define an empty array where we will store the products of adjacent elements from the input array.
    ArrayEnd = []
    # Step 2: Using a for-loop, we go over all entries of the input array, calculating the products of adjacent elements
    # and appending them to the empty array from step 1.
    for i in range(len(inputArray) - 1):
        ArrayEnd.append(inputArray[i] * inputArray[i + 1])
    # Step 3: We seek the largest entry in "ArrayEnd" from step 1, using the max() function.
    maximum = max(ArrayEnd)
    return maximum

"""After becoming famous, the CodeBots decided to move into a new building together.
Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted!
Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return
the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example:
For
matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
the output should be matrixElementsSum(matrix) = 9.

example 1: There are several haunted rooms, so we'll disregard them as well as any rooms beneath them.
Thus, the answer is 1 + 5 + 1 + 2 = 9. (PICTURE PROVIDED AT:WWW.CODESIGNAL.COM)

For
matrix = [[1, 1, 1, 0],
          [0, 5, 0, 1],
          [2, 1, 3, 10]]
the output should be matrixElementsSum(matrix) = 9.

example 2:
Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it).
Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9. (PICTURE PROVIDED AT:WWW.CODESIGNAL.COM)"""


def matrixElementsSum(matrix):
    # Step 1: We begin by defining the number of rows and columns inside our given matrix.
    # You can conceive the number of rows as the number of nested arrays inside the main array and
    # the number of columns as the number of elements in the first nested array.
    # Feel free to convince yourself that this is the case by referring to the examples of matrices shown above.
    rows = len(matrix)
    cols = len(matrix[0])
    # Step 2: Furthermore, create a new variable called "summ" (from summation) and set it equal to zero.
    # It will be used in the following for-loop.
    summ = 0
    # Step 3: Here we have an unusual for-inside-a-for loop (compared to the one that we usually observe when dealing with matrices).
    # As we are interested in the position of elements in columns (elements BELOW 0s), the outside for-loop works across all columns
    # whilst the nested for-loop works across all rows.
    for j in range(cols):
        for i in range(rows):
            # Step 4: If, while counting, the loop meets an element whose value is zero, the counting stops.
            # Otherwise, it continues counting, each time adding the value of the i-th / j-th element to the "summ" variable, defined in step 2.
            if matrix[i][j] == 0:
                break
            summ += matrix[i][j]
    # Step 5: Therefore, we end up with the total sum of non-zero elements whose position in a column is not
    # below an element of value zero.
    return summ

def findEmailDomain(address):
    address_spl = address.split("@")
    c = [i for i in address_spl]
    if len(address_spl) == 2:
        return c[1]
    if len(address_spl) == 3:
        return c[2]

from itertools import groupby


def lineEncoding(s):
    s2 = ""
    for k, g in groupby(s):
        l = len(list(g))
        if l == 1:
            s2 += k
        else:
            s2 += str(l) + k
    return s2

def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    personal_max = max(yourLeft, yourRight)
    friend_max = max(friendsLeft, friendsRight)
    sum1 = yourLeft + yourRight
    sum2 = friendsLeft + friendsRight
    if sum1 == sum2 and personal_max == friend_max:
        return True
    return False

import requests
import pandas as pd


def productExceptSelf(nums, m, first=True):
    # uses divide and conquer approach from Khan academy!
    # may need to upgrade with prime factorization
    # and fast modular exponents using binary!

    # make map of prime factors and their exponents (number of each factor)
    # by breaking down individual array items
    # remove individual values from map for each item in array (reduce number of each factor present in current item)
    # convert exponent to binary and get modular exponents for each factor (see here: https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/fast-modular-exponentiation)
    # finally, combine all different prime factors for the number and add to array
    # reduce array by summing and final mod as shown
    if len(nums) == 1:
        return nums[0] % m
    if first:
        output = []
        j = len(nums)
        mid = (j - 1) // 2
        # left_mod = productExceptSelf(nums[0:mid], m, False)
        # right_mod = productExceptSelf(nums[mid:], m, False)
        for i in range(j):
            arr = nums[:]
            arr.pop(i)
            # print(arr)
            # if(i<mid):
            #     mult_val = right_mod
            # else:
            #     mult_val = left_mod
            output.append(productExceptSelf(arr, m, False))

        # print(output)
        return sum(output) % m

    else:
        mid = len(nums) // 2
        left = productExceptSelf(nums[0:mid], m, False)
        right = productExceptSelf(nums[mid:], m, False)
        return (left * right) % m


arr = pd.read_json("./test-16.json").loc["nums", "input"]

# print(arr)

print(productExceptSelf(arr, 9999, first=True))


# works for small cases, need to use divide and conquer according to Khan
# causes overflow issues
# #first, get the number of all nums multiplied
# largest_num = 1
# for num in nums:
#     largest_num*=num

# print(largest_num)

# #get the array of modulo m elements
# fg_arr = [(largest_num/num) % m for num in nums]

# print(fg_arr)
# total = sum(fg_arr) % m

# return total

# 52
# def triangleExistence(t):
#     t.sort()
#     return t[0] + t[1] > t[2]

# 46
# triangleExistence = lambda t: sum(t) - max(t) > max(t)

# 45
# t, = eval(dir()[0])
#
# t.sort()
# return t[0] + t[1] > t[2]

# 43
# t, = eval(dir()[0])
# return sum(t) - max(t) > max(t)

# 40
a, b, c = sorted(*eval(dir()[0]))
return a + b > c

def messageFromBinaryCode(code):
    phrase = ""
    bits = [int(code[i * 8 : i * 8 + 8], 2) for i in range(len(code) // 8)]
    for j in range(len(bits)):
        phrase += chr(bits[j])
    return phrase





```

{% endtab %}

{% tab title="MORE SOLUTIONS" %}

```python


"""Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second -
from the year 101 up to and including the year 200, etc.

Example:
- For year = 1905, the output should be centuryFromYear(year) = 20;
- For year = 1700, the output should be centuryFromYear(year) = 17. """


def centuryFromYear(year):
    # We begin by getting the INTEGER quotient of the division of the year given by 100.
    # This will give us the first two digits, which would be the century.
    cen = int(year / 100)
    # However, we should keep in mind that we refer to years between e.g. 1701 - 1800
    # as the "18th century". Hence, we implement a while loop, where the condition is
    # that the year is a positive integer (which is always true). If the remainder of the
    # division of the year by 100 is 0, then the two first digits of the division represent
    # the century. Otherwise, if the remainder is non-zero, the century is found by adding 1
    # to the result of the division (i.e. "cen").
    while year >= 1:
        if year % 100 == 0:
            return year / 100
        else:
            return cen + 1

def isIPv4Address(inputString):
    str_split = inputString.split(".")
    count = 0
    if len(str_split) != 4:
        return False
    for i in range(0, 4):
        if str_split[i] == "" or str_split[i] == "00" or str_split[i] == "01":
            return False
        if re.search("[a-zA-Z]", str_split[i]):
            count += 1
            if count > 0:
                return False
        if str_split[i].isnumeric():
            if int(str_split[i]) < 0:
                return False
            if int(str_split[i]) > 255:
                return False
    return True

"""Write a function that reverses characters in (possibly nested) parentheses in the input string.
Input strings will always be well-formed with matching ()s.

Example:
- For inputString = "(bar)", the output should be reverseInParentheses(inputString) = "rab";
- For inputString = "foo(bar)baz", the output should be reverseInParentheses(inputString) = "foorabbaz";
- For inputString = "foo(bar)baz(blim)", the output should be reverseInParentheses(inputString) = "foorabbazmilb";
- For inputString = "foo(bar(baz))blim", the output should be reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim"."""


def reverseInParentheses(inputString):
    # Step 1: We create a for-loop that goes over all elements of the input string. If element i is an opening bracket, then i
    # is defined as "start". In a similar manner, if element i is a closing bracket, i is defined as "end". NOTE THAT
    # if you write it as "i = start" or "i = end", an error will pop up (tested) as you would have not defined any variables
    # under those names, whilst the way that is written now you define as "start" and "end" elements that are
    # "(" and ")" respectively.
    for i in range(len(inputString)):
        if inputString[i] == "(":
            start = i
        if inputString[i] == ")":
            end = i
            # Step 2: Furthermore, we apply the function inside itself and concatenate the individual modified parts:
            # the part of the input string up to (and NOT including) the "starting" point (i.e. opening bracket) is left intact.
            # The same goes for the part of the input string one element AFTER the "ending" point (i.e. closing bracket)
            # till the actual end of the input string. The part of the input string that is located one element after
            # the starting point ("start"+1 included) and up to the "ending" point NOT included is reversed.
            return reverseInParentheses(
                inputString[:start]
                + inputString[start + 1 : end][::-1]
                + inputString[end + 1 :]
            )
    # Step 3: To conclude, we return the modified input string.
    return inputString

"""Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence
by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
Sequence containing only one element is also considered to be strictly increasing.

Example:
- For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false.
There is no one element in this array that can be removed in order to get a strictly increasing sequence.
- For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true.
You can remove 3 from the array to get the strictly increasing sequence [1, 2].
Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]."""


def almostIncreasingSequence(sequence):
    # Step 1: We begin by assigning the length of the given sequence to the variable n.
    n = len(sequence)
    # Step 2: By definition, if the sequence contains up to 1 elements, it is considered to be strictly increasing.
    if n <= 2:
        return True
    # Step 3: We set up two counters, namely c1 and c2, so that we count how many elements should be removed.
    # NOTE THAT c1 refers ONLY to adjacent elements whilst c2 refers to elements just before and just after the i-th element.
    c1 = 0
    c2 = 0
    # Step 4: This for-loop (and its content) is a tricky part. The range of the for-loop starts from 1 and goes all the way to (n-1)th element.
    # BE CAREFUL: We set n-1 to avoid getting our index out of range in the second if statement inside the for-loop.
    for i in range(1, n - 1):
        # Step 5: If the element prior to the index element i has a bigger value than i, we add 1 hit to the first counter.
        if sequence[i - 1] >= sequence[i]:
            c1 += 1
        # Step 6: If the element just before the index element i has a bigger value than the element just after i,
        # we add 1 hit to the second counter.
        if sequence[i - 1] >= sequence[i + 1]:
            c2 += 1
    # Step 7: If the element two places to the left of the index element i has a bigger value than the element prior to i,
    # we add 1 hit to the first counter.
    if sequence[n - 1] <= sequence[n - 2]:
        c1 += 1
    # Step 8: If BOTH of the counters have up to 1 hit (that means 0 or 1 EACH), then the sequence is almost increasing.
    if c1 <= 1 and c2 <= 1:
        return True
    else:
        return False

import itertools as t


def chessKnight(cell):
    knight_dir = list(t.permutations([1, 2, -1, -2], 2))
    knight_dir1 = []
    valid_moves = 0
    for i in range(len(knight_dir)):
        if sum(knight_dir[i]) != 0:
            knight_dir1.append(knight_dir[i])
    for x, y in knight_dir1:
        if (97 <= ord(cell[0]) + x <= 104) and (1 <= int(cell[1]) + y <= 8):
            valid_moves += 1
    return valid_moves

def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 > maxW and weight2 > maxW and weight1 + weight2 > maxW:
        return 0
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if value1 < value2:
        if weight2 > maxW:
            return value1
        else:
            return value2
    if value2 < value1:
        if weight1 > maxW:
            return value2
        else:
            return value1
    if value1 == value2:
        if weight1 > maxW:
            return value2
        else:
            return value1

"""
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

"""


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        get_len = 0
        current = head
        while current:
            get_len += 1
            current = current.next
        mid = get_len // 2
        current = head
        while mid > 0:
            current = current.next
            mid -= 1
        return current

"""Given an array of strings, return another array containing all of its longest strings.

Example:
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"]."""


def allLongestStrings(inputArray):
    # Step 1: We begin by defining an empty array called "max_arr", where we will store the longest strings from the given array.
    max_arr = []
    # Step 2: The next step is to define the maximum string length inside our given array.
    # BE CAREFUL: Variable max_len should be defined as follows. If we break it into its components, we can see that:
    # max(inputArray, key = len) locates ONLY ONE of the strings that satisfies the maximum value in terms of the key parameter
    # provided (which, in this case, is the string's length) and the outside len() function defines the value of this maximum length.
    # You are free to test it on a random input array containing various random strings, using a Python compiler online.
    max_len = len(max(inputArray, key=len))
    # Step 3: Now, we go over all strings inside the input array checking if their individual length is equal to the
    # maximum length value defined in step 2. If it is, then we append the respective string to the "max_arr" defined above.
    for i in inputArray:
        if len(i) == max_len:
            max_arr.append(i)
    # Step 4: We conclude by returning the max_arr.
    return max_arr

"""Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky
if the sum of the first half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.

Example
- For n = 1230, the output should be isLucky(n) = true;
- For n = 239017, the output should be isLucky(n) = false."""


def isLucky(n):
    # Step 1: We begin by creating an empty array, called "digits_of_n",
    # where we will store the digits of the given number n, as individual elements.
    digits_of_n = []
    # Step 2: We also create a new variable, called "summ" (from summation), and set its value to zero.
    # It will be useful in one of the later steps.
    summ = 0
    # Step 3: I have personally seen this while-loop trick being used to split numbers into their individual digits.
    # As it will take quite a long text to explain this comprehensively, I'd suggest you use the print() function in each
    # step to see what how each of these steps works. The important thing to mention is the "appending" step where each
    # digit, where each digit is stored as an elememnt in "digits_of_n" array.
    while n > 0:
        rem = n % 10
        digits_of_n.append(rem)
        n = int(n / 10)
    # Step 4: Furthermore, we implement a for-loop that goes over all elements inside the "digits_of_n" array, one by one.
    # If the element's index is up to the middle of the length of the array, we add the element's numeric value to "summ".
    # Otherwise, we subtract it. NOTE THAT for arrays of even length, you can find the "middle" by dividing the length by 2
    # (i.e. for arrays of length 4, the 2nd element is the "middle), whilst for array of odd length, the "middle" is the
    # element having equal numbers of elements on both its sides.
    for i in range(len(digits_of_n)):
        if i < len(digits_of_n) / 2:
            summ += digits_of_n[i]
        else:
            summ -= digits_of_n[i]
    # Step 5: Finally, we check if the summation is zero or not. If the sum is zero, then the ticket number is lucky,
    # according to the definition of the exercise.
    if summ == 0:
        return True
    return False

def isMAC48Address(inputString):
    str_split = inputString.split("-")
    count = 0
    if len(inputString) != 17:
        return False
    if len(str_split) != 6:
        return False
    for i in range(0, 6):
        if str_split[i] == "":
            return False
        if re.search("[a-zG-Z]", str_split[i]):
            count += 1
            if count > 0:
                return False
    return True

def arrayMaxConsecutiveSum(inputArray, k):
    arr = [sum(inputArray[:k])]
    for i in range(1, len(inputArray) - (k - 1)):
        arr.append(arr[i - 1] - inputArray[i - 1] + inputArray[i + k - 1])
    sort_arr = sorted(arr)
    return sort_arr[-1]

def arrayMaximalAdjacentDifference(inputArray):
    return max(
        (abs(inputArray[i + 1] - inputArray[i]) for i in range(0, len(inputArray) - 1))
    )

p, s = eval(dir()[0])
r = -1
l = len(p)
for i in range(l):
    for j in range(l):
        c = 0
        d = p[j] - p[i]
        f = s[i] - s[j]

        if d * f < 1:
            continue

        for k in range(l):
            if p[k] * f + s[k] * d == p[i] * f + s[i] * d:
                c += 1
        if c > r:
            r = c
return r

# def smallestMultiple(l, r):
#    for i in range(1,8**7):
#        s = True
#        for j in range(l, r+1):
#            if i%j!=0:
#                s = False
#        if s:
#            return i


def smallestMultiple(l, r):
    for i in range(1, 16):
        for j in range(l, r + 1):
            while True:
                if i % j != 0:
                    break
            return i

def variableName(name):
    str_name = [i for i in str(name)]
    non_acc_chars = [
        " ",
        ">",
        "<",
        ":",
        "-",
        "|",
        ".",
        ",",
        "!",
        "[",
        "]",
        "'",
        "/",
        "@",
        "#",
        "&",
        "%",
        "?",
        "*",
    ]
    if str_name[0] in str([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]):
        return False
    for j in range(len(str_name)):
        if str_name[j] in non_acc_chars:
            return False
    return True

def fileNaming(names):
    if names == []:
        return []
    new_names = []
    for name in names:
        if name not in new_names:
            new_names.append(name)
        else:
            for i in range(1, 1000):
                new_name = name + "(" + str(i) + ")"
                if new_name not in new_names:
                    new_names.append(new_name)
                    break
    return new_names

from collections import Counter


def singleNumber(nums):
    """
    given a list of integer with every element appears twice and a single number appears once, return the value of the
    single number
    """
    count = Counter(nums)
    for k, v in count.items():
        if v == 1:
            return k


print(singleNumber([2, 2, 4, 1, 5]))

memo = {}


def isHappy(n):
    """
    Is happy takes in a number and returns True if it is a happy number, False otherwise. A happy number
    is a number defined by the following process: Starting with any positive integer, replace the number by the
    sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
    or it loops endlessly in a cycle which does not include 1.
    """
    seen = {n: 1}
    while True:
        new_sq = sum([int(d) ** 2 for d in str(n)])
        if n == 1:
            return True
        if new_sq in seen:
            return False
        else:
            n = new_sq
            seen[n] = 1


print(isHappy(19))

def spiralNumbers(n):
    dims = n
    elem = 1
    matrix = [[0] * n for x in range(n)]
    while 0 < dims:
        i = n - dims
        # you can sub i = n - dims ONLY in the first 2 parts
        # where n - dims is in the starting parameter of the range
        for j in range(n - dims, dims):
            matrix[i][j] = elem
            elem += 1
        for i in range(n - dims + 1, dims):
            matrix[i][j] = elem
            elem += 1
        for j in range(dims - 2, n - dims - 1, -1):
            matrix[i][j] = elem
            elem += 1
        for i in range(dims - 2, n - dims, -1):
            matrix[i][j] = elem
            elem += 1
        dims -= 1
    return matrix

def avoidObstacles(inputArray):
    for i in range(2, max(inputArray) + 2):
        if i not in inputArray and all(j % i != 0 for j in inputArray):
            return i

def circleOfNumbers(n, firstNumber):
    return ((n / 2) + firstNumber) % n

def sumOfSquares(n):
    return sum([x ** 2 for x in range(1, n + 1)])

# def sumOfTheAngles(n):
#    return (n - 2) * 180

sumOfTheAngles = lambda n: (n - 2) * 180

# n = eval(dir()[0])
# return (n - 2) * 180

def sumOfTwo(a, b, v):
    b = set(b)
    return any(v - i in b for i in a)

def visitsOnCircularRoad(n, v):
    c = 1
    t = 0
    for i in v:
        t += min(abs(i - c), abs(n - abs(i - c)))
        c = i
    return t


# v = visitsOrder
# n = number of houses
# c = Current position
# t = Time

def buildPalindrome(st):
    for i in range(len(st)):
        sub = st[i : len(st)]
        if sub[::-1] == sub:
            missing = st[0:i]
            return st + missing[::-1]
    return st

checkPalindrome = lambda x: x == x[::-1]

# greetPerson = lambda n: "Hello, " + n

greetPerson = "Hello, {}".format

def growingPlant(upSpeed, downSpeed, desiredHeight):
    day_count = 0
    height = 0
    while height <= desiredHeight:
        height = height + upSpeed
        day_count += 1
        if height < desiredHeight:
            height = height - downSpeed
        else:
            return day_count

def twoPointerSum(nums, target):
    """
    Given a sorted array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    """
    l = 0
    r = len(nums) - 1
    while l < r:
        if nums[l] + nums[r] == target:
            return [l, r]
        elif nums[l] + nums[r] > target:
            r -= 1
        else:
            l += 1


nums = [5, 25, 75]
target = 100
print(twoPointerSum(nums, target))

# def gasPrediction(driveDistances, currentGasLevel, avgMileage):
#     a = sum(driveDistances) / 12 / avgMileage
#     print(a)
#     if a > currentGasLevel:
#         return True
#     else:
#         return False

# d, c, a = eval(dir()[0])
# return sum(d) / 12 / a > c

# 39 chars
gasPrediction = lambda d, c, a: sum(d) / 12 / a > c

def digitsProduct(product):
    if product == 0:
        return 10
    if product == 1:
        return 1
    for i in range(0, 4000):
        p = 1
        for j in str(i):
            p *= int(j)
        if p == product:
            return i
    return -1

def depositProfit(deposit, rate, threshold):
    i = 0
    while deposit < threshold:
        deposit += deposit * rate * 0.01
        i += 1
    return i

def depositProfit(deposit, rate, threshold):
    year_count = 0
    while deposit < threshold:
        deposit = deposit + (deposit * (rate / 100))
        year_count += 1
    return year_count

from itertools import permutations as p


def stringsRearrangement(inputArray):
    p_list = list(p(inputArray))
    for i in range(len(p_list)):
        count1 = 0
        for j in range(len(p_list[0]) - 1):
            count2 = 0
            for k in range(len(p_list[0][0])):
                if p_list[i][j][k] != p_list[i][j + 1][k]:
                    count2 += 1
            if count2 == 1:
                count1 += 1
        if count1 >= (len(p_list[0])) - 1:
            return True
    return False

def palindromeRearranging(inputString):
    odd_count = 0
    char_set = set(inputString)
    for i in char_set:
        char_count = inputString.count(i)
        if char_count % 2 != 0:
            odd_count += 1
    if odd_count <= 1:
        return True
    return False

# def fractionReducing(f):
#     return [i / math.gcd(f[0], f[1]) for i in f]

# fractionReducing = lambda f: [i / math.gcd(f[0], f[1]) for i in f]

f, = eval(dir()[0])
return [i / math.gcd(f[0], f[1]) for i in f]

def arrayReplace(inputArray, elemToReplace, substitutionElem):
    new = []
    for i in range(len(inputArray)):
        if inputArray[i] == elemToReplace:
            new.append(substitutionElem)
        else:
            new.append(inputArray[i])
    return new

def alphabeticShift(inputString):
    return "".join(chr(ord(i) + 1) if i != "z" else "a" for i in inputString)

def areSimilar(a, b):
    check_a = []
    check_b = []
    count = 0
    for i in range(len(a)):
        if a[i] != b[i]:
            count += 1
            check_a.append(a[i])
            check_b.append(b[i])
    if count == 0:
        return True
    elif count == 2:
        return set(check_a) == set(check_b)
    else:
        return False

def differentSquares(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    sq_arr = []
    sq_count = 0
    for i in range(rows - 1):
        for j in range(cols - 1):
            sq_2x2 = [
                matrix[i][j],
                matrix[i][j + 1],
                matrix[i + 1][j],
                matrix[i + 1][j + 1],
            ]
            if sq_2x2 not in sq_arr:
                sq_arr.append(sq_2x2)
                sq_count += 1
    return sq_count

def maxSubarray(A):
    # A: inputArray
    # m: Max
    #
    #
    m = e = 0
    for i in A:
        e += i
        if e < 0:
            e = 0
        if m < e:
            m = e
    return m

l, s = eval(dir()[0])
r = []
c = 1

t = [[int(s[i : i + 2]) for i in [1, 4]] + [s[7:9]] for s in l]
t = [f"{x // 60:02d}:{x % 60:02d}:{y:02d},{z.ljust(3, str(0))}" for x, y, z in t] + [
    s + ",000"
]  # if I replace str(0) with '0', this increases to 359 characters wtf

for a, b in enumerate(l):
    r.extend([str(c), t[a] + " --> " + t[a + 1], b[11:], ""])
    c += 1
return r[:-1]

# def mySubstring(s, l, r):
#     return s[l:r+1]

mySubstring = lambda s, l, r: s[l : r + 1]

def isSum(value):
    s = 0
    for i in range(100):
        s += i
        if s == value:
            return True

# def countSumOfTwoRepresentations3(n, l, r):
#     if r < n // 2 or l > n // 2:
#         return 0
#     return n // 2 - max(l, n-r) + 1
# 87

# countSumOfTwoRepresentations3 = lambda n, l, r: max(n // 2 - max(l, n-r) + 1, 0)
# 66

n, l, r = eval(dir()[0])
return max(n // 2 - max(l, n - r) + 1, 0)
# 50
```

{% endtab %} {% endtabs %}
