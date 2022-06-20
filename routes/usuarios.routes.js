const { Router } = require("express");
const { usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete } = require('../controllers/usuarios.controllers');

const router = Router();

// Estos serian nuestros endpoints

// El get usualmente se usa para recoger datos
router.get("/", usuariosGet );

// El post usualmente se usa para crear nuevos recursos
router.post("/", usuariosPost );

// El put usualmente se usa para actualizar datos
router.put("/:id", usuariosPut );

router.patch("/", usuariosPatch );

// El delete se usa para borrar algo
router.delete("/", usuariosDelete );


module.exports = router;
