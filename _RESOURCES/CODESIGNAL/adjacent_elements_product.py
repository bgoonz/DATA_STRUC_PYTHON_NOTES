def adjacentElementsProduct(inputArray):
    pair_of_elements, maxproduct = [], -sys.maxsize
    for i in range(len(inputArray) - 1):
        current_product = inputArray[i] * inputArray[i + 1]
        if current_product > maxproduct:
            maxproduct = current_product
            pair_of_elements.append(inputArray[i])
            pair_of_elements.append(inputArray[i + 1])
    return maxproduct
