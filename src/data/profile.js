// All site content lives here. Edit this file to update the portfolio.
// Source: Nancy's resume (16 Aug 2026) and LinkedIn profile.

export const profile = {
  name: 'Nancy Sharma',
  title: 'Prof.',
  role: 'Division Chair: Verbal Ability & Professional Readiness',
  intro:
    "I'm a C1-proficient language trainer and academic leader with 7+ years of experience in language training, curriculum design and professional readiness. I help students build the verbal ability, confidence and communication skills that placements and the workplace demand. I've done this at Galgotias College of Engineering and Technology, Chandigarh University and five IELTS training institutes.",
  location: ['Greater Noida, Uttar Pradesh', 'Chandigarh, India'],
  images: {
    hero: '/assets/hero.jpg', // wide classroom / group photo
    profile: '/assets/nancy-profile.jpg', // square headshot
    about: '/assets/nancy-about.jpg', // portrait or teaching photo
  },
  cv: '/assets/Resume_nancy_sharma_16.8.26.pdf',
  cvFileName: 'Nancy-Sharma-Resume.pdf',
  links: {
    email: 'ns769648@gmail.com',
    phone: '+91-7696480152',
    phoneHref: 'tel:+917696480152',
    linkedin: 'https://www.linkedin.com/in/nancy-sharma-b5729318a/',
    whatsapp: 'https://wa.me/917696480152',
  },
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#programs', label: 'Programs' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact Me' },
]

export const stats = [
  { value: 7, suffix: '+', label: 'Years of experience' },
  { value: 7, suffix: '', label: 'Institutions & academies' },
  { value: 27, suffix: '', label: 'Trainers led & mentored' },
  { value: 12, suffix: '+', label: 'Teaching hours / week' },
]

export const openTo = [
  { label: 'Open to work', value: 'India · On-site · Hybrid · Remote' },
  { label: 'Volunteers for', value: 'Child Welfare · Education · Children' },
]

export const competencies = [
  {
    icon: 'Languages',
    title: 'Language & Instruction',
    items: [
      'C1 Level Proficiency',
      'Active Learning Methodologies',
      'IELTS Band Score Optimization',
      'Spoken English & Soft Skills Training',
    ],
  },
  {
    icon: 'Users',
    title: 'Academic Leadership & Management',
    items: ['Team Leadership', 'Faculty Mentorship', 'Academic Coordination', 'Train-the-Trainer Programs'],
  },
  {
    icon: 'ClipboardCheck',
    title: 'Curriculum & Quality',
    items: [
      'Curriculum Design',
      'Assessment Frameworks',
      'Content Validation',
      'Academic Auditing',
      'LMS Implementation & Tracking',
    ],
  },
]

export const expertise = [
  {
    icon: 'BookOpen',
    word: 'Verbal Ability',
    tone: 'blue',
    title: 'Verbal Ability & Placement Preparation',
    meta: 'Grammar · Reading Comprehension · Vocabulary · Verbal Reasoning',
    text: 'Placement-oriented verbal ability training, backed by company-specific test-prep modules, mock assessments, GD simulations and verbal aptitude drills. Every student gets personalised performance analytics and constructive feedback.',
    subject: 'Verbal Ability Training',
  },
  {
    icon: 'MessagesSquare',
    word: 'Communication',
    tone: 'coral',
    title: 'Business Communication & Professional Readiness',
    meta: 'Advanced Communication · Interview Preparation · Critical Reading · Soft Skills',
    text: 'Advanced communication, business communication, interview preparation and critical reading modules, plus personality development covering presentations, critical thinking and leadership. Delivered as placement-readiness workshops, online and offline, for large student cohorts.',
    subject: 'Professional Readiness Training',
  },
  {
    icon: 'Globe',
    word: 'IELTS',
    tone: 'navy',
    title: 'IELTS & English Language Proficiency',
    meta: 'All four modules · Band-score strategy · Speaking & Writing evaluation',
    text: 'Since 2019 I have coached IELTS candidates through masterclasses and one-on-one sessions, with customised strategy plans for target band scores. I specialise in advanced learners aiming high and in spoken English coaching for students from vernacular-medium backgrounds.',
    subject: 'IELTS / English Coaching',
  },
  {
    icon: 'Users',
    word: 'Leadership',
    tone: 'teal',
    title: 'Curriculum Design & Academic Quality',
    meta: 'Train-the-Trainer · Quality Assurance · LMS · NAAC Documentation',
    text: 'Curriculum planning, assessment frameworks and content validation for academic rigour. I mentor faculty, run Train-the-Trainer programmes, lead peer quality audits and promote LMS integration for assessment tracking and data-based review.',
    subject: 'Curriculum / Academic Quality Consulting',
  },
]

