import { useDispatch, useSelector } from "react-redux";
import { getList } from "@/store/modules/article";
import _ from "lodash";
import { useEffect } from "react";
import type { AnyAction } from "@reduxjs/toolkit";
import { Card } from "antd";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList({ currentPage: 2, pageSize: 10 }) as unknown as AnyAction);
  }, []);

  const { list, total } = useSelector((store: any) => store.article);

  return (
    <>
      <Card>
        <h3>测试异步 actions</h3>
        <div>total: {total}</div>
        <ul style={{ padding: 0 }}>
          list:
          {_.map(list, (item: number, key: number) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </Card>
    </>
  );
}
