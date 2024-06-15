import "./Projects.css"
import Card from "../Card/Card.tsx"
import img from "./b55b5c02-c46b-4359-831f-9c0145c6289c.jpeg"
import imgQuiz from "./Firefly a web page quiz ui 82942.jpg"
import imgTODO from "./Firefly a web page to-do list ui 82942.jpg"
function Projects() {
  return (
    <div className="flex flex-col justify-center h-[100vh] w-[100%] " id="Projects">
      <h5 className='font-semibold text-5xl m-4 '>Projects</h5>
      <div className="flex flex-row h-[75%] w-[100%]  justify-center" >
        
      <Card
        title="TO-DO List"
        image={imgTODO}
        content="This Web App helps you organize your tasks, which are automatically scheduled on the integrated calendar."
        link="https://github.com/ManjariRathore/to-do"
      />
      <Card
        title="Event Management System"
        image={img}
        content="This project is an event management system designed to streamline the planning and execution of events."
        link="https://github.com/ManjariRathore/event-management-system"
      />
      <Card
        title="Quiz App"
        image={imgQuiz}
        content="An interactive quiz app featuring randomized questions and user-selected answers."
        link="https://github.com/ManjariRathore/quiz-web-app"
        
      />
      </div>
     
    </div>
    
  );
}

export default Projects;