// Higher-education roles, grouped by institution (rendered as two timeline columns).
export const experience = [
  {
    org: 'Galgotias College of Engineering & Technology',
    period: 'Sep 2024 – Present · Greater Noida',
    roles: [
      {
        date: 'Jun 2026 – Present',
        role: 'Division Chair: Verbal Ability & Professional Readiness',
        points: [
          'Oversees curriculum planning, programme development and academic quality across all communication and employability courses.',
          'Mentors faculty, allocates academic responsibilities, evaluates teaching effectiveness and fosters continuous professional development.',
          'Teaches 12+ hours a week: advanced communication, interview preparation, critical reading, business communication and placement readiness.',
        ],
      },
      {
        date: 'Oct 2025 – Present',
        role: 'Team Lead, English',
        points: [
          'Designs curriculum frameworks and structured assessment models aligned with industry benchmarks.',
          'Recognised at the Aptiquest & GD Conclave felicitation.',
        ],
      },
      {
        date: 'Aug 2025 – Jun 2026',
        role: 'Lead, Quality Assurance',
        points: [
          'Led content validation to ensure academic rigour and alignment with placement requirements.',
          'Organised Train-the-Trainer programmes, promoted LMS integration and ran placement-readiness workshops for large cohorts.',
        ],
      },
      {
        date: 'Sep 2024 – Jul 2025',
        role: 'English Trainer',
        points: [
          'Delivered verbal ability training in Grammar, RC, Vocabulary and Verbal Reasoning.',
          'Designed company-specific test-prep modules, mock assessments, GD simulations and verbal aptitude drills, and took part in peer quality audits.',
        ],
      },
    ],
  },
  {
    org: 'Chandigarh University',
    period: 'Nov 2023 – Sep 2024 · Gharuan',
    roles: [
      {
        date: 'May 2024 – Sep 2024',
        role: 'Master Subject Co-ordinator, Department of Career Planning & Development',
        points: [
          'Managed and mentored a team of 15 trainers to ensure consistent, high-quality instruction.',
          'Standardised content delivery, curriculum structures and assessment frameworks.',
          'Conducted Train-the-Trainer sessions and set up structured evaluation mechanisms.',
        ],
      },
      {
        date: 'Nov 2023 – May 2024',
        role: 'English Language & Personality Development Trainer',
        points: [
          'Taught English proficiency and core soft skills: presentation, critical thinking and leadership.',
          'Contributed to departmental content development and NAAC documentation and reporting.',
        ],
      },
    ],
  },
]

// IELTS & language-training roles (rendered as a compact card grid).
export const earlyCareer = [
  {
    org: 'Leap Scholar',
    role: 'IELTS Trainer (Part-time, Remote)',
    date: 'Jun 2023 – May 2024',
    text: 'One-on-one IELTS sessions targeting individual learning gaps, with customised strategy plans for target band scores.',
  },
  {
    org: 'Fluent English Academy',
    role: 'Senior IELTS Trainer',
    date: 'Apr 2023 – Oct 2023',
    text: 'Ran masterclasses across all IELTS modules and specialised in advanced learners aiming for higher band scores.',
  },
  {
    org: 'Sunrise Immigration',
    role: 'Language Trainer',
    date: 'Jul 2022 – Apr 2023',
    text: 'Evaluated Speaking and Writing modules and wrote standard sample responses for learner benchmark analysis.',
  },
  {
    org: "Vir's Edu Experts",
    role: 'Senior IELTS Trainer',
    date: 'Jul 2021 – Dec 2021',
    text: 'Led a team of 12 language trainers and ran diagnostic and mock tests with actionable feedback.',
  },
  {
    org: 'The English Café',
    role: 'IELTS Trainer',
    date: 'Jul 2019 – May 2021',
    text: 'Taught all IELTS modules, evaluated Speaking and Writing, and coached spoken English for vernacular-medium learners.',
  },
]

