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
            <p>O Oráculo das Galáxias é um ser místico que tem a capacidade de prever o futuro e fornecer conselhos de grande sabedoria cósmica para aventureiros espaciais.</p>
            <p>Suas previsões e conselhos são baseados em uma profunda compreensão do universo e um vasto conhecimento da cultura pop Sci-Fi.</p>
            <p>Use-o com sabedoria, pois suas respostas são sempre enigmáticas, porém cheias de significado.</p>
            <p>Desenvolvido por: Franklin L. Tomich.</p>
            <p>Disponível em: </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}