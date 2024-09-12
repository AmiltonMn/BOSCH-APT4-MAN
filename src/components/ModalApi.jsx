import style from '../CSS/ModalAPI.module.css';
import Draggable from 'react-draggable';

export const Modal = (props) =>{
    return (
        <Draggable>
            <div className={style.CardModal}>
                <div>
                    <button onClick={props.close} style={{backgroundColor: 'transparent'}}>❌</button><br></br>
                </div>
                <h1>{props.data.name}</h1>
                <h2>{props.data.species}</h2>
                <p>{props.data.type}</p>
                <div>
                    <img src={props.data.image} alt={props.data.name} width={150} height={'auto'}/>
                </div>
                <p>{props.data.gender}</p>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                    <p style={{marginRight: '15px'}}>Status: </p>
                    <div className={props.data.status === 'Dead' ? style.Dead : props.data.status === 'unknown' ? style.Unknown : style.Alive }></div>
                </div>
            </div>
        </Draggable>
    )
}