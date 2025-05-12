
#! first task

def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"
    

#! second task

def set_alarm(employed, vacation):
    if employed == 1:
        if vacation == 0:
            return 1
        else:
            return 0
    else:
        return 0