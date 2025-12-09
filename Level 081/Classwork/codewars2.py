def number(lines):
    result = []
    for i in range(len(lines)):
        result.append(str(i + 1) + ": " + lines[i])
    return result
