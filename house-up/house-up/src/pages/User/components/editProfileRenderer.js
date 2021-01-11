import React from 'react'

export default function editProfileRenderer(props) {
    const { user, singleVendorData, modelHanlder } = props;
    return (
        <React.Fragment>
            { user && user.userTypeId && user.userTypeId === 2 &&
            user.userId === singleVendorData.userId ?
                <div>
                    <button
                        className='btn btn-primary mb-10'
                        onClick={() => modelHanlder('vendorSignupModel', user)}
                    >
                        Edit Profile
                    </button>
                </div>
                : user && user.userTypeId && user.userTypeId !== 2 && 
                user.userId === singleVendorData.userId ?
                <div>
                    <button
                        className='btn btn-primary mb-10'
                        onClick={() => this.props.modelHanlder('userSignupModel', user)}
                    >
                        Edit Profile
                    </button>
                </div>
                : ""
        }
    </React.Fragment>
    )
}
