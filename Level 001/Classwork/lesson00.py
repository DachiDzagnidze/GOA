from turtle import *


speed(30)
width(4)
#დავხაზოთ კვადრატი
color("brown")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#დავხაზოთ კარები
begin_fill()
forward(70)
color("gray")
left(90)
forward(120) #კარების სიმაღლე
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup() #კალმის აღება
goto(200,200)
pendown() #კალმის ჩამოწევა


color("brown")
begin_fill() #შიგნით გაფერადება
right(150)
forward(200)
left(120)
forward(200)
end_fill()#გაფერადება დასრულებულია

exitonclick()