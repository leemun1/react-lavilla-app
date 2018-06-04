import React from "react";

const Realtors = () => (
  <div className="realtors">
    <h3 className="heading-3">Meet the team</h3>
    <div className="realtors__list">
      <img src="img/realtor-1.jpeg" alt="realtor" className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">Erik Feinmann</h4>
        <p className="realtors__sold">245 properties sold</p>
      </div>

      <img src="img/realtor-2.jpeg" alt="realtor" className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">Kim Brown</h4>
        <p className="realtors__sold">212 properties sold</p>
      </div>

      <img src="img/realtor-3.jpeg" alt="realtor" className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
        <p className="realtors__sold">189 properties sold</p>
      </div>
    </div>
  </div>
);

export default Realtors;
