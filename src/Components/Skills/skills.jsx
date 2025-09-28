import skills from '../../Sources/skills.json'
import './skills.css'
import Icon from '../../assets/icons/icons';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Skills() {
    return (
        <div className="skills-section-bg">
            <h2 className="main-heading" style={{margin: 0}}>{skills.heading}</h2>
            <div className='skillSet'>
                <SkillCategoryDivider skillCategory={skills.skills} />
            </div>
        </div>
    )
}

function SkillCategoryDivider({ skillCategory }) {
    return (
        <>
            {skillCategory.map((category, index) => {
                return (
                    <div key={index} className='prof-exp-card-container category-skills'>
                        <div className='prof-exp-card category-skills-card'>
                            <h3>{category.title}</h3>
                            <SkillItemDivider skillItems={category} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

function SkillItemDivider({ skillItems }) {
    return (
        <>
            {skillItems.items.map((item, index) => (
                <div className="skill-item-row" key={index}>
                    <Icon name={skillItems.title === "Professional Skills" ? '' : item + "Icon"} size={45} />
                    <p className="skill-item-name">{item}</p>
                </div>
            ))}
        </>
    )
}