import Image from "./components/Image";
import Text from "./components/Text";


const App = () => {
    return (
        <div className={'row'}>

            <div className={'col-9'}>
                <div className={'row'}>
                    <Image />
                    <Text />
                </div>
            </div>
        </div>
    )
}

export default App