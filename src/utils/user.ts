import { User } from "screens/project-list/search-panel";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { useEffect } from "react";


export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return result;
};
function cleanObject(arg0: Partial<User>): object | undefined {
    throw new Error("Function not implemented.");
}

