export type Award = {
  title: string;
  recognition: string;
  project: string;
  category: string;
  organization: string;
  year: string;
  detail: string;
};

export const awards: Award[] = [
  {
    title: "Youth4Climate 2026 Awardee",
    recognition: "International Youth Climate Innovation Award",
    project: "Harvesting Resilience",
    category: "Food and Agriculture",
    organization: "Youth4Climate",
    year: "2026",
    detail: "Selected as a 2026 Youth4Climate awardee under the Food and Agriculture theme for Harvesting Resilience. The award provides financial and technical support to further develop the solution, strengthen climate resilience, and expand its potential impact on communities in Bangladesh.",
  },
];

export const person = {
  name: "Md. Robiul Hossain",
  shortName: "Robiul",
  email: "mdrobiulhossain125@gmail.com",
  phone: "+880 1816125030",
  location: "Jobra, Chattogram, Bangladesh",
  linkedin: "https://www.linkedin.com/in/mdrobiulhossain125",
  researchGate: "https://www.researchgate.net/profile/Md-Robiul-Hossain-3",
};

export type ExperienceItem = {
  period: string;
  title: string;
  affiliation: string;
  detail: string;
  paragraphs?: string[];
  publication?: { citation: string; description: string };
  closing?: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2025 – Jul 2026",
    title: "Research Assistant — Child Development & Education",
    affiliation: "Advisor: Md. Johirul Islam, Senior Research Associate, BIGD, BRAC University",
    detail: "Contributed to research on child development, education and family practices through field data collection, survey implementation, data cleaning, statistical analysis and academic research writing; contributed to the paper “Unintended Spillovers: School Bans, Home Punishment, and Child Emotional Development.”",
    paragraphs: [
      "Worked under the supervision of Md. Johirul Islam, Senior Research Associate, BRAC Institute of Governance and Development (BIGD), BRAC University, contributing to research on child development, education, and family practices.",
      "Key responsibilities included field data collection, survey implementation, data management, data cleaning, verification, statistical analysis, and academic research writing. Contributed to organizing and analyzing quantitative data and supporting the preparation of research outputs on children's educational experiences, emotional development, and family environments.",
    ],
    publication: {
      citation: "Islam, M. J., Iqra, A. N., & Hossain, M. R. (2026). “Unintended Spillovers: School Bans, Home Punishment, and Child Emotional Development.”",
      description: "The study examines the unintended effects of school-related restrictions on children's emotional development, with particular attention to emotional regulation, anxiety, depression, and parental disciplinary practices. Contributed to data-related activities, empirical analysis, interpretation of findings, and academic paper preparation.",
    },
    closing: "Also participated in a research conference related to the study, gaining experience in presenting and communicating empirical research findings to an academic audience.",
  },
  { period: "Feb – Jun 2026", title: "Research Assistant — Fisheries and the Blue Economy", affiliation: "Bay of Bengal region · Advisor: Dr. Shyam S. Salim", detail: "Collected and managed field data and conducted statistical analysis for research on fisheries management and sustainable blue economy development." },
  { period: "Jan – Sep 2024", title: "Research Assistant — Graduate Labour Market Study", affiliation: "Under Dr. Md. Alauddin Majumder, University of Chittagong", detail: "Surveyed and interviewed employed graduates and entrepreneurs, verified data and supported preliminary analysis of graduate labour market outcomes." },
];

export const underReview = [
  { title: "Perceived Labour Market Uncertainty and Career Anxiety in the Age of Artificial Intelligence: Evidence from University Students in Bangladesh", authors: "Hossain, M. R., & Chowdhury, R. S. (2026)", venue: "Under review at Discover Psychology" },
  { title: "Unintended Spillovers: School Bans, Home Punishment, and Child Emotional Development", authors: "Islam, M. J., Iqra, A. N., & Hossain, M. R. (2026)", venue: "Under review at Child Development" },
  { title: "Economic Shocks, Parental Cognitive Depletion, and Emotional Nudges: Behavioral Drivers of Harsh Child Disciplinary Practices in Bangladesh", authors: "Hossain, M. R. (2026)", venue: "Under review at Review of Economics of the Household" },
];

