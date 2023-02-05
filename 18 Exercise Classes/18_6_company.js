class Company {
    constructor() {
        this.departments={}
        // this.departments={
        //     'дпт1':[salar, [worker1], [worker2]],
        //     'дпт2':[salar,[worker1], [worker2]],
        //     'дпт3':[salar,[worker1]]
        // }
    }

    addEmployee(name, salary, position, department){

        if (name==='' || salary==='' || position==='' || department===''||Number(salary)<0) {
            throw new Error("Invalid input!")
        }
        if (!this.departments[department]){
            this.departments[department]=[]
        }
        this.departments[department].push([name, salary, position])
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        for (const department in this.departments) {
            // console.log(department)
            let dpt_salary=0
            // this.departments[department]
            for (const worker of this.departments[department]) {
                dpt_salary+=Number(worker[1])
                // console.log(worker[1])
            }
            this.departments[department].unshift(dpt_salary/this.departments[department].length)

            // console.log(this.departments[department][0])
            // console.log(this.departments[department])

        }
        // for (const department in this.departments){
        //     console.log(this.departments[department][0])
        // }

            // console.log(this.departments)
        // sort((a, b) => a-b)
        let best = Object.entries(this.departments).sort((a,b) => b[b][0]-a[a][0])
        let result=`Best Department is: {best department's name}`
        Object.






    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
