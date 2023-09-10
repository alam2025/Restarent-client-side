import React from 'react';
import MenuData from '../../../CustomHooks/MenuData/MenuData';
import Loader from '../../../Componets/Loader';

const Items = () => {
      const {menu, isLoading,refetch} =MenuData();
      if(isLoading)return <Loader/>
      console.log(menu);
      return (
            <div>
                  
            </div>
      );
};

export default Items;