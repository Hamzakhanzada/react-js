import React from "react";
import Card from "./Components/Card";

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Front-End Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "4 days ago",
    post: "Software Engineer (JavaScript)",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "1 week ago",
    post: "Front-End Developer (React + Tailwind)",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "Nvidia",
    datePosted: "8 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "10 weeks ago",
    post: "Backend Developer (Python)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://images.vexels.com/media/users/3/140583/isolated/svg/905dd25934b7a05516389863f7cb9417.svg",
    companyName: "IBM",
    datePosted: "12 days ago",
    post: "Junior Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Karachi, Pakistan"
  }
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return <Card company={elem.companyName} date={elem.datePosted} post={elem.post} logo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      })}
    </div>
  );
};

export default App;
