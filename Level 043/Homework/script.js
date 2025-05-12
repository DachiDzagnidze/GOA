


// JavaScript-ის ჩასაწერი სამი ძირითადი მეთოდი არსებობს: inline, internal და external.
// განვმარტოთ რა განსხვავებაა მათ შორის:

// 1. Inline JavaScript:
// ეს მეთოდი გულისხმობს JavaScript-ის კოდის პირდაპირ HTML ელემენტებში ჩაწერას, მაგალითად, `onclick` ან სხვა მოვლენების ატრიბუტებში.
// მაგალითი:
// <button onclick="alert('გამარჯობა!')">დააჭირე</button>
// - Inline JavaScript აურევს HTML და JavaScript კოდს, რაც ართულებს მის მართვას დიდ პროექტებში.

// 2. Internal JavaScript:
// ამ შემთხვევაში, JavaScript კოდი იწერება HTML ფაილში, მაგრამ <script> ტეგებში.
// მაგალითი:
// <script>
//   function showMessage() {
//     alert('გამარჯობა!');
//   }
// </script>
// <button onclick="showMessage()">დააჭირე</button>
// - ეს უფრო ორგანიზებულია, ვიდრე inline, მაგრამ JavaScript კვლავ დაკავშირებულია კონკრეტულ HTML ფაილთან.

// 3. External JavaScript (ყველაზე რეკომენდირებული მეთოდი):
// ამ დროს JavaScript კოდი იწერება ცალკე `.js` ფაილში და ამ ფაილს უკავშირდება HTML დოკუმენტი <script> ტეგის `src` ატრიბუტით.
// მაგალითი:
// <script src="script.js"></script>
// - External JavaScript საუკეთესო მიდგომაა დიდი პროექტებისთვის, რადგან HTML და JavaScript განყოფილია,
//   რაც კოდს უფრო სუფთას და მარტივად მართვადს ხდის.
// - ცალკე ფაილი შეიძლება გამოყენებულ იქნას მრავალ HTML გვერდზე, რაც ზრდის ეფექტურობას და თანმიმდევრობას.
