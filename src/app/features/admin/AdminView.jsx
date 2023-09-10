import { useDispatch, useSelector } from 'react-redux';
import StockInfos from '../../../components/StockInfos';
import { addPhones, addTablets } from '../phones/PhoneSlice';
import {  addTvs } from '../tvs/TvSlice';
import { useState } from 'react';

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
    const dispatch = useDispatch();
    const [ phones, setPhones ] = useState(1);
    const [ tablets, setTablets ] = useState(1);
    const [ tvs, setTvs ] = useState(1);
    return (
        <div style={container}>
            <h2>Admin</h2>
            <StockInfos product="Téléphones" stock={phone.phones}/>
            <div style={btnContainer}>
                <input type="number" min="1" value={phones} onChange={e => setPhones(e.target.value)}/>
                <button onClick={() => dispatch(addPhones(+phones))}>Augmenter le stock</button>
            </div>
            <StockInfos product="Tablets" stock={phone.tablets}/>
            <div style={btnContainer}>
                <input type="number" min="1" value={tablets} onChange={e => setTablets(e.target.value)}/>
                <button onClick={() => dispatch(addTablets(+tablets))}>Augmenter le stock</button>
            </div>
            <StockInfos product="Tvs" stock={tv.tvs}/>
            <div style={btnContainer}>
                <input type="number" min="1" value={tvs} onChange={e => setTvs(e.target.value)}/>
                <button onClick={() => dispatch(addTvs(+tvs))}>Augmenter le stock</button>
            </div>

        </div>
    )
}

export default AdminView;