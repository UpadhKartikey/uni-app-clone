
import one_percent_cashback from '../assets/images/one_percent_cashback.png';
import five_x_rewards from'../assets/images/five_x_rewards.png';
import forex_globe from '../assets/images/forex_globe.png';
import down_arrow from '../assets/images/down_arrow.svg';
import whatsapp_bubble from '../assets/images/whatsapp_bubble.webp';
import rupee_bubble from '../assets/images/rupee_bubble.webp';
import antivirus_bubble from '../assets/images/antivirus_bubble.webp';
import pcidss_cert from '../assets/images/pcidss_cert.svg';

export default function Section () {
  return (
    <>
    <section className='mt-8'>
  <div className="container mb-7">
    <div className="row text-center">
      <div className="col-md-12 text-black fs-1">
        <span>
          Earn 1% assured cashback
          <span className="text-disabledgrey"> on your spends. Get 5X</span>
        </span>
        <p>
          more value than cashback
          <span className="text-disabledgrey"> at the Uni Store. Enjoy</span>
        </p>
        <p>
          <span className="text-disabledgrey">round the clock</span> Whatsapp support.
          <span className="text-disabledgrey"> And it's</span>
        </p>
        
        <p class="fs-1">
          lifetime free
          <span class="text-disabledgrey">; no joining fee, no annual charges.</span>
        </p>
      </div>
    </div>
    <div class="row justify-content-center py-4">
      <div class="col-md-12">
      <div className="d-flex w-96 w-md-150 h-96 h-md-150 rounded-circle justify-content-center" style={{ 
      background: 'radial-gradient(circle, #65ECD8 0%, #FDEF78 100%)'
    }}>
      <img src={down_arrow} alt="down_arrow" loading="lazy" className="w-9 w-md-14" />
    </div>
        {/* <div class="d-flex w-96 w-md-150 h-96 h-md-150 rounded-circle justify-content-center" >
          <img src={down_arrow} alt="down_arrow" loading="lazy" className="w-9 w-md-14"/>
        </div> */}
      </div>
    </div>
  </div>
</section>





<div className="container w-full mb-7">
  <div className='row'>
  <div className="col-md-6 col-lg-7 text-center text-md-start">
    <div className="w-full md:w-300 lg:w-510">
      <div>
        <span className="fw-bold fs-1 text-dark">1% assured cashback on your spends.</span>
        <span className="fs-1 text-disabledgrey"> The more you spend, the more you earn.</span>
      </div>
    </div>
    <div className="mt-5 fs-5 text-disabledgrey">
      Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.
    </div>
  </div>
  <div className="col-md-6 col-lg-5 my-5">
    <div className="position-relative">
      <img src= {one_percent_cashback} className="img-fluid" alt="1% cashback"/>
    </div>
  </div>
  </div>
 
</div>

<div className="container w-full mb-7">
  <div className='row'>
  <div className="col-md-6 col-lg-5 my-5">
    <div className="position-relative">
      <img src= {five_x_rewards} className="img-fluid" alt="5X_rewards"/>
    </div>
  </div>
  <div className="col-md-6 col-lg-7 text-center text-md-start">
    <div className="w-full md:w-300 lg:w-510">
      <div>
        <span className="fw-bold fs-1 text-dark">5x more value than your cashback,</span>
        <span className="fs-1 text-disabledgrey"> only at the Uni Store.</span>
      </div>
    </div>
    
  </div>
 
  </div>
 
</div>

<div className="container w-full mb-8">
  <div className='row'>
  
  <div className="col-md-6 col-lg-7 text-center text-md-start">
    <div className="w-full md:w-300 lg:w-510">
      <div>
        <div className="fw-bold fs-1 text-dark">Zero Forex Markup.</div>
        <div className="fs-1 text-disabledgrey"> Go international, without any fees.</div>
      </div>
    </div>
    
  </div>
  <div className="col-md-6 col-lg-5 my-5">
    <div className="position-relative">
      <img src= {forex_globe} className="img-fluid" alt="forex_globe"/>
    </div>
  </div>
 
  </div>
 
</div>

  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-md-6 text-black font-medium">
        <p className="fs-1 fs-md-5 lh-lg pb-4">
        Lifetime <span className='text-unigreen'>free.</span> No joining fee.
        <div>No annual charges.  </div>     
        </p>
      </div>
    </div>
  </div>




{/* another component  */}
<div className="flex justify-center items-center text-center text-[#BFC9CC] text-base sm:text-xl md:text-2xl bg-black py-16 px-5 sm:px-8 md:px-12"><p class="max-w-3xl">Please note that to stay compliant with RBI guidelines, we have discontinued Pay 1/3rd and Pay 1/2 cards for the time being.</p></div>


{/* another component  */}
 <div className='container-fluid bg-darkblack'>
 <div className ='row d-flex justify-content-evenly my-5'>
  <div className='col-md-3'>
    <img src= {whatsapp_bubble} className="img-fluid w-25 mb-2" alt="whatsapp_logo"/>
    <div className='fw-bold fs-4 text-white'>Help, just a WhatsApp away. Anytime, Anyday.</div>
    <div className='fs-5'>During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.</div>
  </div>

  <div className='col-md-3'>
  <img src= {rupee_bubble} className="img-fluid w-25 mb-2" alt="whatsapp_logo"/>
    <div className='fw-bold fs-4 text-white'>No hidden charges, no last minute surprises.</div>
    <div className='fs-5'>100% money back guarantee if a charge is applied without your knowledge.</div>
  </div>

  <div className='col-md-3'>
    <img src= {antivirus_bubble} className="img-fluid w-25 mb-2" alt="whatsapp_logo"/>
    <div className='fw-bold fs-4 mb-4 text-white'>Super secure. Because we care about your money.</div>
    <img src= {pcidss_cert} className="img-fluid w-25 mb-2" alt="pcidss_cert"/>
  </div>
</div>
 </div>
</>
  )
}
