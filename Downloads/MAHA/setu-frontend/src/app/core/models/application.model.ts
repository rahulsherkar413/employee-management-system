 export interface Application {
  id: string;
  applicantName: string;
  aadhaarNo?: string;
  mobileNo?: string;
  serviceType?: string;
  certificateType?: string;
  district?: string;
  taluka?: string;
  address?: string;
  incomeAmount?: number;
  deliveryType?: 'Standard' | 'Tatkal';
  feePaid?: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedDate?: Date | string; // 👈 Allows both Date objects and string dates
}