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
            <div className='about-dialog-description'>
              <p>O Oráculo das Galáxias é um ser místico que tem a capacidade de prever o futuro e fornecer conselhos de grande sabedoria cósmica para aventureiros espaciais.</p>
              <p>Use-o com sabedoria, pois suas respostas são sempre enigmáticas e cheias de significado.</p>
            </div>
            <hr/>
            <div className='about-dialog-footer'>
              <p><b>Desenvolvido por:</b> Franklin L. Tomich</p>
              <p><b>Repositório:</b> <a className='about-dialog-hyperlink' href='https://github.com/frantomich/oraculo-das-galaxias' target='_blank'>GitHub</a></p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}