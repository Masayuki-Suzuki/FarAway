import AddItemForm from '../organisms/AddItemForm'
import Header from '../organisms/Header'
import PackingList from '../organisms/PackingList'
import Footer from '../organisms/Footer'

const Main = () => {
    return (
        <div className="app">
            <Header/>
            <AddItemForm/>
            <PackingList/>
            <Footer/>
        </div>
    )
}

export default Main
