import './OracleCard.css'
import { useState } from 'react'
import { OracleDialog } from '@/components/OracleDialog'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Orbit } from 'lucide-react'

export function OracleCard() {

  const system_list: string[] = [
    "Alpha Centauri",
    "Sistema Tatoo",
    "Zeta Reticuli",
    "Canopus",
    "40 Eridani",
    "Epsilon Eridani",
    "Vega",
    "Wolf 359",
    "Sistema Sol",
    "Ceti Alpha"
  ]

  const [destination, setDestination] = useState<string>('')

  const [invalid, setInvalid] = useState<boolean>(false)

  const isInvalid = () => {
    setInvalid(true)
  }

  return (
    <>
      <Card className='oracle-card'>
        <CardHeader>
          <CardTitle>Oráculo das Galáxias</CardTitle>
          <CardDescription className='oracle-card-description'>
            Selecione o destino de sua próxima grande aventura pela galáxia e receba concelhos de valiosa sabedoria cósmica.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup className='oracle-card-form'>
            <Field className='oracle-card-select-field' data-invalid={invalid}>
              <FieldLabel htmlFor='sistema'>Onde será a sua aventura?</FieldLabel>
              <Select required onValueChange={(value) => {setDestination(value); setInvalid(false)}} defaultValue=''>
                <SelectTrigger id='sistema' name='sistema' className='oracle-card-select-trigger' aria-invalid={invalid}>
                  <Orbit/><SelectValue placeholder='Selecione' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {
                      system_list.map((system, index) => (
                        <SelectItem key={index} value={system}>
                          {system}
                        </SelectItem>
                      ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FieldDescription className={invalid ? 'text-red-500' : 'text-gray-800'}>
                Escolha o sistema estelar onde ocorrerá a sua jornada.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Field className='oracle-card-action-field'>
            <OracleDialog destination={destination} isInvalid={isInvalid} />
          </Field>
        </CardFooter>
      </Card>
    </>
  )
}