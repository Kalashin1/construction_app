import { SCREENS } from "../../../../../../navigation/constants";
import { ChatIcon, FileManagerIcon, KanbanIcon, ShopIcon, TodoIcon } from "../../svgs";

export const app_array = (user_id: string) => ([
  {
    svg: (<TodoIcon />),
    text: 'Todo App',
    link: `/todo/${user_id}`,
    description: ' MAGGA Todo UI kit is a simple to-do list and an task management app.'
  },
  {
    svg: (<ShopIcon />),
    text: 'Shop',
    link: `/shop/${user_id}`,
    description: 'MAGGA Shop is responsive and high-quality UI design kit'
  },
  {
    svg: (<ChatIcon />),
    text: 'Chat App',
    link: `/chat/${user_id}`,
    description: 'MAGGA prebuilt Messaging UI kit includes designs for social chat'
  },
  {
    svg: (<FileManagerIcon />),
    text: 'File Manager',
    link: `${SCREENS.FILE_MANAGER}`,
    description: 'MAGGA File Manager UI Kit is designed with modern design trends.'
  },
  {
    svg: (<KanbanIcon />),
    text: 'Kanban Board',
    link: `${SCREENS.KANBAN}`,
    description: 'The Kanban Board to keep track of your personal and work tasks.'
  }
])