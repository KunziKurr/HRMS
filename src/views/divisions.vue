<template>
  <div class="homepage_dashboard admin">
   <menuTemplate />
    <!-- BODY CONTENT HERE -->
    <section class="homepage_dashboard_body">
      <div class="homepage_dashboard_body_header">
        <span class="homepage_dashboard_body_header_span"> {{headerDate}} </span>
          <div class="homepage_dashboard_body_header_container">
        <img src="" alt="" class="homepage_dashboard_body_header_container_img">
        <span class="homepage_dashboard_body_header_container_name">John Doe</span>
        <span class="homepage_dashboard_body_header_container_email">example@example.com</span>
          </div>
      </div>
      <div class="homepage_dashboard_body_content">
        <div class="homepage_dashboard_body_wrapper">
          <a href="/Admin" class="homepage_dashboard_body_wrapper_back">Back</a>
          <span class="homepage_dashboard_body_wrapper_path">Home > <strong>  Divisions </strong></span>

          <!-- BODY CONTENT -->
          <div class="homepage_dashboard_body_wrapper_inner_container">
            <div class="homepage_dashboard_body_wrapper_inner_container_wrapper">
              <div class="homepage_dashboard_body_wrapper_inner_container_model_box">
                <div class="homepage_dashboard_body_wrapper_inner_container_model_box_header">
                  <ul class="homepage_dashboard_body_wrapper_inner_container_model_box_ul">
                    <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li ">
                      <a href="/company-setup" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Organization Set-Up
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li active">
                      <a href="/divisions" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                       Divisions
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="/branches" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Branches
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="#" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Departments
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="#" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                       Organization Chart
                      </a>
                    </li>
                  </ul>
                  </div>

                  <!-- CONTENT GOES HERE -->
                  <div class="homepage_dashboard_body_wrapper_inner_container_model_box_body">
                  <table id="customers">
                    <tr>
                        <th>Department Name</th>
                        <th>Division Head</th>
                        <th>Total Employees</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td> 
                          <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset="">
                       </td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Königlich Essen</td>
                        <td>Philip Cramer</td>
                        <td>Germany</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>North/South</td>
                        <td>Simon Crowther</td>
                        <td>UK</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Paris spécialités</td>
                        <td>Marie Bertrand</td>
                        <td>France</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    </table>
                </div>
              </div>
               
            </div>
          </div>
          <!-- END OF BODY CONTENT -->

        </div>
      </div>
    </section>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import menuTemplate from './Menu_template.vue'
export default {
  name: 'divisions',
  components: {
    menuTemplate
  },
  data: () => ({
   
  })

}
</script>
<style lang="scss" scoped>
@import './styles/home_dashboard.scss';
@import './styles/admin.scss';
@import './styles/company_setup.scss';
@import './styles/divisions.scss';
</style>
