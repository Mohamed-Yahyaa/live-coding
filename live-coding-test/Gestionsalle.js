class GestionSalle {

    #listSalle = []; 
    compter = 0


    get listSalle (){

        return this.#listSalle
    }



    addSalle(salle){

    this.compter = this.compter + 1
    salle.id = this.compter 

    this.#listSalle.push(salle)


    }

    getId(id){

        for (let i = 0; i < this.listSalle.length; i++) {
            if(id == this.#listSalle[i].id){
                return this.#listSalle[i]

            }

        }

    }


    modifierSalle(salle){

    for (let i = 0; i < this.#listSalle.length; i++) {
        if(salle.id == this.#listSalle[i].id){
            this.#listSalle[i] = salle

        }
    }
    }



    suprimerSalle(id) {
        this.#listSalle =  this.#listSalle.filter(function(salle){
            return salle.id != id
        })

    }

    }