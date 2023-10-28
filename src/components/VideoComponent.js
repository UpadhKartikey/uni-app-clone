import nxt_wave_bg from '../assets/videos/nxt_wave_bg.mp4';
import HeaderComponent from './Header';
import nx_wave_hero from '../assets/images/nx_wave_hero.png';


export default function  VideoBackground () {
  return (
    <div className='container-fluid p-0'>
      <video src={nxt_wave_bg} autoPlay loop muted className="vw-100 vh-100 object-fit-cover" />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-black">
        <HeaderComponent/>
        
        <div className="container w-full mb-7">
  <div className='row'>
  <div className="col-md-6 col-lg-7 text-center text-md-start">
    <div className="w-full md:w-300 lg:w-510">
    <h1 className='justify-content-between'>
        <span className='fw-bold'>NX Wave.</span>The next-gen credit card for those who love rewards.</h1>
        <div>1% Cashback + 5x RewardsZero + Forex Markup</div>
        <form>
      <div className="d-flex bg-black p-1 pl-2 rounded-xl justify-content-between">
        <div className="d-flex align-items-center">
          <input
            className="form-control bg-black border-0 outline-none text-white p-1  w-50"
            type="text"
            placeholder="Enter Phone Number"
            value=""
          />
          <span className="w-6 d-flex align-items-center justify-content-end h-100"></span>
        </div>
        <div className="sticky-top">
          <button
            type="submit"
            className="btn btn-primary text-sm d-flex align-items-center justify-content-between pt-2 ml-2 rounded"
            disabled={true}
          >
            Apply Now
          </button>
        </div>
      </div>
    </form>
    </div>
  </div>
  <div className="col-md-6 col-lg-5 my-5">
    <div className="position-relative">
      <img src= {nx_wave_hero} className="img-fluid" alt="1% cashback"/>
    </div>
  </div>
  </div>
  
 
</div>
      </div>
    </div>
  );
};
