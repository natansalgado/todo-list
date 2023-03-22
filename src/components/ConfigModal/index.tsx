import { useState } from 'react'
import { Container, Box, Body, Buttons, Inputs } from './styles'
import { FaArrowLeft } from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'

import { useDispatch } from 'react-redux'
import { handleConfigModal } from '../../Store/sliceLists'

import { background1, background2, color, glassColor } from '../../styles/global'

export const ConfigModal = () => {
  const [bg1, setBg1] = useState(background1)
  const [bg2, setBg2] = useState(background2)
  const [gs, setGs] = useState(glassColor)
  const [cl, setCl] = useState(color)

  const dispatch = useDispatch()

  const closeConfigModal = () => {
    dispatch(handleConfigModal())
  }

  const saveConfig = () => {
    closeConfigModal()
  }

  return (
    <Container>
      <Box>
        <header>
          <button onClick={closeConfigModal}>
            <FaArrowLeft size={20} />
          </button>
          <h1>theme config</h1>
          <BsGear color='white' size={24} />
        </header>
        <Body className='mt-10 mb-6 px-4'>
          <Inputs>
            <p>background:</p>
            <input type="color" value={bg1} onChange={e => setBg1(e.target.value)} />
            <p>to</p>
            <input type="color" value={bg2} onChange={e => setBg2(e.target.value)} />
          </Inputs>
          <Inputs>
            <p>glass:</p>
            <input type="color" value={gs} onChange={e => setGs(e.target.value)} />
          </Inputs>
          <Inputs>
            <p>text:</p>
            <input type="color" value={cl} onChange={e => setCl(e.target.value)} />
          </Inputs>
        </Body>
        <Buttons>
          <button onClick={saveConfig}>
            Save
          </button>
        </Buttons>
        <footer />
      </Box>
    </Container>
  )
}