import Card from './components/Card'
import './App.css'

function App() {
  const userProfiles = [
    {
      name: 'Cloudy',
      jobTitle:"Software Engineer",
    },
    {
      name: 'Ria',
      jobTitle:"Devops Engineer",
    },
    {
      name: 'Natalie',
      jobTitle:"Cloud Engineer",
    }
  ]
  return (
    <>
    <div className='flex flex-wrap'>
      {
        userProfiles.map((profile, index) =>  <Card key={index} name={profile.name} jobTitle={profile.jobTitle}/>
        )
      }
    </div>
   
    </>
  )
}

export default App
