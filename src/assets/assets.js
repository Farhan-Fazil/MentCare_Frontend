import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './pigeon.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import meditation from "./meditation.png"
import monks from "./monks.jpg"
import doctorates from "./doctorates.jpg"
import spiritual from "./spiritual.jpg"
import coach from "./coach.jpg"
import therapists from "./therapists.jpg"
import venerable_ananda from "./venerable_ananda.jpg"
import venerable_suman from "./venerable_suman.jpg"
import sophia_green from "./sophia_green.jpg"
import swami_vedant from "./swami_vedant.jpg"
import laura_benson from "./laura_benson.jpg"
import mark_reynolds from "./mark_reynolds.jpg"
import kevin_moore from "./kevin_moore.jpg"
import nina_roberts from "./nina_roberts.jpg"






import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import pigeon from "./pigeon.png"



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    meditation,
    monks,
    spiritual,
    doctorates,
    coach,
    therapists,
    pigeon
}

export const specialityData = [
    {
        speciality: 'Psychiatrist',
        image: doctorates
    },
    {
        speciality: 'Monk',
        image: monks
    },
    {
        speciality: 'Wellness Coach',
        image: coach
    },
    {
        speciality: 'Spiritual Mentor',
        image: spiritual
    },
    {
        speciality: 'Therapist',
        image: therapists
    }
]

