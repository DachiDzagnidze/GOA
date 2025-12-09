

A = 1
B = 0
C = 0

# A: (A && !B) // (B && !A) 
result_a = (A and (B == 0)) or (B and (A == 0))
print("Result a:", result_a)

# B: (B && C) && (A // B) 
result_b = (B and C) and (A or B)
print("Result b:", result_b)

# G: (A && !C) // (B && !A) // (B && !C) 
result_g = (A and (C == 0)) or (B and (A == 0)) or (B and (C == 0))
print("Result g:", result_g)
