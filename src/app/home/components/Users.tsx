'use client'
import React, { useState } from 'react'
import { dateTransform } from '@/utils/dateTransform'
import { set } from 'mongoose'
interface Users {
  id: number
  name: string
  email: string
  createdAt: string
}
const Users = ({ users }: { users: Users[] }) => {
  return (
    <div>
      <table className='text-left border m-[1rem] text-sm font-light'>
        <thead className='border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600'>
          <tr className='border-b text-center'>
            <th scope='col' className='px-6 py-4'>
              Users Table
            </th>
          </tr>
          <tr>
            <th scope='col' className='px-6 py-4'>
              #
            </th>
            <th scope='col' className='px-6 py-4'>
              Id
            </th>{' '}
            <th scope='col' className='px-6 py-4'>
              Email
            </th>
            <th scope='col' className='px-6 py-4'>
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: Users, index: number) => {
            const isEven = index % 2 === 0
            const bg = isEven ? 'bg-white dark:bg-neutral-600' : 'bg-neutral-100 dark:bg-neutral-700'
            return (
              <tr key={index} className={`${bg} border-b font-medium dark:border-neutral-500`}>
                <td className='whitespace-nowrap px-6 oy-4 font-medium'>{index}</td>
                <td className='whitespace-nowrap px-6 py-4'>{user.id}</td>
                <td className='whitespace-nowrap px-6 py-4'>{user.email}</td>
                <td className='whitespace-nowrap px-6 py-4'>{dateTransform(user.createdAt)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Users