export const inPreparation = [
  { title: "Language Barriers and Educational Inequality among Rohingya Refugee and Host-Community Children in Bangladesh", authors: "Hossain, M. R. (2026)" },
  { title: "Nexus Between Economic Growth, Foreign Direct Investment and Financial Development in Bangladesh: A Time Series Analysis", authors: "Majumder, M. A., & Hossain, M. R. (2026)" },
  { title: "Determinants of Self-Employment among University Graduates in Bangladesh: Evidence from a Firth Logistic Regression Analysis", authors: "Majumder, M. A., & Hossain, M. R. (2026)" },
  { title: "Breaking the Cycle of Educational Disadvantage: Evidence from Underprivileged Children in Chattogram", authors: "Hossain, M. R. (2026)" },
  { title: "Parental Migration, Displacement and Children's Educational Aspirations among Rohingya Refugee Families", authors: "Hossain, M. R. (2026)" },
];

export type ConferenceItem = {
  status: string;
  statusMuted?: boolean;
  title: string;
  detail: string;
  citation: string;
};

export const conferenceContributions: ConferenceItem[] = [
  {
    status: "Accepted · 2026",
    title: "Perceived Labour Market Uncertainty and Career Anxiety in the Age of Artificial Intelligence: Evidence from University Students in Bangladesh",
    detail: "Paper accepted for presentation at the 2nd International Student Research Conference (ISRC) 2026, organized by the Dhaka University Research Society (DURS).",
    citation: "Hossain, M. R., & Chowdhury, R. S. Paper accepted at the 2nd International Student Research Conference (ISRC) 2026, organized by the Dhaka University Research Society (DURS).",
  },
  {
    status: "Presented · 2025",
    title: "Unintended Spillovers: School Bans, Home Punishment, and Child Emotional Development",
    detail: "Islam, M. J., Iqra, A. N., & Hossain, M. R. Presented online at the Fifth Annual International Conference: A New Global Order, Yet Again, Karachi, Pakistan, 14 November 2025.",
    citation: "“Unintended Spillovers: School Bans, Home Punishment, and Child Emotional Development.” Paper presented online at the Fifth Annual International Conference: A New Global Order, Yet Again, Karachi, 14 November 2025.",
  },
  {
    status: "Forthcoming · 2026",
    statusMuted: true,
    title: "Gender Heterogeneity in the Impact of Violent Discipline on Foundational Reading Skills",
    detail: "Abstract accepted for online presentation at the 4th International C.I.T.E.D Conference, Universitas Brawijaya, Indonesia, 27–28 October 2026. Forthcoming presentation.",
    citation: "“Gender Heterogeneity in the Impact of Violent Discipline on Foundational Reading Skills.” Abstract accepted for online presentation at the 4th International C.I.T.E.D Conference, Indonesia, 27–28 October 2026. Forthcoming presentation.",
  },
];

