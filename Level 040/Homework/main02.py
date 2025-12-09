
def capitalize(s):
    even_capitalized = ""  
    odd_capitalized = ""   
    is_even = True         # shevqmnat da daviwkot indexidan da vtqvat rom indexi luwia

    for char in s:  # daviwkot iteracia upper da lower ze
        if is_even:
            even_capitalized += char.upper()  # tu indexi evenia uppershi gadaikvane
            odd_capitalized += char.lower()   # tu indexi oddia datove lowercaseshi 
        else:
            even_capitalized += char.lower()   # tu indexi oddia datove lowercaseshi
            odd_capitalized += char.upper()     # da tu evenia gadaikvane uppershi
        
        is_even = not is_even  

    return [even_capitalized, odd_capitalized]  # davabrunot orive even capitalized da odd capitalized
