alert('asdfa');
class trys {
    #s =0;
    constructor(x,y,z,s){
        this.x= x;
        this.y = y;
        this.z = z;
        this.#s = s;
    }
    get_data(){
        return this.#s;
    }

}

let t = new trys(1,2,3,100);
console.log(t.x);
console.log(t.get_data());

// console.log('#s = ',t.#s);

class property{
    constructor(metal,no_of_protons,no_of_neutrons,molar_mass){
        this.metal = metal;
        this.no_of_protons = no_of_protons;
        this.no_of_neutrons = no_of_neutrons;
        this.molar_mass = molar_mass;
    }
    // magnetic_property_calculation
}

class electronic_configuration{
    constructor(){
        this.s = 0;
        this.p = 1;
        this.d = 2;
        this.f = 3;
        this.n = 1;
    }
    // electronic_configuration_spdf
    // electronic_configuration_nlm
}

class period_group{
    constructor(period,group){
        this.period = period;
        this.group = group;
    }
}

class elements {
    constructor(name,symbol){
        this.name = name ;
        this.symbol = symbol;
    }
    // display_element_property
}

let no_of_elements = 100;
let all_elements_array = new Array(no_of_elements);

for(let  i=0;i<no_of_elements;i++){
    all_elements_array[i] = new elements(i,i+1234);
}