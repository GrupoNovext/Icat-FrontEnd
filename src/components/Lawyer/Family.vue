<template>
    <div v-if="family" >
        <div class="col-md-3 col-lg-3">
            <div class="form-group">
                <select class="form-control" v-bind:id="family.link">
                    <option value="" disabled selected>Vinculo</option>
                    <option value="Conyuge">Conyuge</option>
                    <option value="Conviviente">Conviviente</option>
                    <option value="Padre">Padre</option>
                    <option value="Madre">Madre</option>
                    <option value=" "></option>
                </select>
            </div>
        </div>
        <div class="col-md-3 col-lg-3">
            <div class="form-group">
                <input type="text" class="form-control" v-bind:id="family.name" placeholder="Nombres*">
            </div>
        </div>
        <div class="col-md-5 col-lg-5">
            <div class="form-group">
                <input type="text" class="form-control" v-bind:id="family.lastname" placeholder="Apellidos*">
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        props: ['family'],
        name: 'Family'
    }
</script>
<style scoped>
    .form-control{
        box-shadow: none;
        border-radius: 2px;
        padding: 12px 15px;
        height: 46px;
        font-size: 16px;
    }
    .form-control:focus{
        border-color: #7777779e;
    }
    .btn { 
        height:50px;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
        border-radius: 2px;
        font-weight: 600;
        padding: .6rem .8rem;
    }
    .chosen-container-single .chosen-single{
        height: 46px;
        line-height: 46px;
        padding: 0 0 0 15px;
    }
    .title-lawyer{
        text-align:center;
    }
    .btn-add{
        height: 46px;
        width: 46px;
    }
    .panel-body {
        
    }
    .panel-family {
        margin-bottom: 30px; 
    }
    .panel{
        margin-bottom: 10px;
    }   
</style>
