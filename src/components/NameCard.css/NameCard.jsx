import React from 'react'
import './NameCard.css'
const NameCard = ({ suggestedName }) => {
    return (
        <a
            href={`https://www.namecheap.com/domains/registration/results/?domain=${suggestedName}`}
            className="card-link"
            target="_blank"
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}
export default NameCard
