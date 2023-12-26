const dogFactsDict = {
  affenpinscher: {
    characteristics: "Curious, Playful, Adventurous",
    likes: "Toys, Attention",
    dislikes: "Loud noises",
    origin: "Germany",
    lifespan: "12-15 years",
    information:
      "Affenpinschers are small, toy dogs known for their curious and playful nature. Despite their size, they are often bold and confident.",
  },
  afghan_hound: {
    characteristics: "Playful, Curious, Adventurous",
    likes: "Toys, Socializing",
    dislikes: "Being ignored",
    origin: "Germany",
    lifespan: "12-15 years",
    information:
      "Afghan Hounds are known for their elegance and grace. They make excellent companions for those who appreciate their unique qualities.",
  },
  african_hunting_dog: {
    characteristics: "Energetic, Social, Cooperative",
    likes: "Running, Hunting",
    dislikes: "Isolation",
    origin: "Africa",
    lifespan: "10-12 years",
    information:
      "African Hunting Dogs, also known as African Wild Dogs, are highly social pack animals known for their cooperative hunting behavior.",
  },
  airedale: {
    characteristics: "Confident, Intelligent, Outgoing",
    likes: "Outdoor activities, Training",
    dislikes: "Boredom",
    origin: "United Kingdom",
    lifespan: "10-13 years",
    information:
      "Airedale Terriers are the largest of the terrier breeds. They are confident and intelligent dogs with a friendly and outgoing nature.",
  },
  american_staffordshire_terrier: {
    characteristics: "Confident, Good-natured, Courageous",
    likes: "Playtime, Training",
    dislikes: "Isolation",
    origin: "United States",
    lifespan: "12-16 years",
    information:
      "American Staffordshire Terriers, often referred to as AmStaffs, are muscular and courageous dogs known for their loyalty and affection toward their families.",
  },
  appenzeller: {
    characteristics: "Lively, Intelligent, Agile",
    likes: "Outdoor activities, Training",
    dislikes: "Boredom",
    origin: "Switzerland",
    lifespan: "12-14 years",
    information:
      "Appenzellers are energetic and intelligent dogs, known for their agility and versatility. They thrive on mental and physical stimulation.",
  },
  australian_terrier: {
    characteristics: "Alert, Courageous, Loyal",
    likes: "Playtime, Grooming",
    dislikes: "Isolation",
    origin: "Australia",
    lifespan: "12-15 years",
    information:
      "Australian Terriers are small, sturdy dogs with a courageous and loyal nature. They make excellent watchdogs and family companions.",
  },
  basenji: {
    characteristics: "Curious, Independent, Energetic",
    likes: "Running, Playing",
    dislikes: "Boredom",
    origin: "Central Africa",
    lifespan: "10-12 years",
    information:
      "Basenjis are known for their unique yodel-like vocalizations and cat-like grooming habits. They are independent and energetic dogs.",
  },
  basset: {
    characteristics: "Gentle, Affectionate, Devoted",
    likes: "Relaxing, Short walks",
    dislikes: "Hot weather",
    origin: "France",
    lifespan: "10-12 years",
    information:
      "Bassets are low-slung hounds with a gentle and affectionate nature. They have a keen sense of smell and a distinctive appearance.",
  },
  beagle: {
    characteristics: "Friendly, Curious, Merry",
    likes: "Exploring, Playtime",
    dislikes: "Being alone for too long",
    origin: "United Kingdom",
    lifespan: "12-15 years",
    information:
      "Beagles are known for their friendly nature and keen sense of smell. They make great family pets and are often used as detection dogs.",
  },
  bedlington_terrier: {
    characteristics: "Gentle, Affectionate, Spirited",
    likes: "Playtime, Cuddling",
    dislikes: "Loud noises",
    origin: "England",
    lifespan: "11-16 years",
    information:
      "Bedlington Terriers are known for their unique lamb-like appearance. They are gentle and affectionate, making them great companions for families.",
  },
  bernese_mountain_dog: {
    characteristics: "Gentle, Good-natured, Strong",
    likes: "Outdoor activities, Being with family",
    dislikes: "Hot weather",
    origin: "Switzerland",
    lifespan: "6-8 years",
    information:
      "Bernese Mountain Dogs are large and strong with a gentle temperament. They are known for their distinctive tricolor coat and are excellent family dogs.",
  },
  black_and_tan_coonhound: {
    characteristics: "Determined, Good-natured, Energetic",
    likes: "Outdoor adventures, Tracking scents",
    dislikes: "Being confined",
    origin: "United States",
    lifespan: "10-12 years",
    information:
      "Black and Tan Coonhounds are skilled hunters with a determined and energetic nature. They have a keen sense of smell and are often used in tracking.",
  },
  blenheim_spaniel: {
    characteristics: "Gentle, Affectionate, Sociable",
    likes: "Cuddling, Playtime",
    dislikes: "Loneliness",
    origin: "United Kingdom",
    lifespan: "9-15 years",
    information:
      "Blenheim Spaniels, a type of Cavalier King Charles Spaniel, are known for their affectionate and sociable nature. They are great companions and lap dogs.",
  },
  bloodhound: {
    characteristics: "Gentle, Affectionate, Determined",
    likes: "Tracking scents, Outdoor activities",
    dislikes: "Isolation",
    origin: "Belgium",
    lifespan: "10-12 years",
    information:
      "Bloodhounds are known for their exceptional sense of smell. They are gentle and affectionate dogs with a determined and persistent nature.",
  },
  bluetick: {
    characteristics: "Friendly, Intelligent, Active",
    likes: "Playtime, Exercise",
    dislikes: "Boredom",
    origin: "United States",
    lifespan: "10-12 years",
    information:
      "Bluetick Coonhounds are friendly and intelligent dogs with a distinctive coat pattern. They are active and enjoy outdoor activities with their owners.",
  },
  border_collie: {
    characteristics: "Intelligent, Energetic, Agile",
    likes: "Training, Outdoor activities",
    dislikes: "Inactivity",
    origin: "United Kingdom",
    lifespan: "12-15 years",
    information:
      "Border Collies are highly intelligent and agile dogs. They excel in obedience training and are known for their herding instincts and boundless energy.",
  },
  border_terrier: {
    characteristics: "Affectionate, Energetic, Fearless",
    likes: "Playtime, Digging",
    dislikes: "Being alone for too long",
    origin: "United Kingdom",
    lifespan: "12-15 years",
    information:
      "Border Terriers are small, energetic dogs known for their affectionate nature. They are fearless and make great companions for active families.",
  },
  borzoi: {
    characteristics: "Gentle, Independent, Elegant",
    likes: "Running, Sunbathing",
    dislikes: "Harsh treatment",
    origin: "Russia",
    lifespan: "9-14 years",
    information:
      "Borzois, also known as Russian Wolfhounds, are elegant and gentle dogs. They are independent and enjoy running, making them well-suited for open spaces.",
  },
  boston_bull: {
    characteristics: "Friendly, Lively, Intelligent",
    likes: "Playtime, Socializing",
    dislikes: "Cold weather",
    origin: "United States",
    lifespan: "11-13 years",
    information:
      "Boston Bulldogs, commonly known as Boston Terriers, are friendly and intelligent dogs. They have a lively nature and make great companions for families.",
  },
  bouvier_des_flandres: {
    characteristics: "Gentle, Loyal, Protective",
    likes: "Family time, Outdoor activities",
    dislikes: "Strangers",
    origin: "Belgium",
    lifespan: "10-15 years",
    information:
      "Bouvier des Flandres are sturdy and protective dogs. They are known for their loyalty to their families and make excellent guard dogs.",
  },
  boxer: {
    characteristics: "Playful, Energetic, Affectionate",
    likes: "Playtime, Exercise",
    dislikes: "Boredom",
    origin: "Germany",
    lifespan: "10-12 years",
    information:
      "Boxers are playful and energetic dogs with a strong and muscular build. They are known for their affectionate nature and love for play.",
  },
  brabancon_griffon: {
    characteristics: "Alert, Lively, Curious",
    likes: "Playtime, Socializing",
    dislikes: "Being alone",
    origin: "Belgium",
    lifespan: "12-15 years",
    information:
      "Brabancon Griffons are small and alert dogs known for their lively and curious nature. They are social and enjoy spending time with their owners.",
  },
  briard: {
    characteristics: "Loyal, Intelligent, Protective",
    likes: "Herding, Outdoor activities",
    dislikes: "Loud noises",
    origin: "France",
    lifespan: "10-12 years",
    information:
      "Briards are known for their loyalty and intelligence. They have a protective instinct and were historically used as herding dogs in France.",
  },
  brittany_spaniel: {
    characteristics: "Energetic, Adaptable, Gentle",
    likes: "Outdoor adventures, Playtime",
    dislikes: "Isolation",
    origin: "France",
    lifespan: "12-14 years",
    information:
      "Brittany Spaniels are energetic and adaptable dogs known for their hunting abilities. They are gentle and make great companions for active families.",
  },
  bull_mastiff: {
    characteristics: "Gentle, Courageous, Affectionate",
    likes: "Family time, Relaxing",
    dislikes: "Extreme heat",
    origin: "England",
    lifespan: "8-10 years",
    information:
      "Bull Mastiffs are large and gentle dogs with a courageous and affectionate nature. They were originally bred as guard dogs for estates in England.",
  },
  cairn: {
    characteristics: "Curious, Alert, Independent",
    likes: "Playtime, Digging",
    dislikes: "Being restrained",
    origin: "Scotland",
    lifespan: "12-16 years",
    information:
      "Cairn Terriers are small and curious dogs with an independent spirit. They are known for their distinctive appearance and friendly nature.",
  },
  cardigan: {
    characteristics: "Affectionate, Intelligent, Alert",
    likes: "Playtime, Herding",
    dislikes: "Loud noises",
    origin: "Wales",
    lifespan: "12-15 years",
    information:
      "Cardigan Welsh Corgis are affectionate and intelligent herding dogs. They are known for their distinct long tails and make great family pets.",
  },
  chesapeake_bay_retriever: {
    characteristics: "Intelligent, Affectionate, Courageous",
    likes: "Swimming, Retrieving",
    dislikes: "Being idle",
    origin: "United States",
    lifespan: "10-13 years",
    information:
      "Chesapeake Bay Retrievers are intelligent and courageous dogs, well-adapted to water activities. They are known for their strong retrieving skills.",
  },
  chihuahua: {
    characteristics: "Lively, Alert, Courageous",
    likes: "Warmth, Cuddling",
    dislikes: "Cold weather",
    origin: "Mexico",
    lifespan: "12-20 years",
    information:
      "Chihuahuas are small and lively dogs with a courageous personality. They are known for their loyalty to their owners and love for warmth.",
  },
  chow: {
    characteristics: "Loyal, Aloof, Independent",
    likes: "Family time, Grooming",
    dislikes: "Strangers",
    origin: "China",
    lifespan: "9-15 years",
    information:
      "Chow Chows are known for their distinctive lion-like mane and independent nature. They are loyal to their families but can be reserved with strangers.",
  },
  clumber: {
    characteristics: "Gentle, Affectionate, Dignified",
    likes: "Relaxing, Outdoor walks",
    dislikes: "Hot weather",
    origin: "England",
    lifespan: "10-12 years",
    information:
      "Clumber Spaniels are gentle and dignified dogs known for their affectionate nature. They are large and have a distinctive appearance.",
  },
  cocker_spaniel: {
    characteristics: "Gentle, Smart, Happy",
    likes: "Playtime, Socializing",
    dislikes: "Loneliness",
    origin: "United States",
    lifespan: "10-14 years",
    information:
      "Cocker Spaniels are known for their friendly and happy demeanor. They are intelligent dogs that enjoy playtime and social interactions.",
  },
  collie: {
    characteristics: "Loyal, Intelligent, Gentle",
    likes: "Herding, Outdoor activities",
    dislikes: "Neglect",
    origin: "Scotland",
    lifespan: "10-14 years",
    information:
      "Collies are known for their loyalty and intelligence. They are gentle dogs with a strong herding instinct and a distinctive long coat.",
  },
  curly_coated_retriever: {
    characteristics: "Confident, Independent, Energetic",
    likes: "Swimming, Outdoor activities",
    dislikes: "Loud noises",
    origin: "United Kingdom",
    lifespan: "10-12 years",
    information:
      "Curly-Coated Retrievers are confident and energetic dogs with distinctive curly coats. They excel in water activities and make great family companions.",
  },
  dandie_dinmont: {
    characteristics: "Dignified, Independent, Affectionate",
    likes: "Playtime, Grooming",
    dislikes: "Rough handling",
    origin: "United Kingdom",
    lifespan: "12-15 years",
    information:
      "Dandie Dinmont Terriers are small and dignified dogs with a distinctive topknot. They are affectionate and make great companions for attentive owners.",
  },
  dhole: {
    characteristics: "Social, Energetic, Cooperative",
    likes: "Group activities, Hunting",
    dislikes: "Isolation",
    origin: "Asia",
    lifespan: "8-10 years",
    information:
      "Dholes, also known as Asiatic Wild Dogs, are highly social and cooperative pack animals. They are native to parts of Asia and are skilled hunters.",
  },
  dingo: {
    characteristics: "Independent, Agile, Alert",
    likes: "Exploring, Outdoor activities",
    dislikes: "Confinement",
    origin: "Australia",
    lifespan: "12-15 years",
    information:
      "Dingoes are wild dogs native to Australia. They are known for their independence and agility, with a lean and athletic build.",
  },
  doberman: {
    characteristics: "Loyal, Alert, Energetic",
    likes: "Training, Exercise",
    dislikes: "Neglect",
    origin: "Germany",
    lifespan: "10-12 years",
    information:
      "Dobermans are known for their loyalty and alertness. They are energetic dogs that excel in obedience training and make excellent guard dogs.",
  },
  english_foxhound: {
    characteristics: "Friendly, Sociable, Energetic",
    likes: "Outdoor activities, Socializing",
    dislikes: "Isolation",
    origin: "United Kingdom",
    lifespan: "10-13 years",
    information:
      "English Foxhounds are friendly and energetic dogs bred for hunting. They have a sociable nature and enjoy being part of an active family.",
  },
  english_setter: {
    characteristics: "Gentle, Lively, Affectionate",
    likes: "Playtime, Outdoor walks",
    dislikes: "Loud noises",
    origin: "United Kingdom",
    lifespan: "10-12 years",
    information:
      "English Setters are gentle and affectionate dogs known for their distinctive speckled coat. They are lively and enjoy outdoor activities with their owners.",
  },
  english_springer: {
    characteristics: "Friendly, Energetic, Intelligent",
    likes: "Playtime, Retrieving",
    dislikes: "Lack of exercise",
    origin: "United Kingdom",
    lifespan: "12-14 years",
    information:
      "English Springer Spaniels are friendly and intelligent dogs with a love for playtime and retrieving. They are versatile and make great family pets.",
  },
  entlebucher: {
    characteristics: "Devoted, Energetic, Intelligent",
    likes: "Outdoor activities, Playtime",
    dislikes: "Boredom",
    origin: "Switzerland",
    lifespan: "10-15 years",
    information:
      "Entlebucher Mountain Dogs are devoted and energetic dogs known for their intelligence. They thrive on outdoor activities and make great family companions.",
  },
  eskimo_dog: {
    characteristics: "Friendly, Alert, Energetic",
    likes: "Playtime, Socializing",
    dislikes: "Hot weather",
    origin: "United States",
    lifespan: "12-15 years",
    information:
      "Eskimo Dogs, also known as American Eskimo Dogs, are friendly and alert dogs with a distinctive white coat. They are energetic and enjoy playtime.",
  },
  flat_coated_retriever: {
    characteristics: "Friendly, Outgoing, Optimistic",
    likes: "Playtime, Retrieving",
    dislikes: "Neglect",
    origin: "United Kingdom",
    lifespan: "8-10 years",
    information:
      "Flat-Coated Retrievers are friendly and outgoing dogs known for their optimism. They are excellent retrievers and make great companions for active families.",
  },
  french_bulldog: {
    characteristics: "Adaptable, Playful, Affectionate",
    likes: "Indoor play, Cuddling",
    dislikes: "Heat, Overexertion",
    origin: "France",
    lifespan: "10-14 years",
    information:
      "French Bulldogs are adaptable and affectionate dogs with a playful nature. They are known for their distinctive bat-like ears and make excellent indoor companions.",
  },
  german_shepherd: {
    characteristics: "Loyal, Intelligent, Courageous",
    likes: "Training, Outdoor activities",
    dislikes: "Neglect",
    origin: "Germany",
    lifespan: "9-13 years",
    information:
      "German Shepherds are known for their loyalty and intelligence. They are courageous and versatile dogs often used in various roles, including as police and service dogs.",
  },
  german_short_haired_pointer: {
    characteristics: "Energetic, Intelligent, Versatile",
    likes: "Outdoor activities, Retrieving",
    dislikes: "Inactivity",
    origin: "Germany",
    lifespan: "10-12 years",
    information:
      "German Shorthaired Pointers are energetic and versatile dogs. They are known for their intelligence and excel in hunting and outdoor activities.",
  },
  giant_schnauzer: {
    characteristics: "Bold, Intelligent, Loyal",
    likes: "Training, Guarding",
    dislikes: "Boredom",
    origin: "Germany",
    lifespan: "10-12 years",
    information:
      "Giant Schnauzers are bold and intelligent dogs known for their loyalty. They are versatile and can excel in various activities, including guarding and obedience.",
  },
  golden_retriever: {
    characteristics: "Intelligent, Friendly, Devoted",
    likes: "Playing, Swimming",
    dislikes: "Loud noises",
    origin: "Scotland",
    lifespan: "10-12 years",
    information:
      "Golden Retrievers are known for their friendly nature and keen sense of smell. They are highly intelligent and make excellent companions for families.",
  },
  gordon_setter: {
    characteristics: "Loyal, Alert, Courageous",
    likes: "Outdoor activities, Playtime",
    dislikes: "Loneliness",
    origin: "United Kingdom",
    lifespan: "10-12 years",
    information:
      "Gordon Setters are loyal and courageous dogs known for their distinctive black and tan coat. They enjoy outdoor activities and make great family pets.",
  },
  great_dane: {
    characteristics: "Gentle, Friendly, Regal",
    likes: "Family time, Relaxing",
    dislikes: "Confinement",
    origin: "Germany",
    lifespan: "7-10 years",
    information:
      "Great Danes are gentle giants known for their regal appearance. Despite their size, they are friendly and make affectionate family companions.",
  },
  great_pyrenees: {
    characteristics: "Gentle, Confident, Courageous",
    likes: "Guarding, Outdoor activities",
    dislikes: "Hot weather",
    origin: "France/Spain",
    lifespan: "10-12 years",
    information:
      "Great Pyrenees are gentle and confident dogs known for their courage. They have a thick white coat and were originally bred to guard livestock in mountainous regions.",
  },
  greater_swiss_mountain_dog: {
    characteristics: "Gentle, Loyal, Versatile",
    likes: "Outdoor activities, Family time",
    dislikes: "Neglect",
    origin: "Switzerland",
    lifespan: "8-11 years",
    information:
      "Greater Swiss Mountain Dogs are gentle and loyal dogs with a versatile nature. They are known for their striking tricolor coat and make excellent family companions.",
  },
  groenendael: {
    characteristics: "Intelligent, Agile, Loyal",
    likes: "Training, Outdoor activities",
    dislikes: "Inactivity",
    origin: "Belgium",
    lifespan: "12-14 years",
    information:
      "Groenendaels are intelligent and agile dogs known for their loyalty. They are one of the four Belgian Shepherd varieties, distinguished by their long, black coat.",
  },
  ibizan_hound: {
    characteristics: "Energetic, Athletic, Independent",
    likes: "Running, Outdoor adventures",
    dislikes: "Confinement",
    origin: "Spain",
    lifespan: "12-14 years",
    information:
      "Ibizan Hounds are energetic and athletic dogs known for their independent nature. They are skilled hunters and excel in agility activities.",
  },
  irish_setter: {
    characteristics: "Friendly, Energetic, Playful",
    likes: "Playtime, Outdoor activities",
    dislikes: "Boredom",
    origin: "Ireland",
    lifespan: "10-14 years",
    information:
      "Irish Setters are friendly and playful dogs known for their beautiful red coat. They are energetic and enjoy outdoor activities with their owners.",
  },
  irish_terrier: {
    characteristics: "Courageous, Alert, Spirited",
    likes: "Playtime, Grooming",
    dislikes: "Isolation",
    origin: "Ireland",
    lifespan: "12-16 years",
    information:
      "Irish Terriers are courageous and spirited dogs known for their distinctive red coat. They are alert and make excellent watchdogs.",
  },
  irish_water_spaniel: {
    characteristics: "Smart, Energetic, Versatile",
    likes: "Swimming, Outdoor activities",
    dislikes: "Neglect",
    origin: "Ireland",
    lifespan: "10-12 years",
    information:
      "Irish Water Spaniels are smart and versatile dogs with a curly water-resistant coat. They excel in water activities and make great companions for active families.",
  },
  irish_wolfhound: {
    characteristics: "Gentle, Dignified, Courageous",
    likes: "Family time, Relaxing",
    dislikes: "Hot weather",
    origin: "Ireland",
    lifespan: "6-8 years",
    information:
      "Irish Wolfhounds are gentle giants known for their dignified and courageous nature. They are one of the tallest dog breeds and make affectionate family pets.",
  },
  italian_greyhound: {
    characteristics: "Gentle, Graceful, Affectionate",
    likes: "Cuddling, Sunbathing",
    dislikes: "Cold weather",
    origin: "Italy",
    lifespan: "12-15 years",
    information:
      "Italian Greyhounds are gentle and graceful dogs known for their slender build. They are affectionate and make great companions for indoor living.",
  },
  japanese_spaniel: {
    characteristics: "Charming, Alert, Lively",
    likes: "Indoor play, Grooming",
    dislikes: "Loud noises",
    origin: "Japan",
    lifespan: "10-12 years",
    information:
      "Japanese Spaniels, also known as Chin, are charming and lively dogs. They have a distinctive pushed-in face and make excellent indoor companions.",
  },
  keeshond: {
    characteristics: "Friendly, Alert, Agile",
    likes: "Playtime, Outdoor walks",
    dislikes: "Neglect",
    origin: "Netherlands",
    lifespan: "12-15 years",
    information:
      "Keeshonds are friendly and alert dogs known for their distinctive fox-like face. They are agile and make great companions for families.",
  },
  kelpie: {
    characteristics: "Intelligent, Energetic, Loyal",
    likes: "Working, Outdoor activities",
    dislikes: "Boredom",
    origin: "Australia",
    lifespan: "10-13 years",
    information:
      "Australian Kelpies are intelligent and energetic dogs known for their herding abilities. They are loyal and thrive in environments where they can stay active.",
  },
  kerry_blue_terrier: {
    characteristics: "Confident, Spirited, Alert",
    likes: "Playtime, Grooming",
    dislikes: "Rough handling",
    origin: "Ireland",
    lifespan: "12-15 years",
    information:
      "Kerry Blue Terriers are confident and spirited dogs known for their distinctive blue coat. They are alert and make great companions for active families.",
  },
  komondor: {
    characteristics: "Protective, Independent, Dignified",
    likes: "Guarding, Family time",
    dislikes: "Confinement",
    origin: "Hungary",
    lifespan: "10-12 years",
    information:
      "Komondors are protective and dignified dogs known for their unique corded coat. They were originally bred as livestock guardians and are loyal to their families.",
  },
  kuvasz: {
    characteristics: "Loyal, Protective, Dignified",
    likes: "Guarding, Family time",
    dislikes: "Strangers",
    origin: "Hungary",
    lifespan: "10-12 years",
    information:
      "Kuvasz dogs are loyal and protective with a dignified demeanor. They were originally bred as livestock guardians in Hungary and make excellent family guardians.",
  },
  labrador_retriever: {
    characteristics: "Friendly, Outgoing, Gentle",
    likes: "Playtime, Retrieving",
    dislikes: "Neglect",
    origin: "Canada",
    lifespan: "10-14 years",
    information:
      "Labrador Retrievers are friendly and outgoing dogs known for their gentle nature. They are highly intelligent and excel in various roles, including as retrievers and guide dogs.",
  },
  lakeland_terrier: {
    characteristics: "Fearless, Alert, Friendly",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "United Kingdom",
    lifespan: "12-16 years",
    information:
      "Lakeland Terriers are fearless and alert dogs known for their friendly nature. They are small in size but have a big personality and make great family companions.",
  },
  leonberg: {
    characteristics: "Gentle, Friendly, Regal",
    likes: "Family time, Relaxing",
    dislikes: "Loneliness",
    origin: "Germany",
    lifespan: "8-10 years",
    information:
      "Leonbergs are gentle and regal dogs known for their friendly demeanor. They are large in size and make affectionate family pets.",
  },
  lhasa: {
    characteristics: "Affectionate, Alert, Independent",
    likes: "Indoor play, Grooming",
    dislikes: "Rough handling",
    origin: "Tibet",
    lifespan: "12-15 years",
    information:
      "Lhasa Apsos are affectionate and independent dogs known for their alertness. They have a distinctive long coat and were originally bred as palace guards in Tibet.",
  },
  malamute: {
    characteristics: "Strong, Independent, Loyal",
    likes: "Outdoor activities, Pulling sleds",
    dislikes: "Hot weather",
    origin: "United States",
    lifespan: "10-14 years",
    information:
      "Alaskan Malamutes are strong and independent dogs known for their loyalty. They are well-adapted to cold climates and were originally used as sled dogs.",
  },
  malinois: {
    characteristics: "Intelligent, Energetic, Loyal",
    likes: "Training, Outdoor activities",
    dislikes: "Boredom",
    origin: "Belgium",
    lifespan: "10-12 years",
    information:
      "Belgian Malinois are intelligent and energetic dogs known for their loyalty. They are often used in police and military roles due to their versatility and trainability.",
  },
  maltese_dog: {
    characteristics: "Playful, Affectionate, Alert",
    likes: "Playtime, Grooming",
    dislikes: "Being alone",
    origin: "Malta",
    lifespan: "12-15 years",
    information:
      "Maltese dogs are playful and affectionate with an alert nature. They have a long, silky coat and make excellent companions for indoor living.",
  },
  mexican_hairless: {
    characteristics: "Affectionate, Alert, Energetic",
    likes: "Sunbathing, Indoor play",
    dislikes: "Cold weather",
    origin: "Mexico",
    lifespan: "12-15 years",
    information:
      "Mexican Hairless Dogs, also known as Xolos, are affectionate and energetic dogs. They come in three sizes (toy, miniature, and standard) and are often hairless.",
  },
  miniature_pinscher: {
    characteristics: "Energetic, Alert, Fearless",
    likes: "Playtime, Exploring",
    dislikes: "Isolation",
    origin: "Germany",
    lifespan: "12-15 years",
    information:
      "Miniature Pinschers are energetic and fearless dogs with an alert nature. Despite their small size, they are confident and make great watchdogs.",
  },
  miniature_poodle: {
    characteristics: "Intelligent, Playful, Alert",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "France",
    lifespan: "12-15 years",
    information:
      "Miniature Poodles are intelligent and playful dogs known for their alertness. They have a hypoallergenic coat and make great companions for various activities.",
  },
  miniature_schnauzer: {
    characteristics: "Friendly, Spirited, Alert",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "Germany",
    lifespan: "12-15 years",
    information:
      "Miniature Schnauzers are friendly and spirited dogs with an alert nature. They have a distinctive beard and make great companions for families.",
  },
  newfoundland: {
    characteristics: "Gentle, Sweet-natured, Patient",
    likes: "Swimming, Family time",
    dislikes: "Hot weather",
    origin: "Canada",
    lifespan: "9-10 years",
    information:
      "Newfoundlands are gentle giants known for their sweet-natured and patient temperament. They are excellent swimmers and make great family companions.",
  },
  norfolk_terrier: {
    characteristics: "Alert, Sociable, Fearless",
    likes: "Playtime, Grooming",
    dislikes: "Isolation",
    origin: "United Kingdom",
    lifespan: "12-16 years",
    information:
      "Norfolk Terriers are alert and sociable dogs known for their fearless nature. They are small in size but have a big personality and make great companions.",
  },
  norwegian_elkhound: {
    characteristics: "Bold, Alert, Playful",
    likes: "Outdoor activities, Playtime",
    dislikes: "Boredom",
    origin: "Norway",
    lifespan: "12-15 years",
    information:
      "Norwegian Elkhounds are bold and alert dogs known for their playful nature. They were originally bred for hunting and make great companions for active families.",
  },
  norwich_terrier: {
    characteristics: "Alert, Spirited, Affectionate",
    likes: "Playtime, Grooming",
    dislikes: "Neglect",
    origin: "United Kingdom",
    lifespan: "12-16 years",
    information:
      "Norwich Terriers are alert and spirited dogs known for their affectionate nature. They are small in size but have a big personality, making them great companions.",
  },
  old_english_sheepdog: {
    characteristics: "Gentle, Intelligent, Sociable",
    likes: "Family time, Outdoor activities",
    dislikes: "Isolation",
    origin: "United Kingdom",
    lifespan: "10-12 years",
    information:
      "Old English Sheepdogs are gentle and intelligent dogs known for their sociable nature. They have a distinctive shaggy coat and make excellent family companions.",
  },
  otterhound: {
    characteristics: "Determined, Sociable, Amiable",
    likes: "Outdoor activities, Swimming",
    dislikes: "Confinement",
    origin: "United Kingdom",
    lifespan: "10-12 years",
    information:
      "Otterhounds are determined and sociable dogs known for their love of outdoor activities. They were historically bred for otter hunting and have a keen sense of smell.",
  },
  papillon: {
    characteristics: "Intelligent, Alert, Friendly",
    likes: "Playtime, Agility",
    dislikes: "Rough handling",
    origin: "France/Belgium",
    lifespan: "12-16 years",
    information:
      "Papillons are intelligent and alert dogs known for their friendly nature. They have distinctive butterfly-like ears and excel in agility activities.",
  },
  pekinese: {
    characteristics: "Regal, Affectionate, Independent",
    likes: "Indoor relaxation, Grooming",
    dislikes: "Rough play",
    origin: "China",
    lifespan: "12-14 years",
    information:
      "Pekingese are regal and affectionate dogs with an independent spirit. They were historically kept as companions to Chinese royalty and make great indoor pets.",
  },
  pembroke: {
    characteristics: "Intelligent, Energetic, Affectionate",
    likes: "Playtime, Herding",
    dislikes: "Boredom",
    origin: "United Kingdom",
    lifespan: "12-15 years",
    information:
      "Pembroke Welsh Corgis are intelligent and energetic dogs known for their affectionate nature. They are herding dogs with a distinctive appearance and make great family pets.",
  },
  pomeranian: {
    characteristics: "Playful, Intelligent, Alert",
    likes: "Playtime, Grooming",
    dislikes: "Loud noises",
    origin: "Poland/Germany",
    lifespan: "12-16 years",
    information:
      "Pomeranians are playful and intelligent dogs with an alert nature. They have a fluffy double coat and make charming companions for various activities.",
  },
  pug: {
    characteristics: "Charming, Mischievous, Affectionate",
    likes: "Indoor play, Cuddling",
    dislikes: "Heat",
    origin: "China",
    lifespan: "12-15 years",
    information:
      "Pugs are charming and mischievous dogs known for their affectionate nature. They have a distinctive wrinkled face and make excellent indoor companions.",
  },
  redbone: {
    characteristics: "Energetic, Affectionate, Intelligent",
    likes: "Outdoor activities, Playtime",
    dislikes: "Loneliness",
    origin: "United States",
    lifespan: "10-12 years",
    information:
      "Redbone Coonhounds are energetic and affectionate dogs known for their intelligence. They were originally bred for hunting and make great companions for active families.",
  },
  rhodesian_ridgeback: {
    characteristics: "Dignified, Independent, Loyal",
    likes: "Outdoor activities, Family time",
    dislikes: "Isolation",
    origin: "Zimbabwe",
    lifespan: "10-12 years",
    information:
      "Rhodesian Ridgebacks are dignified and loyal dogs known for their distinctive ridge of hair along their back. They were originally bred for hunting and make great family pets.",
  },
  rottweiler: {
    characteristics: "Loyal, Confident, Courageous",
    likes: "Training, Outdoor activities",
    dislikes: "Neglect",
    origin: "Germany",
    lifespan: "8-10 years",
    information:
      "Rottweilers are loyal and confident dogs known for their courage. They are versatile and often used as guard dogs, police dogs, and working companions.",
  },
  saint_bernard: {
    characteristics: "Gentle, Friendly, Patient",
    likes: "Family time, Relaxing",
    dislikes: "Heat",
    origin: "Switzerland",
    lifespan: "8-10 years",
    information:
      "Saint Bernards are gentle giants known for their friendly and patient nature. They were historically bred for rescue work in the Swiss Alps and make great family companions.",
  },
  saluki: {
    characteristics: "Graceful, Independent, Gentle",
    likes: "Outdoor activities, Running",
    dislikes: "Confinement",
    origin: "Middle East",
    lifespan: "12-14 years",
    information:
      "Salukis are graceful and independent dogs known for their gentle nature. They are one of the oldest dog breeds and excel in various outdoor activities.",
  },
  samoyed: {
    characteristics: "Adaptable, Social, Playful",
    likes: "Playtime, Grooming",
    dislikes: "Hot weather",
    origin: "Siberia",
    lifespan: "12-14 years",
    information:
      "Samoyeds are adaptable and social dogs known for their playful nature. They have a fluffy white coat and were originally bred as sled dogs in Siberia.",
  },
  schipperke: {
    characteristics: "Curious, Alert, Energetic",
    likes: "Playtime, Exploring",
    dislikes: "Boredom",
    origin: "Belgium",
    lifespan: "12-16 years",
    information:
      "Schipperkes are curious and energetic dogs known for their alertness. They are small in size with a distinctive black coat and make great companions for active families.",
  },
  scotch_terrier: {
    characteristics: "Independent, Spirited, Alert",
    likes: "Playtime, Grooming",
    dislikes: "Rough handling",
    origin: "United Kingdom",
    lifespan: "11-13 years",
    information:
      "Scottish Terriers, or Scotties, are independent and spirited dogs known for their alert nature. They have a distinctive wiry coat and make excellent watchdogs.",
  },
  scottish_deerhound: {
    characteristics: "Gentle, Dignified, Courageous",
    likes: "Family time, Relaxing",
    dislikes: "Isolation",
    origin: "United Kingdom",
    lifespan: "8-11 years",
    information:
      "Scottish Deerhounds are gentle giants known for their dignified and courageous nature. They were historically used for deer hunting and make affectionate family pets.",
  },
  sealyham_terrier: {
    characteristics: "Cheerful, Confident, Sociable",
    likes: "Playtime, Grooming",
    dislikes: "Rough handling",
    origin: "United Kingdom",
    lifespan: "12-14 years",
    information:
      "Sealyham Terriers are cheerful and confident dogs known for their sociable nature. They have a distinctive white coat and make great companions for various activities.",
  },
  shetland_sheepdog: {
    characteristics: "Intelligent, Energetic, Loyal",
    likes: "Playtime, Herding",
    dislikes: "Neglect",
    origin: "United Kingdom",
    lifespan: "12-14 years",
    information:
      "Shetland Sheepdogs are intelligent and energetic dogs known for their loyalty. They are herding dogs with a beautiful double coat and make great family pets.",
  },
  shih_tzu: {
    characteristics: "Affectionate, Playful, Alert",
    likes: "Indoor play, Grooming",
    dislikes: "Isolation",
    origin: "China",
    lifespan: "10-18 years",
    information:
      "Shih Tzus are affectionate and playful dogs with an alert nature. They have a distinctive long, flowing coat and make excellent indoor companions.",
  },
  siberian_husky: {
    characteristics: "Friendly, Outgoing, Energetic",
    likes: "Outdoor activities, Running",
    dislikes: "Hot weather",
    origin: "Russia",
    lifespan: "12-14 years",
    information:
      "Siberian Huskies are friendly and outgoing dogs known for their energetic nature. They have a thick double coat and were originally bred as sled dogs in Siberia.",
  },
  silky_terrier: {
    characteristics: "Alert, Confident, Spirited",
    likes: "Playtime, Grooming",
    dislikes: "Neglect",
    origin: "Australia",
    lifespan: "12-15 years",
    information:
      "Silky Terriers are alert and confident dogs known for their spirited nature. They have a silky blue and tan coat and make great companions for various activities.",
  },
  soft_coated_wheaten_terrier: {
    characteristics: "Friendly, Playful, Spirited",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "Ireland",
    lifespan: "12-15 years",
    information:
      "Soft Coated Wheaten Terriers are friendly and playful dogs known for their spirited nature. They have a soft, silky coat and make great companions for families.",
  },
  staffordshire_bullterrier: {
    characteristics: "Courageous, Affectionate, Bold",
    likes: "Playtime, Family time",
    dislikes: "Rough handling",
    origin: "United Kingdom",
    lifespan: "12-14 years",
    information:
      "Staffordshire Bull Terriers are courageous and affectionate dogs known for their bold nature. They have a muscular build and make loyal family companions.",
  },
  standard_poodle: {
    characteristics: "Intelligent, Elegant, Playful",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "France",
    lifespan: "10-15 years",
    information:
      "Standard Poodles are intelligent and elegant dogs known for their playful nature. They have a hypoallergenic coat and excel in various activities, including agility.",
  },
  standard_schnauzer: {
    characteristics: "Alert, Spirited, Intelligent",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "Germany",
    lifespan: "13-16 years",
    information:
      "Standard Schnauzers are alert and spirited dogs known for their intelligence. They have a distinctive beard and make great companions for various activities.",
  },
  sussex_spaniel: {
    characteristics: "Friendly, Affectionate, Gentle",
    likes: "Playtime, Family time",
    dislikes: "Isolation",
    origin: "United Kingdom",
    lifespan: "10-12 years",
    information:
      "Sussex Spaniels are friendly and affectionate dogs known for their gentle nature. They have a distinctive golden liver-colored coat and make great family companions.",
  },
  tibetan_mastiff: {
    characteristics: "Independent, Protective, Aloof",
    likes: "Guarding, Family time",
    dislikes: "Strangers",
    origin: "Tibet",
    lifespan: "10-14 years",
    information:
      "Tibetan Mastiffs are independent and protective dogs known for their aloof nature. They were historically used as guardians in the Himalayan region and make loyal family protectors.",
  },
  tibetan_terrier: {
    characteristics: "Friendly, Intelligent, Energetic",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "Tibet",
    lifespan: "12-15 years",
    information:
      "Tibetan Terriers are friendly and intelligent dogs known for their energetic nature. Despite their name, they are not true terriers but make great companions for various activities.",
  },
  toy_poodle: {
    characteristics: "Intelligent, Playful, Alert",
    likes: "Playtime, Grooming",
    dislikes: "Boredom",
    origin: "France",
    lifespan: "12-15 years",
    information:
      "Toy Poodles are intelligent and playful dogs known for their alertness. They have a hypoallergenic coat and make great companions for indoor living.",
  },
  toy_terrier: {
    characteristics: "Lively, Affectionate, Spirited",
    likes: "Playtime, Cuddling",
    dislikes: "Isolation",
    origin: "United States",
    lifespan: "12-16 years",
    information:
      "Toy Fox Terriers are lively and affectionate dogs known for their spirited nature. They have a short coat and make great companions for indoor play.",
  },
  vizsla: {
    characteristics: "Energetic, Affectionate, Gentle",
    likes: "Outdoor activities, Playtime",
    dislikes: "Isolation",
    origin: "Hungary",
    lifespan: "10-14 years",
    information:
      "Vizslas are energetic and affectionate dogs known for their gentle nature. They have a sleek golden coat and were historically used as hunting and sporting dogs.",
  },
  walker_hound: {
    characteristics: "Independent, Energetic, Sociable",
    likes: "Outdoor activities, Running",
    dislikes: "Confinement",
    origin: "United States",
    lifespan: "10-13 years",
    information:
      "Walker Hounds, or Treeing Walker Coonhounds, are independent and energetic dogs known for their sociable nature. They were originally bred for raccoon hunting and make great companions for outdoor enthusiasts.",
  },
  weimaraner: {
    characteristics: "Energetic, Intelligent, Gentle",
    likes: "Outdoor activities, Playtime",
    dislikes: "Isolation",
    origin: "Germany",
    lifespan: "10-13 years",
    information:
      "Weimaraners are energetic and intelligent dogs known for their gentle nature. They have a distinctive silver-gray coat and make great companions for outdoor activities.",
  },
  welsh_springer_spaniel: {
    characteristics: "Friendly, Playful, Alert",
    likes: "Playtime, Outdoor activities",
    dislikes: "Boredom",
    origin: "United Kingdom",
    lifespan: "12-15 years",
    information:
      "Welsh Springer Spaniels are friendly and playful dogs known for their alert nature. They have a distinctive red and white coat and make great companions for outdoor adventures.",
  },
  west_highland_white_terrier: {
    characteristics: "Friendly, Confident, Spirited",
    likes: "Playtime, Grooming",
    dislikes: "Rough handling",
    origin: "United Kingdom",
    lifespan: "12-16 years",
    information:
      "West Highland White Terriers, or Westies, are friendly and confident dogs known for their spirited nature. They have a distinctive white coat and make great companions for various activities.",
  },
  whippet: {
    characteristics: "Graceful, Affectionate, Playful",
    likes: "Running, Playtime",
    dislikes: "Rough handling",
    origin: "United Kingdom",
    lifespan: "12-15 years",
    information:
      "Whippets are graceful and affectionate dogs known for their playful nature. They are sighthounds and excel in running activities, making them great companions for active families.",
  },
  wire_haired_fox_terrier: {
    characteristics: "Lively, Alert, Courageous",
    likes: "Playtime, Grooming",
    dislikes: "Isolation",
    origin: "United Kingdom",
    lifespan: "10-13 years",
    information:
      "Wire-Haired Fox Terriers are lively and alert dogs known for their courageous nature. They have a distinctive wire-like coat and make excellent watchdogs.",
  },
  yorkshire_terrier: {
    characteristics: "Affectionate, Spirited, Intelligent",
    likes: "Playtime, Grooming",
    dislikes: "Rough handling",
    origin: "United Kingdom",
    lifespan: "12-16 years",
    information:
      "Yorkshire Terriers, or Yorkies, are affectionate and spirited dogs known for their intelligence. They have a long, silky coat and make charming companions for various activities.",
  },
};

