import React, { useEffect } from "react";
import Header from "@/components/Header";
import { LoginApi } from "@/services/login";

const Home: React.FC = () => {
  const getUser = async () => {
    const result = await LoginApi<API.GET_USER_RESULT>({
      username: "kevin",
      password: "123456",
    });
    console.log(result);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      Dashboard
      <Header title="测试数据" />
    </div>
  );
};
export default Home;
