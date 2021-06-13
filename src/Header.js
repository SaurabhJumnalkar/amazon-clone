import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp';function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png?resize=561%2C160&ssl=1"
        alt="amzon-logo"
      />
      <div className="header_address">
        <div className="header_option1">
          <RoomIcon className="header_optionLineTwoIcon" />

          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Address</span>
          </div>
        </div>
      </div>
      <div className="header_search">
        <div className="header_searchCat">
        All
        </div>
        
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <img alt="indianFlag"
            className="header_searchflag"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/282/flag-india_1f1ee-1f1f3.png"
          />
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_optionBasket">
            <ShoppingBasketSharpIcon />
            <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
  
}
  // Close the dropdown if the user clicks outside of it
  
export default Header;
