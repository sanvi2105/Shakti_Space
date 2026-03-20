/* 

import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    name: "Anita",
    image: "https://images.unsplash.com/photo-1512503868941-bd9fa9c6b569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "I started tutoring online and now I am financially independent. Flexible work allows me to balance family and career.",
    size: "row-span-1 col-span-1",
  },
  {
    id: 2,
    name: "Rekha",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBwaG90byUyMHNpbmdsZXxlbnwwfHwwfHx8MA%3D%3D",
    story: "Cooking from home became my small business. I earn steadily and can manage my household at the same time.I still remember how needy i was when i used to skip my meals just to save little more money to send my child to school.ShaktiSpace is genuinely a supportive platform that made me financially independent today i just can't thank enough to this platform. ",
    size: "row-span-2 col-span-1",
  },
  {
    id: 3,
    name: "Seema",
    image: "https://plus.unsplash.com/premium_photo-1664474633055-6d181d654320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Helping families as a house helper gave me confidence and financial independence.",
    size: "row-span-1 col-span-2",
  },
  {
    id: 4,
    name: "Pooja",
    image: "https://images.unsplash.com/photo-1663502730834-dfaf2d7dcb68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Packing and delivery work helped me earn extra money while managing my studies.I am a Undergraduate college going girl.I was struggling a bit to manage my home expenses with college ones. This platform has enabled me to fulfill my wishes by being independent and strong.",
    size: "row-span-2 col-span-1",
  },
  {
    id: 5,
    name: "Nisha",
    image: "https://images.unsplash.com/photo-1648862513729-cb2556ba3219?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Freelance designing gave me exposure and a regular income while working from home.",
    size: "row-span-1 col-span-1",
  },
  {
    id: 6,
    name: "Kavita",
    image: "https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Social media work allowed me to earn from home while taking care of my children.",
    size: "row-span-1 col-span-2",
  },
  {
    id: 7,
    name: "Shreya",
    image: "https://media.istockphoto.com/id/2189153631/photo/indian-curly-hair-young-adult-gen-z-business-woman-staff-worker-standing-proud-look-cam.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRMHnummyM3LFj5rRukksY6hxyn07XxnAAhO1kjG64Y=",
    story: "Freelance event planning gave me confidence, exposure, and financial independence.I was so down two years back, had gone through a lot things in life just because i was not earning. ShaktiSpace has given me an opportunity to have my stronger version back.",
    size: "row-span-2 col-span-1",
  },
  {
    id: 8,
    name: "Sonali",
    image: "https://images.unsplash.com/photo-1588479843425-2f1c68899617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Baking at home helped me start a small business and earn steady income.",
    size: "row-span-1 col-span-1",
  },
  {
  id: 9,
    name: "Ritika",
    image: "https://images.unsplash.com/photo-1540180550771-21eb3d44ebda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Cake designing gave me exposure and a regular income while working from home.",
    size: "row-span-1 col-span-1",
  },
   {
  id: 10,
    name: "Himanshi",
    image: "https://images.unsplash.com/photo-1630254974704-2ebb1d65f66b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Products designing gave me confidence,skills,exposure and a regular income while working from home.",
    size: "row-span-1 col-span-1",
  },
   {
    id: 11,
    name: "Rekha",
    image: "https://images.unsplash.com/photo-1549351778-5738a76408a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Cooking from home became my small business. I earn steadily and can manage my household at the same time.I still remember how needy i was when i used to skip my meals just to save little more money to send my child to school.ShaktiSpace is genuinely a supportive platform that made me financially independent today i just can't thank enough to this platform. ",
    size: "row-span-2 col-span-1",
  },
  {
    id: 12,
    name: "Seema",
    image: "https://images.unsplash.com/photo-1660316496604-66f6bc1dd9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Helping families as a house helper gave me confidence and financial independence.",
    size: "row-span-1 col-span-2",
  },
  {
    id: 13,
    name: "Priya",
    image: "https://images.unsplash.com/photo-1525337187502-a0dbdfb0286f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Baking at home helped me start a small business and earn steady income.",
    size: "row-span-1 col-span-1",
  },
];

const SuccessStories = () => {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold text-center mb-8 !text-primary">
        Inspiring Success Stories
      </h1>
      <p className="text-center text-lg mb-12 text-gray-600">
        See how women like you are earning, growing, and achieving their goals.
      </p>

      {/* Pinterest-style masonry grid */
      /*
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min grid-flow-dense">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-lg p-6 relative ${story.size}`}
          >
            {/* Circle user image */
            /*
            <div className="absolute -top-6 left-6 w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500">
              <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
            </div>

            {/* Name */ /*}
            <div className="ml-20 mb-3">
              <h2 className="font-bold text-lg">{story.name}</h2>
            </div>

            {/* Story */ /*}
            <p className="text-gray-700">{story.story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
*/



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* DUMMY STORIES  */
const dummyStories = [
  {
    id: 1,
    name: "Anita",
    image: "https://images.unsplash.com/photo-1512503868941-bd9fa9c6b569",
    story: "I started tutoring online and now I am financially independent.",
    size: "row-span-1 col-span-1",
  },
  {
    id: 2,
    name: "Rekha",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBwaG90byUyMHNpbmdsZXxlbnwwfHwwfHx8MA%3D%3D",
    story: "Cooking from home became my small business. I earn steadily and can manage my household at the same time.I still remember how needy i was when i used to skip my meals just to save little more money to send my child to school.ShaktiSpace is genuinely a supportive platform that made me financially independent today i just can't thank enough to this platform. ",
    size: "row-span-2 col-span-1",
  },
  {
    id: 3,
    name: "Seema",
    image: "https://plus.unsplash.com/premium_photo-1664474633055-6d181d654320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Helping families as a house helper gave me confidence and financial independence.",
    size: "row-span-1 col-span-2",
  },
  {
    id: 4,
    name: "Pooja",
    image: "https://images.unsplash.com/photo-1663502730834-dfaf2d7dcb68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Packing and delivery work helped me earn extra money while managing my studies.I am a Undergraduate college going girl.I was struggling a bit to manage my home expenses with college ones. This platform has enabled me to fulfill my wishes by being independent and strong.",
    size: "row-span-2 col-span-1",
  },
  {
    id: 5,
    name: "Nisha",
    image: "https://images.unsplash.com/photo-1648862513729-cb2556ba3219?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Freelance designing gave me exposure and a regular income while working from home.",
    size: "row-span-1 col-span-1",
  },
  {
    id: 6,
    name: "Kavita",
    image: "https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Social media work allowed me to earn from home while taking care of my children.",
    size: "row-span-1 col-span-2",
  },
  {
    id: 7,
    name: "Shreya",
    image: "https://media.istockphoto.com/id/2189153631/photo/indian-curly-hair-young-adult-gen-z-business-woman-staff-worker-standing-proud-look-cam.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRMHnummyM3LFj5rRukksY6hxyn07XxnAAhO1kjG64Y=",
    story: "Freelance event planning gave me confidence, exposure, and financial independence.I was so down two years back, had gone through a lot things in life just because i was not earning. ShaktiSpace has given me an opportunity to have my stronger version back.",
    size: "row-span-2 col-span-1",
  },
  {
    id: 8,
    name: "Sonali",
    image: "https://images.unsplash.com/photo-1588479843425-2f1c68899617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Baking at home helped me start a small business and earn steady income.",
    size: "row-span-1 col-span-1",
  },
  {
  id: 9,
    name: "Ritika",
    image: "https://images.unsplash.com/photo-1540180550771-21eb3d44ebda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Cake designing gave me exposure and a regular income while working from home.",
    size: "row-span-1 col-span-1",
  },
   {
  id: 10,
    name: "Himanshi",
    image: "https://images.unsplash.com/photo-1630254974704-2ebb1d65f66b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWVuJTIwcGhvdG8lMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    story: "Products designing gave me confidence,skills,exposure and a regular income while working from home.",
    size: "row-span-1 col-span-1",
  }
  
];

