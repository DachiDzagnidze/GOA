n = int(input("Enter number of elements: "))
arr = list(map(int, input("Enter the numbers: ").split()))

# 1. Find the two largest elements without sorting
first, second = float('-inf'), float('-inf')
for num in arr:
    if num > first:
        second = first
        first = num
    elif num > second:
        second = num
print(f"Sum of two largest numbers: {first + second}")

# 2. Find the first repeating element from the start
seen = set()
first_repeat = None
for num in arr:
    if num in seen:
        first_repeat = num
        break
    seen.add(num)
if first_repeat is None:
    print("No repeating elements in the array")
else:
    print(f"First repeating element: {first_repeat}")

# 3. For each element, count how many elements after it are smaller
result = []
for i in range(n):
    count = 0
    for j in range(i+1, n):
        if arr[j] < arr[i]:
            count += 1
    result.append(str(count))
print("Counts of smaller elements after each element: " + ",".join(result))
