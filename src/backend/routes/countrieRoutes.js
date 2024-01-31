const express = require("express")
const modelCountrie = require("../db/countrieModel")

const router = express.Router()

router.get("/", async (req, res) => {
    const result = await modelCountrie.find({})
    res.json(result)
})

router.post("/", async (req, res) => {
    const body = req.body
    modelCountrie.create(body)
    res.status(201).json(body)
})

router.patch("/:id", async (req, res) => {
    const { id } = req.params
    const body = req.body
    const documentUpdate = await modelCountrie.findOneAndUpdate({_id: id}, body, {new: true})
    res.json(documentUpdate)
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const documentDelete = await modelCountrie.findOneAndDelete({_id: id})
    res.json(documentDelete)
})

module.exports = router