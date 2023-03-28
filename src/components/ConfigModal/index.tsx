import { useState } from 'react'
import { Container, Box, Body, Buttons, Inputs } from './styles'
import { FaArrowLeft } from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux'
import { configModal } from '../../Store/sliceModals'
import { config, save } from '../../Store/sliceConfig'


export const ConfigModal = () => {
  const { background1, background2, glassColor, color, opacity } = useSelector(config)

  const [bg1, setBg1] = useState(background1)
  const [bg2, setBg2] = useState(background2)
  const [gc, setGC] = useState(glassColor)
  const [op, setOp] = useState(opacity)
  const [cl, setCl] = useState(color)

  const dispatch = useDispatch()

  const closeConfigModal = () => {
    dispatch(configModal())
  }

  const restoreDefault = () => {
    dispatch(save({
      background1: '#00c8ff',
      background2: '#b300ff',
      glassColor: '#000000',
      opacity: '40',
      color: '#ffffff'
    }))
    window.location.reload()
  }

  const saveConfig = () => {
    dispatch(save({
      background1: bg1,
      background2: bg2,
      glassColor: gc,
      opacity: op,
      color: cl
    }))
    window.location.reload()
  }

  return (
    <Container>
      <Box>
        <header>
          <button onClick={closeConfigModal}>
            <FaArrowLeft size={20} />
          </button>
          <h1>theme config</h1>
          <BsGear size={24} />
        </header>
        <Body className='mt-10 mb-6 px-4'>
          <Inputs>
            <p>background gradient</p>
            <hr />
            <div>
              <p>from</p>
              <input type="color" value={bg1} onChange={e => setBg1(e.target.value)} />
            </div>
            <div>
              <p>to</p>
              <input type="color" value={bg2} onChange={e => setBg2(e.target.value)} />
            </div>
          </Inputs>
          <Inputs>
            <p>second background</p>
            <hr />
            <div>
              <p>glass</p>
              <input type="color" accept='rgb' value={gc} onChange={e => setGC(e.target.value)} />
            </div>
            <div>
              <div>
                <p>opacity</p>
                <p>{op}%</p>
              </div>
              <input type="range" value={op} min={0} max={100} onChange={e => setOp(e.target.value)} />
            </div>
          </Inputs>
          <Inputs>
            <p>text color</p>
            <hr />
            <div>
              <p>text</p>
              <input type="color" value={cl} onChange={e => setCl(e.target.value)} />
            </div>
          </Inputs>
        </Body>
        <Buttons>
          <button onClick={saveConfig}>
            Save
          </button>
          <button onClick={restoreDefault}>
            default
          </button>
        </Buttons>
        <footer />
      </Box>
    </Container>
  )
}