import React, { Component } from "react";

import CheckoutList from "./CheckoutList";

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.getItemData = this.getItemData.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id){
    this.props.onRemoveItem(id);
  }

  getItemData() {
    const items = this.props.data.filter(item => {
      return this.props.checkoutItems.includes(item.id);
    });
    return items;
  }

  render() {
    const items = this.getItemData();
    return (
        <CheckoutList
            items={items}
            onRemoveItem={this.removeItem}
        />
        );
  }
}
