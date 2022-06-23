const db = require('../database/models');
const producto = db.Producto;



let indexController = {

  findAll: (req, res) => {
    let relacion = {
      include: [{association: "usuarioRelacionado"}],
      order: [['fecha','DESC']]  
    }

    producto.findAll(relacion)
      .then((result) => {
        return res.render('index', {
          resultados: result,
        })
      })
  } 
};

module.exports = indexController;