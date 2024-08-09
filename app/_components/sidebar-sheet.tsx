import Image from "next/image"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import Link from "next/link"
import { quickSearchOptions } from "@/app/_constants/search"
import { Button } from "./ui/button"
import { DialogTrigger } from "@radix-ui/react-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      {/* Header */}
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* Login */}
      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <h2 className="font-bold">Olá, faça seu login</h2>
        {/* Caixa de Login */}
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google
              </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="gap-1 font-bold">
              <Image
                alt="Fazer login com Google"
                src="/google.svg"
                width={18}
                height={18}
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>

        {/* 
        <Avatar>
          <AvatarImage src="https://media.istockphoto.com/id/1915382108/pt/foto/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.webp?b=1&s=170667a&w=0&k=20&c=Bgs0ivlQI9W_MBEGniNHyc4Q1K7BMFhLo-5EVBGhccc=" />
        </Avatar>
        <div>
          <p className="font-bold">Ana Bela</p>
          <p className="text-xs">anabela@gmail.com</p>
        </div>
        */}
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
  )
}

export default SidebarSheet