export const projects = [
  {
    year: "2024", name: "Harvesting Resilience",
    detail: "Floating agriculture addressing salinity, waterlogging, food security and coastal livelihoods.",
    paragraphs: ["On lands where waterlogging and salinity once limited agricultural opportunities, Harvesting Resilience introduces floating agriculture as a climate-adaptive solution. The project enables coastal farmers to grow food in challenging environments while strengthening household food security and livelihoods.", "More than an agricultural technique, floating farming represents innovation, resilience, and hope. By turning climate-affected land and water into productive spaces, the project helps communities adapt to a changing climate and build a more secure future."],
    url: "https://ecosentinelsbd.org/harvesting-resilience/",
    image: "/Harvesting_Resilience1.jpg",
    imageAlt: "A farmer tending crops on a floating agricultural bed.",
  },
  {
    year: "2026", name: "Little Earth Heroes",
    detail: "Children’s environmental education, tree planting and community sustainability activities.",
    paragraphs: ["Little Earth Heroes empowers children to become young leaders for a healthier and more sustainable planet. Through hands-on environmental education, creative activities, tree planting, and school-based sustainability initiatives, children learn that protecting nature can be both meaningful and inspiring.", "The project nurtures environmental awareness from an early age, helping children develop the knowledge, confidence, and sense of responsibility needed to become Climate Warriors in their communities. Every tree planted, lesson learned, and action taken becomes a step toward a greener future."],
    url: "https://ecosentinelsbd.org/little-earth-heroes/",
    image: "/Little Earth Heroes.jpg",
    imageAlt: "Children and volunteers planting a tree at a school.",
  },
  {
    year: "2025", name: "Project WISE",
    detail: "Women’s economic empowerment through sustainable entrepreneurship, renewable energy and climate action.",
    paragraphs: ["Project WISE empowers women to become leaders in green innovation, sustainable entrepreneurship, and community-based climate action. Through practical training, micro-entrepreneurship opportunities, renewable energy solutions, and skill development, the project helps women turn ideas into sustainable livelihoods.", "By strengthening women's economic participation and leadership, Project WISE creates benefits that extend beyond individual entrepreneurs—supporting families, communities, and the environment. It demonstrates how empowered women can drive inclusive, resilient, and sustainable development."],
    url: "https://ecosentinelsbd.org/project-wise/",
    image: "/Project WISE.jpg",
    imageAlt: "Women participating in a community discussion outdoors.",
  },
  {
    year: "2025", name: "Project Brine Away",
    detail: "A coastal water management concept combining natural desalination and solar filtration.",
    paragraphs: ["Brine Away addresses the growing challenges of saltwater intrusion and freshwater scarcity in coastal communities. By combining halophyte-based soil and water management with solar-powered filtration, the project transforms climate-related water challenges into opportunities for resilience and recovery.", "Access to safe water can reduce the burden on women who often travel long distances to collect water, help children stay healthy and engaged in school, and enable farmers to restore agricultural activities. Brine Away is more than a water solution—it is about helping communities regain health, stability, dignity, and control over their future."],
    url: "https://ecosentinelsbd.org/project-brine-away/",
    image: "/Project Brine Away.png",
    imageAlt: "Brine Away project banner featuring women carrying water in a coastal community.",
  },
  {
    year: "2025", name: "Plastic 4 Perks",
    detail: "A recycling concept using AI-driven gamification and blockchain-based rewards to reduce plastic waste.",
    paragraphs: ["Plastic 4 Perks transforms everyday plastic waste management into an engaging, rewarding, and technology-driven experience. Through an AI-powered interactive game and blockchain-based reward system, the project encourages people of all ages to learn about plastic pollution and take meaningful action.", "By rewarding responsible behavior, the project makes recycling more personal, visible, and engaging. Each returned bottle contributes to the circular economy while helping users understand the environmental impact of their choices—including waste, carbon emissions, and microplastic pollution.", "Plastic 4 Perks demonstrates how technology, education, and community participation can work together to turn responsible choices into lasting environmental habits."],
    url: "https://ecosentinelsbd.org/plastic-4-perks/",
    image: "/Plastic 4 Perks.jpg",
    imageAlt: "A field discussion with community members for Plastic 4 Perks.",
  },
];

export type LeadershipOrg = {
  name: string;
  period: string;
  roles: string[];
  description?: string;
  contributions?: string[];
  highlights?: string;
  url?: string;
  linkLabel?: string;
};

