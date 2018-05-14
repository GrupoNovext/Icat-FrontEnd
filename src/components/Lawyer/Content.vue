<template>
    <div class="warper container-fluid">
        <div class="page-header">
            <!--<h1 class="title-lawyer">Ficha de Actualizacion de datos 2017</h1>-->
            <div class="row">
                <div class="col-lg-12">
                    <form role="form">
                        <div class="col-md-12 col-lg-12">
                            <h4> Datos Personales</h4>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <div class="panel panel-default">
                                <div class= "panel-body" v-if="families">
                                    <div class="col-md-3 col-lg-4">
                                        <div class="form-group">
                                            <input type="text" id="name" class="form-control"  placeholder="Nombre Completo*">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-4">
                                        <div class="form-group">
                                            <input type="text" id="lastname_father" class="form-control"  placeholder="Apellido Paterno*">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-4">
                                        <div class="form-group">
                                            <input type="text" id="lastname_mother" class="form-control"  placeholder="Apellido Materno*">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-4">
                                        <div class="form-group">
                                            <div class="input-group date">
                                            <date-picker v-model="form.dateWrap" id="date-time-input"
                                                        :wrap="true" :config="configs.wrap">
                                            </date-picker>
                                            <div class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-2">
                                        <div class="form-group">
                                            <select class="form-control" id="departament">
                                                <option value="" disabled selected>Departamento</option>
                                                <option value="Tacna">Tacna</option>
                                                <option value=" "></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-2">
                                        <div class="form-group">
                                            <select class="form-control" id="province">
                                                <option value="" disabled selected>Provincia</option>
                                                <option value="Tacna">Tacna</option>
                                                <option value=" "></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-2">
                                        <div class="form-group">
                                            <select class="form-control" id="district">
                                                <option value="" disabled selected>Distrito</option>
                                                <option value="Tacna">Tacna</option>
                                                <option value=" "></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-2">
                                        <div class="form-group">
                                            <select class="form-control" id="nacionality">
                                                <option value="" disabled selected>Nacionalidad</option>
                                                <option value="Peruana">Peruana</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Brasileña">Brasileña</option>
                                                <option value="Chilena">Chilena</option>
                                                <option value="Colombiana">Colombiana</option>
                                                <option value="Ecuatoriana">Ecuatoriana</option>
                                                <option value="Venezolana">Venezolana</option>
                                                <option value="Uruguaya">Uruguaya</option>
                                                <option value="Venezolana">Venezolana</option>
                                                <option value=" "></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-2">
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option value="" disabled selected>Pais</option>
                                                <option value="Peru">Peru</option>
                                                <option value=" "></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-2">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="dni"  placeholder="DNI*">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-2">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="CE" placeholder="CE*">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-2">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="ruc" placeholder="RUC*">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-2">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="passport" placeholder="Pasaporte*">
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-2">
                                        <div class="form-group">
                                            <select class="form-control" id="state">
                                                <option value="" disabled selected>Estado Civil</option>
                                                <option value="casado">Casado (a)</option>
                                                <option value="conviviente">Conviviente</option>
                                                <option value="Divorciado">Divorciado (a)</option>
                                                <option value="Viudo">Viudo (a)</option>
                                                <option value="Soltero">Soltero (a)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <h4> Datos Familiares</h4>
                        </div>
                        <div class="col-lg-12">
                            <div class="panel panel-default">
                                <div class= "panel-body" v-if="families">
                                    <Family 
                                        v-for="family in families"
                                        :key="family.id"
                                        :family.sync="family"></Family>
                                    <button @click="addFamily" type="button" class="btn btn-add btn-success btn-add">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>                                
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <h4> Hijos</h4>
                        </div>
                        <div class="col-lg-12">
                            <div class="panel panel-family panel-default">
                                <div class= "panel-body" v-if="sons">
                                    <Son
                                        v-for="son in sons"
                                        :key="son.id"
                                        :son.sync="son"></Son>
                                    <button @click="addSon" type="button" class="btn btn-add btn-success btn-add">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>                                
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <h4> Domicilios</h4>
                        </div>
                        <div class="col-lg-12">
                            <div class="panel panel-family panel-default">
                                <div class= "panel-body">
                                    
                                    <h5 class="center"> Domicilio Real</h5>
                                    <div class="col-md-12 col-lg-12">
                                    
                                        <div class="col-md-4 col-lg-4">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="Calle / Av / Urb*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="N / Mz. Lt.*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Distrito</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Provincia</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Departamento</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="center"> Domicilio Procesal</h5>
                                    <div class="col-md-12 col-lg-12">
                                    
                                        <div class="col-md-4 col-lg-4">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="Calle / Av / Urb*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="N / Mz. Lt.*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Distrito</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Provincia</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Departamento</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="center"> Domicilio Laboral</h5>
                                    <div class="col-md-12 col-lg-12">
                                    
                                        <div class="col-md-4 col-lg-4">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="Calle / Av / Urb*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="N / Mz. Lt.*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Distrito</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Provincia</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <select class="form-control" id="">
                                                    <option value="" disabled selected>Departamento</option>
                                                    <option value="Tacna">Tacna</option>
                                                    <option value=" "></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <h4> Telefonos</h4>
                        </div>
                        <div class="col-lg-12">
                            <div class="panel panel-family panel-default">
                                <div class= "panel-body">
                                    <div class="col-md-12 col-lg-12">
                                    
                                        <div class="col-md-4 col-lg-4">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="Fijo*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="Celular*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="RPM*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="RPC*">
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-lg-2">
                                            <div class="form-group">
                                                <input type="text" id="name" class="form-control"  placeholder="Otro*">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <button type="submit" class="btn btn-purple btn-block">Inicio de Sesion</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { mapGetters, mapActions } from 'vuex';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import Family from './Family';
    import Son from './Son';
    import moment from 'moment';

    export default {
        name: 'Content',
        components: {
            Family,
            Son,
            datePicker
        },
        computed: mapGetters({
            sons: 'allSon',
            families: 'allFamily'
        }),
        methods: {
            
            addFamily(e){
                const link = uniqueID();
                const name = uniqueID();
                const lastname = uniqueID();
                function uniqueID(){
                    function chr4(){ return Math.random().toString(16).slice(-4); }
                    return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
                }
                this.$store.dispatch( "addFamily", { link: link, name: name, lastname:lastname })

            },
            addSon(e){
                const dni = uniqueID();
                const birthday = uniqueID();
                const names = uniqueID();

                $( "#"+birthday).datetimepicker({pickTime: false});

                function uniqueID(){
                    function chr4(){ return Math.random().toString(16).slice(-4); }
                    return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
                }
                this.$store.dispatch( "addSon", { dni: dni, birthday: birthday, names: names })
            }
            
        },
        data(){
            return {
                form: { dateWrap: null },
                configs: { wrap: { allowInputToggle: true } }
            }
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
    .center{
        text-align:center;
    }
    .panel-family {
        margin-bottom: 30px; 
    }
    .panel{
        margin-bottom: 10px;
    }
</style>
