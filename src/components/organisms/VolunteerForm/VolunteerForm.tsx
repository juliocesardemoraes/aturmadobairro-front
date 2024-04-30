import { InputVolunteerForm } from '@/components/molecules/InputVolunteerForm/InputVolunteerForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const VolunteerForm = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-6 px-24 py-16 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">
        Formulário para voluntariado:
      </h1>
      <form
        action="#"
        className="flex flex-col items-center justify-center gap-4"
      >
        <InputVolunteerForm placeholder="Nome" />
        <InputVolunteerForm placeholder="Horários disponíveis" />
        <InputVolunteerForm placeholder="Cidade" />
        <InputVolunteerForm placeholder="Idade" />
        <button
          type="submit"
          className="w-full rounded-xl border-2 border-secondary bg-secondary p-4 text-black-100 duration-300 hover:bg-transparent hover:text-secondary md-7:p-2 md-7:text-xs"
        >
          Se voluntariar
        </button>
      </form>
      <Link href="#" className="flex items-center justify-center gap-2">
        <Image
          alt=""
          src="/whatsapp.png"
          height={72}
          width={72}
          className="h-9 w-8"
        ></Image>
        Nos chame no Whatsapp!
      </Link>
    </section>
  )
}
