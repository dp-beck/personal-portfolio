import ProjectCard from "./ProjectCard";

import './MyWork.css';

function MyWork() {
    return (
        <div className="my-work">
            <h1> My Work</h1>
            <ul>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
                <li>
                    <ProjectCard/>
                </li>
            </ul>
        </div>
    )
}

export default MyWork