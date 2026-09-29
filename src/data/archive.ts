export type ArchiveItem = {
  name: string;
  stack: string;
  year: number | null;
  /** null for private repositories — a link would 404 for visitors. */
  url: string | null;
};

export type ArchiveGroup = {
  title: string;
  note: string;
  items: ArchiveItem[];
};

// Generated from the repositories themselves: stack detected from build files,
// year from the latest commit, link omitted where the repository is private.
// Ridelink repositories are deliberately excluded.
export const archive: ArchiveGroup[] = [
  {
    "title": "Bluepost",
    "note": "A publishing and web platform carried across twelve repositories and five years — web system, storefront, mobile client, and its own database and email services.",
    "items": [
      {
        "name": "Bluepost",
        "stack": "Node",
        "year": 2026,
        "url": null
      },
      {
        "name": "Bluepost 3.0",
        "stack": "Next.js",
        "year": 2023,
        "url": null
      },
      {
        "name": "Bluepost 4.0",
        "stack": "Next.js",
        "year": 2023,
        "url": null
      },
      {
        "name": "Bluepost AI",
        "stack": "—",
        "year": 2023,
        "url": null
      },
      {
        "name": "Bluepost Database API",
        "stack": "—",
        "year": 2023,
        "url": null
      },
      {
        "name": "Bluepost Email API",
        "stack": "HTML",
        "year": 2023,
        "url": null
      },
      {
        "name": "Bluepost v2",
        "stack": "Next.js",
        "year": 2023,
        "url": null
      },
      {
        "name": "Bluepost v3",
        "stack": "Next.js",
        "year": 2023,
        "url": null
      },
      {
        "name": "Bluepost Mobile",
        "stack": "Flutter",
        "year": 2022,
        "url": null
      },
      {
        "name": "Bluepost Server",
        "stack": "Node",
        "year": 2022,
        "url": null
      },
      {
        "name": "Bluepost Web App",
        "stack": "Firebase",
        "year": 2022,
        "url": null
      },
      {
        "name": "Bluepost 2.0",
        "stack": "—",
        "year": null,
        "url": null
      }
    ]
  },
  {
    "title": "Health & regulatory",
    "note": "Drug verification, pharmacovigilance and regulatory tooling — the longest-running thread here, starting in 2017.",
    "items": [
      {
        "name": "Danapa AI",
        "stack": "Firebase",
        "year": 2024,
        "url": null
      },
      {
        "name": "Regulate API",
        "stack": "Firebase",
        "year": 2024,
        "url": null
      },
      {
        "name": "PVMS",
        "stack": "Firebase",
        "year": 2023,
        "url": null
      },
      {
        "name": "Feyti Search Engine",
        "stack": "PHP",
        "year": 2021,
        "url": null
      },
      {
        "name": "Mfeyti Datasource",
        "stack": "Firebase",
        "year": 2021,
        "url": null
      },
      {
        "name": "Mfeyti Search",
        "stack": "Android",
        "year": 2021,
        "url": null
      },
      {
        "name": "SilkHealth",
        "stack": "Firebase",
        "year": 2021,
        "url": null
      },
      {
        "name": "Mfeyti",
        "stack": "—",
        "year": 2019,
        "url": null
      },
      {
        "name": "Mfeyti App",
        "stack": "Android",
        "year": 2019,
        "url": null
      }
    ]
  },
  {
    "title": "AGYW field data",
    "note": "An Android suite for field data collection — attendance, receipts and related modules.",
    "items": [
      {
        "name": "AGYW",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "AGYW 4",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "AGYW App",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "AGYW Attendance",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "AGYW Receipts",
        "stack": "Android",
        "year": 2020,
        "url": null
      }
    ]
  },
  {
    "title": "Rainbow (Amonsoft)",
    "note": "A card and SMS product line built at Amonsoft in 2016–17, released under Apache 2.0.",
    "items": [
      {
        "name": "Payrainbow",
        "stack": "—",
        "year": 2017,
        "url": "https://github.com/amonxnye/payrainbow"
      },
      {
        "name": "RainbowApp",
        "stack": "Android",
        "year": 2017,
        "url": "https://github.com/amonxnye/RainbowApp"
      },
      {
        "name": "RainbowApp 3",
        "stack": "Android",
        "year": 2017,
        "url": "https://github.com/amonxnye/RainbowApp_3"
      },
      {
        "name": "RainbowApp Reg",
        "stack": "Android",
        "year": 2017,
        "url": "https://github.com/amonxnye/RainbowApp_reg"
      },
      {
        "name": "RainbowAppv2",
        "stack": "Android",
        "year": 2017,
        "url": "https://github.com/amonxnye/RainbowAppv2"
      },
      {
        "name": "Wiki Rainbow",
        "stack": "—",
        "year": 2017,
        "url": "https://github.com/amonxnye/wiki_rainbow"
      },
      {
        "name": "RainbowCard",
        "stack": "Android",
        "year": 2016,
        "url": "https://github.com/amonxnye/RainbowCard"
      },
      {
        "name": "RainbowCard2",
        "stack": "—",
        "year": 2016,
        "url": "https://github.com/amonxnye/RainbowCard2"
      },
      {
        "name": "RainbowSms",
        "stack": "Android",
        "year": 2016,
        "url": "https://github.com/amonxnye/RainbowSms"
      },
      {
        "name": "RainbowApp Blue",
        "stack": "—",
        "year": null,
        "url": "https://github.com/amonxnye/RainbowApp_Blue"
      }
    ]
  },
  {
    "title": "Hospitality",
    "note": "Hotel and lodging systems — web, Flutter and static builds.",
    "items": [
      {
        "name": "Koki Hotel",
        "stack": "Firebase",
        "year": 2023,
        "url": null
      },
      {
        "name": "Koki Hotel App",
        "stack": "Flutter",
        "year": 2022,
        "url": null
      },
      {
        "name": "Koki Hotel Mobile",
        "stack": "HTML",
        "year": 2022,
        "url": null
      },
      {
        "name": "Hostel",
        "stack": "PHP",
        "year": 2020,
        "url": null
      },
      {
        "name": "Kooki",
        "stack": "HTML",
        "year": 2020,
        "url": null
      }
    ]
  },
  {
    "title": "Finance",
    "note": "Banking, payments and wagering systems.",
    "items": [
      {
        "name": "Betting Platform",
        "stack": "Firebase",
        "year": 2022,
        "url": null
      },
      {
        "name": "Acabank",
        "stack": "Android",
        "year": 2021,
        "url": null
      },
      {
        "name": "EFBank Open",
        "stack": "PHP",
        "year": 2020,
        "url": null
      },
      {
        "name": "EFL",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "FlaviaMats",
        "stack": "PHP",
        "year": 2020,
        "url": null
      }
    ]
  },
  {
    "title": "Mobility & delivery",
    "note": "Ride-hailing and food delivery apps predating the current logistics work.",
    "items": [
      {
        "name": "MbraFood",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "MugiX",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "Taxi Mbra",
        "stack": "Android",
        "year": 2018,
        "url": "https://github.com/amonxnye/taxi_mbra"
      },
      {
        "name": "Taxi Mbra Driver",
        "stack": "Android",
        "year": 2018,
        "url": "https://github.com/amonxnye/taxi_mbra_driver"
      }
    ]
  },
  {
    "title": "Games",
    "note": "Side projects, mostly Android, built for fun.",
    "items": [
      {
        "name": "Smack Pirates",
        "stack": "Firebase",
        "year": 2023,
        "url": null
      },
      {
        "name": "Fortune Game",
        "stack": "—",
        "year": 2019,
        "url": "https://github.com/amonxnye/fortune-game-android"
      },
      {
        "name": "Jeffreyx",
        "stack": "Android",
        "year": 2019,
        "url": null
      },
      {
        "name": "Lis",
        "stack": "Android",
        "year": 2019,
        "url": null
      },
      {
        "name": "Zlix",
        "stack": "Android",
        "year": 2017,
        "url": "https://github.com/amonxnye/Zlix"
      }
    ]
  },
  {
    "title": "Early experiments",
    "note": "Tutorials, samples and scratch repositories kept for the record.",
    "items": [
      {
        "name": "Internproject",
        "stack": "Android",
        "year": 2021,
        "url": "https://github.com/amonxnye/Internproject"
      },
      {
        "name": "Docs",
        "stack": "Node",
        "year": 2017,
        "url": "https://github.com/amonxnye/docs"
      },
      {
        "name": "SignInSample",
        "stack": "—",
        "year": 2017,
        "url": "https://github.com/amonxnye/SignInSample"
      },
      {
        "name": "Testgithubapp",
        "stack": "—",
        "year": 2017,
        "url": "https://github.com/amonxnye/testgithubapp"
      },
      {
        "name": "Demo App",
        "stack": "—",
        "year": 2015,
        "url": "https://github.com/amonxnye/demo_app"
      },
      {
        "name": "People",
        "stack": "—",
        "year": 2015,
        "url": "https://github.com/amonxnye/people"
      },
      {
        "name": "Polymeramonsoft",
        "stack": "—",
        "year": 2015,
        "url": "https://github.com/amonxnye/polymeramonsoft"
      },
      {
        "name": "Sample App",
        "stack": "—",
        "year": 2015,
        "url": "https://github.com/amonxnye/sample_app"
      },
      {
        "name": "First App",
        "stack": "—",
        "year": null,
        "url": "https://github.com/amonxnye/first_app"
      }
    ]
  },
  {
    "title": "Other work",
    "note": "Client sites, internal tools and one-off builds.",
    "items": [
      {
        "name": "Event Managers",
        "stack": "Swift",
        "year": 2025,
        "url": null
      },
      {
        "name": "Ripa Platform",
        "stack": "Next.js",
        "year": 2025,
        "url": null
      },
      {
        "name": "Homeapp",
        "stack": "Swift",
        "year": 2024,
        "url": null
      },
      {
        "name": "Abelapp",
        "stack": "HTML",
        "year": 2022,
        "url": null
      },
      {
        "name": "Ayambe",
        "stack": "HTML",
        "year": 2022,
        "url": null
      },
      {
        "name": "Popup",
        "stack": "Flutter",
        "year": 2022,
        "url": null
      },
      {
        "name": "SilkGroup",
        "stack": "Firebase",
        "year": 2022,
        "url": null
      },
      {
        "name": "Sone",
        "stack": "Flutter",
        "year": 2022,
        "url": null
      },
      {
        "name": "Progress",
        "stack": "Android",
        "year": 2021,
        "url": null
      },
      {
        "name": "Ranssie",
        "stack": "Firebase",
        "year": 2021,
        "url": null
      },
      {
        "name": "Kalex",
        "stack": "—",
        "year": 2020,
        "url": null
      },
      {
        "name": "Klasco",
        "stack": "PHP",
        "year": 2020,
        "url": null
      },
      {
        "name": "Simon Website",
        "stack": "PHP",
        "year": 2020,
        "url": null
      },
      {
        "name": "Stroy",
        "stack": "Android",
        "year": 2020,
        "url": null
      },
      {
        "name": "Loan Managment System",
        "stack": "—",
        "year": 2016,
        "url": "https://github.com/amonxnye/Loan-Managment-System"
      },
      {
        "name": "Amonsoft Official",
        "stack": "—",
        "year": 2015,
        "url": "https://github.com/amonxnye/Amonsoft_Official"
      },
      {
        "name": "Andriod NavigationDrawer ViewPager Actionbar",
        "stack": "—",
        "year": 2013,
        "url": "https://github.com/amonxnye/Andriod-NavigationDrawer-ViewPager-Actionbar"
      },
      {
        "name": "Amonosftprojects.Github.Io",
        "stack": "—",
        "year": null,
        "url": "https://github.com/amonxnye/amonosftprojects.github.io"
      }
    ]
  }
];
