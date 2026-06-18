import './AboutDialog.css'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'

export function AboutDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <p className='about-dialog-trigger'>Sobre</p>
        </DialogTrigger>
        <DialogContent className='about-dialog-content'>
          <DialogHeader>
            <DialogTitle>Sobre</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className='about-dialog-body'>
            Desenvolvido por Franklin L. Tomich.
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}