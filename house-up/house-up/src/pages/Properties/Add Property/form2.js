import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

class form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyId: '',
      description: '',
      adTitle: '',
      contactEmail: '',
      contactName: '',
      contactNumber: '',
      price: '',
      user: {},
      userId: '',
      currencyData: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    const auth = props.auth ? props.auth : {};

    let stateChanged = false;
    let changedState = {};

    if (
      auth &&
      auth.user &&
      JSON.stringify(state.user) !== JSON.stringify(auth.user)
    ) {
      changedState.user = auth.user;
      stateChanged = true;
    }

    if (stateChanged) {
      return changedState;
    }

    return null;
  }

  componentDidMount() {
    const { user } = this.state;
    const contactEmail = user.emailAddress ? user.emailAddress : '';
    const firstName = user.firstName ? user.firstName : '';
    const lastName = user.lastName ? user.lastName : '';
    const contactName = `${firstName} ${lastName}`;
    const contactNumber = user.msisdn ? user.msisdn : '';
    const userId = user.userId ? user.userId : '';
    const { form2Data } = this.props;
    this.setState({
      contactEmail,
      contactName,
      contactNumber,
      userId,
      currencyId: form2Data && form2Data.currencyId ? form2Data.currencyId : '',
      description:
        form2Data && form2Data.description ? form2Data.description : '',
      adTitle: form2Data && form2Data.adTitle ? form2Data.adTitle : '',
      price: form2Data && form2Data.price ? form2Data.price : '',
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  dropDownDatahandler = (currencyData) => {
    this.setState({
      currencyData,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const {
      description,
      currencyId,
      adTitle,
      contactEmail,
      contactName,
      contactNumber,
      price,
      userId,
      currencyData,
    } = this.state;
    const form2Data = {
      description,
      currencyId:
        currencyId === ''
          ? currencyData && currencyData.length && currencyData[0].id
          : currencyId,
      adTitle,
      contactName,
      contactEmail,
      contactNumber,
      price: Number(price),
      userId,
    };

    this.props.form2DataHandler(form2Data);

    this.props.formShowHandler(2);
  };

  render() {
    let {
      description,
      contactName,
      currencyId,
      contactEmail,
      contactNumber,
      adTitle,
      price,
      currencyData,
    } = this.state;
    const dropDownData1 = this.props.dropDownData;
    if (
      dropDownData1 &&
      dropDownData1.currencies &&
      dropDownData1.currencies.length &&
      currencyData.length === 0
    ) {
      this.dropDownDatahandler(
        dropDownData1 && dropDownData1.currencies
          ? dropDownData1.currencies
          : []
      );
    }

    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div
            className="add-property-conatiner"
            style={{ backgroundColor: '#F5F5F5' }}
          >
            <div className="row border-property">
              <div className="col-md-12">
                <h1 className="titles-property">List your property</h1>
                <p className="pairing-industry">
                  Pairing the industry's top technology with unsurpassed local
                  expertise.
                </p>
                <Nav variant="pills" defaultActiveKey="/2">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="/1"
                      className="tabs"
                      onClick={() => this.props.formShowHandler(0)}
                    >
                      Step 1
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="/2"
                      className="tabs"
                      onClick={() => this.props.formShowHandler(1)}
                    >
                      Step 2
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="/3"
                      className="tabs"
                      onClick={() => this.props.formShowHandler(2)}
                    >
                      Step 3
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h6 className="titles-property">*Ad title</h6>
                <input
                  className="input-feilds-property"
                  placeholder="Enter a title for your property..."
                  name="adTitle"
                  value={adTitle}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <h6 className="titles-property">Currency</h6>
                    <select
                      className="input-feilds-property"
                      onChange={this.onChange}
                      name="currencyId"
                      value={currencyId}
                      required
                    >
                      {currencyData && currencyData.length
                        ? currencyData.map((currency, idx) => (
                            <option key={idx} value={currency.id}>
                              {' '}
                              {currency.lable}
                            </option>
                          ))
                        : ''}
                    </select>
                  </div>
                  <div className="col-md-8">
                    <h6 className="titles-property">*Price</h6>
                    <input
                      type="number"
                      className="input-feilds-property"
                      onChange={this.onChange}
                      placeholder="$"
                      name="price"
                      value={price}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-property pt-10">
              <div className="col-md-12">
                <h6 className="titles-property">Description</h6>
                <textarea
                  className="input-feilds-property"
                  name="description"
                  value={description}
                  onChange={this.onChange}
                  placeholder="More detail about your property..."
                  style={{ height: '120px' }}
                />
              </div>
            </div>

            <h1 className="titles-property" style={{ fontFamily: 'light' }}>
              Contact info
            </h1>
            <p className="titles-property">
              You can edit your contact info anytime in your profile settings.
            </p>
            <div className="row">
              <div className="col-md-4 mb-10">
                <h6 className="titles-property">Contact email</h6>
                <input
                  type="text"
                  className="input-feilds-property"
                  onChange={this.onChange}
                  placeholder="email"
                  name="contactEmail"
                  value={contactEmail}
                  required
                />
                <span className="title-property">
                  Your email will not be shared.
                </span>
              </div>
              <div className="col-md-4 mb-10">
                <h6 className="titles-property">Contact name</h6>
                <input
                  type="text"
                  className="input-feilds-property"
                  value={contactName}
                  onChange={this.onChange}
                  placeholder="name"
                  name="contactName"
                  required
                />
              </div>
              <div className="col-md-4 mb-10">
                <h6 className="titles-property">Contact number</h6>
                <input
                  type="text"
                  className="input-feilds-property"
                  placeholder="Contact number"
                  onChange={this.onChange}
                  name="contactNumber"
                  value={contactNumber}
                  required
                />
              </div>
            </div>
            <div className="row mb-40">
              <div className="col-6">
                <div className="btn-div-prev">
                  <button
                    className="btn btn-lg btn-primary btn-property"
                    onClick={() => this.props.formShowHandler(0)}
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="btn-div">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-property"
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(form2);
