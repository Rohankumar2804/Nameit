import React from 'react'
import './App.css'
import Header from '../header/Header'
import SearchBox from '../SearchBox/SearchBox'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
const name = require('@rstacruz/startup-name-generator')
class App extends React.Component {
    state = {
        headerText: 'Name It',
        headerimg: 'expanded',
        suggestedNames: [],
    }
    handleInputChange = (inputTextValue) => {
        // console.log(inputTextValue)
        this.setState({
            suggestedNames: inputTextValue ? name(inputTextValue) : [],
        })
        if (!inputTextValue) this.setState({ headerimg: 'expanded' })
        else this.setState({ headerimg: 'contracted' })
    }
    render() {
        return (
            <div>
                <Header
                    headTitle={this.state.headerText}
                    headerimg={this.state.headerimg}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}
// function App() {
//     return <h1>This is functonal component</h1>
// }
export default App
