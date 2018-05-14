<template >
    <div v-if="son">
        <div class="col-md-3 col-lg-2">
            <div class="form-group">
                <input type="text" v-bind:id="son.dni" class="form-control" placeholder="DNI*">
            </div>
            </div>
            <div class="col-md-3 col-lg-4">
                <div class="form-group">
                    <div class="input-group date">
                    <date-picker v-bind:id="son.birthday" v-model="form.dateWrap" id=son.birthday :wrap="true" :config="configs.wrap"></date-picker>
                    <div class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </div>
                    </div>
                </div>
                
                <!--<div class='input-group date' v-bind:id="son.birthday" >
                    <input type='text' class="form-control"  placeholder="Fecha de Nacimiento" name="monthDayYear" data-date-format="MM/DD/YYYY" />
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                </div>-->
            </div>
            <div class="col-md-5 col-lg-5">
                <div class="form-group">
                    <input type="text" class="form-control" v-bind:id="son.names" placeholder="Nombres y Apellidos*">
                </div>
            </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import moment from 'moment';

    export default {
        props: ['son'],
        name: 'Son',
        data(){
            return {
                form: { dateWrap: null },
                configs: { wrap: { allowInputToggle: true } }
            }
        },
        components:{
            datePicker
        }
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
