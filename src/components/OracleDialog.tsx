import './OracleDialog.css'
import oracle from '@/services/oracle'
import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface OracleDialogProps {
  destination: string
  isInvalid(): void
}

export function OracleDialog({destination, isInvalid}: OracleDialogProps) {

  const [response, setResponse] = useState<string>()

  const fetchResponse = async () => {
    setResponse('Consultando as estrelas...')
    try {
      setResponse(await oracle(destination))
    } catch (error) {
      console.error('Erro ao buscar a resposta:', error)
      setResponse('Há muitas perturbações na ordem cósmica do universo no momento. Tente voltar mais tarde para descobrir o que o destino reserva para você, jovem padawan.')
    }
  }

  return (
    <>
      <Dialog open={destination === '' ? false : undefined}>
        <DialogTrigger asChild>
          <Button className='oracle-dialog-trigger' variant='outline' onClick={destination === '' ? isInvalid : fetchResponse}>
            <Sparkles/> Revelar! <Sparkles/>
          </Button>
        </DialogTrigger>
        <DialogContent className='oracle-dialog-content'>
          <DialogHeader>
            <DialogTitle className='oracle-dialog-title'>
              Ouça o que diz o oráculo:
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className='oracle-dialog-body'>
            <img src='./src/assets/oracle.gif' alt="Galáxia" className='oracle-dialog-image' />
            <p className='oracle-dialog-response'>{response}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}