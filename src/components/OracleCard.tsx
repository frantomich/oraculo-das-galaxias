import './OracleCard.css'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'

import {
  Select,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { FortuneDialog } from '@/components/FortuneDialog'

import { Orbit } from 'lucide-react';

export function OracleCard() {
  return (
    <>
      <Card className='oracle-card'>
        <CardHeader>
          <CardTitle>Oráculo das Galáxias</CardTitle>
          <CardDescription className='oracle-description'>
            Selecione o destino de sua próxima grande aventura pela galáxia e receba concelhos de valiosa sabedoria cósmica.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup className='oracle-form'>
            <Field className='w-full'>
              <FieldLabel htmlFor='sistema'>Onde será a sua aventura?</FieldLabel>
              <Select required>
                <SelectTrigger id='sistema' name='sistema' className='sel'>
                  <Orbit/><SelectValue placeholder='Selecione' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='sol'>Sol</SelectItem>
                    <SelectItem value='ori'>Orion</SelectItem>
                    <SelectItem value='pro'>Próxima Centauri</SelectItem>
                    <SelectItem value='bet'>Betelgeuse</SelectItem>
                    <SelectItem value='omi'>Omicron</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FieldDescription className='text-gray-800'>
                Escolha o sistema estelar onde ocorrerá a sua jornada.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Field className='w-full'>
            <FortuneDialog
            message='Você encontrará um aliado inesperado em sua jornada.'
            figure='./src/assets/exemple.jpg'/>
          </Field>
        </CardFooter>
      </Card>
    </>
  )
}