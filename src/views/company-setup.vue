<template>
  <div class="homepage_dashboard admin">
    <sidebar class="homepage_dashboard_sidebar">
      <div class="homepage_dashboard_sidebar_wrapper">
        <span class="homepage_dashboard_sidebar_wrapper_logo"> Buffalo HRMS </span>
        <ul class="homepage_dashboard_sidebar_wrapper_ul">
        <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="/Home" class="homepage_dashboard_sidebar_wrapper_ul_li_a active">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/home.svg" alt="" srcset="">
             Home</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/employee.svg" alt="" srcset="">
              Employees</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
          <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/payroll.svg" alt="" srcset="">
            Payroll</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/leave-management.svg" alt="" srcset="">
              Leave Management</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/report.svg" alt="" srcset="">
              Reports</a>
          </li>
          <li class="homepage_dashboard_sidebar_wrapper_ul_li">
            <a href="/Admin" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/setting.svg" alt="" srcset="">
            Admin Setup</a>
          </li>
        </ul>
      </div>
    </sidebar>
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
          <span class="homepage_dashboard_body_wrapper_path">Home > <strong> Company setup </strong></span>
        </div>
      </div>
    </section>
    <!-- <sidebar class="homepage_dashboard_right">
     <div class="homepage_dashboard_right_container">
        <img src="" alt="" class="homepage_dashboard_right_container_img">
        <span class="homepage_dashboard_right_container_name">John Doe</span>
        <span class="homepage_dashboard_right_container_email">example@example.com</span>
     </div>
    <v-date-picker
      is-dark
      is-range
      />
    </sidebar> -->
  </div>
</template>
<script>
export default {
  name: 'job-setup',
  data: () => ({
    headerDate: new Date().toUTCString()
  })
}
</script>
<style lang="scss" scoped>
@import './styles/home_dashboard.scss';
@import './styles/admin.scss';
@import './styles/company_setup.scss';
</style>
