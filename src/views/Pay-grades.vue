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
                      <a href="/job-setup" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                        Job Title
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li">
                      <a href="/job-roles" class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li_a">
                      Job Roles
                      </a>
                    </li>
                       <li class="homepage_dashboard_body_wrapper_inner_container_model_box_ul_li active">
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
                              Pay Grades
                          </span>
                          <button class="homepage_dashboard_body_wrapper_inner_container_add_btn">+ Add Pay Grade</button>
                      </div>
                  <table id="customers">
                    <tr>
                        <th>Pay Grade ID  </th>
                        <th>Pay Grade Name</th>
                        <th>Actions</th>
                    </tr>
                 
                    <tr>
                        <td>SAL001</td>
                        <td>Executive</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL002</td>
                        <td>Associate</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL003</td>
                        <td>A+</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL004</td>
                        <td>A</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL005</td>
                        <td>B+</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL006</td>
                        <td>B</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL007</td>
                        <td>C</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL008</td>
                        <td>C+</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
                    </tr>
                    <tr>
                        <td>SAL009</td>
                        <td>K</td>
                        <td> <img class="homepage_dashboard_body_wrapper_inner_container_model_box_body_view" src="../assets/view.svg" alt="" srcset=""></td>
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
  name: 'pay-grades',
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
