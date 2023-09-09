import { useSelector } from 'react-redux';
import StockInfos from '../../../components/StockInfos';


const container = {
    width: '300px',
    padding: '20px',
    border: '1px solid grey',
    margin: '10px auto'
}
const btnContainer = {
    display: "flex",
    marginBottom: '12px'
}


function AdminView (){
    const {phone, tv} = useSelector(state=> state);
    return (
        <div style={container}>
            <h2>Admin</h2>
            <StockInfos product="Téléphones" stock={phone.phones}/>
            <div style={btnContainer}>
                <input type="number" min="1" value=""/>
                <button>Augmenter le stock</button>
            </div>
            <StockInfos product="Tablets" stock={phone.tablets}/>
            <div style={btnContainer}>
                <input type="number" min="1" value=""/>
                <button>Augmenter le stock</button>
            </div>
            <StockInfos product="Tvs" stock={tv.tvs}/>
            <div style={btnContainer}>
                <input type="number" min="1" value=""/>
                <button>Augmenter le stock</button>
            </div>

        </div>
    )
}

export default AdminView;