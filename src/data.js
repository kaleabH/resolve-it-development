//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/goodm.png';
import Project2 from './assets/img/projects/logo.png';
// import Project3 from './assets/img/projects/p3.webp';
// import Project4 from './assets/img/projects/p4.webp';
// import Project5 from './assets/img/projects/p5.webp';
// import Project6 from './assets/img/projects/p6.webp';
import project7 from './assets/img/projects/ebc.jpg'
import project8 from './assets/img/projects/db2.png'
import project9 from './assets/img/projects/nearbyg2.jpg'
import project10 from './assets/img/projects/ayin.png'
import Project11 from './assets/img/projects/ebc_contact_admin.jpeg'
import Project12 from './assets/img/projects/Home.png'

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

//owners image

import OwnerImg1 from './assets/img/owners/davi.jpg'
import OwnerImg2 from './assets/img/owners/kal.jpeg'
import OwnerImg3 from './assets/img/owners/dev.jpg'

// testimonial images

import TestiImage4 from './assets/img/testimonials/gatcot.jpg'
import TestiImage5 from './assets/img/testimonials/joseph.jpg'
import TestiImage6 from './assets/img/testimonials/selamawit.jpg'

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: project9,
    name: 'Nearby Garage',
    category: 'UI/UX design',
    description:"a ui/ux design for a mobile app called nearby garage"
  },
  {
    id: '6',
    image: Project1,
    name: 'Good Mining',
    category: 'Web Development',
    description:"a website for a minning company",
    link:"https://goodmining.epizy.com/",
    

  },
 
  {
     id: 4, 
     image: project10,
     name: ' website',
     category: 'web development',
     description:"a wordpress website for NGO organization called AYI(active youth initiative)",
     link: "https://activeyouthinitiative.com/",
  },
  {
    id: '5',
    image: Project2,
    name: 'Think IT',
    category: 'Branding',
    description:"Logo and business card for it company"

  },
  {
    id: '6',
    image: Project11,
    name: 'ebc contact admin',
    category: 'desktop apps',
    description:"the desktop application for the mobile contact admin"

  },
  {
    id: '7',
    image: Project12,
    name: 'ECFC app',
    category: 'Mobile Apps',
    description:"he ecfc app is a mobile application for both IOS  and android .the app is utilized mainly by Ethiopia coffee football cub fans club members . however the application can also be used by any one that just wants to get new and match informations about the club."

  },

  {
    id: '3',
    image: project8,
    name: 'Admin Dashboard',
    category: 'web development',
    description:"a dashboard for a company used for CRUD operation"

  },
  {
    id: '2',
    image: project7,
    name: 'Contact Directory',
    category: 'Mobile Apps',
    description:"a mobile app used to access contact directories for company"

  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'desktop apps',
  },
  {
    name: 'Mobile Apps',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];
//Owners
export const owners = [
  // {
  //   image:OwnerImg1,
  //   description:"Design and Branding Manager",
  //   name:"Yared Bedane"
  // },
  {
    image:OwnerImg2,
    description:"CEO Senior Developer",
    name:"Kaleab Hailu"

  },{
    image:OwnerImg3,
    description:"Team Leader Senior Developer",
    name:"Dawit Lemma"

  }

]
// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Our designs are tailored to meet your unique needs and objectives, ensuring a website that stands out from the competition.',
  },
  {
    icon: <FiSettings />,
    name: 'Web & Mobile App Development',
    description:
      'Our web development service provides custom, dynamic, and scalable web and mobile applications that meet your business needs and requirements. We utilize the latest web development technologies and frameworks.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'We provide strategic brand development, logo design,BUsiness card, brand messaging, and brand guidelines that ensure consistency across all marketing channels..',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Our SEO service helps improve your websites visibility and ranking on search engines like Google, Bing, and Yahoo.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage4,
    authorText:
      'I really appreciate the overall design aesthetic - its modern, clean, and visually engaging. I particularly love the use of color throughout the website - it really adds a sense of vibrancy and personality.',
    authorName: 'Koat Diw Gach',
    authorPosition: 'CEO, COO, Good Mining Service',
  },
  {
    authorImg: TestiImage5,
    authorText:
      ' you have done an excellent job - the website is fast, responsive, and functions seamlessly. I particularly appreciate the smooth scrolling and the way the website adapts to different devices.',
    authorName: 'Joseph',
    authorPosition: 'Team Leader, AYI ',
  },
  {
    authorImg: TestiImage6,
    authorText:
      'I absolutely love the new branding - it is professional, eye-catching, and really captures the essence of my business.',
    authorName: 'Selamawit Kassa',
    authorPosition: 'Head of Design, Ethio Suvenior Shop',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'We are here to help you.',
    description: 'Email us at thinkitsolutions4@gmail.com',
    phone: '+251-923318738',
    phone2: '+251-966794615',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Addis Ababa, Ethiopia',
    description: 'Serving clients worldwide',
  },
];
