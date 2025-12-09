def sum_array(arr):
    if not arr or len(arr) < 3:
        return 0
    return sum(arr) - max(arr) - min(arr)
