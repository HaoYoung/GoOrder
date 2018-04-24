import React from 'react';


class DriverMain extends React.Component {
    
    render(){ 
        return(
            <div className='container-fluid'>
                <div className="pa4">
                    <div className="overflow-auto">
                        <table className="f6 w-100 mw8 center" cellspacing="0">
                            <thead>
                                <tr className="stripe-dark">
                                    <th className="fw6 f2 tl pa3 bg-white">Order ID</th>
                                    <th className="fw6 f2 tl pa3 bg-white">Customer Address</th>
                                    <th className="fw6 f2 tl pa3 bg-white">Customer Phone#</th>
                                    <th className="fw6 f2 tl pa3 bg-white">Restaurant Address</th>
                                    <th className="fw6 f2 tl pa3 bg-white">Restaurant Phone#</th>
                                    <th className="fw6 f2 tl pa3 bg-white">Action</th>
                                </tr>
                            </thead>
                            <tbody className="lh-copy">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverMain;