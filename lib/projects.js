// filename: lib/projects.js
export const PROJECTS = [
  {
    slug: 'lucide-platform',
    number: '01',
    titleLine1: 'LUCIDE',
    titleLine2: 'PLATFORM',
    subtitle: "The agency's flagship product suite",
    type: 'Web Application · SaaS',
    year: '2024',
    tags: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'Vercel', 'Figma'],
    overview: [
      'Lucide Platform was born from a need for a unified digital infrastructure that could handle the diverse needs of modern agencies. We faced a fragmented landscape of tools that didn\'t talk to each other, creating friction in delivery.',
      'By building a custom SaaS solution, we bridged the gap between client management, project tracking, and high-performance deployment. It stands as a testament to our philosophy of translating complex vision into a singular, powerful form.'
    ],
    role: 'Full-stack lead, product design, system architecture, client delivery',
    challenge: [
      'The primary challenge was synchronizing real-time data across multiple distributed services without sacrificing the low-latency requirement of our client portal. We had to rethink our data flow from the ground up.',
      'Additionally, maintaining a premium editorial feel in a data-heavy application required a unique approach to layout and typography that didn\'t compromise on usability.'
    ],
    solution: [
      'We implemented a robust event-driven architecture using PostgreSQL and Prisma, ensuring data integrity while achieving the performance benchmarks. The UI was built on a custom grid system that prioritizes hierarchy and clarity.',
      'By leveraging Next.js 14\'s Server Components, we offloaded heavy processing to the server, resulting in a blistering fast initial load and a seamless, app-like experience for the end user.'
    ],
    outcome: [
      'The platform reduced project delivery friction by 40% and became the primary operating system for Lucide Tech. It has since been adopted by three associate agencies as their core infrastructure.',
      'The project won \'Best Utility Design\' in our internal review and continues to push the boundaries of what a custom agency tool can achieve.'
    ],
    stack: {
      Frontend: ['Next.js 14', 'React', 'TypeScript', 'CSS Modules'],
      Backend: ['Node.js', 'Prisma', 'PostgreSQL'],
      Database: ['PostgreSQL'],
      DevOps: ['Vercel', 'GitHub Actions']
    },
    next: 'arcane-analytics',
    nextTitle: 'ARCANE ANALYTICS'
  },
  {
    slug: 'arcane-analytics',
    number: '02',
    titleLine1: 'ARCANE',
    titleLine2: 'ANALYTICS',
    subtitle: 'Deep data visualization for modern explorers',
    type: 'Web Application · Data Viz',
    year: '2024',
    tags: ['D3.js', 'Next.js', 'WebGL', 'Tailwind'],
    overview: [
      'Arcane Analytics was commissioned to visualize high-dimensional data for research teams. The goal was to make complex insights accessible without losing the granularity required for scientific accuracy.',
      'We focused on a minimal interface that puts the data center stage, using custom WebGL shaders to render thousands of data points smoothly.'
    ],
    role: 'Frontend Architect, Data Visualization Designer',
    challenge: [
      'Rendering massive datasets in the browser while maintaining 60fps interaction speed was the primary technical hurdle.',
      'Creating a narrative flow that guides users through complex data sets required a deep understanding of user psychology and information architecture.'
    ],
    solution: [
      'We developed a custom rendering pipeline using OGL (a minimal WebGL library) to handle the data-heavy visuals.',
      'The application uses a "zoomable" interface inspired by maps, allowing users to move from a bird\'s-eye view to individual data points seamlessly.'
    ],
    outcome: [
      'Client research speed increased by 150%, and the platform was featured in several industry-leading data visualization galleries.',
      'The project demonstrated that data-heavy tools don\'t have to be visually cluttered; they can be as elegant as an editorial layout.'
    ],
    stack: {
      Frontend: ['React', 'D3.js', 'OGL (WebGL)'],
      Backend: ['Python', 'FastAPI'],
      Database: ['ClickHouse'],
      DevOps: ['Railway']
    },
    next: 'lucide-platform',
    nextTitle: 'LUCIDE PLATFORM'
  }
];
