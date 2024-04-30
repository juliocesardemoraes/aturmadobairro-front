import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const DonatePossibilities = () => {
  return (
    <section className="hg-1:py-28 flex w-full flex-col items-start justify-center gap-6 px-24 py-8 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">
        Maneiras de Doar:
      </h1>
      <div className="flex flex-col items-start justify-center gap-2">
        <h6 className="text-lg md-5:text-sm md-7:text-xs">
          Pix: 8979878946546
        </h6>
        <h6 className="text-lg md-5:text-sm md-7:text-xs">
          Conta: 84894848948948
        </h6>
        <h6 className="md-9.1:flex-col flex items-center justify-center gap-4 text-lg md-5:text-sm md-7:text-xs">
          Whatsapp para doações materiais:
          <Link
            href="#"
            className="md-9.1:justify-start md-9.1:w-full flex items-center justify-center gap-2"
          >
            <Image
              alt=""
              src="/whatsapp.png"
              height={72}
              width={72}
              className="h-9 w-8"
            ></Image>
            +35 99999-9999
          </Link>
        </h6>
      </div>
    </section>
  )
}