export const education = [
  {
    degree: 'M.A. in English',
    school: 'Indira Gandhi National Open University',
    date: 'Jul 2025 – Present',
  },
  {
    degree: 'M.A. in Economics',
    school: 'Panjab University, Chandigarh',
    date: 'Jul 2019 – May 2021',
  },
  {
    degree: 'B.Com.',
    school: 'Panjab University, Chandigarh',
    date: 'Jul 2016 – Jun 2019',
  },
]

export const programs = [
  {
    word: 'RESUME',
    tone: 'paper',
    title: 'Resume Building Workshop',
    meta: 'Hands-on · Placement season',
    text: 'Students turn their experience into concise, achievement-driven resumes that recruiters actually read.',
  },
  {
    word: 'GD',
    tone: 'board',
    title: 'Aptiquest & GD Conclave',
    meta: 'Aptitude contest · Group discussion',
    text: 'A competitive aptitude and group-discussion event that builds reasoning, articulation and confidence under pressure.',
  },
  {
    word: 'TTT',
    tone: 'chalk',
    title: 'Train-the-Trainer (TTT)',
    meta: 'Faculty development · Assessment design',
    text: 'Equips trainers with standardised delivery methods, evaluation frameworks and feedback techniques so every classroom stays consistent.',
  },
  {
    word: 'HIRED',
    tone: 'sky',
    title: 'Placement-Readiness Workshop',
    meta: 'Online & offline · Large cohorts',
    text: 'Interview preparation, business communication and verbal aptitude drills that get final-year students ready for recruitment drives.',
  },
  {
    word: 'BAND 8',
    tone: 'ink',
    title: 'IELTS Masterclass',
    meta: 'All four modules · Advanced learners',
    text: 'Intensive strategy sessions on Listening, Reading, Writing and Speaking, with sample responses and band-score benchmarking.',
  },
  {
    word: 'SPEAK',
    tone: 'coral',
    title: 'Spoken English Bootcamp',
    meta: 'Fluency · Vernacular-medium learners',
    text: 'Structured, low-pressure speaking practice that builds fluency and confidence for students who studied in a regional-language medium.',
  },
]

// Gallery slider, in display order. Images live in src/assets/gallery/;
// to add one, drop it in that folder and add an entry here with its file name.
export const gallery = [
  {
    file: 'gcet-resume-workshop.jpg',
    tag: 'Workshop',
    title: 'Resume Building Workshop',
    text: 'Showing students how to present projects and case studies so recruiters see the impact.',
    place: 'GCET, Greater Noida',
  },
  {
    file: 'auditorium-session.jpg',
    tag: 'Event',
    title: 'A full house in the auditorium',
    text: 'An interactive session with a large student cohort, with trainers and colleagues on stage.',
  },
  {
    file: 'gcet-workshop-cohort.jpg',
    tag: 'Workshop',
    title: 'With the workshop cohort',
    text: 'Students and faculty together at the close of a training session.',
    place: 'GCET, Greater Noida',
  },
  {
    file: 'cu-dcpd-batch-1.jpg',
    tag: 'Professional readiness',
    title: 'Batch in business formals',
    text: 'Professional readiness training, with students dressed for the interviews ahead.',
    place: 'Chandigarh University',
  },
  {
    file: 'classroom-session.jpg',
    tag: 'Classroom',
    title: 'After a classroom session',
    text: 'A communication skills class that ended, as the best ones do, with a group photo.',
  },
  {
    file: 'cu-dcpd-batch-2.jpg',
    tag: 'Professional readiness',
    title: 'Placement-ready and proud',
    text: 'Another professional readiness batch at the end of their training.',
    place: 'Chandigarh University',
  },
  {
    file: 'formal-group.jpg',
    tag: 'Professional readiness',
    title: 'Students and trainers together',
    text: 'Students and trainers in formal attire after a professional readiness session.',
  },
  {
    file: 'cu-dcpd-batch-3.jpg',
    tag: 'Professional readiness',
    title: 'One more confident cohort',
    text: 'Verbal ability and soft skills training for a placement-bound batch.',
    place: 'Chandigarh University',
  },
  {
    file: 'small-group-batch.jpg',
    tag: 'Training',
    title: 'Small-group training batch',
    text: 'Small groups mean more speaking time, more feedback and faster progress for every learner.',
  },
]

export const services =['Training', 'Writing', 'User Experience Writing', 'Editing']