export const leadership: LeadershipOrg[] = [
  {
    name: "Chittagong University Research and Higher Study Society (CURHS)",
    period: "Feb 2022 – Sep 2026",
    roles: ["Vice President — Jan 2025 – Sep 2026", "Organising Secretary — Jan 2024 – Jan 2025", "General Member — Feb 2022"],
    description: "CURHS is a research and higher-study focused student organization at the University of Chittagong that promotes undergraduate research, academic development, research skills, and opportunities for higher education.",
    contributions: [
      "Led and coordinated student-focused research and higher-study initiatives.",
      "Supported the planning and execution of academic and research events.",
      "Coordinated volunteers, organizers, speakers, and participants.",
      "Contributed to research-oriented workshops, seminars, conferences, and student development programs.",
      "Worked to promote research culture and higher-study opportunities among university students.",
    ],
    url: "https://curhs.org/", linkLabel: "curhs.org",
  },
  {
    name: "Young Economists' Society (YES), University of Chittagong",
    period: "Jun 2022 – Oct 2026",
    roles: ["Organising Secretary — Mar 2025 – Mar 2026", "Joint Organizing Secretary — May 2024 – Feb 2025", "Executive Member — Feb 2022 – Apr 2024"],
    description: "YES is a student-led organization of the Department of Economics, University of Chittagong, dedicated to creating opportunities for students interested in economics, academic development, and professional growth.",
    contributions: [
      "Coordinated academic and student-development activities.",
      "Assisted in organizing economics-related seminars, events, and initiatives.",
      "Worked with executive members and volunteers in event planning and execution.",
      "Contributed to creating an engaging academic environment for Economics students.",
    ],
    url: "https://www.facebook.com/yes.eco.cu", linkLabel: "Facebook page",
  },
  {
    name: "Eco Sentinels Bangladesh",
    period: "Director of Content Strategy",
    roles: [],
    description: "Eco Sentinels is a youth-led environmental initiative dedicated to sustainable solutions, climate resilience, environmental conservation, and community empowerment. The organization focuses on turning innovative environmental ideas into practical, community-level action.",
    contributions: [
      "Contributed to the design and development of environmental and community-focused projects, transforming ideas into practical project concepts.",
      "Worked with the team to develop project implementation strategies, action plans, timelines, and execution frameworks.",
      "Participated in taking projects from the planning stage to real-world field implementation.",
      "Coordinated project activities and supported the execution of initiatives at the community level.",
      "Developed and managed content and communication strategies to effectively present project objectives, activities, and outcomes.",
      "Contributed to creating awareness and educational materials around environmental sustainability, climate resilience, and community empowerment.",
      "Worked collaboratively with team members to identify local challenges and develop practical, sustainable solutions.",
      "Gained hands-on experience in project design, planning, field execution, teamwork, communication, and community engagement.",
    ],
    highlights: "Project Design → Planning → Execution → Field Implementation → Community Impact",
    url: "https://ecosentinelsbd.org/", linkLabel: "ecosentinelsbd.org",
  },
  {
    name: "Nogorful",
    period: "Feb 2021 – May 2025",
    roles: ["Teacher — Teaching Underprivileged Children"],
    description: "Nogorful is a community-focused organization working to support underprivileged and street-connected children through education, nutrition, healthcare, and child protection.",
    contributions: [
      "Taught underprivileged children through community-based educational activities.",
      "Supported children with basic academic learning and educational guidance.",
      "Participated in community initiatives focused on children's development and well-being.",
      "Contributed time and effort toward creating accessible learning opportunities.",
    ],
    url: "https://nogorful.org/", linkLabel: "nogorful.org",
  },
  {
    name: "Chittagong University Cyclists",
    period: "Jan 2022 – Oct 2024",
    roles: ["Founding Human Resources Secretary"],
    contributions: [
      "Contributed to the development of the organization from its early stage.",
      "Supported member coordination and human-resource activities.",
      "Assisted in organizing cycling-related activities and community initiatives.",
      "Promoted cycling, teamwork, and an active student lifestyle.",
    ],
  },
  {
    name: "Chittagong University Toastmasters Club",
    period: "Jul 2023 – Jul 2024",
    roles: ["Member | International Toastmasters"],
    description: "Participated in a structured public-speaking and communication environment focused on developing confidence, leadership, presentation, and interpersonal communication skills. (Membership ID: PN-67614873)",
  },
];

export const leadershipEvents = [
  { role: "Branding Director", name: "1st TEDxChittagong University", year: "2024", detail: "Contributed to the branding and visual communication of the TEDxChittagong University event, supporting its public identity and promotional activities.", url: "https://www.facebook.com/profile.php?id=61558663688509", linkLabel: "Facebook page" },
  { role: "Student Organizer", name: "1st National Economics Fest, University of Chittagong", year: "2025", detail: "Supported the coordination and execution of the university's first national-level Economics Fest, working with organizers, participants, and event teams.", url: "https://www.facebook.com/share/p/1H91RyK5iK/", linkLabel: "Facebook post" },
  { role: "Event Coordinator", name: "Chattogram Research Festival", year: "2025", detail: "Contributed to event coordination for a research-focused festival bringing together students, researchers, and academic communities.", url: "https://researchfest.curhs.org/", linkLabel: "researchfest.curhs.org" },
  { role: "Officer of Event Management", name: "1st Jamal Nazrul Islam National Conference for Young Researchers", year: "2022", detail: "Supported event-management activities for the inaugural national conference for young researchers, organized in collaboration with the Jamal Nazrul Islam Research Centre and CURHS.", url: "https://jninc.curhs.org/", linkLabel: "jninc.curhs.org" },
  { role: "Project Coordinator", name: "CURHS Research Month", year: "2022", detail: "Coordinated activities during a research-focused initiative designed to encourage students to engage with research and academic development." },
  { role: "Team Leader", name: "CURHS Summer Research Internship Program", year: "2023", detail: "Led and coordinated a student team during CURHS's summer research internship initiative, supporting participants throughout the program." },
];

