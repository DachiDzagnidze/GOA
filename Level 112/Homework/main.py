class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def summary(self):
        return self.title + " by " + self.author

    def details(self):
        return "Title: " + self.title + ", Author: " + self.author + ", Pages: " + str(self.pages)

    @property
    def description(self):
        return "'" + self.title + "' is a book written by " + self.author + " with " + str(self.pages) + " pages."

class Adventure(Book):
    def __init__(self, title, author, pages, setting, hero):
        self.title = title
        self.author = author
        self.pages = pages
        self.setting = setting
        self.hero = hero

    def summary(self):
        return "Adventure: " + self.title + " - A thrilling story by " + self.author

    def details(self):
        return "Title: " + self.title + ", Author: " + self.author + ", Pages: " + str(self.pages) + " | Genre: Adventure"

    def unique_method(self):
        return "Explores exciting journeys and quests."

class Satire(Book):
    def __init__(self, title, author, pages, target, style):
        self.title = title
        self.author = author
        self.pages = pages
        self.target = target
        self.style = style

    def summary(self):
        return "Satire: " + self.title + " - A witty critique by " + self.author

    def details(self):
        return "Title: " + self.title + ", Author: " + self.author + ", Pages: " + str(self.pages) + " | Genre: Satire"

    def unique_method(self):
        return "Mocks society with humor and irony."

class Fantasy(Book):
    def __init__(self, title, author, pages, world, magic_system):
        self.title = title
        self.author = author
        self.pages = pages
        self.world = world
        self.magic_system = magic_system

    def summary(self):
        return "Fantasy: " + self.title + " - A magical tale by " + self.author

    def details(self):
        return "Title: " + self.title + ", Author: " + self.author + ", Pages: " + str(self.pages) + " | Genre: Fantasy"

    def unique_method(self):
        return "Contains magic, mythical creatures, and epic adventures."


a1 = Adventure("Jungle Quest", "John Smith", 300, "Amazon", "Explorer")
a2 = Satire("Funny Times", "Jane Doe", 200, "Politics", "Parody")
a3 = Fantasy("Magic Land", "Alice Wonder", 400, "Fantasy World", "Spell Casting")

books = [a1, a2, a3]

for b in books:
    print(b.details())
    print(b.summary())
    print(b.unique_method())
    print()
