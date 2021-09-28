export const defaultDate = () => { 
  const date = new Date();
  return date.getFullYear().toString() + '-' + date.getMonth().toString().padStart(2,'0') + '-' + date.getDate().toString().padStart(2,'0') + 'T' + date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2,'0'); 
};

export const demoContent = [
  {
    id: 1,
    date: defaultDate().split('T')[0],
    hour: '12:30',
    tableId: 1,
    duration: 2,
    type: 'booking',
  },
  {
    id: 2,
    date: defaultDate().split('T')[0],
    hour: '15:30',
    tableId: 1,
    duration: 4,
    type: 'event',
  },
  {
    id: 3,
    date: defaultDate().split('T')[0],
    hour: '14:30',
    tableId: 3,
    duration: 1,
    type: 'booking',
  },
  {
    id: 4,
    date: defaultDate().split('T')[0],
    hour: '18:00',
    tableId: 4,
    duration: 3,
    type: 'event',
  },
];