import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="projectCard_container">
      <img className="project_image" src={imageUrl} alt="project" />
      <div className="projectTitleAndDuration_container">
        <h1 className="project_title">{projectTitle}</h1>
        <div className="duration_container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project_description">{description}</p>
      <a className="visit_Link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
