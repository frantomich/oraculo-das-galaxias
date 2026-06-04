import "./AboutDialog.css";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

export function AboutDialog() {
  return (
    <>
        <Dialog>
            <DialogTrigger asChild>
                <p className="cursor-pointer text-shadow-md text-shadow-pink-600">Sobre</p>
            </DialogTrigger>
            <DialogContent className="about-dialog-content">
                <DialogHeader>
                    <DialogTitle>Sobre</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="flex flex-row items-center gap-6 pading-4">
                    Desenvolvido por Franklin L. Tomich.
                </div>
            </DialogContent>
        </Dialog>
    </>
  )
}