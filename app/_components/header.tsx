import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />

        <Sheet>
          {/* Trigger do Menu */}
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="overflow-y-auto">
            {/* Header */}
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            {/* Login */}
            <div className="flex items-center gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage src="https://media.istockphoto.com/id/1915382108/pt/foto/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.webp?b=1&s=170667a&w=0&k=20&c=Bgs0ivlQI9W_MBEGniNHyc4Q1K7BMFhLo-5EVBGhccc=" />
              </Avatar>
              <div>
                <p className="font-bold">Ana Bela</p>
                <p className="text-xs">anabela@gmail.com</p>
              </div>
            </div>

            {/* Início e Agendamentos */}
            <div className="flex flex-col gap-4 border-b border-solid py-5">
              <SheetClose asChild>
                <Button className="justify-start gap-1" variant="ghost" asChild>
                  <Link href="/">
                    <HomeIcon size={18} />
                    Início
                  </Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button className="justify-start gap-1" variant="ghost" asChild>
                  <Link href="/">
                    <CalendarIcon size={18} />
                    Agendamentos
                  </Link>
                </Button>
              </SheetClose>
            </div>

            {/* Opções de Busca */}
            <div className="flex flex-col gap-4 border-b border-solid py-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Image
                    alt={option.title}
                    src={option.imageUrl}
                    width={18}
                    height={18}
                  />
                  <p>{option.title}</p>
                </Button>
              ))}
            </div>

            {/* Logout */}
            <div className="flex flex-col gap-2 py-5">
              <Button className="justify-start gap-2" variant="ghost">
                <LogOutIcon size={18} />
                Sair da Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
