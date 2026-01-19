
import { Quote, Star } from 'lucide-react';
import {motion} from "framer-motion"

const Testimonial = () => {

  const testimonials = [
    {
      id: 1,
      name: "Aditya Kumar",
      rating: 5,
      text: "One of the best healing platforms, what a diverse portfolios, i mainly liked the idea of diversity"
    },
    {
      id: 2,
      name: "Ali Shaik",
      rating: 4,
      text: "Mental health should be accesible and affoordable, which is what this app is trying to do. Loved it..!"
    },
    {
      id: 4,
      name: "Joseph",
      rating: 5,
      text: "This website helped me alot to cure out my depression and anxiety issues, especially monks have a great perspective of life."
    },

  ]

  return (
    <div id="testimonials" className='py-10 '>
      <h1 className='text-center text-3xl lg:text-4xl font-bold'>What Our Users Say</h1>
      <div className=' max-w-6xl mx-auto py-10 px-3 flex flex-col gap-5 lg:flex-row lg:gap-10'>
        {
          testimonials.map((item) => {
            return <div key={item.id}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 100,
                  transition: { duration:2}
                }}
                className='border border-gray-400 shadow-md shadow-amber-300 rounded-lg flex flex-col p-4 w-xl'>
                {item.rating === 4 ? (<div className='flex'>
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star />
                </div>) : (<div className='flex'>
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                  <Star fill='true' />
                </div>)}

                <p className='py-3'>{item.text}</p>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='font-semibold text-amber-300 text-lg'>{item.name}</h3>
                    <p className='text-sm mt-1'>Student, Fictional IELTS</p>
                  </div>
                  <Quote className='text-white' />
                </div>


              </motion.div>
            </div>
          })
        }
      </div>

    </div >
  )
}

export default Testimonial
