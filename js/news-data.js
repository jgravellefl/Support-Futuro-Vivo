/* ============================================
   NEWS DATA — add one object per post, order doesn't
   matter (news.js sorts by date), but keeping newest
   first here makes the file easier to scan.

   PHOTO SIZE REMINDER: this site has no build step or
   image pipeline. Compress/resize photos to roughly
   1600px on the long edge and under ~400KB each (e.g.
   via Squoosh.app or Preview's export) BEFORE committing.
   Some existing /photos files are several MB — don't add
   more like that.
   ============================================ */

const NEWS_POSTS = [
  {
    id: "welcome-back-new-year",
    title: "Welcome Back: A New School Year Begins",
    date: "2026-01-12",
    excerpt: "Students returned to Futuro Vivo School this month for another year of learning, meals, and care made possible by our donors.",
    body: [
      "Futuro Vivo School welcomed students back for a new school year, filling the halls and courtyard with the energy that makes this community so special.",
      "Thanks to the generosity of our supporters, every child returns to a place where they receive not just an education, but daily meals, medical care, and a safe environment to grow.",
      "We're excited for the milestones ahead this year and look forward to sharing updates right here as the year unfolds."
    ],
    cover: "photos/students/students_1.JPG",
    gallery: [
      { src: "photos/students/students_1.JPG", alt: "Students gathered at Futuro Vivo School" },
      { src: "photos/students/students_2.JPG", alt: "Students in the courtyard at Futuro Vivo School" },
      { src: "photos/campus/courtyard.JPG", alt: "The school courtyard at Futuro Vivo" }
    ]
  },
  {
    id: "transportation-keeps-kids-moving",
    title: "Keeping Kids Moving: Our Transportation Program",
    date: "2025-11-03",
    excerpt: "For many students, a safe ride to school is the difference between attending class and staying home. Here's how our transportation program helps.",
    body: [
      "Every day, hundreds of students rely on Futuro Vivo's transportation program to get to and from school safely.",
      "For families in more remote areas of Guerra, reliable transportation removes one of the biggest barriers to consistent attendance — and consistent attendance is one of the biggest predictors of long-term success.",
      "Your continued support keeps these buses running and these kids in their seats, ready to learn."
    ],
    cover: "photos/transportation/bus_outside.jpg",
    gallery: [
      { src: "photos/transportation/bus_outside.jpg", alt: "School bus outside Futuro Vivo School" },
      { src: "photos/transportation/bus_inside.jpg", alt: "Students riding the school bus" },
      { src: "photos/transportation/bus_pose.jpg", alt: "Students posing by the school bus" }
    ]
  }
];
