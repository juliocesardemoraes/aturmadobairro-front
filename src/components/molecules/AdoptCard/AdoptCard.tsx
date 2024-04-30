'use client'
import { ModalAdoptCard } from '@/components/atoms/ModalAdoptCard/ModalAdoptCard'
import Image from 'next/image'
import React, { useState } from 'react'

export const AdoptCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenAndCloseModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <section className="flex items-center justify-center gap-2 rounded-2xl bg-white-100 md-10:flex-col md-10:rounded-3xl">
      <Image
        src="/heroDog1.png"
        alt=""
        width={171}
        className="md-10:w-full"
        height={234}
      ></Image>
      <div className="flex flex-col items-end justify-center gap-2 p-2 pr-4 text-black-100">
        <h1 className="w-full text-left text-2xl font-medium md-9:text-xl">
          Doguinho
        </h1>
        <ul className="flex flex-col items-start justify-center gap-2 md-9:text-xs">
          <li>Idade: 5</li>
          <li>Porte: Grande</li>
          <li>Data de entrada: 24/05/2022</li>
          <li>Características: Bem ativo e carinhoso</li>
        </ul>
        <button
          onClick={handleOpenAndCloseModal}
          className="cursor-pointer rounded border-2 border-secondary bg-secondary p-1 font-semibold duration-300 hover:scale-105 md-9:text-sm"
        >
          Quero adotar!
        </button>
      </div>
      {isModalOpen && (
        <ModalAdoptCard handleOpenAndCloseModal={handleOpenAndCloseModal} />
      )}
    </section>
  )
}
