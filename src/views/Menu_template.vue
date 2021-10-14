<template>
  
    <section class="homepage_dashboard_sidebar">
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
            <!-- <a href="/Admin" class="homepage_dashboard_sidebar_wrapper_ul_li_a"> -->
            <router-link to="/Admin" class="homepage_dashboard_sidebar_wrapper_ul_li_a">
            <img class="homepage_dashboard_sidebar_wrapper_ul_li_a_icon" src="../assets/setting.svg" alt="" srcset="">
            Admin Setup
            </router-link>
            <!-- </a> -->
          </li>
        </ul>
      </div>
    </section>

</template>
    <script>
    export default {
        name: 'menuTemplate'
    }
    </script>
<style lang="scss" scoped>
@import './styles/home_dashboard.scss';
@import './styles/admin.scss';
</style>