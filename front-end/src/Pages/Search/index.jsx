import React from "react";

import { NormalHeader } from "../../Components/Utils/Header";
import Filter from "./Components/Filter";
import Item from "./Components/Item";

function Search() {
  return (
    <div className='height-100vh width-max flex-container flex-direction-column'>
      <NormalHeader />
      <div className='min-height-150'>
        <h1 className='default-black-title'>Trabalhos</h1>
        <div className='width-max flex-container height-max'>
          <Filter></Filter>

          <div className='item-list-container'>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
