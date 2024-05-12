import {Component} from 'react'
import './index.css'
import Header from '../Header'
import ProductItem from '../ProductItem'

class HomePage extends Component {
  state = {
    blogsData: [],
    idealArrow: false,
    occasionArrow: false,
    workArrow: false,
    fabricArrow: false,
    segmentArrow: false,
    suitableArrow: false,
    rawArrow: false,
    paternArrow: false,
    showFilter: false,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    this.setState({blogsData: data})
  }

  onClickShowHideFilter = () => {
    this.setState(prevState => ({showFilter: !prevState.showFilter}))
  }

  onClickIdealArrow = () => {
    this.setState(prevState => ({idealArrow: !prevState.idealArrow}))
  }

  onClickoccasionArrow = () => {
    this.setState(prevState => ({occasionArrow: !prevState.occasionArrow}))
  }

  onClickWorkArrow = () => {
    this.setState(prevState => ({workArrow: !prevState.workArrow}))
  }

  onClickFabricArrow = () => {
    this.setState(prevState => ({fabricArrow: !prevState.fabricArrow}))
  }

  onClickSegmentArrow = () => {
    this.setState(prevState => ({segmentArrow: !prevState.segmentArrow}))
  }

  onClickSuitableArrow = () => {
    this.setState(prevState => ({suitableArrow: !prevState.suitableArrow}))
  }

  onClickRawArrow = () => {
    this.setState(prevState => ({rawArrow: !prevState.rawArrow}))
  }

  onClickPatternArrow = () => {
    this.setState(prevState => ({paternArrow: !prevState.paternArrow}))
  }

  onchangeDownArrow = () => (
    <div className="unselcet-container">
      <p> UNSELECT ALL</p>
      <div className="customizable-head">
        <input type="checkbox" htmlFor="customizable" />
        <p className="customizable">MAN</p>
      </div>
      <div className="customizable-head">
        <input type="checkbox" htmlFor="customizable" />
        <p className="customizable">WOMAN</p>
      </div>
      <div className="customizable-head">
        <input type="checkbox" htmlFor="customizable" />
        <p className="customizable">BABYS</p>
      </div>
    </div>
  )