const veggieFactsDict = {
  apple: {
    type: "Fruit",
    colors: "Red, Green, Yellow, etc.",
    taste: "Sweet with a hint of tartness",
    nutrients: "Rich in fiber and vitamin C",
    origin: "Central Asia",
    seasons: "Fall",
    information:
      "Apples come in various colors and flavors, making them a versatile and healthy snack. They are an excellent source of fiber and vitamin C, promoting good digestive health.",
  },
  banana: {
    type: "Fruit",
    colors: "Yellow",
    taste: "Sweet and creamy",
    nutrients: "Rich in potassium and vitamin B6",
    origin: "Southeast Asia",
    seasons: "Year-round",
    information:
      "Bananas are a popular fruit known for their convenient peel-and-eat packaging. They are rich in potassium and vitamin B6, making them a healthy and portable snack.",
  },
  beetroot: {
    type: "Vegetable",
    colors: "Red",
    taste: "Sweet and earthy",
    nutrients: "High in fiber, folate, and manganese",
    origin: "Mediterranean region",
    seasons: "Year-round",
    information:
      "Beetroot is a colorful vegetable with a sweet and earthy flavor. It's high in fiber, folate, and manganese, contributing to overall health and well-being.",
  },
  "bell pepper": {
    type: "Vegetable",
    colors: "Various colors",
    taste: "Mild and crisp",
    nutrients: "Rich in vitamin C and antioxidants",
    origin: "Central and South America",
    seasons: "Summer",
    information:
      "Bell peppers come in various colors and have a mild, crisp taste. They are rich in vitamin C and antioxidants, supporting a healthy immune system.",
  },
  cabbage: {
    type: "Vegetable",
    colors: "Green, Purple, etc.",
    taste: "Crunchy and mildly sweet",
    nutrients: "High in vitamin K and C",
    origin: "Mediterranean region",
    seasons: "Fall, Winter",
    information:
      "Cabbage is a crunchy vegetable with a mildly sweet taste. It's high in vitamin K and C, contributing to bone health and immune support.",
  },
  capsicum: {
    type: "Vegetable",
    colors: "Various colors",
    taste: "Sweet and slightly spicy",
    nutrients: "Rich in vitamin A and C",
    origin: "Americas",
    seasons: "Summer",
    information:
      "Capsicum, also known as bell pepper, has a sweet and slightly spicy taste. It's rich in vitamin A and C, promoting healthy skin and vision.",
  },
  carrot: {
    type: "Vegetable",
    colors: "Orange, Purple, etc.",
    taste: "Sweet and crunchy",
    nutrients: "High in beta-carotene and fiber",
    origin: "Middle East",
    seasons: "Year-round",
    information:
      "Carrots are sweet and crunchy vegetables, high in beta-carotene and fiber. They are a nutritious snack and versatile ingredient in various dishes.",
  },
  cauliflower: {
    type: "Vegetable",
    colors: "White, Purple, etc.",
    taste: "Mild and slightly nutty",
    nutrients: "Rich in vitamin C and fiber",
    origin: "Mediterranean region",
    seasons: "Fall, Winter",
    information:
      "Cauliflower has a mild and slightly nutty flavor. It's rich in vitamin C and fiber, making it a nutritious addition to meals. ",
  },
  "chilli pepper": {
    type: "Vegetable",
    colors: "Green, Red, etc.",
    taste: "Spicy and hot",
    nutrients: "High in vitamin C and capsaicin",
    origin: "Americas",
    seasons: "Summer, Fall",
    information:
      "Chilli peppers add spice and heat to dishes. They are high in vitamin C and capsaicin, providing both flavor and potential health benefits.",
  },
  corn: {
    type: "Vegetable",
    colors: "Yellow, White, etc.",
    taste: "Sweet and crunchy",
    nutrients: "Rich in fiber and antioxidants",
    origin: "Americas",
    seasons: "Summer",
    information:
      "Corn is a sweet and crunchy vegetable, rich in fiber and antioxidants. It's a versatile ingredient enjoyed in various forms, from kernels to popcorn.",
  },
  cucumber: {
    type: "Vegetable",
    colors: "Green",
    taste: "Cool and refreshing",
    nutrients: "High water content, vitamins K and C",
    origin: "India",
    seasons: "Summer",
    information:
      "Cucumbers are cool and refreshing with high water content. They are low in calories and a good source of vitamins K and C, making them a hydrating snack.",
  },
  eggplant: {
    type: "Vegetable",
    colors: "Purple, White, etc.",
    taste: "Mild and absorbent",
    nutrients: "Low in calories, rich in fiber",
    origin: "India",
    seasons: "Summer",
    information:
      "Eggplants have a mild taste and absorb flavors well. Low in calories and rich in fiber, they are a versatile ingredient in various cuisines.",
  },
  garlic: {
    type: "Vegetable",
    colors: "White",
    taste: "Pungent and savory",
    nutrients: "Antioxidant and anti-inflammatory properties",
    origin: "Central Asia",
    seasons: "Year-round",
    information:
      "Garlic has a pungent and savory flavor. It is known for its antioxidant and anti-inflammatory properties and is used to enhance the taste of many dishes.",
  },
  ginger: {
    type: "Vegetable",
    colors: "Tan",
    taste: "Spicy and pungent",
    nutrients: "Anti-inflammatory and digestive benefits",
    origin: "Southeast Asia",
    seasons: "Year-round",
    information:
      "Ginger has a spicy and pungent flavor, offering both anti-inflammatory and digestive benefits. It is commonly used in culinary and medicinal applications.",
  },
  grapes: {
    type: "Fruit",
    colors: "Red, Green, Purple, etc.",
    taste: "Sweet and juicy",
    nutrients: "Rich in antioxidants and vitamin C",
    origin: "Mediterranean region",
    seasons: "Fall",
    information:
      "Grapes are sweet and juicy fruits, available in various colors. They are rich in antioxidants and vitamin C, contributing to overall health and well-being.",
  },
  jalepeno: {
    type: "Vegetable",
    colors: "Green, Red",
    taste: "Spicy and hot",
    nutrients: "High in vitamins A and C, capsaicin",
    origin: "Mexico",
    seasons: "Summer, Fall",
    information:
      "Jalapeños are spicy and hot peppers, commonly used to add heat to dishes. They are high in vitamins A and C, as well as capsaicin, providing both flavor and potential health benefits.",
  },
  kiwi: {
    type: "Fruit",
    colors: "Brown, Fuzzy skin; Green flesh",
    taste: "Sweet and tangy",
    nutrients: "High in vitamin C, fiber",
    origin: "China",
    seasons: "Fall, Winter",
    information:
      "Kiwi, with its brown, fuzzy skin and green flesh, has a sweet and tangy taste. It is high in vitamin C and fiber, offering a refreshing and nutritious snack.",
  },
  lemon: {
    type: "Fruit",
    colors: "Yellow",
    taste: "Sour and tangy",
    nutrients: "Rich in vitamin C, antioxidants",
    origin: "Asia",
    seasons: "Year-round",
    information:
      "Lemons are sour and tangy citrus fruits, rich in vitamin C and antioxidants. They are used in cooking, baking, and beverages, providing a burst of flavor and health benefits.",
  },
  lettuce: {
    type: "Vegetable",
    colors: "Green, Red, etc.",
    taste: "Mild and crisp",
    nutrients: "Low in calories, high in water content",
    origin: "Mediterranean region",
    seasons: "Year-round",
    information:
      "Lettuce is a mild and crisp leafy green, low in calories and high in water content. It is a popular ingredient in salads and wraps, adding freshness and crunch to meals.",
  },
  mango: {
    type: "Fruit",
    colors: "Yellow, Red, Green, etc.",
    taste: "Sweet and juicy",
    nutrients: "Rich in vitamins A and C, fiber",
    origin: "South Asia",
    seasons: "Summer",
    information:
      "Mangoes are sweet and juicy fruits, available in various colors. They are rich in vitamins A and C, as well as fiber, making them a delicious and nutritious tropical treat.",
  },
  onion: {
    type: "Vegetable",
    colors: "White, Yellow, Red, etc.",
    taste: "Pungent and savory",
    nutrients: "Contains antioxidants and anti-inflammatory compounds",
    origin: "Central Asia",
    seasons: "Year-round",
    information:
      "Onions have a pungent and savory flavor. They contain antioxidants and anti-inflammatory compounds, and they are used as a staple ingredient in various cuisines.",
  },
  orange: {
    type: "Fruit",
    colors: "Orange",
    taste: "Sweet and citrusy",
    nutrients: "High in vitamin C, antioxidants",
    origin: "Southeast Asia",
    seasons: "Winter",
    information:
      "Oranges are sweet and citrusy fruits, known for their high vitamin C content and antioxidants. They are a refreshing and immune-boosting addition to a balanced diet.",
  },
  paprika: {
    type: "Vegetable",
    colors: "Red",
    taste: "Sweet and mildly spicy",
    nutrients: "Rich in vitamin A and antioxidants",
    origin: "Central America",
    seasons: "Year-round",
    information:
      "Paprika is a spice made from ground red peppers, offering a sweet and mildly spicy flavor. It is rich in vitamin A and antioxidants, enhancing both taste and nutritional value in dishes.",
  },
  pear: {
    type: "Fruit",
    colors: "Green, Red, etc.",
    taste: "Sweet and juicy",
    nutrients: "High in fiber, vitamins C and K",
    origin: "Europe and Asia",
    seasons: "Fall",
    information:
      "Pears are sweet and juicy fruits, available in various colors. They are high in fiber and contain vitamins C and K, making them a tasty and nutritious snack.",
  },
  peas: {
    type: "Vegetable",
    colors: "Green, Yellow, etc.",
    taste: "Sweet and tender",
    nutrients: "Rich in protein, fiber, and vitamins",
    origin: "Asia and Middle East",
    seasons: "Spring",
    information:
      "Peas are sweet and tender vegetables, rich in protein, fiber, and vitamins. They are a versatile ingredient in both cooked and raw dishes, adding sweetness and nutrition.",
  },
  pineapple: {
    type: "Fruit",
    colors: "Brown, Green, Yellow",
    taste: "Sweet and tropical",
    nutrients: "Rich in vitamin C and manganese",
    origin: "South America",
    seasons: "Spring, Summer",
    information:
      "Pineapples are sweet and tropical fruits with a brown, spiky exterior. They are rich in vitamin C and manganese, offering a refreshing taste and nutritional benefits.",
  },
  pomegranate: {
    type: "Fruit",
    colors: "Red",
    taste: "Sweet and tangy",
    nutrients: "High in antioxidants, vitamin C, and potassium",
    origin: "Middle East",
    seasons: "Fall, Winter",
    information:
      "Pomegranates are sweet and tangy fruits with a red, leathery skin. They are high in antioxidants, vitamin C, and potassium, providing both flavor and potential health benefits.",
  },
  potato: {
    type: "Vegetable",
    colors: "Brown, Red, Yellow, etc.",
    taste: "Starchy and versatile",
    nutrients: "Rich in carbohydrates, vitamin C, and potassium",
    origin: "South America",
    seasons: "Year-round",
    information:
      "Potatoes are starchy and versatile vegetables, available in various colors. They are rich in carbohydrates, vitamin C, and potassium, making them a staple in many cuisines.",
  },
  raddish: {
    type: "Vegetable",
    colors: "Red, White, Purple, etc.",
    taste: "Crunchy and slightly peppery",
    nutrients: "Low in calories, high in fiber and vitamin C",
    origin: "Southeast Asia",
    seasons: "Spring, Fall",
    information:
      "Radishes are crunchy and slightly peppery vegetables, available in various colors. They are low in calories and high in fiber and vitamin C, adding crunch and flavor to salads and dishes.",
  },
  "soy beans": {
    type: "Legume",
    colors: "Green",
    taste: "Mild and nutty",
    nutrients: "Rich in protein, fiber, and essential amino acids",
    origin: "East Asia",
    seasons: "Summer",
    information:
      "Soybeans are green legumes with a mild and nutty taste. They are rich in protein, fiber, and essential amino acids, making them a valuable source of plant-based nutrition.",
  },
  spinach: {
    type: "Vegetable",
    colors: "Dark green",
    taste: "Mild and slightly earthy",
    nutrients: "High in iron, vitamins A and C",
    origin: "Persia (modern-day Iran)",
    seasons: "Spring, Fall",
    information:
      "Spinach is a nutrient powerhouse, packed with iron, vitamins A and C. Its mild flavor makes it a versatile leafy green that can be enjoyed in salads, smoothies, and various dishes.",
  },
  sweetcorn: {
    type: "Vegetable",
    colors: "Yellow",
    taste: "Sweet and crunchy",
    nutrients: "Rich in carbohydrates, fiber, and antioxidants",
    origin: "North America",
    seasons: "Summer, Fall",
    information:
      "Sweetcorn is a sweet and crunchy vegetable, rich in carbohydrates, fiber, and antioxidants. It's a popular addition to meals, both cooked and as a snack.",
  },
  sweetpotato: {
    type: "Vegetable",
    colors: "Orange, Purple, etc.",
    taste: "Sweet and starchy",
    nutrients: "High in beta-carotene, fiber, and vitamins",
    origin: "Central America",
    seasons: "Fall",
    information:
      "Sweet potatoes are sweet and starchy vegetables, available in various colors. They are high in beta-carotene, fiber, and vitamins, providing both sweetness and nutritional benefits.",
  },
  tomato: {
    type: "Fruit",
    colors: "Red, Yellow, Orange, etc.",
    taste: "Sweet and slightly acidic",
    nutrients: "Rich in lycopene, vitamin C, and antioxidants",
    origin: "South America",
    seasons: "Summer",
    information:
      "Tomatoes are sweet and slightly acidic fruits, available in various colors. They are rich in lycopene, vitamin C, and antioxidants, adding flavor and nutritional value to dishes.",
  },
  turnip: {
    type: "Vegetable",
    colors: "White, Purple, etc.",
    taste: "Crunchy and slightly peppery",
    nutrients: "Low in calories, high in fiber and vitamin C",
    origin: "Asia and Europe",
    seasons: "Fall, Winter",
    information:
      "Turnips are crunchy and slightly peppery vegetables, available in various colors. They are low in calories and high in fiber and vitamin C, adding texture and flavor to meals.",
  },
  watermelon: {
    type: "Fruit",
    colors: "Green with red/pink flesh",
    taste: "Sweet and juicy",
    nutrients: "High water content, vitamins A and C",
    origin: "Africa",
    seasons: "Summer",
    information:
      "Watermelon is a refreshing fruit with high water content. It's a perfect hydrating snack during hot summer days and is rich in vitamins A and C.",
  },
};
