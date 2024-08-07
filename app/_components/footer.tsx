import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-4 text-center">
          <p className="text-sm text-gray-400"> © Copyright FSW Barber </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
