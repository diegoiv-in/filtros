new Vue({
    el:'#article_bebidas',
    data:{
        articulos:[
            { vig: "Disponible", bebida:"Cafe con Vainilla", ing: "Café molido en polvo", tam:"Grande", precio: 29}, 
            { vig: "No Disponible", bebida:"Smothie de Mango", ing: "leche con pulpa de Mango", tam:"Grande", precio: 49}, 
            { vig: "Disponible", bebida:"Capuchino Americano", ing: "café expreso y leche montada", tam:"Mediano", precio:59}, 
            { vig: "Disponible", bebida:"Te de Menta", ing: "LHojas de menta fermentadas", tam:"Grande", precio:29}, 
            { vig: "No Disponible", bebida:"Frappe de Kahlua", ing: "Leche con escencia de vainilla y 1 taza de kahlua", tam:"Mediano", precio: 39}, 
        ],
        nom:'', 
        precio: '',
        mostrar: false,
        mostrar2: false
    },
    methods:{
    },
    computed:{
        buscarBebida(){
            return this.articulos.filter((item)=> item.bebida.includes(this.nom)); 
        }, 
        preciosBebidas(){
            return this.articulos.filter((item) => item.precio >= this.precio); 
        }
    }
});
new Vue({
    el:'#article_pedido',
    data:{
        articulos:[
        {cant:1,nombre:'Cafe con Vainilla',precio_unit:29,precio_items:0},
        {cant:1,nombre:'Capuchino Americano',precio_unit:59,precio_items:0},
        {cant:1,nombre:'Te de Menta',precio_unit:49,precio_items:0}
        ],
        subtotal:0,
        iva:0,
        iva_porcentaje:.15,
        total:0,
    },
    methods:{
        calculoPrecioItems(item){
            item.precio_items=item.cant*item.precio_unit;
            return item.precio_items;
        },
    },
    computed:{
        TotalPrecio(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            return this.total
        }
    }
});