def manual_object_assign(*objs):
    res = {}
    for o in objs:
        for k in o:
            res[k] = o[k]
    return res
