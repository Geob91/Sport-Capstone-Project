const rugbyPlayers = [
  {
    Name: "Dan Cole",
    Age: 32,
    Club: "Leicester",
    Nationality: "English",
    Position: "Prop",
    Height: 6.2,
    Weight: 271
  },
  {
    Name: "Steven Kitshoff",
    Age: 28,
    Club: "Western Province",
    Nationality: "South African",
    Position: "Prop",
    Height: 6.0,
    Weight: 251
  },
  {
    Name: "Owen Franks",
    Age: 31,
    Club: "Northampton Saints",
    Nationality: "New Zealander",
    Position: "Prop",
    Height: 6.1,
    Weight: 258
  },
  {
    Name: "David Ainu'u",
    Age: 20,
    Club: "Toulouse",
    Nationality: "American",
    Position: "Prop",
    Height: 5.1,
    Weight: 275
  },
  {
    Name: "Jamie George",
    Age: 29,
    Club: "Saracens",
    Nationality: "English",
    Position: "Hooker",
    Height: 5.1,
    Weight: 240
  },
  {
    Name: "Ken Owens",
    Age: 32,
    Club: "Scarlets",
    Nationality: "Welsh",
    Position: "Hooker",
    Height: 6.0,
    Weight: 240
  },
  {
    Name: "Dylan Fawsitt",
    Age: 29,
    Club: "Rugby United New York",
    Nationality: "American",
    Position: "Hooker",
    Height: 6.0,
    Weight: 235
  },
  {
    Name: "James Ryan",
    Age: 23,
    Club: "Leinster",
    Nationality: "Irish",
    Position: "Lock",
    Height: 6.8,
    Weight: 247
  },
  {
    Name: "Courtney Lawes",
    Age: 30,
    Club: "Northampton",
    Nationality: "English",
    Position: "Lock",
    Height: 6.7,
    Weight: 254
  },
  {
    Name: "Eben Etzebeth",
    Age: 28,
    Club: "Toulon",
    Nationality: "South African",
    Position: "Lock",
    Height: 6.8,
    Weight: 271
  },
  {
    Name: "Ben Landry",
    Age: 28,
    Club: "Ealing Trailfinders",
    Nationality: "American",
    Position: "Lock",
    Height: 6.5,
    Weight: 270
  },
  {
    Name: "Peter O'Mahony",
    Age: 30,
    Club: "Munster",
    Nationality: "Irish",
    Position: "Backrow",
    Height: 6.3,
    Weight: 236
  },
  {
    Name: "Tom Curry",
    Age: 21,
    Club: "Sale Sharks",
    Nationality: "English",
    Position: "Backrow",
    Height: 6.1,
    Weight: 235
  },
  {
    Name: "Siya Kolisi",
    Age: 28,
    Club: "Western Province",
    Nationality: "South African",
    Position: "Backrow",
    Height: 6.2,
    Weight: 231
  },
  {
    Name: "Hanco Germishuys",
    Age: 23,
    Club: "Austin Elite of Major League Rugby",
    Nationality: "American",
    Position: "Backrow",
    Height: 6.2,
    Weight: 224
  },
  {
    Name: "Aaron Luke Smith",
    Age: 31,
    Club: "Highlanders",
    Nationality: "New Zealander",
    Position: "Scrum Half",
    Height: 5.7,
    Weight: 183
  },
  {
    Name: "Ben Youngs",
    Age: 30,
    Club: "Leicester",
    Nationality: "English",
    Position: "Scrum Half",
    Height: 5.1,
    Weight: 203
  },
  {
    Name: "Greig Laidlaw",
    Age: 34,
    Club: "Clermont Auvergne",
    Nationality: "Scottish",
    Position: "Scrum Half",
    Height: 5.9,
    Weight: 176
  },
  {
    Name: "Nate Augspurger",
    Age: 29,
    Club: "San Diego Legion",
    Nationality: "American",
    Position: "Scrum Half",
    Height: 5.7,
    Weight: 170
  },
  {
    Name: "Johnny Sexton",
    Age: 34,
    Club: "Leinster",
    Nationality: "Irish",
    Position: "Fly Half",
    Height: 6.2,
    Weight: 203
  },
  {
    Name: "Owen Farrell",
    Age: 28,
    Club: "Saracens",
    Nationality: "English",
    Position: "Fly half",
    Height: 6.2,
    Weight: 212
  },
  {
    Name: "Bernard Foley",
    Age: 30,
    Club: "Waratahs",
    Nationality: "Australia",
    Position: "Fly Half",
    Height: 6.0,
    Weight: 198
  },
  {
    Name: "Ryan Crotty",
    Age: 31,
    Club: "Crusaders",
    Nationality: "New Zealander",
    Position: "Center",
    Height: 5.11,
    Weight: 212
  },
  {
    Name: "Jesse Kriel",
    Age: 25,
    Club: "Canon Eagles",
    Nationality: "South African",
    Position: "Center",
    Height: 6.1,
    Weight: 209
  },
  {
    Name: "Manu Tuilagi",
    Age: 28,
    Club: "Leicester",
    Nationality: "English",
    Position: "Center",
    Height: 6.1,
    Weight: 251
  },
  {
    Name: "Paul Lasike",
    Age: 29,
    Club: "Harlequins",
    Nationality: "American",
    Position: "Center",
    Height: 5.11,
    Weight: 231
  },
  {
    Name: "Anthony Watson",
    Age: 25,
    Club: "Bath",
    Nationality: "English",
    Position: "Winger",
    Height: 6.2,
    Weight: 209
  },
  {
    Name: "Cheslin Kolbe ",
    Age: 26,
    Club: "Toulouse",
    Nationality: "South African",
    Position: "Winger",
    Height: 5.7,
    Weight: 176
  },
  {
    Name: "Rieko Ioane",
    Age: 22,
    Club: "Blues",
    Nationality: "New Zealander",
    Position: "Winger",
    Height: 6.2,
    Weight: 225
  },
  {
    Name: "Mike Te'o",
    Age: 26,
    Club: "San Diego Legion",
    Nationality: "American",
    Position: "Winger",
    Height: 5.8,
    Weight: 205
  },
  {
    Name: "Elliot Daly",
    Age: 27,
    Club: "Saracens",
    Nationality: "English",
    Position: "Full Back",
    Height: 6.0,
    Weight: 216
  },
  {
    Name: "Beauden Barrett",
    Age: 28,
    Club: "Blues",
    Nationality: "New Zealander",
    Position: "Full Back",
    Height: 6.2,
    Weight: 203
  },
  {
    Name: "Will Hooley",
    Age: 26,
    Club: "Exeter Chiefs",
    Nationality: "American",
    Position: "Full Back",
    Height: 6.2,
    Weight: 196
  }
];

console.log(rugbyPlayers);
function getCountry(name, nationality) {
  return name.filter(name => name.Nationality === nationality);
}

function getPosition(name, position) {
  return name.filter(name => name.Position === position);
}
//console.log(getCountry(rugbyPlayers, "English"));
console.log(getPosition(rugbyPlayers, "Center"));
//console.log(rugbyPlayers)
