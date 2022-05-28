import express from "express";
import {
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from "../controlers/paginasController.js"

import {guardarTestimonial} from "../controlers/testimonialController.js"


const router = express.Router()



router.get("/", paginaInicio);  



router.get("/nosotros", paginaNosotros );

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales );
router.post("/testimoniales", guardarTestimonial );



export default router

