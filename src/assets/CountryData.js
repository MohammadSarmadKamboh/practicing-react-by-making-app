 const countryData = [
  {
    country: "Andorra",
    code: "AD",
    exampleURL: "api.zippopotam.us/AD/AD100",
    range: "AD100 : AD700",
    count: 7
  },
  {
    country: "Argentina",
    code: "AR",
    exampleURL: "api.zippopotam.us/AR/1601",
    range: "1601 : 9431",
    count: 20260
  },
  {
    country: "American Samoa",
    code: "AS",
    exampleURL: "api.zippopotam.us/AS/96799",
    range: "96799 : 96799",
    count: 1
  },
  {
    country: "Austria",
    code: "AT",
    exampleURL: "api.zippopotam.us/AT/1010",
    range: "1010 : 9992",
    count: 4877
  },
  {
    country: "Australia",
    code: "AU",
    exampleURL: "api.zippopotam.us/AU/0200",
    range: "0200 : 9726",
    count: 10161
  },
  {
    country: "Bangladesh",
    code: "BD",
    exampleURL: "api.zippopotam.us/BD/1000",
    range: "1000 : 9461",
    count: 1323
  },
  {
    country: "Belgium",
    code: "BE",
    exampleURL: "api.zippopotam.us/BE/1000",
    range: "1000 : 9992",
    count: 3386
  },
  {
    country: "Bulgaria",
    code: "BG",
    exampleURL: "api.zippopotam.us/BG/1000",
    range: "1000 : 9974",
    count: 5304
  },
  {
    country: "Brazil",
    code: "BR",
    exampleURL: "api.zippopotam.us/BR/01000-000",
    range: "01000-000 : 99990-000",
    count: 5526
  },
  {
    country: "Canada",
    code: "CA",
    exampleURL: "api.zippopotam.us/CA/A0A",
    range: "A0A : Y1A",
    count: 1621
  },
  {
    country: "Switzerland",
    code: "CH",
    exampleURL: "api.zippopotam.us/CH/1000",
    range: "1000 : 9658",
    count: 4614
  },
  {
    country: "Czech Republic",
    code: "CZ",
    exampleURL: "api.zippopotam.us/CZ/100 00",
    range: "100 00 : 798 62",
    count: 15507
  },
  {
    country: "Germany",
    code: "DE",
    exampleURL: "api.zippopotam.us/DE/01067",
    range: "01067 : 99998",
    count: 16482
  },
  {
    country: "Denmark",
    code: "DK",
    exampleURL: "api.zippopotam.us/DK/0800",
    range: "0800 : 9990",
    count: 1182
  },
  {
    country: "Dominican Republic",
    code: "DO",
    exampleURL: "api.zippopotam.us/DO/10101",
    range: "10101 : 11906",
    count: 546
  },
  {
    country: "Spain",
    code: "ES",
    exampleURL: "api.zippopotam.us/ES/01001",
    range: "01001 : 52080",
    count: 56542
  },
  {
    country: "Finland",
    code: "FI",
    exampleURL: "api.zippopotam.us/FI/00002",
    range: "00002 : 99999",
    count: 4637
  },
  {
    country: "Faroe Islands",
    code: "FO",
    exampleURL: "api.zippopotam.us/FO/100",
    range: "100 : 970",
    count: 130
  },
  {
    country: "France",
    code: "FR",
    exampleURL: "api.zippopotam.us/FR/01000",
    range: "01000 : 98799",
    count: 51129
  },
  {
    country: "Great Britain",
    code: "GB",
    exampleURL: "api.zippopotam.us/GB/AB1",
    range: "AB1 : ZE3",
    count: 27769
  },
  {
    country: "French Guyana",
    code: "GF",
    exampleURL: "api.zippopotam.us/GF/97300",
    range: "97300 : 97390",
    count: 25
  },
  {
    country: "Guernsey",
    code: "GG",
    exampleURL: "api.zippopotam.us/GG/GY1",
    range: "GY1 : GY9",
    count: 8
  },
  {
    country: "Greenland",
    code: "GL",
    exampleURL: "api.zippopotam.us/GL/2412",
    range: "2412 : 3992",
    count: 33
  },
  {
    country: "Guadeloupe",
    code: "GP",
    exampleURL: "api.zippopotam.us/GP/97100",
    range: "97100 : 97190",
    count: 35
  },
  {
    country: "Greece",
    code: "GR",
    exampleURL: "api.zippopotam.us/GR/100 00",
    range: "100 00 : 999 99",
    count: 2324
  },
  {
    country: "Guatemala",
    code: "GT",
    exampleURL: "api.zippopotam.us/GT/01001",
    range: "01001 : 21123",
    count: 716
  },
  {
    country: "Guam",
    code: "GU",
    exampleURL: "api.zippopotam.us/GU/96910",
    range: "96910 : 96932",
    count: 7
  },
  {
    country: "Hong Kong",
    code: "HK",
    exampleURL: "api.zippopotam.us/HK/999077",
    range: "999077 : 999077",
    count: 1
  },
  {
    country: "Croatia",
    code: "HR",
    exampleURL: "api.zippopotam.us/HR/10000",
    range: "10000 : 53296",
    count: 4391
  },
  {
    country: "Hungary",
    code: "HU",
    exampleURL: "api.zippopotam.us/HU/1011",
    range: "1011 : 9985",
    count: 4041
  },
  {
    country: "Isle of Man",
    code: "IM",
    exampleURL: "api.zippopotam.us/IM/IM1",
    range: "IM1 : IM9",
    count: 86
  },
  {
    country: "India",
    code: "IN",
    exampleURL: "api.zippopotam.us/IN/110001",
    range: "110001 : 855126",
    count: 15226
  },
  {
    country: "Iceland",
    code: "IS",
    exampleURL: "api.zippopotam.us/IS/101",
    range: "101 : 902",
    count: 148
  },
  {
    country: "Italy",
    code: "IT",
    exampleURL: "api.zippopotam.us/IT/00010",
    range: "00010 : 98168",
    count: 19940
  },
  {
    country: "Jersey",
    code: "JE",
    exampleURL: "api.zippopotam.us/JE/JE1",
    range: "JE1 : JE3",
    count: 4
  },
  {
    country: "Japan",
    code: "JP",
    exampleURL: "api.zippopotam.us/JP/100-0001",
    range: "100-0001 : 999-8531",
    count: 94388
  },
  {
    country: "Liechtenstein",
    code: "LI",
    exampleURL: "api.zippopotam.us/LI/9485",
    range: "9485 : 9498",
    count: 13
  },
  {
    country: "Sri Lanka",
    code: "LK",
    exampleURL: "api.zippopotam.us/LK/ *",
    range: "* : 99300",
    count: 1821
  },
  {
    country: "Luxembourg",
    code: "LU",
    exampleURL: "api.zippopotam.us/LU/1009",
    range: "1009 : 9999",
    count: 513
  },
  {
    country: "Monaco",
    code: "MC",
    exampleURL: "api.zippopotam.us/MC/98000",
    range: "98000 : 98000",
    count: 1
  },
  {
    country: "Martinique",
    code: "MQ",
    exampleURL: "api.zippopotam.us/MQ/97200",
    range: "97200 : 97290",
    count: 29
  },
  {
    country: "Mexico",
    code: "MX",
    exampleURL: "api.zippopotam.us/MX/01000",
    range: "01000 : 99998",
    count: 12925
  },
  {
    country: "Malta",
    code: "MT",
    exampleURL: "api.zippopotam.us/MT/1000",
    range: "1000 : 901993",
    count: 43538
  },
  {
    country: "Netherlands",
    code: "NL",
    exampleURL: "api.zippopotam.us/NL/1000",
    range: "1000 : 9999",
    count: 7566
  },
  {
    country: "Norway",
    code: "NO",
    exampleURL: "api.zippopotam.us/NO/0010",
    range: "0010 : 9991",
    count: 4312
  },
  {
    country: "New Zealand",
    code: "NZ",
    exampleURL: "api.zippopotam.us/NZ/0110",
    range: "0110 : 9889",
    count: 2176
  },
  {
    country: "French Polynesia",
    code: "PF",
    exampleURL: "api.zippopotam.us/PF/98709",
    range: "98709 : 98735",
    count: 6
  },
  {
    country: "Poland",
    code: "PL",
    exampleURL: "api.zippopotam.us/PL/00-001",
    range: "00-001 : 99-440",
    count: 21243
  },
  {
    country: "Portugal",
    code: "PT",
    exampleURL: "api.zippopotam.us/PT/1000-001",
    range: "1000-001 : 9980-999",
    count: 1873
  },
  {
    country: "Reunion",
    code: "RE",
    exampleURL: "api.zippopotam.us/RE/97400",
    range: "97400 : 97490",
    count: 28
  },
  {
    country: "Romania",
    code: "RO",
    exampleURL: "api.zippopotam.us/RO/010100",
    range: "010100 : 911600",
    count: 21534
  },
  {
    country: "Serbia",
    code: "RS",
    exampleURL: "api.zippopotam.us/RS/11000",
    range: "11000 : 99990",
    count: 6772
  },
  {
    country: "Russia",
    code: "RU",
    exampleURL: "api.zippopotam.us/RU/101000",
    range: "101000 : 901994",
    count: 31171
  },
  {
    country: "Sweden",
    code: "SE",
    exampleURL: "api.zippopotam.us/SE/10000",
    range: "10000 : 98499",
    count: 14474
  },
  {
    country: "Slovenia",
    code: "SI",
    exampleURL: "api.zippopotam.us/SI/1000",
    range: "1000 : 9265",
    count: 577
  },
  {
    country: "Svalbard and Jan Mayen",
    code: "SJ",
    exampleURL: "api.zippopotam.us/SJ/9170",
    range: "9170 : 9179",
    count: 4
  },
  {
    country: "Slovakia",
    code: "SK",
    exampleURL: "api.zippopotam.us/SK/010 01",
    range: "010 01 : 984 01",
    count: 5192
  },
  {
    country: "San Marino",
    code: "SM",
    exampleURL: "api.zippopotam.us/SM/47890",
    range: "47890 : 47899",
    count: 5
  },
  {
    country: "Thailand",
    code: "TH",
    exampleURL: "api.zippopotam.us/TH/10120",
    range: "10120 : 97230",
    count: 13350
  },
  {
    country: "Turkey",
    code: "TR",
    exampleURL: "api.zippopotam.us/TR/01000",
    range: "01000 : 81950",
    count: 8282
  },
  {
    country: "Taiwan",
    code: "TW",
    exampleURL: "api.zippopotam.us/TW/10048",
    range: "10048 : 98385",
    count: 3466
  },
  {
    country: "Ukraine",
    code: "UA",
    exampleURL: "api.zippopotam.us/UA/01000",
    range: "01000 : 99899",
    count: 14432
  },
  {
    country: "United States",
    code: "US",
    exampleURL: "api.zippopotam.us/US/10001",
    range: "10001 : 99950",
    count: 42108
  },
  {
    country: "Uruguay",
    code: "UY",
    exampleURL: "api.zippopotam.us/UY/11100",
    range: "11100 : 99099",
    count: 398
  },
  {
    country: "Vatican",
    code: "VA",
    exampleURL: "api.zippopotam.us/VA/00120",
    range: "00120 : 00120",
    count: 1
  },
  {
    country: "Virgin Islands (U.S.)",
    code: "VI",
    exampleURL: "api.zippopotam.us/VI/00801",
    range: "00801 : 00851",
    count: 9
  },
  {
    country: "Vietnam",
    code: "VN",
    exampleURL: "api.zippopotam.us/VN/100000",
    range: "100000 : 991999",
    count: 24506
  },
  {
    country: "Mayotte",
    code: "YT",
    exampleURL: "api.zippopotam.us/YT/97600",
    range: "97600 : 97680",
    count: 7
  },
  {
    country: "South Africa",
    code: "ZA",
    exampleURL: "api.zippopotam.us/ZA/0001",
    range: "0001 : 9999",
    count: 2535
  },
  {
    country: "Zambia",
    code: "ZM",
    exampleURL: "api.zippopotam.us/ZM/10101",
    range: "10101 : 99950",
    count: 414
  },
  {
    country: "Zimbabwe",
    code: "ZW",
    exampleURL: "api.zippopotam.us/ZW/00263",
    range: "00263 : 99950",
    count: 140
  }
]

export default countryData;