const SuccessStories = () => {
  const [dbStories, setDbStories] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    story: "",
  });

  /* FETCH FROM BACKEND */
  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await fetch("http://localhost:8001/api/stories");
      const data = await res.json();

      // add default size to DB stories
      const formatted = data.map((item) => ({
        ...item,
        size: "row-span-1 col-span-1",
      }));

      setDbStories(formatted);
      console.log("Fetched:", data);
    } catch (error) {
      console.log(error);
    }
  };

  /* MERGE BOTH */
  const allStories = React.useMemo(() => {
  return [...dummyStories, ...dbStories];
 }, [dbStories]);

  /* FORM HANDLING */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8001/api/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("POST SUCCESS:", data);

    //  FORCE fresh fetch
    await fetchStories();

    //  Reset AFTER fetch
    setFormData({
      name: "",
      image: "",
      story: "",
    });

    setShowForm(false);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold text-center mb-8 !text-primary">
        Inspiring Success Stories
      </h1>

      <p className="text-center text-lg mb-12 text-gray-600">
        See how women like you are earning, growing, and achieving their goals.
      </p>

      {/* BUTTON */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 bg-pink-600 text-white rounded-full"
        >
          Share Your Story
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="max-w-xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border p-3 rounded" />
            <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full border p-3 rounded" />
            <textarea name="story" placeholder="Your Story" value={formData.story} onChange={handleChange} className="w-full border p-3 rounded" />

            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-400 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ✅ SAME GRID (BUT USING allStories) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min grid-flow-dense">
        {allStories.map((story, index) => (
          <motion.div
            key={story._id || story.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-lg p-6 relative ${story.size}`}
          >
            <div className="absolute -top-6 left-6 w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500">
              <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
            </div>

            <div className="ml-20 mb-3">
              <h2 className="font-bold text-lg">{story.name}</h2>
            </div>

            <p className="text-gray-700">{story.story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;

