class GestionProduit {

    #listProduit = []; 
    compter = 0
    
    
    get listProduit (){
    
        return this.#listProduit
    }
    
    
    
    addProduit(produit){
    
    this.compter = this.compter + 1
    produit.id = this.compter 
    
    this.#listProduit.push(produit)
    
    
    }
    
    getId(id){
       
        for (let i = 0; i < this.listProduit.length; i++) {
            if(id == this.#listProduit[i].id){
                return this.#listProduit[i]
    
            }
            
        }
    
    }
    
    
    modifierProduit(produit){
    
    for (let i = 0; i < this.#listProduit.length; i++) {
        if(produit.id == this.#listProduit[i].id){
            this.#listProduit[i] = produit
    
            
         
        }    
    }
    }
    
    
    
    suprimerProduit(id) {
        this.#listProduit =  this.#listProduit.filter(function(produit){
            return produit.id != id
        })
        
            
            
        
    
    }
    
    
    
    
    
    
    }