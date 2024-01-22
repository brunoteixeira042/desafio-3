class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque indefinido";
      }
      const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
      console.log(mensagem);
    }
  }
  
  const heroi1 = new Heroi("Gandalf", 1500, "mago");
  heroi1.atacar();
  