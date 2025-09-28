import professionalExperience from '../../Sources/professionalExperience'
import './professional-experience.css'
import Icon from '../../assets/icons/icons'
export default function ProfessionalExperience() {
    return (
        <div className='professional-experience'>
            <h2 className='heading main-heading'>{professionalExperience.heading}</h2>
            <div className='Year-Map'>
                {professionalExperience.experience.map((res, index) => (
                    <div key={index} className='year-map-row'>
                        <div className='year-map-left'>
                            {res.overallTimePeriod}
                        </div>
                        <div className='year-map-divider'>
                            <span className='year-map-dot'></span>
                        </div>
                        <div className='year-map-right'>
                            {res.roles.map((roleName, idx) => (
                                <div
                                    key={idx}
                                    className={`role-card${idx === 0 ? '' : ' role-card-spaced'}`}
                                >
                                    <div className='company-row-standout'>
                                        <div className='office-icon-displayer'>
                                            <img src={`/assets/${res.companyName}.png`} className='office-icon' />
                                        </div>
                                        <div className='company-name'>
                                            <p className='company-title'>{res.companyName}</p>
                                            <p className='company-location'>{res.location}</p>
                                        </div>
                                    </div>
                                    <RoleMapper
                                        role={roleName.role}
                                        overallTimePeriod={res.overallTimePeriod}
                                        roleTimePeriod={roleName.roleTimePeriod}
                                        skills={roleName.skills}
                                        tasks={roleName.tasks}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}


function Skills({ skills }) {
    return (
        <>
            <div className='skills'>
                {skills.map((skill, index) => (
                    <div key={index} className='icon-displayer'>
                        <Icon name={skill + "Icon"} size={45} />
                    </div>
                ))}
            </div>
        </>
    )
}

function Tasks({ tasks }) {
    return (
        <>
            {
                tasks.map((task, index) => (
                    <div key={index} className='tasks'>
                        <p>
                            <Icon name="BlueCorrectIcon" size={20} />
                        </p>
                        {task}
                    </div>
                ))}
        </>
    )
}

function RoleMapper({ role, roleTimePeriod, skills, tasks }) {
    return (
        <>
            <div className='role-section'>
                <div className='company-and-location'>
                    <h2>{role}</h2>
                    {roleTimePeriod && <h6 style={{ margin: "5px 0" }}>{roleTimePeriod}</h6>}
                </div>
                <Skills skills={skills} />
                <Tasks tasks={tasks} />
            </div>

        </>
    )
}