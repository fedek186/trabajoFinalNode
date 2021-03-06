module.exports = function (sequelize, dataTypes) {
    
    /* Alias que le asigne */
    let alias = "Producto";

    /* Configuraciones de las columnas de la tabla */
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        foto:{
            type: dataTypes.STRING,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName: 'productos', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    }

    const Producto = sequelize.define(alias, cols, config);
    //Asociar producto con usuario
    Producto.associate = (models) => {
        Producto.hasMany(models.Comentario, {
            as: 'comentarioDeProducto',
            foreignKey: 'id_producto'
        }); 
        Producto.belongsTo(models.Usuario, {
            as: 'usuarioRelacionado',
            foreignKey: 'id_usuario'
        });
    }

    return Producto;
}