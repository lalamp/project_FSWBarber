"use client"
import { Barbershop, BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Calendar } from "./ui/calendar"
import { ptBR } from "date-fns/locale"
import { useState } from "react"
import { Button } from "./ui/button"
import { format } from "date-fns"

interface ServiceItemProps {
  service: BarbershopService
  barbershop: Pick<Barbershop, "name">
}

const TIME_LIST = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
]

const ServiceItem = ({ service, barbershop }: ServiceItemProps) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDay(date)
  }

  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  )
  const handleTimeSelect = (time: string | undefined) => {
    setSelectedTime(time)
  }

  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        {/* Imagem */}
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            alt={service.name}
            src={service.imageUrl}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="w-full space-y-2">
          {/* Infos */}
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            {/* Botão para Reservar */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default" size="sm">
                  Reservar
                </Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Fazer Reserva</SheetTitle>
                </SheetHeader>

                {/* Calendário */}
                <div className="border-b border-solid py-5">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={selectedDay}
                    onSelect={handleDateSelect}
                    styles={{
                      head_cell: {
                        width: "100%",
                        textTransform: "capitalize",
                      },
                      cell: {
                        width: "100%",
                      },
                      button: {
                        width: "100%",
                      },
                      nav_button_previous: {
                        width: "32px",
                        height: "32px",
                      },
                      nav_button_next: {
                        width: "32px",
                        height: "32px",
                      },
                      caption: {
                        textTransform: "capitalize",
                      },
                    }}
                  />
                </div>

                {/* Horários */}
                {selectedDay && (
                  <div className="flex gap-2 overflow-x-auto py-5 [&::-webkit-scrollbar]:hidden">
                    {TIME_LIST.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime == time ? "default" : "outline"}
                        className="rounded-full"
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Infos */}
                {selectedTime && selectedDay && (
                  <div>
                    <Card>
                      <CardContent className="space-y-3 p-3">
                        {/* nome e valor */}
                        <div className="flex items-center justify-between">
                          <h2 className="font-bold">{service.name}</h2>
                          <p className="text-sm font-bold">
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(Number(service.price))}
                          </p>
                        </div>

                        {/* data */}
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm font-bold text-gray-400">
                            Data
                          </h2>
                          <p className="text-sm">
                            {format(selectedDay, "d 'de' MMMM", {
                              locale: ptBR,
                            })}
                          </p>
                        </div>

                        {/* horário */}
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm font-bold text-gray-400">
                            Horário
                          </h2>
                          <p className="text-sm">{selectedTime}</p>
                        </div>

                        {/* horário */}
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm font-bold text-gray-400">
                            Barbearia
                          </h2>
                          <p className="text-sm">{barbershop.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Botão de Confirmar */}
                {selectedTime && selectedDay && (
                  <SheetFooter className="py-5">
                    <SheetClose asChild>
                      <Button type="submit">Confirmar</Button>
                    </SheetClose>
                  </SheetFooter>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
