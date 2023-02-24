import { useEffect, useState } from "react";
import { TUser } from "../../interfaces/userManager.interface";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { fetchAllUserManagerAsync } from "../../rtk/thunks/userManager.thunks";
import UserManager from "./userManager.component";

const UserManagerContainer = () => {
  const { users } = useAppSelector((state) => state.userManager);
  const dispatch = useAppDispatch();
  const [rows, setRows] = useState<Array<TUser>>([]);
  const [search, setSearch] = useState<string>("");
  const handleFilters = (type: string) => {
    switch (type) {
      case "checkedIn":
        setRows(users?.filter((user:TUser) => user.hasCheckedIn === true));
        break;
      case "all":
        setRows(users);
    }
  };
  useEffect(() => {
    if (search.length) {
      setRows(
        users?.filter(
          (user: TUser) =>
            user?.name?.toLowerCase()?.includes(search.toLowerCase()) ||
            user?.location?.toLowerCase()?.includes(search.toLowerCase()) ||
            user.email?.toLowerCase()?.includes(search.toLowerCase()) ||
            user.employeeId
              ?.toString()
              ?.toLowerCase()
              ?.includes(search.toLowerCase())
        )
      );
    } else {
      setRows(users || []);
    }
  }, [search, users]);

  useEffect(() => {
    dispatch(fetchAllUserManagerAsync());
  }, [dispatch]);
  useEffect(() => {
    if (users.length) setRows(users);
  }, [users]);

  return <UserManager search={search} setSearch={setSearch} rows={rows} handleFilters={handleFilters} />;
};

export default UserManagerContainer;
