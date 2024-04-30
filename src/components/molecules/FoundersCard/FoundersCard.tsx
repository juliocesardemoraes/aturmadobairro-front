import { FoundersCardProps } from '@/@types'
import Image from 'next/image'
import React from 'react'

export const FoundersCard = ({ imgPath, name, content }: FoundersCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        className="md-7:w-40 md-7:h-72 h-[23rem] w-48 rounded-2xl"
        src={imgPath}
        alt=""
        width={160}
        height={360}
      ></Image>
      <h3 className="md-5:text-xl text-2xl font-semibold">{name}</h3>
      <p className="md-5:text-sm text-base font-light">{content}</p>
    </div>
  )
}
