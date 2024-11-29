import React from 'react';
import { TableEntryType } from './types';
import Table from './components/table/Table';
import boy1 from './static/img/boy1.png';
import boy2 from './static/img/boy2.png';
import girl1 from './static/img/girl1.png';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Form from './components/form/Form';

const tableList: TableEntryType[] = [
  {
    id: 1,
    title: 'Дело №1. Распитие алкоголя в университете 19.11.2024',
    status: 'pending',
    table_items: [
      {
        id: 1,
        type: 'Распитие алкоголя в университете',
        created_at: '14.11.2024',
        status: 'active',
        student_info: {
          name: 'Аружан',
          surname: 'Барушева',
          img: girl1,
        },
      },
      {
        id: 2,
        type: 'Распитие алкоголя в университете',
        created_at: '14.11.2024',
        status: 'active',
        student_info: {
          name: 'Аманай',
          surname: 'Балат',
          img: boy1,
        },
      },
      {
        id: 3,
        type: 'Распитие алкоголя в университете',
        created_at: '14.11.2024',
        status: 'active',
        student_info: {
          name: 'Данила',
          surname: 'Дементьев',
          img: boy2,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Дело №2. Курение 19.11.2024',
    status: 'rejected',
    table_items: [
      {
        id: 1,
        type: 'Распитие алкоголя в университете',
        created_at: '14.11.2024',
        status: 'active',
        student_info: {
          name: 'Аружан',
          surname: 'Барушева',
          img: girl1,
        },
      },
    ],
  },
];

function App() {
  return (
    <div className="app">
      {tableList.map((table) => (
        <Table table={table} />
      ))}

      <Button />

      <Card />

      <Form />
    </div>
  );
}

export default App;
