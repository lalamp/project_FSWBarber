import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import SidebarSheet from "@/app/_components/ui/sidebar-sheet"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })
  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* Header */}
      <div className="relative h-[250px] w-full">
        {/* Imagem */}
        <Image
          alt={barbershop.name}
          src={barbershop.imageUrl}
          fill
          className="object-cover"
        />

        {/* Seta */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        {/* Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>

      {/* Infos */}
      <div className="border-b border-solid p-5">
        {/* Nome */}
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>

        {/* Endereço */}
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        {/* Avaliação */}
        <div className="mb-2 flex items-center gap-1">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0</p>
        </div>
      </div>

      {/* Descrição */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-sm font-bold text-gray-400">Sobre Nós</h1>
        <p className="text-sm">{barbershop.description}</p>
      </div>

      {/* Serviços */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-sm font-bold text-gray-400">Serviços</h1>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Contatos */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-sm font-bold text-gray-400">Contatos</h1>
        <div className="space-y-3">
          {barbershop.phones.map((phone) => (
            <PhoneItem key={phone} phone={phone} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopPage
