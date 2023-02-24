export type TUser = {
  id?: number;
  employeeId?: number | string;
  email?: string;
  name?: string;
  location?: string;
  hasCheckedIn?: boolean;
};
export interface IUserManagerProp {
  rows: Array<TUser>;
  setSearch: (text: string) => void;
  search: string;
  handleFilters: (type: string) => void;
}

export type TEmployeeUpdatePayload = Array<{
  employeeId: string | number;
  email: string;
  hasCheckedIn: boolean;
}>;
