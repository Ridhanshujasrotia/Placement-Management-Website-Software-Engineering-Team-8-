import React from "react";
import "../styles/Home.css";
import Testimonials from "../components/Testinomials";
function Home() {
  // Array of image URLs
  const imageUrls = [
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230978/PlacementProject/image1_xess47.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230978/PlacementProject/image2_oj43jc.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230978/PlacementProject/image3_e9uu7h.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230978/PlacementProject/image4_s3jpfs.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230978/PlacementProject/image5_ygccjz.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230978/PlacementProject/image6_n2ddqc.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image7_wdfg52.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image8_f0licb.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image9_aqiuuv.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image10_evrojr.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image11_sugwkz.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image12_hnsbsg.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image13_dasfri.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image14_om2ovf.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image15_mkfzml.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image16_bocgyo.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230979/PlacementProject/image17_umzazm.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image18_rhxn3j.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image19_mfgbuk.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image20_frhdcf.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image21_e4ynlj.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image22_vrxstl.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image23_qg4dla.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230980/PlacementProject/image24_locahi.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230981/PlacementProject/image25_foxq8b.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230981/PlacementProject/image26_c5fr8g.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image27_frmgsf.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image28_qwchqi.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image29_kbcwwy.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image30_suuv9k.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image31_yuvolc.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230969/PlacementProject/image32_c8m9mv.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230969/PlacementProject/image33_bpdyja.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image34_in15bu.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image35_qqobqe.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230968/PlacementProject/image36_djfymy.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230969/PlacementProject/image37_zxlnue.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230969/PlacementProject/image38_u2d0da.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230969/PlacementProject/image39_u4gwkb.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230969/PlacementProject/image40_mwqich.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230969/PlacementProject/image41_fkiilh.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230970/PlacementProject/image42_mx4h0h.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230970/PlacementProject/image43_ic28uz.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230970/PlacementProject/image44_icvcaf.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230970/PlacementProject/image45_nfyk3a.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230970/PlacementProject/image46_h2c0ve.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230970/PlacementProject/image47_asm6lp.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230971/PlacementProject/image48_azf1rc.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230971/PlacementProject/image49_boikne.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230971/PlacementProject/image50_qxjvss.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230971/PlacementProject/image51_vevf8g.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230971/PlacementProject/image52_sfhatg.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230971/PlacementProject/image53_cnbveu.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230972/PlacementProject/image54_rle4gp.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230971/PlacementProject/image55_zysk6n.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230972/PlacementProject/image56_oma8ar.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230972/PlacementProject/image57_ptd3ny.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230972/PlacementProject/image58_gvljdp.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230972/PlacementProject/image59_lmvx1p.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image60_zebju3.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image61_buoq0y.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230972/PlacementProject/image62_mceldw.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image63_ewsttg.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image64_w0o2ud.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image65_lak9ps.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image66_wy6yfy.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image67_v3xqyw.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image68_h6j8zn.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230973/PlacementProject/image69_eva9ee.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image70_adf4yp.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image71_h9pyup.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image72_eqgew5.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image73_gzzcue.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image74_b5x7z4.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image75_mepetv.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image76_qzep28.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230974/PlacementProject/image77_jbo5o2.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image78_bhkhxy.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image79_n9ctoq.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image80_sxmqex.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image81_hfsvhj.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image82_hdxfbl.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image83_iqrfkv.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image84_cnyctn.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230975/PlacementProject/image85_hb2fuj.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230976/PlacementProject/image86_emxmir.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230976/PlacementProject/image87_xzx85p.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230976/PlacementProject/image88_dn8cwo.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230976/PlacementProject/image89_egh18i.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230976/PlacementProject/image90_zuuzfa.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image91_dvv58r.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image92_rpv2vn.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image93_thxlku.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image94_axxcgf.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image95_ayxnwq.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image96_xp94lf.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image97_hcpk8t.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image98_rrm9bb.jpg",
    "https://res.cloudinary.com/dipkglaib/image/upload/v1686230977/PlacementProject/image99_tdirbb.jpg",
  ];

  return (
    <div>
      <div className="section1 animated fadeIn">
        <p>
          We help connect talented students with top companies through our
          placement management website. Our platform offers personalized career
          guidance, expert coaching, and support to help you land your dream
          job.
          <br></br>
          <br></br> We also provide a range of services such as resume building,
          interview preparation, company research, and career counseling to
          ensure you are fully equipped for the job search process.
        </p>
        <div className="section1-image right">
          <img
            src="https://dme.ac.in/wp-content/uploads/2021/06/placement-3.png"
            alt="Placement Management"
          />
        </div>
      </div>

      <div className="section2 animated fadeIn">
        <h3>Our Services</h3>
        <ul>
          <li className="circle">Resume Building</li>
          <li className="circle">Interview Preparation</li>
          <li className="circle">Company Research</li>
          <li className="circle">Career Counseling</li>
        </ul>
      </div>

      <div className="section3 animated fadeIn">
        <h3>Our Partners Companies</h3>
        <br></br>
        <br></br>
        <div className="company-grid">
          {/* Generate image elements dynamically */}
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Company ${index}`} />
          ))}
        </div>
      </div>

      <div className="section4 animated fadeIn">
        <h3>Why Choose Us</h3>
        <ul>
          <li className="square">Personalized Career Guidance</li>
          <li className="square">Expert Coaching & Support</li>
          <li className="square">Access to Top Companies</li>
          <li className="square">Proven Track Record of Success</li>
        </ul>
      </div>

      <div className="section5 animated fadeIn">
        <h3>Our Team</h3>
        <ul>
          <li className="circle-2">
            Ridhanshu Jasrotia <br></br> Coordinator
          </li>
          <li className="circle-2">
            Rahul Rana <br></br> Career Coach
          </li>
          <li className="circle-2">
            Riya Sharma <br></br> Resume Specialist
          </li>
          <li className="circle-2">
            Rahul Kumar <br></br> Interview Coach
          </li>
        </ul>
      </div>

      <div className="section6 animated fadeIn">
        <h3>FAQ</h3>
        <ul>
          <li>How do I sign up for your services?</li>
          <p className="answer">
            You can sign up for our services by filling out the registration
            form on our website or contacting us directly via phone or email.
          </p>
          <li>What is the cost of your services?</li>
          <p className="answer">
            Our services are priced based on your specific needs and the amount
            of support you require. Please contact us for a quote.
          </p>
          <li>How long does it take to find a job through your website?</li>
          <p className="answer">
            The length of time it takes to find a job through our website varies
            depending on a number of factors, including your experience level,
            the types of jobs you're interested in, andany current job market
            conditions. However, we work diligently to match you with the best
            possible job opportunities and help you through the application and
            interview process, so you can find a job as quickly as possible.
          </p>
          <li>Do you offer any guarantees?</li>
          <p className="answer">
            We do not offer any guarantees, as finding a job ultimately depends
            on a variety of factors that are outside of our control. However, we
            are committed to providing you with the best possible guidance and
            support throughout your job search to help increase your chances of
            success.
          </p>
        </ul>
      </div>
      <div className="testimonils">
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
