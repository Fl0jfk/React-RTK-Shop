import phone from '../../../images/phone.png';
import tablet from '../../../images/tablet.png'
import { useDispatch, useSelector } from 'react-redux';
import { phones as phonesAction, tablets as tabletsAction} from './PhoneSlice';
import { useState } from 'react';

function PhoneView(){
    const {phones, tablets} = useSelector(state => state.phone);
    const dispatch = useDispatch();
    const [tabletNum, setTabletNum] = useState(1);
    const [phoneNum, setPhoneNum] = useState(1);

    return(
        <>
            <div className="container">
                <img src={phone} alt="phone"/>
                <p>Disponibilité:
                    <span className='count'> { phones }</span>
                </p>
                {
                    phones > 0  && (
                        <div className='btnContainer'>
                            <button onClick={() => dispatch(phonesAction(phoneNum))}>Acheter</button>
                            <input 
                                type="number" 
                                value={phoneNum}
                                onChange={e => setPhoneNum(e.target.value)}
                                min="1"
                                max={phones}
                            />
                        </div>
                    )
                }   
            </div>
            <div className="container">
                <img src={tablet} alt="tablet"/>
                <p>Disponibilité:
                    <span className='count'> { tablets }</span>
                </p>
                {
                    tablets > 0  && (
                        <div className='btnContainer'>
                            <button onClick={() => dispatch(tabletsAction(tabletNum))}>Acheter</button>
                            <input 
                                min="1"
                                type="number" 
                                value={tabletNum}
                                onChange={e => setTabletNum(e.target.value)}
                                max= {tablets}
                            />
                        </div>
                    )
                }
            </div>
        </>  
    )
}

export default PhoneView;