import { handleOpenAndCloseModalProps } from '@/@types'
import { InputModalAdoptForm } from '../InputModalAdoptForm/InputModalAdoptForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ModalAdoptCard = ({
  handleOpenAndCloseModal,
}: handleOpenAndCloseModalProps) => {
  return (
    <div className="fixed inset-0 flex min-h-screen w-full items-center justify-center bg-black-100 bg-opacity-70">
      <section className="relative flex w-1/2 flex-col items-center justify-center gap-6 rounded-2xl bg-white-100 p-8 text-black-100 md-5:w-3/4 md-8:w-[92%]">
        <h1 className="md-9.2:text-lg text-2xl font-semibold">
          Doguinho Te Espera!
        </h1>
        <button
          className="absolute right-4 top-4 text-2xl font-bold"
          onClick={handleOpenAndCloseModal}
        >
          X
        </button>
        <section className="md-9.2:flex-col flex w-full items-center justify-center gap-8">
          <div className="md-9.2:w-full flex w-1/2 flex-col items-center justify-center gap-4">
            <Image
              src="/heroDog2.png"
              className="md-9.2:w-24"
              width={176}
              height={240}
              alt=""
            ></Image>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 md-9.1:text-sm"
            >
              <Image
                alt=""
                src="/whatsapp.png"
                height={72}
                width={72}
                className="h-9 w-8 md-9.1:h-5 md-9.1:w-5"
              ></Image>
              +35 99999-9999
            </Link>
          </div>
          <div className="md-9.2:w-full w-1/2">
            <form
              action="#"
              className="flex w-full flex-col items-center justify-center gap-4"
            >
              <InputModalAdoptForm placeholder="Nome" />
              <InputModalAdoptForm placeholder="Horários disponíveis" />
              <InputModalAdoptForm placeholder="Cidade" />
              <InputModalAdoptForm placeholder="Idade" />
              <button
                type="submit"
                className="w-full rounded-xl border-2 border-secondary bg-secondary p-4 font-semibold text-black-100 duration-300 hover:scale-105 md-7:p-2 md-7:text-xs"
              >
                Adotar
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  )
}