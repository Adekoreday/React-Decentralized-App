import React, { useState, Suspense } from 'react';
import "./index.css"

const Aside = React.lazy(() => import('../../aside'));
const DashBoardLayout = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <section className="dashboard__container" >
              <Suspense fallback={<div>Loading...</div>}>
                 <Aside />
              </Suspense>
            <div>{props.children}</div>
        </section>
    );
};

export default DashBoardLayout;