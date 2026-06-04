import './FortuneDialog.css';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import { Sparkles } from 'lucide-react';

interface FortuneDialogProps {
    message: string
    figure: string
}

export function FortuneDialog({message, figure}: FortuneDialogProps) {
  return (
    <>
        <Dialog>
            <DialogTrigger asChild>
                <Button className='fortune-btn' variant="outline"><Sparkles/> Revelar! <Sparkles/></Button>
            </DialogTrigger>
            <DialogContent className="fortune-dialog-content">
                <DialogHeader>
                    <DialogTitle>Eis a sua sorte, jovem padawan:</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="flex flex-row items-center gap-6 pading-4">
                    <div className="flex flex-row items-center">
                        <figure className="w-24 h-24 rounded-full overflow-hidden">
                            <img src={figure} alt="Ilustração" className="w-full h-full object-cover" />
                        </figure>
                    </div>
                    <div className="flex flex-row items-center">
                        <p>{message}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    </>
  )
}