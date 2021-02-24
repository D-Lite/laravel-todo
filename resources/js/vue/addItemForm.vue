<template>
    <div>
        <div class="addItem">
            <input type="text" v-model="item.name"/>
            <button type="submit" class="btn"
            @click="addItem()" 
            :class="[ item.name ? 'active' : 'inactive', ]"
            >Add</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem(){
            if ( this.item.name == '' ) {
                return;
            }
            axios.post('api/item/store', {
                item: this.item
            })
            .then((response) => {
                if(response.status == 201 ){
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            }).catch((err) => {
                console.log( err );
            });
        }
    }
}
</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}

input{
    background-color: #f7f7f7;
    border: 0;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 90%;
}

.btn {
    width: 50px;
    height: 30px;
}

.active {
    color: #00ce25;
    background-color: #e30;
    font-weight: 700;
}

.inactive {
    color: #fff;
    font-weight: 700;
    background-color: #e30;
}
</style>