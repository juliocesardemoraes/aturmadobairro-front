import { InputProps } from '@/@types'
import React from 'react'

export const InputVolunteerForm = ({ placeholder }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-12 rounded-xl border border-white p-2 text-black-100 placeholder:text-black-100 md-7:h-10 md-7:text-xs md-7:placeholder:text-xs"
    />
  )
}
