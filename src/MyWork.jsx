import weatherAppScreenshot from './assets/weather-app-screenshot.png';
import memoryCardGameScreenshot from './assets/memory-card-game-screenshot.png';
import battleshipScreenshot from './assets/battleship-screenshot.png';
import cvProjectScreenshot from './assets/cv-project-screenshot.png';
import shoppingCartScreenshot from './assets/shopping-cart-screenshot.png';
import libraryAppScreenshot from './assets/library-app-screenshot.png';

import ProjectCard from "./ProjectCard";

import './MyWork.css';

function MyWork() {

    const projectDetails = [
        {
            name: "Memory Card Game",
            description: "A Memory Card Game using images of Pokemon, developed in React.",
            screenshot: memoryCardGameScreenshot,
            githubLink: "https://github.com/dp-beck/memory-card-game",
            liveLink: "https://dp-beck.github.io/memory-card-game/"

         },
         {
            name: "Weather App",
            description: "This is a web app for displaying basic weather information using the Open Weather Map Weather API.",
            screenshot: weatherAppScreenshot,
            githubLink: "https://github.com/dp-beck/weather_app",
            liveLink: "https://dp-beck.github.io/weather_app/"
         },
         {
            name: "Battleship!",
            description: "The classic board game",
            screenshot: battleshipScreenshot,
            githubLink: "https://github.com/dp-beck/battleship",
            liveLink: "https://dp-beck.github.io/battleship/"
         },
         {
            name: "Shopping Cart",
            description: "An online store where you can add items to your shopping cart. The app fetches the store items from an Animal Crossing API.",
            screenshot: shoppingCartScreenshot,
            githubLink: "https://github.com/dp-beck/shopping-cart",
            liveLink: "https://dp-beck.github.io/shopping-cart/"
         },
         {
            name: "CV Generator",
            description: "A React app for generating simple CVs",
            screenshot: cvProjectScreenshot,
            githubLink: "https://github.com/dp-beck/cv-project",
            liveLink: "https://dp-beck.github.io/cv-project/"
         },
         {
            name: "Library App",
            description: "A simple app for recording books you have read",
            screenshot: libraryAppScreenshot,
            githubLink: "https://github.com/dp-beck/library_app",
            liveLink: "https://dp-beck.github.io/library_app/"
         },
    ]

    return (
        <div className="my-work">
            <h1 className="my-work-header"> My Work</h1>
            <ul>
                <li>
                    <ProjectCard
                        name={projectDetails[0].name}
                        description={projectDetails[0].description}
                        screenshot={projectDetails[0].screenshot}
                        githubLink={projectDetails[0].githubLink}
                        liveLink={projectDetails[0].liveLink}
                     />
                </li>
                <li>
                    <ProjectCard 
                        name={projectDetails[1].name}
                        description={projectDetails[1].description}
                        screenshot={projectDetails[1].screenshot}
                        githubLink={projectDetails[1].githubLink}
                        liveLink={projectDetails[1].liveLink}
                    />
                </li>
                <li>
                    <ProjectCard 
                       name={projectDetails[2].name}
                       description={projectDetails[2].description}
                       screenshot={projectDetails[2].screenshot}
                       githubLink={projectDetails[2].githubLink}
                       liveLink={projectDetails[2].liveLink}
                    />
                </li>
                <li>
                    <ProjectCard 
                        name={projectDetails[3].name}
                        description={projectDetails[3].description}
                        screenshot={projectDetails[3].screenshot}
                        githubLink={projectDetails[3].githubLink}
                        liveLink={projectDetails[3].liveLink}
                    />                
                </li>
                <li>                
                    <ProjectCard 
                        name={projectDetails[4].name}
                        description={projectDetails[4].description}
                        screenshot={projectDetails[4].screenshot}
                        githubLink={projectDetails[4].githubLink}
                        liveLink={projectDetails[4].liveLink}
                    />
                </li>
                <li> 
                    <ProjectCard 
                        name={projectDetails[5].name}
                        description={projectDetails[5].description}
                        screenshot={projectDetails[5].screenshot}
                        githubLink={projectDetails[5].githubLink}
                        liveLink={projectDetails[5].liveLink}
                    />
                </li>
            </ul>
        </div>
    )
}

export default MyWork