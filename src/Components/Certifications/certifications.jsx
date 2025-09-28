import certifications from '../../Sources/certifications'
import './certifications.css'
export default function Certifications() {
    return (
        <div className="certifications-section">
            <h2 className="certification-heading main-heading">{certifications.heading}</h2>
            <div className="certifications-list">
                {certifications.cloudAndDevOps.map((res, index) => (
                    <div className="certification-card" key={index}>
                        <h2 className="section-heading">{res.heading}</h2>
                        <CertificationNames certifications={res.certifications} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function CertificationNames({ certifications }) {
    return (
        <ul className="certification-names">
            {certifications.map((certification, index) => (
                <a key={index}  href={certification.links} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <li className="certification-name">{certification.name}</li>
                </a>
            ))}
        </ul>
    );
}