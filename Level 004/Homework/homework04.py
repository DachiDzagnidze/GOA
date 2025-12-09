from turtle import*

# ცა
speed(500000)
bgcolor("royalblue")


# წყლის გაკეთება
penup()
goto(-800,-200)
pendown()

begin_fill()
color('blue')
forward(1600)
left(270)
forward(1800)
right(90)
forward(1700)
end_fill()
 
penup()
goto(-400,-200)
pendown()




# დავხაზოთ მთავარი ნაწილი სასახლის
color('gray')
begin_fill()
left(270)
forward(300)
left(90)
forward(20)
right(90)
forward(50)
i=1

#გავაკეთოთ ციხე-სიმაგრის მარცხენა მხარე

while i<=10:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    i=i+1
right(90)
forward(10)
right(90)
forward(50)
right(90)
forward(20)
left(90)
forward(110)
right(180)
o=1

# გავაკეთოთ ციხე-სიმაგრის შუა ნაწილი
while o<=30:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    o=o+1
forward(110)
left(90)
forward(20)
right(90)
forward(50)
i=1

# გავაკეთოთ მარჯვენა მხარე ციხე-სიმაგრის
while i<=10:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    i=i+1
right(90)
forward(10)
right(90)
forward(50)
right(90)
forward(20)
left(90)
forward(300)
end_fill()

# გავაკეთოთ კარები 
right(90)
forward(300)
color('brown')
begin_fill()
right(90)
forward(80)
left(90)
forward(60)
left(90)
forward(80)
end_fill()

# ციხე-სიმაგრის კარაების დახაზვა
color('black')
width(4)
up()
left(90)
forward(30)
left(90)
down()
forward(80)


up()
goto(0,0)
down()

penup()
goto(-15,-20)
pendown()

begin_fill()
color('gray')
left(0)
forward(185)
left(90)
forward(20)
right(90)
forward(50)
i=1
while i<=10:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    i=i+1
right(90)
forward(10)
right(90)
forward(50)
right(90)
forward(20)
left(90)
forward(110)

o=1
forward(77)
end_fill()






up()
goto(-400,-200)
down()
speed(150)



# გადავავლოთ შავი ხაზი ციხე სიმაგრეს
color('black')
left(180)
forward(300)
left(90)
forward(20)
right(90)
forward(50)
i=1

while i<=10:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    i=i+1
right(90)
forward(10)
right(90)
forward(50)
right(90)
forward(20)
left(90)
forward(110)
right(180)
o=1

while o<=30:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    o=o+1
forward(110)
left(90)
forward(20)
right(90)
forward(50)
i=1

while i<=10:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    i=i+1
right(90)
forward(10)
right(90)
forward(50)
right(90)
forward(20)
left(90)
forward(300)
end_fill()

penup()
goto(-15,-20)
color('black')
pendown()
left(180)
forward(185)
left(90)
forward(20)
right(90)
forward(50)
i=1
while i<=10:
    right(90)
    forward(10)
    right(90)
    forward(10)
    left(90)
    forward(10)
    left(90)
    forward(10)
    i=i+1
right(90)
forward(10)
right(90)
forward(50)
right(90)
forward(20)
left(90)
forward(110)
o=1
forward(70)


up()
left(90)




# გზის გაკეთება წყალზე
penup()
goto(175,-200)
pendown()
begin_fill()
color("black")

right(120)
forward(500)
forward(300)
left(80)
forward(300)
penup()
goto(240,-200)
pendown()
forward(500)
left(270)
forward(500)
penup()
goto(175,-200)
right(220)
pendown()
forward(30)
color("saddlebrown")
penup()
goto(185,-200)
pendown()
forward(25)
right(90)
forward(50)
width(109)
forward(300)
end_fill()

# ფანჯარა N1
color("black")
width(4)
penup()
right(10)
goto(-335,31)
pendown()
forward(55)
left(90)
forward(55)
left(90)
forward(55)
left(90)
forward(55)
left(90)
forward(27.5)
left(90)
forward(55)
left(90)
forward(27.5)
left(90)
forward(27.5)
left(90)
forward(55)


# ფანჯარა N2
width(5)
penup()
goto(420,37)
pendown()
forward(55)
left(90)
forward(55)
left(90)
forward(55)
left(90)
forward(55)
left(90)
forward(27.5)
left(90)
forward(55)
left(90)
forward(27.5)
left(90)
forward(27.5)
left(90)
forward(55)



# ფანჯარა N3
penup()
goto(50,100)
pendown()
forward(55)
left(90)
forward(55)
left(90)
forward(55)
left(90)
forward(55)
left(90)
forward(27.5)
left(90)
forward(55)
left(90)
forward(27.5)
left(90)
forward(27.5)
left(90)
forward(55)




# GOA-ს დროშის გაკეტება
width(15)
penup()
goto(55,208)
pendown()
begin_fill()
right(180)
forward(140)
right(90)
forward(140)
right(90)
forward(70)
right(90)
forward(140)
end_fill()
width(5)
color("white")
penup()
goto(93,330)
pendown()
right(20)
forward(15)
left(20)
forward(15)
left(35)
forward(14)
left(40)
forward(20)
left(60)
forward(15)
left(30)
forward(15)
left(23)
forward(10)
left(10)
forward(10)
left(75)
forward(15)
right(90)
forward(10)
right(180)
forward(20)



penup()
goto(105,300)
pendown()
color("green")
right(90)
forward(10)
right(8)
forward(10)
right(16)
forward(15)
right(70)
forward(10)
right(20)
forward(10)
right(15)
forward(5)
right(30)
forward(10)
right(25)
forward(10)
right(40)
forward(20)
right(45)
forward(15)
right(35)
forward(7)
right(55)
forward(3)

color("white")
penup()
goto(150,300)
pendown()
right(30)
forward(40)
right(120)
forward(40)
right(180)
forward(20)
left(55)
forward(20)


































exitonclick()