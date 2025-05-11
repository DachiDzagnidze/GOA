def f(s):
    if not s:
        return ''
    if s[0].isupper():
        res = ''
        i = len(s) - 1
        while i >= 0:
            res += s[i]
            i -= 1
        return res
    else:
        return s
