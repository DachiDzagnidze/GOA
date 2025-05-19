import math
import random
import string
import time
from datetime import datetime

class MathHelper:
    PI = 3.14159

    def power(self, base, exponent):
        return base ** exponent

m = MathHelper()
print(m.PI)
print(m.power(2, 3))


class RandomHelper:
    CHAR_SET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    def random_char(self):
        return random.choice(self.CHAR_SET)

r = RandomHelper()
print(r.CHAR_SET)
print(r.random_char())


class TimeHelper:
    CREATION_TIME = time.time()

    def ms_to_readable(self, ms):
        return datetime.fromtimestamp(ms / 1000).strftime("%Y-%m-%d %H:%M:%S")

t = TimeHelper()
print(t.CREATION_TIME)
print(t.ms_to_readable(1700000000000))
