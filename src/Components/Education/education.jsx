import education from '../../Sources/education.json'
import './education.css'
export default function Education() {
    return (
        <div className="education-section-bg">
            <h2 className="education-title main-heading">{education.heading}</h2>
            {education.education.map((edu, index) => (
                <div className="edu-wrapper" key={index}>
                    <div className="education-card">
                        <DegreeAndUni edu={edu} />
                        <YearAndLocation edu={edu} />
                    </div>
                </div>
            ))}
        </div>
    )
}

function DegreeAndUni({ edu }) {
    return (
        <div className='flex-uni-and-degree uni-card'>
            <h2>{edu.degree}</h2>
            <h4>{edu.university} ({edu.marks})</h4>
        </div>
    )
}

function YearAndLocation({ edu }) {
    return (
        <div className='flex-year-and-location'>
            <h2>{edu.year}</h2>
            <h4>{edu.location}</h4>
        </div>
    )
}