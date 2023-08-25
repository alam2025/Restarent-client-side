import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OrderTab from './OrderTab/OrderTab';
import MenuData from '../../CustomHooks/MenuData/MenuData';
const MenuItem = () => {
      const { menu, isLoading, error } = MenuData();
      // console.log(data, isLoading)
      const deserts = menu?.filter(item => item.category == 'dessert')
      const soup = menu?.filter(item => item.category == 'soup')
      const salad = menu?.filter(item => item.category == 'salad')
      const pizza = menu?.filter(item => item.category == 'pizza')
      const drikns = menu?.filter(item => item.category == 'drinks')

      if (isLoading) return <>
            <span className="loading loading-spinner loading-lg text-center mx-auto"></span></>
      return (
            <>
                   
      <Tabs>
      <div className="">
      <TabList className="flex bg-gray-200  w-1/2 mx-auto rounded-lg p-2  justify-between">
          <Tab className="py-2 px-4 cursor-pointer transition-colors rounded-2xl hover:bg-gray-500">
            Desert
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer transition-colors rounded-2xl hover:bg-gray-500">
            Soup
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer transition-colors rounded-2xl hover:bg-gray-500">
            Salad
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer transition-colors rounded-2xl hover:bg-gray-500">
            Pizza
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer transition-colors rounded-2xl hover:bg-gray-500">
            Drinks
          </Tab>
        </TabList>
        </div>
       
       

        <TabPanel>
         {<OrderTab items={deserts}></OrderTab>}
        </TabPanel>
        <TabPanel>
        {<OrderTab items={soup}></OrderTab>}
        </TabPanel>

        <TabPanel>
        {<OrderTab items={salad}></OrderTab>}
        </TabPanel>

        <TabPanel>
        {<OrderTab items={pizza}></OrderTab>}
        </TabPanel>

    
    

        <TabPanel>
        {<OrderTab items={drikns}></OrderTab>}
        </TabPanel>
      </Tabs>


            </>
      );
};

export default MenuItem;