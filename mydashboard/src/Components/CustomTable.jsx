import { Table } from "antd";
import React, { useState } from "react";

const CustomTable = props => {
   const [state, setState] = useState({ pageSize: props.pageSize });
   const rowSelection = {
      type: props.rowSelectionType || "checkbox", //type
      selectedRowKeys: props.selectedRowKeys || [], // selected rows

      // function for onchanging the selected and un selected rows
      onChange: (selectedKeys, selectedRows) => {
         if (props.onChangeRowSelection instanceof Function) {
            props.onChangeRowSelection(selectedRows, selectedKeys);
         }
      },
   };

   let customTableColumns =
      props.columns &&
      props.columns?.map(el => {
         if (el.sort) {
            el.sorter = (a, b) => Number(a[el.dataIndex]) - Number(b[el.dataIndex]);
         }

         if (el.textSort) {
            el.sorter = (a, b) => a[el.dataIndex].localeCompare(b[el.dataIndex]);
         }

         if (el.filters && el.filters?.length > 0) {
            el.onFilter = (value, row) => row[el.dataIndex].indexOf(value) === 0;
         }

         return el;
      });

   const onChange = (pagination, filters, sorter, extra) => {
      console.log("params", pagination, filters, sorter, extra);
      setState({ ...state, pageSize: pagination.pageSize });
   };

   return (
      <div style={{marginTop:'60px'}}>
         <Table
            dataSource={props.data || []}
            columns={customTableColumns || []}
            rowKey={"productID"}
            rowSelection={props.isRowSelection ? rowSelection : false}
            onChange={onChange}
            pagination={{ pageSize: state.pageSize || 10 }}
            // scroll={{ x: 1500 }}
         />
      </div>
   );
};

export default CustomTable;