export const volunteering = [
  { name: "Flood Rescue & Relief", role: "Volunteer — Feni, Bangladesh", year: "2024", detail: "Participated in flood-response activities, including relief collection, coordination, and distribution support for affected communities in Feni." },
  { name: "COVID-19 Vaccination Program", role: "Volunteer — Bangladesh Red Crescent Society", year: "2019", detail: "Supported the Bangladesh Red Crescent Society's COVID-19 vaccination-related community activities." },
];

export const sports = {
  name: "Cricket",
  team: "Economics-56 Batch Cricket Team, Department of Economics, University of Chittagong",
  achievement: "3-Time Champions | 2022–2026",
  detail: "Active member of the Economics-56 Batch Cricket Team, contributing to a team that achieved championship titles across university-level batch competitions. Beyond competition, cricket has strengthened my teamwork, communication, discipline, and leadership skills.",
};

export const leadershipStatement = [
  "For me, leadership is not only about holding a position. It is about taking responsibility, working with people, creating opportunities for others, and turning ideas into meaningful action.",
  "My experiences across research organizations, academic societies, community initiatives, volunteering, and sports have helped me develop a practical understanding of teamwork, communication, coordination, and responsible leadership.",
];

export type Hobby = {
  name: string;
  paragraphs: string[];
  bullets?: string[];
  tagline?: string;
  closing?: string;
  url?: string;
  linkLabel?: string;
};

export const hobbiesIntro = [
  "Beyond academics, research, and leadership, I enjoy staying active, exploring new places, and connecting with people through sports and travel.",
  "These interests give me a balance between academic life and the world outside the classroom.",
];

export const hobbies: Hobby[] = [
  {
    name: "Cycling",
    paragraphs: [
      "Cycling is one of my favorite ways to stay active and explore my surroundings.",
      "My interest in cycling also led me to become involved with Chittagong University Cyclists, where I served as the Founding Human Resources Secretary.",
      "For me, cycling represents freedom, exploration, fitness, and community.",
    ],
  },
  {
    name: "Cricket",
    paragraphs: [
      "Cricket has been a major part of my university life.",
      "I have played for the Economics-56 Batch Cricket Team, Department of Economics, University of Chittagong, which became 3-time champions between 2022 and 2026.",
      "Cricket has taught me the importance of teamwork, discipline, communication, patience, and performing under pressure.",
    ],
  },
  {
    name: "Football",
    paragraphs: [
      "Football is another sport I enjoy playing in my free time.",
      "I enjoy the combination of teamwork, strategy, movement, and competition that makes football exciting.",
      "For me, sports are not only about winning—they are also about building friendships, staying active, and learning how to work effectively as part of a team.",
    ],
  },
  {
    name: "Hockey",
    paragraphs: [
      "Hockey is another sport that I enjoy playing.",
      "Its fast pace, coordination, and team-oriented nature make it an enjoyable way to stay active and challenge myself outside academic life.",
    ],
  },
  {
    name: "Travelling",
    paragraphs: [
      "Travelling is one of my strongest personal interests.",
      "I enjoy discovering new places, experiencing different environments, meeting people, trying local experiences, and documenting the journey.",
      "Travel gives me an opportunity to step outside familiar surroundings and see places from a different perspective.",
      "I am particularly interested in discovering lesser-known destinations, local stories, everyday life, and the beauty of Bangladesh.",
    ],
  },
  {
    name: "Next Stop Robi",
    paragraphs: [
      "My passion for travelling and documenting everyday experiences inspired me to create Next Stop Robi, my personal travel and lifestyle YouTube channel. Through the channel, I share:",
    ],
    bullets: [
      "Travel experiences",
      "New places and destinations",
      "Local discoveries",
      "Everyday life and experiences",
      "Underrated places",
      "Personal travel stories",
      "Exploring Bangladesh from my own perspective",
    ],
    tagline: "Travel · Explore · Experience · Share",
    closing: "If you enjoy discovering new places and seeing Bangladesh from a different perspective, follow my journey on YouTube.",
    url: "https://www.youtube.com/@Next_Stop_Robi", linkLabel: "Visit Next Stop Robi on YouTube",
  },
];

export const hobbiesClosing = [
  "Research and academics shape my intellectual journey, while sports, cycling, and travelling keep me connected to people, places, and experiences.",
  "I believe these experiences complement my academic life by helping me remain curious, active, adaptable, and open to new perspectives.",
];
