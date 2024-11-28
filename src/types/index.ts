export type StudentInfoType = {
  name: string;
  surname: string;
  img: string;
}

export type TableItemType = {
  id: number;
  type: string;
  created_at: string;
  status: string;
  student_info: StudentInfoType;
}

export type TableEntryType = {
  id: number;
  title: string;
  status: 'pending' | 'declined' | 'approved';
  table_items: TableItemType[];
}
