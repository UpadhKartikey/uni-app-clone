import logo from '../assets/images/logo.svg';

export default function HeaderComponent () {
    return (
        <>
        <div className="d-flex justify-content-between">
        <img src= {logo} className="img-fluid w-25 mb-2" alt="uni_logo"/>
        <button>Uni Paycheck</button>
        </div>
        
        </>
    );
}