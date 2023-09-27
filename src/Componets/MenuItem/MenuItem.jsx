import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OrderTab from './OrderTab/OrderTab';
import MenuData from '../../CustomHooks/MenuData/MenuData';
import useCategory from '../../CustomHooks/GetCategories';

const MenuItem = () => {
  const { menu, isLoading } = MenuData();
  const [allCategories, isCategoryLoading] = useCategory()

  if (isLoading || isCategoryLoading) {
    return <span className="loading loading-spinner loading-lg text-center mx-auto"></span>;
  }
  const deserts = menu?.filter(item => item.category === 'dessert');
  const soup = menu?.filter(item => item.category === 'soup');
  const salad = menu?.filter(item => item.category === 'salad');
  const pizza = menu?.filter(item => item.category === 'pizza');
  const drinks = menu?.filter(item => item.category === 'drinks');


  const handleCategory = (category) => { }
  return (
    <div className="mx-auto w-full">
      
        <div className=' '>
          <Tabs>
            <TabList className="flex flex-wrap shadow-2xl w-[100%] font-serif rounded-full bg-gray-300 rounded-lg p-2 justify-between">
              {
                allCategories?.map((category, index) =>
                  <Tab key={index} onClick={() => handleCategory(category)} className="py-2 px-4 cursor-pointer transition-colors rounded-2xl hover:bg-gray-500 uppercase">
                    {category?.category_name}

                  </Tab>)
              }


            </TabList>




            <TabPanel >
              <OrderTab items={deserts}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>
          </Tabs>
        </div>
       
      
    </div>
  );
};

export default MenuItem;
