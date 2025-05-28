// src/data/courses.ts
export type Course = {
  slug: string
  title: string
  desc: string
  level: string
}

export const courses: Course[] = [
  {
    slug: 'class-10-12-cs-ip',
    title: 'Class 10–12 (CS & IP)',
    desc: 'CBSE & ICSE board Computer Science & Informatics Practices.',
    level: 'Beginner → Advanced',
  },
  {
    slug: 'bca-mca-btech-cse',
    title: 'BCA / MCA / B.Tech CSE',
    desc: 'University curriculum + practical labs in C, C++, Java.',
    level: 'Project-Based Learning',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    desc: 'Power BI, Tableau, SQL & NoSQL, real-world case studies.',
    level: 'Hands-On Workshops',
  },
  {
    slug: 'cybersecurity-vapt',
    title: 'Cybersecurity & VAPT',
    desc: 'Penetration testing, secure coding, compliance standards.',
    level: 'Live Labs & Demos',
  },
  {
    slug: 'ms-office-soft-skills',
    title: 'MS Office & Soft Skills',
    desc: 'Excel, Word, presentation skills & interview readiness.',
    level: 'Career-Focused Training',
  },
]
