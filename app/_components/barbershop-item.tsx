import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import Image from "next/image"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarberShopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[159px] rounded-2xl">
      <CardContent className="p-0">
        {/* Imagem */}
        <div className="relative h-[159px] w-[159px]">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover p-2"
            src={barbershop.imageUrl}
          />

          <Badge className="absolute left-3 top-3" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="pl-1 text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        {/* Texto */}
        <div className="p-2">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
