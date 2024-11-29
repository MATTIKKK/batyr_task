export type StudentInfoType = {
  name: string;
  surname: string;
  img: string;
};

export type TableItemType = {
  id: number;
  type: string;
  created_at: string;
  status: string;
  student_info: StudentInfoType;
};

export type TableEntryType = {
  id: number;
  title: string;
  status: 'pending' | 'declined' | 'approved';
  table_items: TableItemType[];
};

export type InputFieldType = {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value?: string;
  handleChange?: (e: any) => void;
};

export type TextareaFieldType = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
