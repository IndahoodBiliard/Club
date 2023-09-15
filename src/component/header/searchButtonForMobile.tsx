import React, { FC, useEffect, useState } from 'react';
import { Button, Drawer, Space } from 'antd';

const SearchButtonMobile: FC = () => {
  const [visible, setVisible] = useState(false);
  // const [listSearch, setListSearch] = useState<HotSearchType[]>();

  // useEffect(() => {
  //   (async () => {
  //     const data = await accountService.getListSearch();
  //     setListSearch(data || []);
  //   })();
  // }, []);

  // const onSubmit = async (dataForm: SearchHeaderType) => {
  //   if (dataForm.key) {
  //     navigator({ pathname: '/search', search: `?${createSearchParams({ ...dataForm })}` });
  //   }
  // };

  // const onchangeSearchItem = (dataSearch: string) => {
  //   setValue('key', dataSearch);
  //   handleSubmit(onSubmit)();
  // };

  // const renderListSearch = () => {
  //   if (listSearch) {
  //     return listSearch.map((data) => {
  //       if (!data.deleted)
  //         return (
  //           <Button
  //             // type="ghost"
  //             key={data._id}
  //             className="search_item"
  //             onClick={() => onchangeSearchItem(propertyLang(data, 'name'))}
  //           >
  //             {propertyLang(data, 'name')}
  //           </Button>
  //         );
  //     });
  //   }
  // };

  return (
    <>
      <Button
        className="menuRight"
        type="text"
        onClick={() => setVisible(true)}
        // icon={<SearchSVG width={24} height={24} />}
      >123123</Button>
      <Drawer
        placement="left"
        size={'default'}
        width={'100vw'}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <div style={{ height: '100%' }} className="search_page">
          <div className="body_search">
            <div className="title_search">popular_search_keyword</div>
            <Space size={8} className="list_search" wrap>
              {/* {renderListSearch()} */}
            </Space>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SearchButtonMobile;
