import React, { useState, Suspense } from 'react';
import Aside from '../../aside'
import "./index.css"

const DashBoardLayout = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <section className="dashboard__container" >
              <Suspense fallback={<div>Loading...</div>}>
                 <Aside />
              </Suspense>
            <div className="dashboard__content">{props.children}</div>
        </section>
    );
};

export default DashBoardLayout;