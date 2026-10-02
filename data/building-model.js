// Anola Place – schematic building model (public edition).
window.ANOLA_BUILDING_MODEL = {
 "meta": {
  "name": "Anola Place",
  "address": "2041 Bellwood Avenue, Burnaby, BC",
  "strataPlan": "NWS2020 / NW2020",
  "modelVersion": "0.3",
  "generated": "2026-10-01",
  "disclaimer": "SCHEMATIC MODEL — NOT TO SCALE. This is a communication aid for locating building issues. It is not an architectural, structural, engineering, survey, BIM or legal representation. Shapes and positions are simplified; parts marked Approximate or Unknown may be substantially wrong.",
  "sources": [
   "Floor plates, balconies, unit positions, core, main-floor rooms, basement rooms, parkade outlines, podiums, pool and tennis court: registered Strata Plan NW2020 (1983), 40 sheets.",
   "Lot, streets, drop-off loop and neighbouring buildings: OpenStreetMap and ParcelMap BC.",
   "Roof layout (lower roof, metal mansard roof, upper roof, skylights): approximate."
  ],
  "assumptions": [
   "Floor heights scaled from the strata-plan sections: basement 3.0 m, main floor 2.9 m, typical floors 2.64 m – approximate.",
   "Each strata sheet was positioned by the tower drawn on it; expected accuracy about ±1 m.",
   "Ground modelled as three flat steps (north courtyard / main floor / basement level); the real site slopes gradually.",
   "Garage ramp and entrance positions on the east side, parking aisles, stalls and columns are illustrative – the strata plan does not show them.",
   "Windows are schematic (evenly spaced)."
  ]
 },
 "tour": [
  {
   "title": "Anola Place at a glance",
   "text": "A 22-storey concrete tower (1983) with 158 homes and one commercial unit. Bellwood Avenue runs along the east side and Anola Drive along the south. The site falls about two storeys from north to south.",
   "view": {
    "mode": "exterior",
    "target": [
     0,
     0,
     20
    ],
    "az": 135,
    "el": 22,
    "dist": 165
   }
  },
  {
   "title": "Street side – Bellwood Avenue (east)",
   "text": "The driveway leads to the drop-off loop and the lobby at main-floor level. The garage entrances are on this side: the upper parking near the north end and a ramp down to the lower parking (both positions approximate).",
   "view": {
    "mode": "exterior",
    "target": [
     32,
     6,
     1
    ],
    "az": 95,
    "el": 32,
    "dist": 95
   },
   "pointer": [
    25.6,
    2.2,
    0.2
   ],
   "pointerText": "Drop-off loop"
  },
  {
   "title": "Three ground levels",
   "text": "North courtyard and tennis court at 2nd-floor level; lobby, pool and drop-off at main-floor level; Anola Drive and the commercial unit at basement level.",
   "view": {
    "mode": "exterior",
    "target": [
     0,
     0,
     0
    ],
    "az": 215,
    "el": 38,
    "dist": 155
   }
  },
  {
   "title": "The two podiums are parkade roofs",
   "text": "The north courtyard (with the tennis court) is the roof of the upper parking; the landscaped area south and east of the tower (with the pool) is the roof of the basement.",
   "view": {
    "mode": "exterior",
    "target": [
     0,
     5,
     1
    ],
    "az": 150,
    "el": 62,
    "dist": 135
   },
   "pointer": [
    0,
    34,
    3.1
   ],
   "pointerText": "North podium (over upper parking)"
  },
  {
   "title": "Main floor – lobby",
   "text": "The lobby opens to the south-east. Around the core: mail room, office, recreation room, storage and unit 101 (all from the strata plan).",
   "view": {
    "mode": "level",
    "focus": "M",
    "target": [
     2,
     0,
     1
    ],
    "az": 135,
    "el": 50,
    "dist": 70
   }
  },
  {
   "title": "Main floor – upper parking",
   "text": "The upper parking is under the north courtyard and around the west side of the tower. Exit stairs come up to the north courtyard and at the south-west corner.",
   "view": {
    "mode": "level",
    "focus": "M",
    "target": [
     -2,
     20,
     0
    ],
    "az": 160,
    "el": 58,
    "dist": 115
   },
   "pointer": [
    38.1,
    34,
    0.1
   ],
   "pointerText": "Upper parking entrance (approx.)"
  },
  {
   "title": "Basement – lower parking",
   "text": "The lowest level: parking, storage lockers, electrical, garbage and mechanical rooms under the tower, the emergency generator and pool rooms in the south-east, and the commercial unit facing Anola Drive.",
   "view": {
    "mode": "level",
    "focus": "B",
    "target": [
     0,
     5,
     -3
    ],
    "az": 160,
    "el": 55,
    "dist": 120
   }
  },
  {
   "title": "A typical floor",
   "text": "Eight homes per floor: 01 west, 02 north-west, 03 north, 04 north-east, 05 east, 06 south-east, 07 south, 08 south-west (from the strata plan). Unit numbers skip 13 – the 13th floor holds units 14xx.",
   "view": {
    "mode": "level",
    "focus": "L12",
    "target": [
     0,
     0,
     29
    ],
    "az": 150,
    "el": 45,
    "dist": 72
   }
  },
  {
   "title": "Penthouses & lower roof",
   "text": "PH1 (north-west), PH2 (north-east), PH3 (south-east) and PH4 (south-west) are two storeys inside the sloped metal roof. The flat lower roof around them forms their patios.",
   "view": {
    "mode": "roof",
    "target": [
     0,
     0,
     53.06
    ],
    "az": 200,
    "el": 35,
    "dist": 78
   }
  },
  {
   "title": "Upper roof",
   "text": "The main roof with four dome skylights and the elevator machine room. Telecom equipment sits on top of the machine room.",
   "view": {
    "mode": "roof",
    "target": [
     0,
     0,
     58.56
    ],
    "az": 160,
    "el": 55,
    "dist": 58
   }
  }
 ],
 "levels": [
  {
   "id": "B",
   "name": "Basement – lower parking",
   "short": "B",
   "label": "Basement",
   "elev": -3,
   "height": 3,
   "kind": "parkade",
   "seeThroughGround": true,
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 9–11 (height approximate)"
  },
  {
   "id": "M",
   "name": "Main floor – lobby & upper parking",
   "short": "Main",
   "label": "Main floor",
   "elev": 0,
   "height": 2.9,
   "kind": "ground",
   "seeThroughGround": true,
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 12–13 (\"1st floor\"; height approximate)"
  },
  {
   "id": "L2",
   "name": "Level 2",
   "short": "2",
   "label": "Level 2",
   "elev": 2.9,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "2",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L3",
   "name": "Level 3",
   "short": "3",
   "label": "Level 3",
   "elev": 5.54,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "3",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L4",
   "name": "Level 4",
   "short": "4",
   "label": "Level 4",
   "elev": 8.18,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "4",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L5",
   "name": "Level 5",
   "short": "5",
   "label": "Level 5",
   "elev": 10.82,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "5",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L6",
   "name": "Level 6",
   "short": "6",
   "label": "Level 6",
   "elev": 13.46,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "6",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L7",
   "name": "Level 7",
   "short": "7",
   "label": "Level 7",
   "elev": 16.1,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "7",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L8",
   "name": "Level 8",
   "short": "8",
   "label": "Level 8",
   "elev": 18.74,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "8",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L9",
   "name": "Level 9",
   "short": "9",
   "label": "Level 9",
   "elev": 21.38,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "9",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L10",
   "name": "Level 10",
   "short": "10",
   "label": "Level 10",
   "elev": 24.02,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "10",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L11",
   "name": "Level 11",
   "short": "11",
   "label": "Level 11",
   "elev": 26.66,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "11",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L12",
   "name": "Level 12",
   "short": "12",
   "label": "Level 12",
   "elev": 29.3,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "12",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L14",
   "name": "Level 14 (strata plan 13th floor)",
   "short": "14",
   "label": "Level 14",
   "elev": 31.94,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "14",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L15",
   "name": "Level 15 (strata plan 14th floor)",
   "short": "15",
   "label": "Level 15",
   "elev": 34.58,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "15",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L16",
   "name": "Level 16 (strata plan 15th floor)",
   "short": "16",
   "label": "Level 16",
   "elev": 37.22,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "16",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L17",
   "name": "Level 17 (strata plan 16th floor)",
   "short": "17",
   "label": "Level 17",
   "elev": 39.86,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "17",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L18",
   "name": "Level 18 (strata plan 17th floor)",
   "short": "18",
   "label": "Level 18",
   "elev": 42.5,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "18",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L19",
   "name": "Level 19 (strata plan 18th floor)",
   "short": "19",
   "label": "Level 19",
   "elev": 45.14,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "19",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L20",
   "name": "Level 20 (strata plan 19th floor)",
   "short": "20",
   "label": "Level 20",
   "elev": 47.78,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "20",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "L21",
   "name": "Level 21 (strata plan 20th floor)",
   "short": "21",
   "label": "Level 21",
   "elev": 50.42,
   "height": 2.64,
   "kind": "residential",
   "unitPrefix": "21",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 14–33 (floor-to-floor height approximate)"
  },
  {
   "id": "PH",
   "name": "Penthouses PH1–PH4 (two storeys) & lower roof",
   "short": "PH",
   "label": "Penthouse level",
   "elev": 53.06,
   "height": 5.5,
   "kind": "penthouse",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 34–35"
  },
  {
   "id": "RF",
   "name": "Upper roof & elevator machine room",
   "short": "Roof",
   "label": "Roof",
   "elev": 58.56,
   "height": 3,
   "kind": "roof",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 36"
  }
 ],
 "tower": {
  "wallFootprint": [
   [
    -11,
    13.9
   ],
   [
    11,
    13.9
   ],
   [
    13.9,
    11
   ],
   [
    13.9,
    7.9
   ],
   [
    12.2,
    7.9
   ],
   [
    12.2,
    5.05
   ],
   [
    11.65,
    5.05
   ],
   [
    11.65,
    -5.05
   ],
   [
    12.2,
    -5.05
   ],
   [
    12.2,
    -7.9
   ],
   [
    13.9,
    -7.9
   ],
   [
    13.9,
    -11
   ],
   [
    11,
    -13.9
   ],
   [
    -11,
    -13.9
   ],
   [
    -13.9,
    -11
   ],
   [
    -13.9,
    -7.9
   ],
   [
    -12.2,
    -7.9
   ],
   [
    -12.2,
    -5.05
   ],
   [
    -11.65,
    -5.05
   ],
   [
    -11.65,
    5.05
   ],
   [
    -12.2,
    5.05
   ],
   [
    -12.2,
    7.9
   ],
   [
    -13.9,
    7.9
   ],
   [
    -13.9,
    11
   ]
  ],
  "outline": [
   [
    -13.1,
    17.6
   ],
   [
    13.1,
    17.6
   ],
   [
    16.5,
    14.2
   ],
   [
    16.5,
    -14.2
   ],
   [
    13.1,
    -17.6
   ],
   [
    -13.1,
    -17.6
   ],
   [
    -16.5,
    -14.2
   ],
   [
    -16.5,
    14.2
   ]
  ],
  "groundFootprint": [
   [
    -13.88,
    11.83
   ],
   [
    -11.28,
    14.67
   ],
   [
    -3.88,
    14.67
   ],
   [
    -3.88,
    8.53
   ],
   [
    0.46,
    8.53
   ],
   [
    0.46,
    15.21
   ],
   [
    10.9,
    15.21
   ],
   [
    12.35,
    13.17
   ],
   [
    9.59,
    10.03
   ],
   [
    9.59,
    3.89
   ],
   [
    10.61,
    3.89
   ],
   [
    5.39,
    -1.5
   ],
   [
    5.39,
    -4.64
   ],
   [
    3.16,
    -4.64
   ],
   [
    2.26,
    -3.59
   ],
   [
    -3.07,
    -3.59
   ],
   [
    -3.07,
    -3.95
   ],
   [
    -10.7,
    -11.83
   ],
   [
    -11.28,
    -11.23
   ],
   [
    -13.88,
    -10.48
   ]
  ],
  "accuracy": "CONFIRMED",
  "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 16 (typical floor, 1:200) – symmetrised, ±0.3 m",
  "windows": {
   "width": 1.7,
   "spacing": 3.2,
   "sill": 0.15,
   "head": 2.3
  },
  "balconies": {
   "levels": [
    "L2",
    "L21"
   ],
   "items": [
    {
     "id": "NW",
     "label": "north-west corner balcony",
     "unit": "02",
     "polygon": [
      [
       -9.7,
       13.9
      ],
      [
       -9.7,
       15.85
      ],
      [
       -12.45,
       15.85
      ],
      [
       -15,
       13.3
      ],
      [
       -15,
       10.2
      ],
      [
       -13.9,
       10.2
      ],
      [
       -13.9,
       11
      ],
      [
       -11,
       13.9
      ]
     ]
    },
    {
     "id": "N2",
     "label": "north bedroom balcony (west)",
     "unit": "02",
     "polygon": [
      [
       -7,
       13.9
      ],
      [
       -3.82,
       13.9
      ],
      [
       -3.82,
       15.4
      ],
      [
       -7,
       15.4
      ]
     ]
    },
    {
     "id": "N",
     "label": "north balcony (centre)",
     "unit": "03",
     "polygon": [
      [
       -3.82,
       13.9
      ],
      [
       3.82,
       13.9
      ],
      [
       3.82,
       16.1
      ],
      [
       -3.82,
       16.1
      ]
     ]
    },
    {
     "id": "N4",
     "label": "north bedroom balcony (east)",
     "unit": "04",
     "polygon": [
      [
       7,
       15.4
      ],
      [
       3.82,
       15.4
      ],
      [
       3.82,
       13.9
      ],
      [
       7,
       13.9
      ]
     ]
    },
    {
     "id": "NE",
     "label": "north-east corner balcony",
     "unit": "04",
     "polygon": [
      [
       11,
       13.9
      ],
      [
       13.9,
       11
      ],
      [
       13.9,
       10.2
      ],
      [
       15,
       10.2
      ],
      [
       15,
       13.3
      ],
      [
       12.45,
       15.85
      ],
      [
       9.7,
       15.85
      ],
      [
       9.7,
       13.9
      ]
     ]
    },
    {
     "id": "E",
     "label": "east balcony (centre)",
     "unit": "05",
     "polygon": [
      [
       13.65,
       4.75
      ],
      [
       11.65,
       4.75
      ],
      [
       11.65,
       -4.75
      ],
      [
       13.65,
       -4.75
      ]
     ]
    },
    {
     "id": "SE",
     "label": "south-east corner balcony",
     "unit": "06",
     "polygon": [
      [
       9.7,
       -13.9
      ],
      [
       9.7,
       -15.85
      ],
      [
       12.45,
       -15.85
      ],
      [
       15,
       -13.3
      ],
      [
       15,
       -10.2
      ],
      [
       13.9,
       -10.2
      ],
      [
       13.9,
       -11
      ],
      [
       11,
       -13.9
      ]
     ]
    },
    {
     "id": "S6",
     "label": "south bedroom balcony (east)",
     "unit": "06",
     "polygon": [
      [
       7,
       -13.9
      ],
      [
       3.82,
       -13.9
      ],
      [
       3.82,
       -15.4
      ],
      [
       7,
       -15.4
      ]
     ]
    },
    {
     "id": "S",
     "label": "south balcony (centre)",
     "unit": "07",
     "polygon": [
      [
       -3.82,
       -16.1
      ],
      [
       3.82,
       -16.1
      ],
      [
       3.82,
       -13.9
      ],
      [
       -3.82,
       -13.9
      ]
     ]
    },
    {
     "id": "S8",
     "label": "south bedroom balcony (west)",
     "unit": "08",
     "polygon": [
      [
       -7,
       -15.4
      ],
      [
       -3.82,
       -15.4
      ],
      [
       -3.82,
       -13.9
      ],
      [
       -7,
       -13.9
      ]
     ]
    },
    {
     "id": "SW",
     "label": "south-west corner balcony",
     "unit": "08",
     "polygon": [
      [
       -11,
       -13.9
      ],
      [
       -13.9,
       -11
      ],
      [
       -13.9,
       -10.2
      ],
      [
       -15,
       -10.2
      ],
      [
       -15,
       -13.3
      ],
      [
       -12.45,
       -15.85
      ],
      [
       -9.7,
       -15.85
      ],
      [
       -9.7,
       -13.9
      ]
     ]
    },
    {
     "id": "W",
     "label": "west balcony (centre)",
     "unit": "01",
     "polygon": [
      [
       -13.65,
       -4.75
      ],
      [
       -11.65,
       -4.75
      ],
      [
       -11.65,
       4.75
      ],
      [
       -13.65,
       4.75
      ]
     ]
    }
   ],
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) typical floor plans (balconies \"B\" = limited common property)",
   "note": "Unit positions per floor (01 W, 02 NW, 03 N, 04 NE, 05 E, 06 SE, 07 S, 08 SW) confirmed by the unit numbers written on the strata plan."
  }
 },
 "crown": {
  "level": "PH",
  "roofLevel": "RF",
  "lowerRoof": {
   "label": "Lower roof – low-slope SBS roof around the penthouses (their patios)",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 34 (roof & patios around PH1–PH4)",
   "parapet": 0.45,
   "note": "Cornice overhang approximate."
  },
  "mansard": {
   "label": "Sloped metal roof (mansard) enclosing the penthouses",
   "height": 5.2,
   "base": [
    [
     -11,
     13.9
    ],
    [
     11,
     13.9
    ],
    [
     13.9,
     11
    ],
    [
     13.9,
     -11
    ],
    [
     11,
     -13.9
    ],
    [
     -11,
     -13.9
    ],
    [
     -13.9,
     -11
    ],
    [
     -13.9,
     11
    ]
   ],
   "top": [
    [
     -5.2,
     7.9
    ],
    [
     5,
     7.9
    ],
    [
     7,
     5.9
    ],
    [
     7,
     -6.1
    ],
    [
     5,
     -8.1
    ],
    [
     -5.2,
     -8.1
    ],
    [
     -7.2,
     -6.1
    ],
    [
     -7.2,
     5.9
    ]
   ],
   "accuracy": "INFERRED",
   "note": "Slope angle schematic."
  },
  "dormers": [
   {
    "id": "N-W",
    "e": -5,
    "n": 13.2,
    "w": 4,
    "d": 2.2,
    "label": "PH1 window/balcony opening in metal roof (north)"
   },
   {
    "id": "N-E",
    "e": 5,
    "n": 13.2,
    "w": 4,
    "d": 2.2,
    "label": "PH2 window/balcony opening in metal roof (north)"
   },
   {
    "id": "S-W",
    "e": -5,
    "n": -13.2,
    "w": 4,
    "d": 2.2,
    "label": "PH4 window/balcony opening in metal roof (south)"
   },
   {
    "id": "S-E",
    "e": 5,
    "n": -13.2,
    "w": 4,
    "d": 2.2,
    "label": "PH3 window/balcony opening in metal roof (south)"
   },
   {
    "id": "E-N",
    "e": 13.2,
    "n": 5,
    "w": 2.2,
    "d": 4,
    "label": "PH2 window/balcony opening in metal roof (east)"
   },
   {
    "id": "E-S",
    "e": 13.2,
    "n": -5,
    "w": 2.2,
    "d": 4,
    "label": "PH3 window/balcony opening in metal roof (east)"
   },
   {
    "id": "W-N",
    "e": -13.2,
    "n": 5,
    "w": 2.2,
    "d": 4,
    "label": "PH1 window/balcony opening in metal roof (west)"
   },
   {
    "id": "W-S",
    "e": -13.2,
    "n": -5,
    "w": 2.2,
    "d": 4,
    "label": "PH4 window/balcony opening in metal roof (west)"
   }
  ],
  "upperRoof": {
   "polygon": [
    [
     -5.2,
     7.9
    ],
    [
     5,
     7.9
    ],
    [
     7,
     5.9
    ],
    [
     7,
     -6.1
    ],
    [
     5,
     -8.1
    ],
    [
     -5.2,
     -8.1
    ],
    [
     -7.2,
     -6.1
    ],
    [
     -7.2,
     5.9
    ]
   ],
   "label": "Upper (main) roof – low-slope SBS roof",
   "accuracy": "INFERRED"
  },
  "skylights": [
   {
    "id": "NW",
    "e": -5.4,
    "n": 6,
    "accuracy": "INFERRED",
    "label": "Upper roof – dome skylight (north-west, over PH1)"
   },
   {
    "id": "NE",
    "e": 5.2,
    "n": 6,
    "accuracy": "INFERRED",
    "label": "Upper roof – dome skylight (north-east, over PH2)"
   },
   {
    "id": "SW",
    "e": -5.4,
    "n": -6.2,
    "accuracy": "INFERRED",
    "label": "Upper roof – dome skylight (south-west, over PH4)"
   },
   {
    "id": "SE",
    "e": 5.2,
    "n": -6.2,
    "accuracy": "INFERRED",
    "label": "Upper roof – dome skylight (south-east, over PH3)"
   }
  ],
  "structures": [
   {
    "id": "roof.elevatorRoom",
    "name": "Elevator machine room / roof mechanical room",
    "box": {
     "e": -0.65,
     "n": 0,
     "w": 6.6,
     "d": 6.5
    },
    "h": 3,
    "accuracy": "CONFIRMED",
    "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 36 (\"23rd floor\")"
   },
   {
    "id": "roof.telecom",
    "name": "Telecom (Telus) equipment on elevator room roof",
    "box": {
     "e": 0.9,
     "n": 1.6,
     "w": 1.4,
     "d": 1.4
    },
    "h": 1.8,
    "onTopOf": "roof.elevatorRoom",
    "matKey": "column",
    "accuracy": "APPROXIMATE"
   }
  ]
 },
 "parkade": {
  "levels": [
   "B",
   "M"
  ],
  "footprint": [
   [
    -36.51,
    43.74
   ],
   [
    36.9,
    43.74
   ],
   [
    36.36,
    -9.49
   ],
   [
    36.23,
    -16.97
   ],
   [
    28.86,
    -25.48
   ],
   [
    20.54,
    -25.49
   ],
   [
    20.41,
    -33.26
   ],
   [
    16.37,
    -36.93
   ],
   [
    10.23,
    -36.83
   ],
   [
    6.8,
    -33.97
   ],
   [
    -9.97,
    -33.83
   ],
   [
    -15.85,
    -39.49
   ],
   [
    -20.19,
    -39.2
   ],
   [
    -19.96,
    -25.53
   ],
   [
    -33.84,
    -25.3
   ],
   [
    -33.75,
    -20.12
   ],
   [
    -37,
    -20.07
   ]
  ],
  "footprints": {
   "B": [
    [
     -36.51,
     43.74
    ],
    [
     36.9,
     43.74
    ],
    [
     36.36,
     -9.49
    ],
    [
     36.23,
     -16.97
    ],
    [
     28.86,
     -25.48
    ],
    [
     20.54,
     -25.49
    ],
    [
     20.41,
     -33.26
    ],
    [
     16.37,
     -36.93
    ],
    [
     10.23,
     -36.83
    ],
    [
     6.8,
     -33.97
    ],
    [
     -9.97,
     -33.83
    ],
    [
     -15.85,
     -39.49
    ],
    [
     -20.19,
     -39.2
    ],
    [
     -19.96,
     -25.53
    ],
    [
     -33.84,
     -25.3
    ],
    [
     -33.75,
     -20.12
    ],
    [
     -37,
     -20.07
    ]
   ],
   "M": [
    [
     -40.51,
     44
    ],
    [
     38.33,
     44.37
    ],
    [
     38.33,
     25.24
    ],
    [
     23.05,
     25.24
    ],
    [
     23.05,
     15.82
    ],
    [
     21.45,
     13.98
    ],
    [
     13.45,
     13.76
    ],
    [
     -1.82,
     -4.93
    ],
    [
     -19.27,
     -22.66
    ],
    [
     -35.64,
     -22.66
    ],
    [
     -35.64,
     -4.05
    ],
    [
     -40.51,
     0.37
    ]
   ]
  },
  "accuracy": "CONFIRMED",
  "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 10 (basement) and 12 (1st floor), 1:500 – positioned ±1 m",
  "columnGrid": {
   "origin": [
    0,
    0
   ],
   "spacing": [
    8.4,
    8.4
   ],
   "source": "Schematic grid only – real column positions are not shown on the strata plan."
  },
  "aisles": [
   {
    "id": "loop",
    "level": "B",
    "path": [
     [
      -24,
      -15
     ],
     [
      -24,
      36
     ],
     [
      24,
      36
     ],
     [
      24,
      -9
     ]
    ],
    "width": 6.5,
    "label": "schematic",
    "accuracy": "UNKNOWN"
   },
   {
    "id": "loop",
    "level": "M",
    "path": [
     [
      -30,
      -14
     ],
     [
      -30,
      35
     ],
     [
      30,
      35
     ],
     [
      30,
      28
     ]
    ],
    "width": 6.5,
    "label": "schematic",
    "accuracy": "UNKNOWN"
   }
  ],
  "stallRows": [
   {
    "level": "B",
    "from": [
     -27.25,
     -15
    ],
    "to": [
     -27.25,
     40
    ],
    "side": "left",
    "depth": 5.25
   },
   {
    "level": "B",
    "from": [
     -20.75,
     -12
    ],
    "to": [
     -20.75,
     32.5
    ],
    "side": "right",
    "depth": 5.25
   },
   {
    "level": "B",
    "from": [
     -20.75,
     39.25
    ],
    "to": [
     20.75,
     39.25
    ],
    "side": "left",
    "depth": 4.3
   },
   {
    "level": "B",
    "from": [
     -20.75,
     32.75
    ],
    "to": [
     -4.5,
     32.75
    ],
    "side": "right",
    "depth": 5.25
   },
   {
    "level": "B",
    "from": [
     1,
     32.75
    ],
    "to": [
     20.75,
     32.75
    ],
    "side": "right",
    "depth": 5.25
   },
   {
    "level": "B",
    "from": [
     20.75,
     -9
    ],
    "to": [
     20.75,
     32.5
    ],
    "side": "left",
    "depth": 5.25
   },
   {
    "level": "B",
    "from": [
     27.25,
     -7
    ],
    "to": [
     27.25,
     40
    ],
    "side": "right",
    "depth": 5.25
   },
   {
    "level": "M",
    "from": [
     -33.25,
     -14
    ],
    "to": [
     -33.25,
     40.5
    ],
    "side": "left",
    "depth": 5
   },
   {
    "level": "M",
    "from": [
     -26.75,
     -10
    ],
    "to": [
     -26.75,
     31.5
    ],
    "side": "right",
    "depth": 5.25
   },
   {
    "level": "M",
    "from": [
     -26.75,
     38.25
    ],
    "to": [
     34,
     38.25
    ],
    "side": "left",
    "depth": 5.25
   },
   {
    "level": "M",
    "from": [
     -26.75,
     31.75
    ],
    "to": [
     -3.5,
     31.75
    ],
    "side": "right",
    "depth": 5.25
   },
   {
    "level": "M",
    "from": [
     1.5,
     31.75
    ],
    "to": [
     34,
     31.75
    ],
    "side": "right",
    "depth": 5.25
   }
  ]
 },
 "elements": [
  {
   "id": "core.B",
   "level": "B",
   "name": "Elevators (2)",
   "kind": "core",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "box": {
    "e": 0.26,
    "n": 1.01,
    "w": 1.67,
    "d": 5.06
   },
   "labelText": "Elevators"
  },
  {
   "id": "stair.B",
   "level": "B",
   "name": "Stairs (core)",
   "kind": "stair",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "box": {
    "e": -1.86,
    "n": 0.03,
    "w": 2.56,
    "d": 7.02
   },
   "labelText": "Stairs"
  },
  {
   "id": "storage.B.W",
   "level": "B",
   "name": "Storage rooms – west (lockers)",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "footprint": [
    [
     -13.55,
     12.17
    ],
    [
     -11.32,
     14.43
    ],
    [
     -3.64,
     14.43
    ],
    [
     -3.64,
     5.03
    ],
    [
     -3.64,
     -7.83
    ],
    [
     -3.64,
     -14.43
    ],
    [
     -11.32,
     -14.43
    ],
    [
     -13.55,
     -12.23
    ],
    [
     -13.55,
     -7.83
    ],
    [
     -8.38,
     -7.83
    ],
    [
     -8.38,
     5.03
    ],
    [
     -13.55,
     5.03
    ]
   ],
   "labelText": "Storage"
  },
  {
   "id": "storage.B.NE",
   "level": "B",
   "name": "Storage rooms – north-east (lockers)",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "footprint": [
    [
     3.81,
     14.26
    ],
    [
     8.26,
     14.26
    ],
    [
     8.26,
     9.97
    ],
    [
     13.44,
     9.97
    ],
    [
     13.44,
     5.03
    ],
    [
     3.81,
     5.03
    ]
   ],
   "labelText": "Storage"
  },
  {
   "id": "storage.B.E",
   "level": "B",
   "name": "Storage rooms – east (lockers)",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "footprint": [
    [
     2.87,
     3.54
    ],
    [
     8.15,
     3.54
    ],
    [
     8.15,
     -7.83
    ],
    [
     13.44,
     -7.83
    ],
    [
     13.44,
     -12.23
    ],
    [
     11.21,
     -14.43
    ],
    [
     2.87,
     -14.43
    ]
   ],
   "labelText": "Storage"
  },
  {
   "id": "mechanical.B",
   "level": "B",
   "name": "Mechanical room",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "footprint": [
    [
     8.26,
     14.26
    ],
    [
     10.93,
     14.26
    ],
    [
     13.44,
     11.88
    ],
    [
     13.44,
     9.97
    ],
    [
     8.26,
     9.97
    ]
   ],
   "matKey": "core",
   "labelText": "Mechanical"
  },
  {
   "id": "garbage.B",
   "level": "B",
   "name": "Garbage room",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "box": {
    "e": -2.14,
    "n": -9.16,
    "w": 3.34,
    "d": 8.15
   },
   "labelText": "Garbage"
  },
  {
   "id": "electrical.B",
   "level": "B",
   "name": "Main electrical room",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 11",
   "box": {
    "e": 1.62,
    "n": -9.64,
    "w": 4.17,
    "d": 9.11
   },
   "matKey": "core",
   "labelText": "Electrical"
  },
  {
   "id": "generator.B",
   "level": "B",
   "name": "Emergency generator room",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 10",
   "box": {
    "e": 32.29,
    "n": -10.8,
    "w": 8.18,
    "d": 5.17
   },
   "matKey": "core",
   "labelText": "Generator"
  },
  {
   "id": "poolStructure.B",
   "level": "B",
   "name": "Pool structure (under the pool)",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 10",
   "box": {
    "e": 32.98,
    "n": -16.56,
    "w": 6.61,
    "d": 6.58
   },
   "matKey": "pool",
   "labelText": "Pool structure"
  },
  {
   "id": "poolEquipment.B",
   "level": "B",
   "name": "Pool equipment / maintenance room",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 10",
   "box": {
    "e": 31.26,
    "n": -22.64,
    "w": 4.8,
    "d": 5.83
   },
   "matKey": "core",
   "labelText": "Pool equipment"
  },
  {
   "id": "commercial",
   "level": "B",
   "name": "Commercial unit (S.L. 158, 544 m²) – shops facing Anola Drive",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 10",
   "footprint": [
    [
     -9.74,
     -19.95
    ],
    [
     12.31,
     -20.32
    ],
    [
     12.22,
     -25.57
    ],
    [
     20.54,
     -25.71
    ],
    [
     20.41,
     -33.26
    ],
    [
     16.37,
     -36.93
    ],
    [
     10.23,
     -36.83
    ],
    [
     6.8,
     -33.97
    ],
    [
     -9.97,
     -33.83
    ],
    [
     -15.85,
     -39.49
    ],
    [
     -20.19,
     -39.2
    ],
    [
     -19.96,
     -25.53
    ],
    [
     -9.83,
     -25.7
    ]
   ],
   "matKey": "wallAlt",
   "exterior": true,
   "labelText": "Commercial (S.L. 158)"
  },
  {
   "id": "stairN.B",
   "level": "B",
   "name": "Exit stair – north (parkade to north courtyard)",
   "kind": "stair",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 10",
   "box": {
    "e": -2.23,
    "n": 28.78,
    "w": 2.61,
    "d": 5.08
   },
   "labelText": "Exit stair"
  },
  {
   "id": "stairSW.B",
   "level": "B",
   "name": "Exit stair – south-west",
   "kind": "stair",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 10",
   "box": {
    "e": -33,
    "n": -22.73,
    "w": 1.68,
    "d": 5.21
   },
   "labelText": "Exit stair"
  },
  {
   "id": "ramp.lower",
   "level": "B",
   "name": "Garage ramp from Bellwood Ave down to the lower parking",
   "kind": "ramp",
   "accuracy": "APPROXIMATE",
   "note": "Position and slope approximate – not shown on the strata plan.",
   "start": [
    54,
    -6
   ],
   "end": [
    36.9,
    -6
   ],
   "fromElev": 0,
   "toElev": -3,
   "width": 6,
   "labelText": "Ramp (approx.)"
  },
  {
   "id": "gate.B",
   "level": "B",
   "name": "Overhead garage gate – lower parking (approx.)",
   "kind": "gate",
   "accuracy": "APPROXIMATE",
   "box": {
    "e": 36.6,
    "n": -6,
    "w": 0.4,
    "d": 6
   },
   "h": 2.4,
   "labelText": "Gate"
  },
  {
   "id": "core.M",
   "level": "M",
   "name": "Elevators",
   "kind": "core",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "box": {
    "e": 0.92,
    "n": 1.42,
    "w": 2.67,
    "d": 4.94
   },
   "labelText": "Elevators"
  },
  {
   "id": "stair.M",
   "level": "M",
   "name": "Stairs (core)",
   "kind": "stair",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "box": {
    "e": -1.74,
    "n": -0.03,
    "w": 2.66,
    "d": 6.34
   },
   "labelText": "Stairs"
  },
  {
   "id": "lobby",
   "level": "M",
   "name": "Main lobby (entrance on the south-east side)",
   "kind": "lobby",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "footprint": [
    [
     2.26,
     3.89
    ],
    [
     10.61,
     3.89
    ],
    [
     5.39,
     -1.5
    ],
    [
     5.39,
     -4.64
    ],
    [
     3.16,
     -4.64
    ],
    [
     2.26,
     -3.59
    ]
   ],
   "labelText": "Lobby"
  },
  {
   "id": "mailRoom",
   "level": "M",
   "name": "Mail room",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "box": {
    "e": 7.28,
    "n": 4.75,
    "w": 4.63,
    "d": 1.59
   },
   "labelText": "Mail"
  },
  {
   "id": "office",
   "level": "M",
   "name": "Office (management / caretaker)",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "box": {
    "e": 0.58,
    "n": 6.93,
    "w": 4.29,
    "d": 3.2
   },
   "labelText": "Office"
  },
  {
   "id": "recRoom",
   "level": "M",
   "name": "Recreation room (amenity room)",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "footprint": [
    [
     -13.88,
     5.33
    ],
    [
     -5.04,
     5.33
    ],
    [
     -5.04,
     2.93
    ],
    [
     -3.07,
     2.93
    ],
    [
     -3.07,
     -3.95
    ],
    [
     -10.7,
     -11.83
    ],
    [
     -11.28,
     -11.23
    ],
    [
     -13.88,
     -10.48
    ]
   ],
   "labelText": "Recreation room"
  },
  {
   "id": "storage.M",
   "level": "M",
   "name": "Storage room – main floor",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "footprint": [
    [
     -13.88,
     11.83
    ],
    [
     -11.28,
     14.67
    ],
    [
     -3.88,
     14.67
    ],
    [
     -3.88,
     5.33
    ],
    [
     -13.88,
     5.33
    ]
   ],
   "labelText": "Storage"
  },
  {
   "id": "utility.M",
   "level": "M",
   "name": "Utility room",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "box": {
    "e": 0.92,
    "n": -2.32,
    "w": 2.67,
    "d": 2.54
   },
   "matKey": "core",
   "labelText": false
  },
  {
   "id": "unit101",
   "level": "M",
   "name": "Unit 101 (residential – S.L. 1)",
   "kind": "room",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13",
   "footprint": [
    [
     0.46,
     15.21
    ],
    [
     10.9,
     15.21
    ],
    [
     12.35,
     13.17
    ],
    [
     9.59,
     10.03
    ],
    [
     9.59,
     5.54
    ],
    [
     2.72,
     5.54
    ],
    [
     2.72,
     8.53
    ],
    [
     0.46,
     8.53
    ]
   ],
   "matKey": "wallAlt",
   "labelText": "Unit 101"
  },
  {
   "id": "stairN.M",
   "level": "M",
   "name": "Exit stair – north",
   "kind": "stair",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 12",
   "box": {
    "e": -0.77,
    "n": 28.77,
    "w": 2.55,
    "d": 5.3
   },
   "labelText": "Exit stair"
  },
  {
   "id": "stairSW.M",
   "level": "M",
   "name": "Exit stair – south-west",
   "kind": "stair",
   "accuracy": "CONFIRMED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 12",
   "box": {
    "e": -31.2,
    "n": -25.09,
    "w": 1.6,
    "d": 3.83
   },
   "labelText": "Exit stair"
  },
  {
   "id": "entrance.main",
   "level": "M",
   "name": "Main entrance doors (lobby, south-east side)",
   "kind": "entrance",
   "accuracy": "INFERRED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 13 (lobby opens to the landscaped area on its south-east side)",
   "box": {
    "e": 8,
    "n": 1.2,
    "w": 3.2,
    "d": 0.6,
    "rotDeg": -45
   },
   "h": 2.6,
   "exterior": true,
   "labelText": false
  },
  {
   "id": "gate.M",
   "level": "M",
   "name": "Upper parking entrance & gate (east side, approx.)",
   "kind": "gate",
   "accuracy": "APPROXIMATE",
   "note": "Position on the east side assumed – not shown on the strata plan.",
   "box": {
    "e": 38.1,
    "n": 34,
    "w": 0.4,
    "d": 6.5
   },
   "h": 2.4,
   "labelText": "Gate"
  },
  {
   "id": "canopy.M",
   "level": "M",
   "name": "Canopy / enclosure over the upper-parking entrance",
   "kind": "roof",
   "accuracy": "APPROXIMATE",
   "box": {
    "e": 40.5,
    "n": 34,
    "w": 5,
    "d": 8
   },
   "z0": 2.5,
   "h": 0.25,
   "exterior": true,
   "matKey": "roofLow",
   "labelText": false
  },
  {
   "id": "commercial.front",
   "level": "M",
   "name": "Commercial unit S.L. 158 – shopfront facing Anola Drive (basement level)",
   "kind": "facade",
   "accuracy": "INFERRED",
   "source": "Strata Plan NW2020 (registered 9 June 1983) sheets 9–10 (S.L. 158 at basement level, south side)",
   "footprint": [
    [
     -18.33,
     -35.17
    ],
    [
     -18.33,
     -41.57
    ],
    [
     -13.45,
     -41.57
    ],
    [
     -7.64,
     -35.54
    ],
    [
     9.09,
     -35.54
    ],
    [
     12.73,
     -38.85
    ],
    [
     18.91,
     -38.85
    ],
    [
     18.91,
     -39.2
    ],
    [
     12.73,
     -39.2
    ],
    [
     9.09,
     -35.89
    ],
    [
     -7.64,
     -35.89
    ],
    [
     -13.45,
     -41.92
    ],
    [
     -18.33,
     -41.92
    ],
    [
     -18.33,
     -35.52
    ]
   ],
   "z0": -3,
   "h": 2.9,
   "exterior": true,
   "matKey": "glass",
   "labelText": false
  }
 ],
 "site": {
  "extent": {
   "minE": -125,
   "maxE": 125,
   "minN": -100,
   "maxN": 120
  },
  "groundElev": -3,
  "terrain": [
   {
    "id": "site.grade.main",
    "name": "Ground at main-floor level (lobby, pool, drop-off)",
    "matKey": "ground",
    "top": 0,
    "bottom": -3.05,
    "polygon": [
     [
      -125,
      -30
     ],
     [
      -43,
      -30
     ],
     [
      -35.64,
      -22.66
     ],
     [
      -30.55,
      -27.01
     ],
     [
      -23.64,
      -33.7
     ],
     [
      -18.33,
      -35.17
     ],
     [
      -18.33,
      -41.57
     ],
     [
      -13.45,
      -41.57
     ],
     [
      -7.64,
      -35.54
     ],
     [
      9.09,
      -35.54
     ],
     [
      12.73,
      -38.85
     ],
     [
      18.91,
      -38.85
     ],
     [
      33.31,
      -23.91
     ],
     [
      38.55,
      -23.91
     ],
     [
      41.24,
      -21.71
     ],
     [
      65,
      -30
     ],
     [
      125,
      -30
     ],
     [
      125,
      44
     ],
     [
      -125,
      44
     ]
    ],
    "accuracy": "APPROXIMATE",
    "source": "Site falls about two storeys from north to south (Strata Plan NW2020 (registered 9 June 1983) sections; web elevation data). Stepped schematically."
   },
   {
    "id": "site.grade.north",
    "name": "Ground at 2nd-floor level (north courtyard, Springer Park side)",
    "matKey": "ground",
    "top": 2.9,
    "bottom": -3.05,
    "polygon": [
     [
      -125,
      120
     ],
     [
      125,
      120
     ],
     [
      125,
      44
     ],
     [
      38.09,
      44
     ],
     [
      38.09,
      25.36
     ],
     [
      28.41,
      25.36
     ],
     [
      16.68,
      13.69
     ],
     [
      -9.35,
      -15.29
     ],
     [
      -19.24,
      -23.03
     ],
     [
      -34.64,
      -23.03
     ],
     [
      -38.09,
      -20.26
     ],
     [
      -38.09,
      -2.59
     ],
     [
      -41.75,
      0.91
     ],
     [
      -41.75,
      44
     ],
     [
      -125,
      44
     ]
    ],
    "accuracy": "APPROXIMATE",
    "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 14 (2nd-floor landscaped area over the upper parking); north band schematic."
   }
  ],
  "surfaces": [
   {
    "id": "site.podium.north",
    "name": "North podium – upper courtyard (landscaping over the upper parking)",
    "kind": "podium",
    "matKey": "podium",
    "polygon": [
     [
      -41.75,
      43.98
     ],
     [
      38.09,
      43.98
     ],
     [
      38.09,
      25.36
     ],
     [
      28.41,
      25.36
     ],
     [
      16.68,
      13.69
     ],
     [
      -9.35,
      -15.29
     ],
     [
      -19.24,
      -23.03
     ],
     [
      -34.64,
      -23.03
     ],
     [
      -38.09,
      -20.26
     ],
     [
      -38.09,
      -2.59
     ],
     [
      -41.75,
      0.91
     ]
    ],
    "elev": 2.9,
    "labelText": "North courtyard (over upper parking)",
    "accuracy": "CONFIRMED",
    "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 14 (\"2nd floor – landscaped area\")",
    "note": "Its waterproofing membrane is the roof of the upper parking."
   },
   {
    "id": "site.podium.south",
    "name": "South podium – landscaped area at main-floor level (over the basement)",
    "kind": "podium",
    "matKey": "podium",
    "polygon": [
     [
      38.33,
      25.24
     ],
     [
      38.33,
      2.94
     ],
     [
      38.76,
      2.94
     ],
     [
      38.76,
      -10.67
     ],
     [
      41.24,
      -13.02
     ],
     [
      41.24,
      -21.71
     ],
     [
      38.55,
      -23.91
     ],
     [
      33.31,
      -23.91
     ],
     [
      18.91,
      -38.85
     ],
     [
      12.73,
      -38.85
     ],
     [
      9.09,
      -35.54
     ],
     [
      -7.64,
      -35.54
     ],
     [
      -13.45,
      -41.57
     ],
     [
      -18.33,
      -41.57
     ],
     [
      -18.33,
      -35.17
     ],
     [
      -23.64,
      -33.7
     ],
     [
      -30.55,
      -27.01
     ],
     [
      -35.64,
      -22.66
     ],
     [
      -19.27,
      -22.66
     ],
     [
      -1.82,
      -4.93
     ],
     [
      13.45,
      13.76
     ],
     [
      21.45,
      13.98
     ],
     [
      23.05,
      15.82
     ],
     [
      23.05,
      25.24
     ]
    ],
    "elev": 0,
    "labelText": false,
    "accuracy": "CONFIRMED",
    "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 12 (\"1st floor – landscaped area\")",
    "note": "Its waterproofing membrane is the roof of the basement (lower parking, storage, commercial unit)."
   },
   {
    "id": "site.tennisArea",
    "name": "Tennis court enclosure (on the north podium)",
    "kind": "paving",
    "matKey": "tennisOut",
    "polygon": [
     [
      -39.63,
      35.73
     ],
     [
      -21.08,
      35.73
     ],
     [
      -21.08,
      -0.69
     ],
     [
      -39.63,
      -0.69
     ]
    ],
    "elev": 2.9,
    "labelText": false,
    "accuracy": "CONFIRMED",
    "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 14 (18.50 × 36.77 m)"
   },
   {
    "id": "site.tennis",
    "name": "Tennis court",
    "kind": "tennis",
    "matKey": "tennis",
    "polygon": [
     [
      -35.85,
      5.629999999999999
     ],
     [
      -24.869999999999997,
      5.629999999999999
     ],
     [
      -24.869999999999997,
      29.41
     ],
     [
      -35.85,
      29.41
     ]
    ],
    "elev": 2.9,
    "labelText": "Tennis court",
    "court": {
     "center": [
      -30.36,
      17.52
     ],
     "rotDeg": 90
    },
    "accuracy": "CONFIRMED",
    "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 14"
   },
   {
    "id": "site.poolDeck",
    "name": "Pool deck",
    "kind": "paving",
    "matKey": "paving",
    "polygon": [
     [
      40.91,
      -15.16
     ],
     [
      37.12,
      -11.37
     ],
     [
      31.76,
      -11.37
     ],
     [
      27.97,
      -15.16
     ],
     [
      27.97,
      -20.52
     ],
     [
      31.76,
      -24.31
     ],
     [
      37.12,
      -24.31
     ],
     [
      40.91,
      -20.52
     ]
    ],
    "elev": 0,
    "labelText": false,
    "accuracy": "APPROXIMATE",
    "source": "Around the pool shown on Strata Plan NW2020 (registered 9 June 1983) sheet 12"
   },
   {
    "id": "site.pool",
    "name": "Swimming pool (outdoor, main-floor level)",
    "kind": "pool",
    "matKey": "pool",
    "polygon": [
     [
      38.69,
      -16.08
     ],
     [
      36.2,
      -13.59
     ],
     [
      32.68,
      -13.59
     ],
     [
      30.19,
      -16.08
     ],
     [
      30.19,
      -19.6
     ],
     [
      32.68,
      -22.09
     ],
     [
      36.2,
      -22.09
     ],
     [
      38.69,
      -19.6
     ]
    ],
    "elev": 0,
    "labelText": "Pool",
    "accuracy": "CONFIRMED",
    "source": "Strata Plan NW2020 (registered 9 June 1983) sheet 12"
   },
   {
    "id": "site.driveLoop",
    "name": "Drop-off loop",
    "kind": "driveway",
    "matKey": "driveway",
    "polygon": [
     [
      28.32,
      -1.88
     ],
     [
      29.44,
      -0.87
     ],
     [
      30.19,
      0.45
     ],
     [
      30.53,
      1.92
     ],
     [
      30.39,
      3.42
     ],
     [
      29.71,
      4.97
     ],
     [
      28.55,
      6.19
     ],
     [
      27.05,
      6.96
     ],
     [
      25.38,
      7.17
     ],
     [
      23.73,
      6.8
     ],
     [
      22.3,
      5.9
     ],
     [
      21.26,
      4.57
     ],
     [
      20.74,
      2.96
     ],
     [
      20.77,
      1.28
     ],
     [
      21.38,
      -0.3
     ],
     [
      22.49,
      -1.57
     ],
     [
      23.95,
      -2.4
     ],
     [
      25.44,
      -2.68
     ],
     [
      26.94,
      -2.5
     ]
    ],
    "elev": 0,
    "labelText": false,
    "accuracy": "CONFIRMED",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy)"
   },
   {
    "id": "site.driveway",
    "name": "Driveway from Bellwood Ave",
    "kind": "path",
    "matKey": "driveway",
    "path": [
     [
      57.25,
      1.28
     ],
     [
      51.05,
      1.75
     ],
     [
      30.39,
      3.42
     ]
    ],
    "width": 5,
    "elev": 0,
    "labelText": false,
    "accuracy": "CONFIRMED",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy)"
   },
   {
    "id": "site.upperDrive",
    "name": "Driveway to the upper parking entrance (approx.)",
    "kind": "path",
    "matKey": "driveway",
    "path": [
     [
      57.2,
      34
     ],
     [
      38.4,
      34
     ]
    ],
    "width": 6,
    "elev": 0,
    "labelText": false,
    "accuracy": "APPROXIMATE",
    "source": "Assumed – not shown on the strata plan"
   }
  ],
  "streets": [
   {
    "name": "Bellwood Avenue",
    "width": 11,
    "labelAt": [
     62,
     20
    ],
    "path": [
     [
      51.37,
      -43.5,
      -3
     ],
     [
      54.28,
      -38.36,
      -3
     ],
     [
      56.35,
      -34.67,
      -1.5
     ],
     [
      57.33,
      -24.41,
      0
     ],
     [
      57.25,
      1.28,
      0
     ],
     [
      57.22,
      7.72,
      0
     ],
     [
      57.24,
      40,
      0
     ],
     [
      57,
      48,
      2.9
     ],
     [
      55.8,
      49.77,
      2.9
     ],
     [
      55.26,
      52.68,
      2.9
     ],
     [
      51.85,
      70.75,
      2.9
     ],
     [
      44.77,
      96.17,
      2.9
     ],
     [
      40.84,
      111.99,
      2.9
     ],
     [
      39.64,
      120,
      2.9
     ]
    ],
    "accuracy": "CONFIRMED",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy) (street slope schematic)"
   },
   {
    "name": "Anola Drive",
    "width": 10,
    "labelAt": [
     0,
     -55
    ],
    "path": [
     [
      -125,
      -52.2,
      -3
     ],
     [
      -51.67,
      -53.41,
      -3
     ],
     [
      -44.37,
      -53.62,
      -3
     ],
     [
      35.04,
      -55.4,
      -3
     ],
     [
      43.55,
      -51.94,
      -3
     ],
     [
      51.37,
      -43.5,
      -3
     ]
    ],
    "accuracy": "CONFIRMED",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy) (the 1983 strata plan calls it the Lougheed Highway access road)"
   },
   {
    "name": "Lougheed Highway",
    "width": 16,
    "labelAt": [
     0,
     -88
    ],
    "path": [
     [
      -125,
      -82,
      -3
     ],
     [
      -78.57,
      -83.82,
      -3
     ],
     [
      -28.17,
      -83.96,
      -3
     ],
     [
      48.54,
      -82.15,
      -3
     ],
     [
      125,
      -82.8,
      -3
     ]
    ],
    "accuracy": "CONFIRMED",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy)"
   },
   {
    "name": "Woodland Place",
    "width": 6,
    "labelAt": [
     -58,
     36
    ],
    "path": [
     [
      -58.15,
      20.8,
      0
     ],
     [
      -57.75,
      32.06,
      0
     ],
     [
      -57.9,
      40,
      0
     ],
     [
      -58.04,
      47.74,
      2.9
     ],
     [
      -61.77,
      55.56,
      2.9
     ],
     [
      -70.36,
      65.35,
      2.9
     ]
    ],
    "accuracy": "CONFIRMED",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy)"
   }
  ],
  "otherBuildings": [
   {
    "id": "site.nb.vantage1",
    "name": "Neighbouring building: Vantage Point I (2020 Bellwood)",
    "height": 47.599999999999994,
    "footprint": [
     [
      81.56,
      36.13
     ],
     [
      87.77,
      36.18
     ],
     [
      87.76,
      37.46
     ],
     [
      95.83,
      37.53
     ],
     [
      95.85,
      35.88
     ],
     [
      104.23,
      35.95
     ],
     [
      104.3,
      27.42
     ],
     [
      107.86,
      27.44
     ],
     [
      107.97,
      14.42
     ],
     [
      104.78,
      14.4
     ],
     [
      104.86,
      4.03
     ],
     [
      84.05,
      3.85
     ],
     [
      83.95,
      16.27
     ],
     [
      80.6,
      16.23
     ],
     [
      80.54,
      22.92
     ],
     [
      78.57,
      22.91
     ],
     [
      78.54,
      26.44
     ],
     [
      81.64,
      26.46
     ]
    ],
    "accuracy": "APPROXIMATE",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy) (context only)"
   },
   {
    "id": "site.nb.brentlawn1",
    "name": "Neighbouring building: Brentlawn Towers I",
    "height": 50.4,
    "footprint": [
     [
      -89.82,
      48.93
     ],
     [
      -65.18,
      48.88
     ],
     [
      -65.24,
      21.36
     ],
     [
      -89.88,
      21.41
     ]
    ],
    "accuracy": "APPROXIMATE",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy) (context only)"
   },
   {
    "id": "site.nb.brentlawn2",
    "name": "Neighbouring building: Brentlawn Towers II",
    "height": 44.8,
    "footprint": [
     [
      -113.48,
      -4.37
     ],
     [
      -87.69,
      -4.65
     ],
     [
      -87.99,
      -31.98
     ],
     [
      -113.78,
      -31.7
     ]
    ],
    "accuracy": "APPROXIMATE",
    "source": "OpenStreetMap (traced from aerial imagery, ~1-3 m accuracy) (context only)"
   }
  ],
  "trees": [
   [
    44,
    30,
    3.5,
    0
   ],
   [
    44,
    40,
    3,
    0
   ],
   [
    36,
    52,
    3.5,
    2.9
   ],
   [
    24,
    50,
    3,
    2.9
   ],
   [
    10,
    52,
    3.5,
    2.9
   ],
   [
    -6,
    52,
    3,
    2.9
   ],
   [
    -20,
    50,
    3.5,
    2.9
   ],
   [
    -36,
    50,
    3,
    2.9
   ],
   [
    -40,
    -26,
    3.5,
    0
   ],
   [
    -30,
    -38,
    3,
    -3
   ],
   [
    -38,
    -42,
    3.5,
    -3
   ],
   [
    25,
    -40,
    3,
    0
   ],
   [
    44,
    -26,
    3,
    0
   ],
   [
    45,
    14,
    3.5,
    0
   ],
   [
    44,
    22,
    3,
    0
   ],
   [
    -24,
    -27,
    2.5,
    0
   ],
   [
    20,
    -30,
    2.5,
    0
   ],
   [
    18,
    40,
    2.5,
    2.9
   ]
  ]
 },
 "levelLabelAnchor": [
  -17.8,
  -18.8
 ]
};
