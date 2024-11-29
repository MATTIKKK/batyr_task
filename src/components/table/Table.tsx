import React, { useState } from 'react';
import { TableEntryType, TableStatusType } from '../../types';
import Pending from '../../icons/Pending';
import CheckMark from '../../icons/CheckMark';
import Cross from '../../icons/Cross';
import Edit from '../../icons/Edit';
import Delete from '../../icons/Delete';
import ArrowDown from '../../icons/ArrowDown';
import TableItem from '../table-item/TableItem';

type TablePropsType = {
  table: TableEntryType;
};

const categoryList = ['Тип выговора', 'Студент', 'Дата создания', 'Статус', ''];


const Table = ({ table }: TablePropsType) => {
  const [isOpenTableList, setIsOpenTableList] = useState(false);

  const handleSetIsOpenTableList = () => {
    setIsOpenTableList((prev) => !prev);
  };

  const getStatus = (status: TableStatusType) => {
    const statusMap = {
      "pending": {
        color: 'text-gray-500',
        icon: <Pending />,
        label: 'На рассмотрении',
      },
      "approved": {
        color: 'text-green-500',
        icon: <CheckMark />,
        label: 'Одобрено',
      },
      "rejected": { color: 'text-red-500', icon: <Cross />, label: 'Отказано' },
    };

    return statusMap[status];
  };

  const { color, icon, label } = getStatus(table.status);

  return (
    <div className="m-5 p-5 border border-gray-300 rounded-lg bg-gray-50">
      <div className="grid grid-cols-[0.7fr_0.4fr_0.5fr_0.5fr] gap-4 items-center">
        <p className="flex items-center gap-2 max-w-[90%] text-base leading-5">
          <button
            className={`rounded px-1 py-1 ${
              isOpenTableList
                ? 'bg-blue-500 text-white'
                : 'bg-transparent border border-gray-300 text-gray-500'
            }`}
            onClick={handleSetIsOpenTableList}
          >
            <ArrowDown isOpenTableList={isOpenTableList} />
          </button>
          {table.title}
        </p>

        <p className={`flex items-center gap-1 ${color}`}>
          {icon}
          {label}
        </p>

        <p className="text-gray-600">
          Выговоров в деле:{' '}
          <span className="font-bold">{table.table_items.length}</span>
        </p>

        <div className="flex justify-end gap-4">
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            <Edit />
            Редактировать
          </button>
          <button className="flex items-center gap-1 px-3 py-1 border border-red-500 rounded-lg text-red-500 hover:bg-red-100">
            <Delete />
            Удалить
          </button>
        </div>
      </div>

      {table.table_items.length > 0 && (
        <div
          className={`${
            isOpenTableList
              ? 'max-h-[500px] overflow-auto'
              : 'max-h-0 overflow-hidden'
          } transition-all duration-500 ease-in-out`}
        >
          <table className="w-full border-collapse mt-4 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white">
                {categoryList.map((category, index) => (
                  <th key={index} className="px-4 py-2 border-b text-left">
                    {category}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.table_items.map((item, index) => (
                <TableItem key={index} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
