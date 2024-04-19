class Estudante{
    constructor(nome,email,ra,curso,disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }

    primeiraDisciplina(){
        return this.disciplinas[0]
    }

    ultimaDisciplina(){
        return this.disciplinas[this.disciplinas.length-1]
    }

}

const estudante1 = new Estudante("Renato","renato.luispcarvalho@gmail.com",123456789,"ADS",["Engenharia de Software","Sistemas da Informação","Linguagem de Programação"])

const estudante2 = new Estudante("Julia","julia.silveira@gmail.com",987654321,"Comex",["Imposto","Legislação Internacional","Geopolitica"])


console.log(`Primeira Matéria: ${estudante1.primeiraDisciplina()}`,`Última Matéria: ${estudante1.ultimaDisciplina()}`)

console.log(`Primeira Matéria: ${estudante2.primeiraDisciplina()}`,`Última Matéria: ${estudante2.ultimaDisciplina()}`)