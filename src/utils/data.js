// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';
  

  import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
  } from "react-icons/si";
  
  import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket
  } from 'react-icons/rx'
import images from './images';




  // nav data
  export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    {
      name: 'testimonials',
      path: '/testimonials',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: 'contact',
      path: '/contact',
      icon: <HiEnvelope />,
    },
  ];


  // testimonial data
const testimonialData = [
  {
    image: images.T_Avatar1,
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: images.T_Avatar2,
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: images.T_Avatar3,
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];


// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: images.Thumb1,
        },
        {
          title: 'title',
          path: images.Thumb2,
        },
        {
          title: 'title',
          path: images.Thumb3,
        },
        {
          title: 'title',
          path: images.Thumb4,
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: images.Thumb4,
        },
        {
          title: 'title',
          path: images.Thumb3,
        },
        {
          title: 'title',
          path: images.Thumb2,
        },
        {
          title: 'title',
          path: images.Thumb1,
        },
      ],
    },
  ],
};




//  data
const aboutData = [
{
  title: 'skills',
  info: [
    {
      title: 'Web Development',
      icons: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaReact />,
        <SiNextdotjs />,
        <SiFramer />,
        <FaWordpress />,
      ],
    },
    {
      title: 'UI/UX Design',
      icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
    },
  ],
},
{
  title: 'awards',
  info: [
    {
      title: 'Webby Awards - Honoree',
      stage: '2011 - 2012',
    },
    {
      title: 'Adobe Design Achievement Awards - Finalist',
      stage: '2009 - 2010',
    },
  ],
},
{
  title: 'experience',
  info: [
    {
      title: 'UX/UI Designer - XYZ Company',
      stage: '2012 - 2023',
    },
    {
      title: 'Web Developer - ABC Agency',
      stage: '2010 - 2012',
    },
    {
      title: 'Intern - DEF Corporation',
      stage: '2008 - 2010',
    },
  ],
},
{
  title: 'credentials',
  info: [
    {
      title: 'Web Development - ABC University, LA, CA',
      stage: '2011',
    },
    {
      title: 'Computer Science Diploma - AV Technical Institute',
      stage: '2009',
    },
    {
      title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      stage: '2006',
    },
  ],
},
];


const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    desc: 'lorem ipsum dolor sit amet, consectetur adipicing elit'
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    desc: 'lorem ipsum dolor sit amet, consectetur adipicing elit'
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    desc: 'lorem ipsum dolor sit amet, consectetur adipicing elit'
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    desc: 'lorem ipsum dolor sit amet, consectetur adipicing elit'
  },
  {
    icon: <RxRocket/>,
    title: 'SEO',
    desc: 'lorem ipsum dolor sit amet, consectetur adipicing elit'
  },
]


  const data = {
    navData,
    testimonialData,
    workSlides,
    aboutData,
    serviceData
  }


  export default data
  