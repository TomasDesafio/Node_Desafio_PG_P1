import { Router } from 'express'

import express from 'express'
import { getData, insertData } from '../model/index.js'

const router = express.Router()



router.get('/posts', async (req, res) => {
  const result = await getData()
  //console.log(result)
  console.log(typeof(result))
  res.json({result})
  
})

router.post('/posts', async (req, res) => {
  const post = {
    titulo: req.body.titulo,
    img: req.body.url,
    descripcion: req.body.descripcion
  };

  /*const { nombre, precio, stock } = req.body
  if (nombre === undefined || precio === undefined || stock === undefined) return res.status(400).json({ message: 'Datos incorrectos' })*/
  const response = await insertData(post)
  res.json({ data: response })
  //res.json("Producto Agregado")


})

export default router