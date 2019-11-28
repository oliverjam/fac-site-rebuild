export interface HomeData {
  title: string;
  video: string;
  intro: Intro;
  coop: Coop;
  testimonials: TestimonialsEntity[];
}

interface Intro {
  title: string;
  body: string;
}

interface Coop {
  title: string;
  logos: string[];
}

interface TestimonialsEntity {
  name: string;
  cohort: string;
  quote: string;
  image: string;
}
