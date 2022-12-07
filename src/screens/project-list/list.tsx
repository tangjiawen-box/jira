import React from 'react';
import userEvent from "@testing-library/user-event"
import { listenerCount } from "process"
import { StringifyOptions } from "querystring"
import { User } from "./search-panel"
import { Table } from 'antd';
import { spawn } from 'child_process';
import dayjs from 'dayjs';

interface List {
    id: string,
    name: string,
    personId: string,
    organization: string,
    created: number,
}

interface Prop {
    list: List[],
    user: User[],
  
}

export const List = ({list, user, }: Prop) => {
    return <Table  
    rowKey={"id"} 
    pagination={false} 
    dataSource={list} columns={[{
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
    },  {
        title: '部门',
        dataIndex: 'organization'
    },{
        title: '负责人',
        render(value, lists) {
            return <span>
                        {
               user.find(user => user.id === lists.personId)?.name || "未知"
           }
            </span>
        }
    },
    {
        title: '创建时间',
        render(value, lists) {
            return <span>
                {
                    lists.created ? dayjs(lists.created).format('YYYY-MM-DD') : '无'
                }
            </span>
        }
    }
        
    ]} >
   
    </Table>
}