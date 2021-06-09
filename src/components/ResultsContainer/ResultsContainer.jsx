import React from 'react'
import NameCard from '../NameCard.css/NameCard'
import './ResultsContainer.css'
const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />
    })
    //  console.log(suggestedNameJsx)
    return <div className="results-container">{suggestedNameJsx}</div>
}
export default ResultsContainer
