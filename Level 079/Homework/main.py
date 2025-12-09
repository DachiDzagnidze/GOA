
def is_leap_year(year):
    #! tu weli iyofa 4 ze is aris nakiani weliwadi 
    if year % 4 == 0:
        #! tu es konkretuli weli iyofa aseve 100 ze is gaikofa aseve 400 ze anu esec nakiania
        if year % 100 != 0:
            return True  #* aburnebs nakian weliwads
        elif year % 400 == 0:
            return True  #* aqac abrunebs nakiani weliwads
    return False 

#? kvelaze axlos mdebare weli romelic nakiania

def next_leap_year(year):
    while is_leap_year(year) == False:  
        year = year + 1  
    return year  


years = [2100, 2104, 2400]

#! gadauarot lists dasaprintad
for i in range(len(years)):
    year = years[i]  
    if is_leap_year(year) == True:  #* shevamowmot current nakiani weli
        print(year, "- Yes")  #? daprintos ki tu nakiania
    else:
        closest_leap = next_leap_year(year + 1)  
        print(year, "- No, closest leap year is", closest_leap) 