export const doctors=[
    {
  _id: 'sp1',
  name: 'Venerable Ananda',
  image: venerable_ananda,
  speciality: 'Monk',
  degree: 'Buddhist Studies',
  experience: '12 Years',
  about: 'Venerable Ananda focuses on mindfulness, meditation, and inner peace through traditional Buddhist practices.',
  fees: 20,
  address: {
    line1: 'Peace Monastery',
    line2: 'Himalayan Foothills, India'
  }
},
{
  _id: 'th1',
  name: 'Dr. Laura Benson',
  image: laura_benson,
  speciality: 'Therapist',
  degree: 'MSc Psychology',
  experience: '6 Years',
  about: 'Dr. Laura helps individuals manage stress, anxiety, and emotional challenges through evidence-based therapy.',
  fees: 45,
  address: {
    line1: 'MindCare Clinic',
    line2: 'Oxford Street, London'
  }
},
{
  _id: 'wc1',
  name: 'Mark Reynolds',
  image: mark_reynolds,
  speciality: 'Wellness Coach',
  degree: 'Certified Wellness Coach',
  experience: '5 Years',
  about: 'Mark supports holistic wellness through lifestyle coaching, nutrition guidance, and habit-building.',
  fees: 35,
  address: {
    line1: 'Wellness Hub',
    line2: 'Sunset Boulevard, California'
  }
},
{
  _id: 'ps1',
  name: 'Dr. Nina Roberts',
  image: nina_roberts,
  speciality: 'Psychiatrist',
  degree: 'MD Psychiatry',
  experience: '8 Years',
  about: 'Dr. Nina specializes in diagnosing and treating mental health disorders with a compassionate approach.',
  fees: 70,
  address: {
    line1: 'NeuroMind Hospital',
    line2: 'Park Avenue, New York'
  }
},
{
  _id: 'st1',
  name: 'Swami Vedant',
  image: swami_vedant,
  speciality: 'Spiritual Teacher',
  degree: 'Vedanta Philosophy',
  experience: '15 Years',
  about: 'Swami Vedant guides seekers toward self-awareness and spiritual growth through ancient wisdom.',
  fees: 25,
  address: {
    line1: 'Vedanta Ashram',
    line2: 'Rishikesh, India'
  }
},
{
  _id: 'th2',
  name: 'Dr. Kevin Moore',
  image: kevin_moore,
  speciality: 'Therapist',
  degree: 'MA Clinical Psychology',
  experience: '4 Years',
  about: 'Kevin works closely with young adults to improve emotional resilience and mental clarity.',
  fees: 40,
  address: {
    line1: 'Calm Minds Center',
    line2: 'Downtown Toronto, Canada'
  }
},
{
  _id: 'wc2',
  name: 'Sophia Green',
  image: sophia_green,
  speciality: 'Wellness Coach',
  degree: 'Holistic Health Certification',
  experience: '3 Years',
  about: 'Sophia emphasizes balanced living through mindfulness, fitness, and self-care routines.',
  fees: 30,
  address: {
    line1: 'Harmony Studio',
    line2: 'Bond Street, London'
  }
},
{
  _id: 'sp2',
  name: 'Venerable Suman',
  image: venerable_suman,
  speciality: 'Monk',
  degree: 'Meditation & Mindfulness',
  experience: '10 Years',
  about: 'Venerable Suman teaches compassion, meditation, and mindful living for modern lifestyles.',
  fees: 15,
  address: {
    line1: 'Lotus Monastery',
    line2: 'Kathmandu, Nepal'
  }
}

]
// export const doctors = [
//     // {
//     //     _id: 'doc1',
//     //     name: 'Dr. Richard James',
//     //     image: doc1,
//     //     speciality: 'General physician',
//     //     degree: 'MBBS',
//     //     experience: '4 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 50,
//     //     address: {
//     //         line1: '17th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc2',
//     //     name: 'Dr. Emily Larson',
//     //     image: doc2,
//     //     speciality: 'Gynecologist',
//     //     degree: 'MBBS',
//     //     experience: '3 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 60,
//     //     address: {
//     //         line1: '27th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc3',
//     //     name: 'Dr. Sarah Patel',
//     //     image: doc3,
//     //     speciality: 'Dermatologist',
//     //     degree: 'MBBS',
//     //     experience: '1 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 30,
//     //     address: {
//     //         line1: '37th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc4',
//     //     name: 'Dr. Christopher Lee',
//     //     image: doc4,
//     //     speciality: 'Pediatricians',
//     //     degree: 'MBBS',
//     //     experience: '2 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 40,
//     //     address: {
//     //         line1: '47th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc5',
//     //     name: 'Dr. Jennifer Garcia',
//     //     image: doc5,
//     //     speciality: 'Neurologist',
//     //     degree: 'MBBS',
//     //     experience: '4 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 50,
//     //     address: {
//     //         line1: '57th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc6',
//     //     name: 'Dr. Andrew Williams',
//     //     image: doc6,
//     //     speciality: 'Neurologist',
//     //     degree: 'MBBS',
//     //     experience: '4 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 50,
//     //     address: {
//     //         line1: '57th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc7',
//     //     name: 'Dr. Christopher Davis',
//     //     image: doc7,
//     //     speciality: 'General physician',
//     //     degree: 'MBBS',
//     //     experience: '4 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 50,
//     //     address: {
//     //         line1: '17th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc8',
//     //     name: 'Dr. Timothy White',
//     //     image: doc8,
//     //     speciality: 'Gynecologist',
//     //     degree: 'MBBS',
//     //     experience: '3 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 60,
//     //     address: {
//     //         line1: '27th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc9',
//     //     name: 'Dr. Ava Mitchell',
//     //     image: doc9,
//     //     speciality: 'Dermatologist',
//     //     degree: 'MBBS',
//     //     experience: '1 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 30,
//     //     address: {
//     //         line1: '37th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc10',
//     //     name: 'Dr. Jeffrey King',
//     //     image: doc10,
//     //     speciality: 'Pediatricians',
//     //     degree: 'MBBS',
//     //     experience: '2 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 40,
//     //     address: {
//     //         line1: '47th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc11',
//     //     name: 'Dr. Zoe Kelly',
//     //     image: doc11,
//     //     speciality: 'Neurologist',
//     //     degree: 'MBBS',
//     //     experience: '4 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 50,
//     //     address: {
//     //         line1: '57th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc12',
//     //     name: 'Dr. Patrick Harris',
//     //     image: doc12,
//     //     speciality: 'Gastroenterologist',
//     //     degree: 'MBBS',
//     //     experience: '4 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 50,
//     //     address: {
//     //         line1: '57th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc13',
//     //     name: 'Dr. Chloe Evans',
//     //     image: doc13,
//     //     speciality: 'General physician',
//     //     degree: 'MBBS',
//     //     experience: '4 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 50,
//     //     address: {
//     //         line1: '17th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc14',
//     //     name: 'Dr. Ryan Martinez',
//     //     image: doc14,
//     //     speciality: 'Gynecologist',
//     //     degree: 'MBBS',
//     //     experience: '3 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 60,
//     //     address: {
//     //         line1: '27th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     // },
//     // {
//     //     _id: 'doc15',
//     //     name: 'Dr. Amelia Hill',
//     //     image: doc15,
//     //     speciality: 'Dermatologist',
//     //     degree: 'MBBS',
//     //     experience: '1 Years',
//     //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//     //     fees: 30,
//     //     address: {
//     //         line1: '37th Cross, Richmond',
//     //         line2: 'Circle, Ring Road, London'
//     //     }
//     },
// ]