import { Router } from 'express'
import normalPokemon from '../json/normalPokemon.json' with {type: 'json'}
import firePokemon from '../json/firePokemon.json' with {type: 'json'}
import waterPokemon from '../json/waterPokemon.json' with {type: 'json'}
import grassPokemon from '../json/grassPokemon.json' with {type: 'json'}
import electricPokemon from '../json/electricPokemon.json' with {type: 'json'}
import icePokemon from '../json/icePokemon.json' with {type: 'json'}
import fightingPokemon from '../json/fightingPokemon.json' with {type: 'json'}
import poisonPokemon from '../json/poisonPokemon.json' with {type: 'json'}
import groundPokemon from '../json/groundPokemon.json' with {type: 'json'}
import flyingPokemon from '../json/flyingPokemon.json' with {type: 'json'}
import psychicPokemon from '../json/psychicPokemon.json' with {type: 'json'}
import bugPokemon from '../json/bugPokemon.json' with {type: 'json'}
import rockPokemon from '../json/rockPokemon.json' with {type: 'json'}
import dragonPokemon from '../json/dragonPokemon.json' with {type: 'json'}
import steelPokemon from '../json/steelPokemon.json' with {type: 'json'}
import fairyPokemon from '../json/fairyPokemon.json' with {type: 'json'}

const router = Router()

router.get('/normalPokemon', (req, res)=> {
    try {
        res.json(normalPokemon)
        console.log("received request at /normalPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/firePokemon', (req, res)=> {
    try {
        res.json(firePokemon)
        console.log("received request at /firePokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/waterPokemon', (req, res)=> {
    try {
        res.json(waterPokemon)
        console.log("received request at /waterPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/grassPokemon', (req, res)=> {
    try {
        res.json(grassPokemon)
        console.log("received request at /grassPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/electricPokemon', (req, res)=> {
    try {
        res.json(electricPokemon)
        console.log("received request at /electricPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/icePokemon', (req, res)=> {
    try {
        res.json(icePokemon)
        console.log("received request at /icePokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/fightingPokemon', (req, res)=> {
    try {
        res.json(fightingPokemon)
        console.log("received request at /fightingPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/poisonPokemon', (req, res)=> {
    try {
        res.json(poisonPokemon)
        console.log("received request at /poisonPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/groundPokemon', (req, res)=> {
    try {
        res.json(groundPokemon)
        console.log("received request at /groundPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/flyingPokemon', (req, res)=> {
    try {
        res.json(flyingPokemon)
        console.log("received request at /flyingPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/psychicPokemon', (req, res)=> {
    try {
        res.json(psychicPokemon)
        console.log("received request at /psychicPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/bugPokemon', (req, res)=> {
    try {
        res.json(bugPokemon)
        console.log("received request at /bugPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/rockPokemon', (req, res)=> {
    try {
        res.json(rockPokemon)
        console.log("received request at /rockPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/dragonPokemon', (req, res)=> {
    try {
        res.json(dragonPokemon)
        console.log("received request at /dragonPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/darkPokemon', (req, res)=> {
    try {
        res.json(darkPokemon)
        console.log("received request at /darkPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/steelPokemon', (req, res)=> {
    try {
        res.json(steelPokemon)
        console.log("received request at /steelPokemon")
    } catch (error) {
        console.error(error)
    }
})

router.get('/fairyPokemon', (req, res)=> {
    try {
        res.json(fairyPokemon)
        console.log("received request at /fairyPokemon")
    } catch (error) {
        console.error(error)
    }
})

export default router