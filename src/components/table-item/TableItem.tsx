import Eye from '../../icons/Eye';
import Warning from '../../icons/Warning';
import { TableItemType } from '../../types';

type TableItemPropsType = {
  item: TableItemType;
  index: number;
};

const TableItem = ({ item, index }: TableItemPropsType) => {
  return (
    <tr key={index} className="border-b border-gray-200 bg-white-500">
      <td className="px-4 py-2 bg-white">{item.type}</td>
      <td className="px-4 py-2 bg-white">
        <div className="flex items-center gap-2">
          {item.student_info.img && (
            <img
              src={item.student_info.img}
              alt={`${item.student_info.name} ${item.student_info.surname}`}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span>
            {item.student_info.name} {item.student_info.surname}
          </span>
        </div>
      </td>
      <td className="px-4 py-2 bg-white">{item.created_at}</td>
      <td className="px-4 py-2 bg-white">
        {item.status === 'active' ? (
          <p className="flex items-center gap-1 text-orange-500 ">
            <Warning />
            Действует
          </p>
        ) : (
          <></>
        )}
      </td>
      <td className="px-4 py-2 bg-white">
        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
          {' '}
          <Eye />
          Подробнее
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
