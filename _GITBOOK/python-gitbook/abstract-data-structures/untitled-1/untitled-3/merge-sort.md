# Merge Sort

### What is Merge Sort?

In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm.

Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

It is a divide and conquers algorithm. In the divide and conquer paradigm, a problem is broken into pieces where each piece still retains all the properties of the larger problem – except its size.

#### [Advantages ](https://en.wikipedia.org/wiki/Merge_sort)of Merge Sort

1. [Simple implementation](https://codezup.com//insertion-sort-implementation-example-in-python/).

2. Much More Efficient for small and large data sets.

3. Adaptive that is efficient for the type of data sets that are already substantially sorted.

4. Stable Sorting Algorithm

#### Define Merge Sorting Function

Now, let’s define a new function named merge-sorting which accepts one parameter which is list we pass as an argument to this function.

So this function is to sort an array or list using a merge sorting algorithm.

As we have discussed above, to solve the original problem, each piece is solved individually and then the pieces are merged back together.

For that, we are going to use recursive calls to a new function named merge which accepts two sorted arrays to form a single sort array.

Now in the merge-sort function, the base condition for our recursive call is that if the length of an array or list is equal to 0 or 1 then simply return the first element of the array.

Otherwise, just divide the array into two equal halves and pass both arrays to recursive calls of merge-sort.

And at last, we are going to call merge function after each recursive call to join both sorted array.

```text
def mergeSort(x):
    if len(x) == 0 or len(x) == 1:
        return x
    else:
        middle = len(x)//2
        a = mergeSort(x[:middle])
        b = mergeSort(x[middle:])
        return merge(a,b)
```

#### Define Merge Function

Now we are breaking the array until they are divided individually. So what we want is just join the arrays that we passed in a sorted way to this function and then returned the new array as a result.

```text
def merge(a,b):
    c = []
    while len(a) != 0 and len(b) != 0:
        if a[0] < b[0]:
            c.append(a[0])
            a.remove(a[0])
        else:
            c.append(b[0])
            b.remove(b[0])
    if len(a) == 0:
        c += b
    else:
        c += a
    return c
```

**Complexity**

The overall time complexity of Merge is O\(nLogn\).

The space complexity of Merge-sort is O\(n\).

This means that this algorithm takes a lot of space and may slow down operations for large data sets.

#### Define Main Condition

Now, let’s create a main condition where we need to call the above function and pass the list which needs to be sorted.

So let’s manually defined the list which we want to pass as an argument to the function.

```text
if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List : ',mergeSort(List))
```

**Source Code**

```text

def merge(a,b):
    c = []
    while len(a) != 0 and len(b) != 0:
        if a[0] < b[0]:
            c.append(a[0])
            a.remove(a[0])
        else:
            c.append(b[0])
            b.remove(b[0])
    if len(a) == 0:
        c += b
    else:
        c += a
    return c

# Code for merge sort

def mergeSort(x):
    if len(x) == 0 or len(x) == 1:
        return x
    else:
        middle = len(x)//2
        a = mergeSort(x[:middle])
        b = mergeSort(x[middle:])
        return merge(a,b)

if __name__ == '__main__':
    List = [3, 4, 2, 6, 5, 7, 1, 9]
    print('Sorted List : ',mergeSort(List))
```

**Output**

![Merge Sort implementation example in Python Output](https://i2.wp.com/codezup.com/wp-content/uploads/2020/01/Merge-Sort-implementation-example-in-Python-Output.png?resize=665%2C264&ssl=1)

## JS Implementation:

#### Merge sort divides an array into halves, calls itself for the two halves, and then merges the two halves.

![](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545496140691-NEK7IVJAH93GBL80LXJ4/image-asset.png?format=750w)

#### The merge algorithm consists of two functions: the mergeSort function, which takes care of partitioning the arrays, and the merge function, which merges the separate arrays.

#### The implementation of merge sort is the following, and is the easiest to explain using animations as example:

![carbon (33).png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545496599593-Z7XPJJG6QL4M54YU3LQV/carbon+%2833%29.png?format=750w)

![Screen Shot 2018-12-22 at 17.33.52.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545496455849-G3GAA1EB8Z8Q5HF53RIG/Screen+Shot+2018-12-22+at+17.33.52.png?format=300w)

#### We invoke the **mergeSort** function with the array we want to have sorted. The array gets split in two parts: a left, and a right part. Then, we return the **merge** function with two arguments, where we call the **mergeSort** function for the left side of the array, and the **mergeSort** function for the right side of the array.

![Screen Shot 2018-12-22 at 17.40.28.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545496838680-3JCEWZ688CVM16L964Y5/Screen+Shot+2018-12-22+at+17.40.28.png?format=300w)

#### The **mergeSort** function gets invoked with the items on the left side of the array, which are 6 and 4. Again, this array gets split in two parts: a left, and a right part. Then, we again return the merge function, where we call the merge sort function for the left side of the array, and the **mergeSort** function for the right side of the array.

![Screen Shot 2018-12-22 at 17.41.10.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545496880270-6MUZ2C698G8R1N0YWC4R/Screen+Shot+2018-12-22+at+17.41.10.png?format=100w)

#### The **mergeSort** function gets invoked with the items on the left side of the array, which is only the item 6 right now. This means that **array.length === 1** returns true, which returns the array.

![Screen Shot 2018-12-22 at 17.41.42.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545496915861-TVZA5ZQTRM8WZS8DUWYK/Screen+Shot+2018-12-22+at+17.41.42.png?format=100w)

#### For the first time, we invoke the **mergeSort** function for the right side of the array! Again, this is only one item, so **array.length === 1** returns true. The array gets returned.

![Screen Shot 2018-12-22 at 17.42.31.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545496965308-7SEIGL7PC4ZHNFBHBV19/Screen+Shot+2018-12-22+at+17.42.31.png?format=300w)

#### As both arguments returned something, the **merge** function actually gets called now. The **merge** function receives two arguments: left and right. In this case, left is 6, and right is 4. In the merge function, we declare 3 variables: a new empty array to which we will push the right values later on, the index on the left side, and the index on the right side.

#### **leftIndex &lt; left.length && rightIndex &lt; right.length** returns true: the length of both arrays is 1, and the index is 0. \(**0 &lt; 1 && 0 &lt; 1**\). The if-statement, **left\[leftIndex\] &lt; right\[rightIndex\],** returns false:

#### **left** is **\[6\]**, so **left\[0\]** is **6**, and **right** is **\[4\]**, so **right\[0\]** is **4**! This means that the else-block gets run, and we push right\[0\] to the results array. The results array is now \[4\]. We also increment the **rightIndex** from 0 to 1. This means that now,

#### **leftIndex &lt; left.length && rightIndex &lt; right.length** returns false, because **0 &lt; 1 && 1 &lt; 1** is not true. The two arrays get concatenated, and returned. This means that the **mergeSort\(left\)** in the **merge** function we invoked first, finally returned. The exact same logic now applies to **mergeSort\(right\).**

![Screen Shot 2018-12-22 at 17.44.10.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545497080696-2DFK2SPSB6XRLSTD5UOX/Screen+Shot+2018-12-22+at+17.44.10.png?format=300w)

#### Right now, **mergeSort\(left\)** and **mergeSort\(right\)** have returned from the very first merge call! **left** is **\[4,6\]** and **\[1, 5\]** is **right.**

![Screen Shot 2018-12-22 at 17.50.35.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545497554635-ATKE1MDEVLDOOIUZYQZK/Screen+Shot+2018-12-22+at+17.50.35.png?format=300w)![Screen Shot 2018-12-22 at 17.52.12.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545497564298-7DWJ6O5VR3BULDD7GKNY/Screen+Shot+2018-12-22+at+17.52.12.png?format=300w)

#### The results array, displayed as the yellow box, is by default empty. The index of both the left and the right array are 0, which are displayed with the blue box. **left\[leftIndex\] &lt; right\[rightIndex\] is 4 &lt; 1** in this case, which returns false. **right\[rightIndex\]** gets pushed to the **results** array, and the **rightIndex** get incremented by one.

![Screen Shot 2018-12-22 at 17.53.23.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545497620397-MV27B7PYRFTLSOLITHTC/Screen+Shot+2018-12-22+at+17.53.23.png?format=300w)

#### As the **rightIndex** gets incremented by one, **right\[1\]** is now 5. **4 &lt; 5** returns true, so **left\[leftIndex\]** gets pushed to the **results** array.

####

![](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545497669811-HRRJS0W6SMFPCCOE053V/image-asset.png?format=300w)

#### As the **leftIndex** gets incremented by one, **left\[1\]** is now 6. **6 &lt; 5** returns false, so **right\[rightIndex\]** gets pushed to the **results** array.

![Screen Shot 2018-12-22 at 17.55.00.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545497710399-UBOW25YF0WAU8RQ1IDLB/Screen+Shot+2018-12-22+at+17.55.00.png?format=300w)

#### The while-condition now returns false, which means that the results array gets returned with the leftover value concatenated. We now have our sorted array!

![Screen Shot 2018-12-24 at 14.52.48.png](https://images.squarespace-cdn.com/content/v1/5a983f297c9327c67812b231/1545659604186-QAY63QJ8S5XAHXO7APIJ/Screen+Shot+2018-12-24+at+14.52.48.png?format=750w)

#### **Best**, **average and worst**: Each partitioning takes **O\(n\)** operations, and every partitioning splits the array **O\(log\(n\)\)**. This results in **O\(n log\(n\)\)**.

#### **Worst space**: We save three variables for each element in the array.
