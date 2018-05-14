<template >
    <div class="container">
    	<div class="row">
    	<div class="col-lg-4 col-lg-offset-4">
        	<h3 class="text-center">ICAT</h3>
            <p class="text-center">Ilustre Colegio de Abogados de Tacna</p>
            <hr class="clean">
        	<form role="form">
              <div class="form-group input-group">
              	<span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                <input type="email" class="form-control"  placeholder="DNI*">
              </div>
              <div class="form-group input-group">
              	<span class="input-group-addon"><i class="fa fa-key"></i></span>
                <input type="text" class="form-control"  placeholder="Contraseña*">
              </div>
           
        	  <button type="submit" class="btn btn-purple btn-block">Inicio de Sesion</button>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        created() {}
    }
</script>
<style scoped>
    .form-control{
        box-shadow: none;
        border-radius: 2px;
        padding: 12px 15px;
        height: 49px;
        font-size: 14px;
    }
    .form-control:focus{
        border-color: #777;
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
</style>