  render() {
    const {
      blogsData,
      idealArrow,
      occasionArrow,
      workArrow,
      fabricArrow,
      segmentArrow,
      suitableArrow,
      rawArrow,
      paternArrow,
      showFilter,
    } = this.state
    return (
      <div className="header-container">
        <Header />
        <h1 className="discover-our-product-heading">DISCOVER OUR PRODUCTS</h1>
        <p className="page-desc">
          {' '}
          Lorem ipsum dolor sit amet consecuter. Amet esure perseure roncus{' '}
          <br /> sylfins to done. Dolor integer to the preicd cmvid amet dolor.
        </p>
        <div className="filter-rec-container">
          <div className="item-filter-cont">
            <p>3425 ITEMS</p>
            <button className="filter-btn" type="button">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1715491537/arrow-left_kz2hov.png"
                className="arrow"
                alt="arrow"
                onClick={this.onClickShowHideFilter}
              />{' '}
              {showFilter ? 'SHOW FILTER' : 'HIDE FILTER'}
            </button>
          </div>
          <select className="sort-filter-container">
            <option className="method">RECOMMENDED</option>
            <option className="method">NEWEST FIRST</option>
            <option className="method">POPULAR</option>
            <option className="method">PRICE: HIGH TO LOW</option>
            <option className="method">PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <div className="main-card-container">
          {showFilter ? (
            ''
          ) : (
            <div className="customizable-cont">
              <div className="customizable-head">
                <input type="checkbox" htmlFor="customizable" />
                <p className="customizable">CUSTOMIZBLE</p>
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3>IDEAL FOR</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickIdealArrow}
                  />
                </div>
                <p>ALL</p>
                {idealArrow ? this.onchangeDownArrow() : ''}
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3>OCCASION</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickoccasionArrow}
                  />
                </div>
                <p>ALL</p>
                {occasionArrow ? this.onchangeDownArrow() : ''}
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3>WORK</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickWorkArrow}
                  />
                </div>
                <p>ALL</p>
                {workArrow ? this.onchangeDownArrow() : ''}
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3>FABRIC</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickFabricArrow}
                  />
                </div>
                <p>ALL</p>
                {fabricArrow ? this.onchangeDownArrow() : ''}
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3>SEGMENT</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickSegmentArrow}
                  />
                </div>
                <p>ALL</p>
                {segmentArrow ? this.onchangeDownArrow() : ''}
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3>SUITABLE</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickSuitableArrow}
                  />
                </div>
                <p>ALL</p>
                {suitableArrow ? this.onchangeDownArrow() : ''}
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3>RAW MATERIALS</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickRawArrow}
                  />
                </div>
                <p>ALL</p>
                {rawArrow ? this.onchangeDownArrow() : ''}
              </div>
              <div className="ideal-for-container">
                <div className="ideal-for-content">
                  <h3> PATTERN</h3>
                  <img
                    src="https://res.cloudinary.com/drgheojrx/image/upload/v1715503353/arrow-left_cziupz.png"
                    alt="down-arrow"
                    className="down-arrow-icon"
                    onClick={this.onClickPatternArrow}
                  />
                </div>
                <p>ALL</p>
                {paternArrow ? this.onchangeDownArrow() : ''}
              </div>
            </div>
          )}
          <ul className="product-list-container">
            {blogsData.map(each => (
              <ProductItem blogData={each} key={each.id} />
            ))}
          </ul>
        </div>
        <div className="footer-container">
          <div className="first-container">
            <div className="first-to-know-cont">
              <h4>BE THE FIRST TO KNOW</h4>
              <p className="fotter-para">Sign Up for updated from meta use</p>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Type your e-mail"
                  className="input"
                />
                <button className="subscribe-button" type="button">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="contact-us-cont">
              <h4>CONTACT US</h4>
              <p className="fotter-para">+44 221133 5360</p>
              <p className="fotter-para">customercare@metamause</p>
              <h4>CORRENCY</h4>
              <div className="customizable-head">
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1715514338/United_States_of_America_US_fxlfz9.png"
                  className="currency-flag"
                  alt="flag"
                />
                <p className="fotter-para"> +USD</p>
              </div>
              <p className="fotter-para">
                Transaction will be complete in euros and currecny refrence
                available an hour
              </p>
            </div>
          </div>
          <hr className="break-line" />
          <div className="second-container">
            <div className="metamuse-container">
              <h4>Metta muse</h4>
              <p className="footer-para"> About Us </p>
              <p className="footer-para"> Stories </p>
              <p className="footer-para"> Artisens </p>
              <p className="footer-para"> Boutiqs </p>
              <p className="footer-para"> Contact US </p>
              <p className="footer-para"> EU Compiances Docs </p>
            </div>
            <div className="metamuse-container">
              <h4>QUICK LINKS</h4>
              <p className="footer-para"> Orders and Shipping </p>
              <p className="footer-para"> Join/Login As sallers </p>
              <p className="footer-para"> Payment and Price </p>
              <p className="footer-para"> Return And Refunds </p>
              <p className="footer-para"> Faqs </p>
              <p className="footer-para"> Privacy Policy </p>
              <p className="footer-para"> Terms & Condition </p>
            </div>
            <div className="follow-us-contaioner">
              <h4>FOLLOW US</h4>
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1715515403/Frame_28_jx0vud.png"
                alt="payoption"
                className="social-img"
              />
              <h4>metta muse ACCEPTS</h4>
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1715515485/Frame_136278_xnogis.png"
                alt="payoption"
              />
            </div>
          </div>
          <p className="footer-copyright">
            copuright @ 2023 mettamuse. All rights reserved
          </p>
        </div>
      </div>
    )
  }
}
export default HomePage
