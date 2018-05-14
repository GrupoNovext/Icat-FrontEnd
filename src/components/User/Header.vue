<template>
   <header class="top-head container-fluid">
            <button type="button" class="navbar-toggle pull-left">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <form role="search" class="navbar-left app-search pull-left hidden-xs">
              <input type="text" placeholder="Enter keywords..." class="form-control form-control-circle">
         	  </form>
            <nav class=" navbar-default hidden-xs" role="navigation">
                <ul class="nav navbar-nav">
                <li><a href="#">Link</a></li>
              </ul>
            </nav>
            <ul class="nav-toolbar">
                <li class="dropdown"><a href="#" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></a>
                	<div class="dropdown-menu lg pull-right arrow panel panel-default arrow-top-right">
                    	<div class="panel-heading">
                        	More Apps
                        </div>
                        <div class="panel-body text-center">
                        	<div class="row">
                            	<div class="col-xs-6 col-sm-4"><a href="#" class="text-green"><span class="h2"><i class="fa fa-envelope-o"></i></span><p class="text-gray no-margn">Messages</p></a></div>
                                <div class="col-xs-6 col-sm-4"><a href="#" class="text-purple"><span class="h2"><i class="fa fa-calendar-o"></i></span><p class="text-gray no-margn">Events</p></a></div>
                                
                                <div class="col-xs-12 visible-xs-block"><hr></div>
                                
                                <div class="col-xs-6 col-sm-4"><a href="#" class="text-red"><span class="h2"><i class="fa fa-comments-o"></i></span><p class="text-gray no-margn">Chatting</p></a></div>
                                
                                <div class="col-lg-12 col-md-12 col-sm-12  hidden-xs"><hr></div>
                            
                            	
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
    </header>
</template>
<script>
    export default {
    name: 'Header'
    
    }
</script>
<style scoped>

</style>
