"use client"
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
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

const SidebarSheet = () => {
  const handleLoginWithGoogle = () => signIn("google")
  const handleLogout = () => signOut()
  const { data } = useSession()

  return (
    <SheetContent className="overflow-y-auto">
      {/* Header */}
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* Login */}
      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          //Login realizado
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data.user.image} />
            </Avatar>
            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          //Login ainda não realizado
          <>
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

                <Button
                  variant="outline"
                  className="gap-1 font-bold"
                  onClick={handleLoginWithGoogle}
                >
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
          </>
        )}
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
          <SheetClose key={option.title} asChild>
            <Button
              key={option.title}
              className="justify-start gap-2"
              variant="ghost"
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  width={18}
                  height={18}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      {/* Logout */}
      <div className="flex flex-col gap-2 py-5">
        <Button
          className="justify-start gap-2"
          variant="ghost"
          onClick={handleLogout}
        >
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
