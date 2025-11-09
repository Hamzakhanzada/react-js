import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
   const users = [
  {
    id: 1,
    name: "John Doe",
    role: "Front-End Developer",
    description:
      "Passionate about crafting modern, responsive user interfaces.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "UI/UX Designer",
    description:
      "Focused on creating clean, intuitive, and accessible interfaces.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    id: 3,
    name: "Michael 1",
    role: "Back-End Developer",
    description:
      "Experienced in building robust server-side applications and APIs.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

  return (
    <>
     <Section1 users={users}/>
    <Section2/>
    </>
   
  )
}

export default App
