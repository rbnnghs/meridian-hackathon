// data/donations.ts

export interface Donation {
  id: number;
  userId: number; // Assuming user authentication is in place
  missionId: number;
  amount: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

export const donations: Donation[] = [
  {
    id: 1,
    userId: 1,
    missionId: 1,
    amount: 500,
    date: '2024-04-10',
    status: 'Completed',
  },
  {
    id: 2,
    userId: 1,
    missionId: 2,
    amount: 300,
    date: '2024-05-05',
    status: 'Completed',
  },
  {
    id: 3,
    userId: 1,
    missionId: 3,
    amount: 700,
    date: '2024-06-15',
    status: 'Completed',
  },
  {
    id: 4,
    userId: 1,
    missionId: 4,
    amount: 400,
    date: '2024-07-20',
    status: 'Completed',
  },
  {
    id: 5,
    userId: 1,
    missionId: 5,
    amount: 800,
    date: '2024-08-25',
    status: 'Completed',
  },
  {
    id: 6,
    userId: 1,
    missionId: 6,
    amount: 600,
    date: '2024-09-30',
    status: 'Completed',
  },
  {
    id: 7,
    userId: 1,
    missionId: 7,
    amount: 500,
    date: '2024-10-10',
    status: 'Pending',
  },
  {
    id: 8,
    userId: 1,
    missionId: 8,
    amount: 300,
    date: '2024-10-15',
    status: 'Failed',
  },
  // Add more donations as needed for demo
];
