class Modal {
    constructor(message) {
        this.message = message
        this.element = this..#init()
        this.render()

    }

    #init() {
        let overlay = document.createElement('div')
        overlay.className = 'overlay'
        overlay.innerHTML = `<div class="modal">
            <p>${this.message}</p>
            <button>OK</button>
        </div>`
        overlay.querySelector('button').addEventListener('click', this.close.bind(this))
        //event listener has its own context; the class methods are not more special than the methods of the literal
        //thats why we need to bind to (this)
        window.addEventListener('keydown', (event)=>{
            if (event.key==='Escape'){//because this is arrow funk the 'this' will be inded to the constructor
                this.close()
            }
        })
        return overlay
    }

    render() {
        document.body.appendChild(this.element)
    }
    
        close() {
            this.element.remove()
    }

}

function create() {
    const modal = new Modal('This is a message')
    setTimeout(()=>modal.close(),2000)
    // modal.close()
}

document.querySelector('button').addEventListener('click', create)