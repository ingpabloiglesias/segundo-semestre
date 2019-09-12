
const EquiposServicio = {

    data: [
        {
          "_id": "5d7ac9d13acb5ee48ae6d658",
          "index": 0,
          "escudo": "http://placehold.it/32x32",
          "nombre": "Orr Castro",
          "email": "orrcastro@dogtown.com"
        },
        {
          "_id": "5d7ac9d14765ac8e28057d56",
          "index": 1,
          "escudo": "http://placehold.it/32x32",
          "nombre": "Adrian Hudson",
          "email": "adrianhudson@dogtown.com"
        },
        {
          "_id": "5d7ac9d1564e227562109d20",
          "index": 2,
          "escudo": "http://placehold.it/32x32",
          "nombre": "Benjamin Clements",
          "email": "benjaminclements@dogtown.com"
        },
        {
          "_id": "5d7ac9d112d373499d7f9b4c",
          "index": 3,
          "escudo": "http://placehold.it/32x32",
          "nombre": "Joyce Beasley",
          "email": "joycebeasley@dogtown.com"
        },
        {
          "_id": "5d7ac9d1026419b387fcbcd3",
          "index": 4,
          "escudo": "http://placehold.it/32x32",
          "nombre": "Salinas Gilmore",
          "email": "salinasgilmore@dogtown.com"
        },
        {
          "_id": "5d7ac9d1f3ce707e2feb439d",
          "index": 5,
          "escudo": "http://placehold.it/32x32",
          "nombre": "Brenda Conway",
          "email": "brendaconway@dogtown.com"
        },
        {
          "_id": "5d7ac9d1fd8c36409c11b24d",
          "index": 6,
          "escudo": "http://placehold.it/32x32",
          "nombre": "Holcomb Livingston",
          "email": "holcomblivingston@dogtown.com"
        }
    ],

    index: function() {
        return this.data;
    },

    read: function(idequipo) {
        let equipo = null;
        this.data.forEach(function(obj) {
            if (idequipo === obj._id)
                equipo = obj;
        });
        return equipo;
    }
}

module.exports = EquiposServicio;