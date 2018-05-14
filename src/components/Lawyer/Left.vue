<template>
    <aside class="left-panel collapsed">
            <div class="user text-center">
                  <img src="assets/images/avtar/user.png" class="img-circle" alt="...">
                  <h4 class="user-name">Akshay Kumar</h4>
                  <div class="dropdown user-login">
                  <button class="btn btn-xs dropdown-toggle btn-rounded" type="button" data-toggle="dropdown" aria-expanded="true">
                    <i class="fa fa-circle status-icon available"></i> Available <i class="fa fa-angle-down"></i>
                  </button>
                  </div>	 
            </div>
            <nav class="navigation">
            	<ul class="list-unstyled">
                	<li><a href="index-2.html"><i class="fa fa-bookmark-o"></i><span class="nav-label">Dashboard</span></a></li>
                    <li class="has-submenu"><a href="#"><i class="fa fa-comment-o"></i> <span class="nav-label">Widgets &amp; Apps</span></a>
                    </li>
                    <li class="has-submenu"><a href="#"><i class="fa fa-flag-o"></i> <span class="nav-label">UI Elements</span></a>
                    </li>
                    <li class="has-submenu"><a href="#"><i class="fa fa-file-text-o"></i> <span class="nav-label">Forms</span></a>
                    </li>
                    <li class="has-submenu"><a href="#"><i class="fa fa-heart-o"></i> <span class="nav-label">Table &amp; Grid</span></a>
                    </li>
                    <li class="has-submenu"><a href="#"><i class="fa fa-code"></i> <span class="nav-label">Charts</span></a>
                    </li>
                    <li class="has-submenu active"><a href="#"><i class="fa fa-star-o"></i> <span class="nav-label">Plugins &amp; More</span></a>
                    </li>
                </ul>
            </nav>
    </aside>
</template>
<script>
    export default {
    name: 'Left'
        
    }
</script>
<style scoped>

</style>
