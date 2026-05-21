import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

interface FortuneDialogProps {
    message: string
    figure: string
}

export function FortuneDialog({ message, figure }: FortuneDialogProps) {
  return (
    <>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Revelar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Eis a sua sorte, jovem padawan:</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="flex flex-row items-center gap-4">
                    <figure className="w-24 h-24 rounded-full overflow-hidden">
                        <img src={figure} alt="Ilustração" className="w-full h-full object-cover" />
                    </figure>
                    <p>{message}</p>
                </div>
            </DialogContent>
        </Dialog>
    </>
  )
}