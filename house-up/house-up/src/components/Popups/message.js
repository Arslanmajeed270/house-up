import React, { Component } from 'react';

class message extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="modal fade" id="pxp-contact-agent" tabhome={-1} role="dialog" aria-labelledby="pxpContactAgentModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="modal-title" id="pxpContactAgentModal">
                            Contact Information
                            </h5>
                            <form className="mt-4">
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-name">Name</label>
                                <input type="text" className="form-control" id="pxp-contact-agent-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-email">Email</label>
                                <input type="text" className="form-control" id="pxp-contact-agent-email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-phone">Phone</label>
                                <input type="text" className="form-control" id="pxp-contact-agent-phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-message">Message</label>
                                <textarea className="form-control" id="pxp-contact-agent-message" rows={4} defaultValue={"I would like more information about Beautiful House in Marina on 542 29th Avenue."} />
                            </div>
                            <div className="form-group mt-4">
                                <a href="#" className="pxp-agent-contact-modal-btn">Send Message</a>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default message;