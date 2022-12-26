import React from 'react'
import './Modal.css';
import ReactDOM from 'react-dom';

const Backdrop=props=>{
    return <div className='backdrop'></div>
};

const ModalOverLay=props=>{
    return <div
    className='modal'>
        <div className='content'>{props.children}</div>
    </div>
    
};
const portalElements=document.getElementById('overlays')
function Modal(props) {
  return (
    <React.Fragment>
       {ReactDOM.createPortal(<Backdrop/>,portalElements)}
       {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElements)}
    </React.Fragment>
  )
}

export default Modal;