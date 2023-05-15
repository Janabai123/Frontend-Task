import "./frame-component.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-root">
      <div className="istock-1329831677-1-parent">
        <img
          className="istock-1329831677-1-icon"
          alt=""
          src="/istock1329831677-1@2x.png"
        />
        <div className="rectangle-div" />
      </div>
      <div className="frame-group">
        <div className="building-parent">
          <img className="building-icon" alt="" src="/building.svg" />
          <div className="real-estate">Real ESTATE</div>
        </div>
        <div className="infra-and-roads-parent">
          <div className="real-estate">INFRA AND rOADS</div>
          <img
            className="bridge-svgrepo-com-1-icon"
            alt=""
            src="/bridgesvgrepocom-1.svg"
          />
        </div>
        <div className="transporters-parent">
          <div className="real-estate">Transporters</div>
          <img className="track-icon" alt="" src="/track.svg" />
        </div>
        <div className="group-parent">
          <img className="frame-child2" alt="" src="/group-1657.svg" />
          <div className="suppliers">SUPPLIERS</div>
        </div>
        <div className="industry-parent">
          <div className="real-estate">INDUSTRY</div>
          <img className="frame-child3" alt="" src="/group-1608.svg" />
        </div>
        <div className="consultants-parent">
          <div className="real-estate">CONSULTANTS</div>
          <img className="frame-child4" alt="" src="/group-1610.svg" />
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-child5" />
        <div className="log-in">Log in</div>
        <img className="mdiaccount-icon" alt="" src="/mdiaccount.svg" />
      </div>
      <div className="search-engines-of-construction-parent">
        <b className="search-engines-of">
          Search Engines Of Construction Industry
        </b>
        <div className="rectangle-group">
          <div className="frame-child6" />
          <div className="search-anything-anywhere" >
          <input type='text'  placeholder="Search Anything Anywhere" size='50' style={{fontSize:'20px',border:'none',height:'30px',outline:'none'}}></input>
          </div>
         

          <img className="frame-child7" alt="" src="/group-1467.svg" />
        </div>
        <div className="search-by-parent">
          <div className="search-by">Search By :</div>
          <div className="component-6">
            <div className="company-name"><input type='radio' name='select' style={{height:'20px', width:'20px'}}></input>Company Name</div>
            {/* <img className="component-6-child" alt="" src="/group-1386.svg" /> */}
          </div>
          <div className="component-8">
            <div className="company-name"><input type='radio' name='select' style={{height:'20px', width:'20px'}}></input>All Profile</div>
            {/* <img className="component-6-child" alt="" src="/group-13861.svg" /> */}
          </div>
          <div className="component-7">
            <div className="company-name"><input type='radio' name='select' style={{height:'20px', width:'20px'}}></input>Product/Services Name</div>
            {/* <img className="component-6-child" alt="" src="/group-13862.svg" /> */}
          </div>
        </div>
      </div>
      
     
     
    </div>

   
  );
};

export default FrameComponent1;
