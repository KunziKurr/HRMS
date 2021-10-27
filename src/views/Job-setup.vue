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
                    <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li active">
                      <a href="/job-setup" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Job Title
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="/job-roles" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                      Job Roles
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="/pay-grades" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Pay Grades
                      </a>
                    </li>
                  </ul>
                  </div>

                  <!-- CONTENT GOES HERE -->
                  <div class="homepage_dashboard_body_wrapper_inner_container_model_box_body">
                     <div class="homepage_dashboard_body_wrapper_inner_container_add">
                          <span class="homepage_dashboard_body_wrapper_inner_container_add_label">
                              Job Titles
                          </span>
                          <button class="homepage_dashboard_body_wrapper_inner_container_add_btn">+ Add Job Title</button>
                      </div>
                  <table id="customers">
                    <tr>
                        <th>Code  </th>
                        <th>Role Name</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>20</td>
                        <td> 
                          <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset="">
                       </td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>10</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>5 comercial Moctezuma</td>
                        <td>Mexico</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>12</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>6</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Königlich Essen</td>
                        <td>26</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>56</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>4</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>North/South</td>
                        <td>17</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_edit" src="../assets/edit.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>Paris spécialités</td>
                        <td>13</td>
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
  name: 'job-setup',
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
