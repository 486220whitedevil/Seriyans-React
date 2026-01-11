
import './App.css'
import Card from './components/Card'

function App() {

  const jobsData = [
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s",
    company: "Amazon",
    time: "4 days ago",
    post: "Senior Web Developer",
    pay: "$120/hr"
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    company: "Google",
    time: "1 week ago",
    post: "Junior UI Developer",
    pay: "$85/hr"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rUE5XjjmyBrpYYpEIV84cdtgc14IkSoKGQ&s",
    company: "Microsoft",
    time: "2 weeks ago",
    post: "Frontend Engineer",
    pay: "$95/hr"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
    company: "Meta",
    time: "5 days ago",
    post: "React Developer",
    pay: "$110/hr"
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIhxgVeeP2Lr6nfxVMK7zgHywXVSQIy8dfw&s",
    company: "Apple",
    time: "10 days ago",
    post: "UI/UX Designer",
    pay: "$105/hr"
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBhwWT_lkLxqE389PVpukWurM-fT4vMdqBA&s",
    company: "Netflix",
    time: "3 weeks ago",
    post: "Senior Software Engineer",
    pay: "$140/hr"
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GYDIvxL-beJ8TFMwamtsRNTKncCUMcXNdA&s",
    company: "Tesla",
    time: "6 days ago",
    post: "Full Stack Developer",
    pay: "$115/hr"
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoeawq1ipVQj3ReGTsMlPfmkus2fSRzUB0g&s",
    company: "Adobe",
    time: "2 days ago",
    post: "Product Designer",
    pay: "$100/hr"
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt02Pvocmj2bC5dPEWVClHVw843KI_a6yNw&s",
    company: "Oracle",
    time: "4 weeks ago",
    post: "Backend Developer",
    pay: "$90/hr"
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6UoxCdWRN6gcx747zq7Ity_Eih83FMtVlg&s",
    company: "IBM",
    time: "10 weeks ago",
    post: "Cloud Engineer",
    pay: "$130/hr"
  }
];

  

  return (
    <div className='w-full min-h-screen flex flex-wrap p-10 gap-10'>
      {jobsData.map((jobs , index) => {
        return <Card key={index} company ={jobs.company} pay={jobs.pay} post={jobs.post} logo={jobs.logo} time={jobs.time}/>
      })}
    </div>
  )
}

export default App
